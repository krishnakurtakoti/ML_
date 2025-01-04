import React from "react";
import "./BalasubramaniumCVXRStyles.css";

export const Slerp_for_quaternions_in_TF_copy1: React.FC = () => {
  return (
    <div className="BalasubramaniumCVXR-container">
      <pre className="BalasubramaniumCVXR-pre">
        <code>
          {`
def slerp(v0, v1, t=0.05):
    """
    Interpolate between quaternions v0 and v1.
    """
    v0 = safe_normalize(v0)
    v1 = safe_normalize(v1)
    dot = tf.reduce_sum(v0 * v1, axis=-1, keepdims=True)
    
    # If the dot product is negative, slerp won't take
    # the shorter path. Fix by reversing one quaternion.
    signflip = tf.where(tf.less_equal(dot, 0.), -1. * tf.ones_like(dot), tf.ones_like(dot))
    v1 *= signflip
    dot *= signflip
    
    # Linear interpolation.
    linq = safe_normalize(v0 + t * (v1 - v0))
    
    # Compute slerp parameters
    sdot = tf.clip_by_value(dot, -1.0, 1.0)
    theta_0 = tf.acos(sdot)
    theta = theta_0 * t
    sin_theta = tf.sin(theta)
    sin_theta_0 = tf.sin(theta_0)
    
    s0 = tf.cos(theta) - dot * sin_theta / (sin_theta_0 + 1e-19)
    s1 = sin_theta / (sin_theta_0 + 1e-19)
    sq = safe_normalize((s0 * v0) + (s1 * v1))
    
    DOT_THRESHOLD = 0.9995
    tdot = tf.concat([dot, dot, dot, dot], axis=-1)
    slerpd = tf.where(tf.greater(tdot, DOT_THRESHOLD), linq, sq)
    
    ttiled = tf.concat([t, t, t, t], axis=-1)
    slerpdorv1 = tf.where(tf.greater(ttiled, 1.0 - 1e-14), v1, slerpd)
    
    return tf.where(tf.less(ttiled, 1e-14), v0, slerpdorv1)


def sftpluswparam(x):
    return tf.log(1.0 + tf.exp(100. * x)) / 100.0


def RotToQuat(axes_):
    """
    Converts rotation axes to quaternions.
    """
    w = (1. / 2.) * tf.sqrt(1e-15 + tf.abs(1 + axes_[..., 0, 0] + axes_[..., 1, 1] + axes_[..., 2, 2]))
    x = tf.sign(axes_[..., 2, 1] - axes_[..., 1, 2]) * tf.abs(0.5 * tf.sqrt(1e-15 + tf.abs(1.0 + axes_[..., 0, 0] - axes_[..., 1, 1] - axes_[..., 2, 2])))
    y = tf.sign(axes_[..., 0, 2] - axes_[..., 2, 0]) * tf.abs(0.5 * tf.sqrt(1e-15 + tf.abs(1.0 - axes_[..., 0, 0] + axes_[..., 1, 1] - axes_[..., 2, 2])))
    z = tf.sign(axes_[..., 1, 0] - axes_[..., 0, 1]) * tf.abs(0.5 * tf.sqrt(1e-15 + tf.abs(1.0 - axes_[..., 0, 0] - axes_[..., 1, 1] + axes_[..., 2, 2])))
    
    return tf.stack([w, x, y, z], axis=-1)


def QuatToRot(q):
    """
    Converts quaternions to rotation matrices.
    """
    tmp = tf.stack([
        1 - 2. * (q[..., 2] * q[..., 2] + q[..., 3] * q[..., 3]),
        2 * (q[..., 1] * q[..., 2] - q[..., 3] * q[..., 0]),
        2 * (q[..., 1] * q[..., 3] + q[..., 2] * q[..., 0]),
        2 * (q[..., 1] * q[..., 2] + q[..., 3] * q[..., 0]),
        1 - 2. * (q[..., 1] * q[..., 1] + q[..., 3] * q[..., 3]),
        2 * (q[..., 2] * q[..., 3] - q[..., 1] * q[..., 0]),
        2 * (q[..., 1] * q[..., 3] - q[..., 2] * q[..., 0]),
        2 * (q[..., 2] * q[..., 3] + q[..., 1] * q[..., 0]),
        1 - 2. * (q[..., 1] * q[..., 1] + q[..., 2] * q[..., 2])
    ], axis=-1)
    
    return tf.reshape(tmp, [-1, 3, 3])


def VectorsToOrient(v1, v2):
    v1n = safe_normalize(v1)
    v2n = safe_normalize(v2)
    v3 = safe_normalize(tf.cross(v1n, v2n) + tf.constant(np.array([0., 0., 1e-19]), dtype=tf.float64))
    
    v_av = (v1n + v2n) / 2.0
    v_av = safe_normalize(v_av)
    
    first = TF_AxisAngleRotation(v3, v_av, tf.constant(-Pi / 4., dtype=tf.float64))
    second = TF_AxisAngleRotation(v3, v_av, tf.constant(Pi / 4., dtype=tf.float64))
    
    vs = tf.concat([first[:, tf.newaxis, :], second[:, tf.newaxis, :], v3[:, tf.newaxis, :]], axis=1)
    return vs


def VectorsToAxisQs(v1, v2):
    return tf.reshape(RotToQuat(VectorsToOrient(v1, v2)), (-1, 4))


def safe_normalize(x_):
    nrm = tf.clip_by_value(tf.norm(x_, axis=-1, keepdims=True), 1e-36, 1e36)
    nrm_ok = tf.logical_and(tf.not_equal(nrm, 0.), tf.logical_not(tf.is_nan(nrm)))
    safe_nrm = tf.where(nrm_ok, nrm, tf.ones_like(nrm))
    
    return x_ * tf.where(nrm_ok, 1.0 / safe_nrm, tf.zeros_like(nrm))


def safe_inv_norm(x_):
    nrm = tf.clip_by_value(tf.norm(x_, axis=-1, keepdims=True), 1e-36, 1e36)
    nrm_ok = tf.logical_and(tf.not_equal(nrm, 0.), tf.logical_not(tf.is_nan(nrm)))
    safe_nrm = tf.where(nrm_ok, nrm, tf.ones_like(nrm))
    
    return tf.where(nrm_ok, 1.0 / safe_nrm, tf.zeros_like(nrm))


def safe_norm(x_):
    nrm = tf.clip_by_value(tf.norm(x_, axis=-1, keepdims=True), 1e-36, 1e36)
    nrm_ok = tf.logical_and(tf.not_equal(nrm, 0.), tf.logical_not(tf.is_nan(nrm)))
    safe_nrm = tf.where(nrm_ok, nrm, tf.zeros_like(nrm))
    
    return safe_nrm


with tf.Graph().as_default():
    xyzs = tf.Variable(np.random.random((batch_size, MaxNAtom, 3)) * 7.0 - 5.0)
    init = tf.global_variables_initializer()
    sess = tf.Session(config=tf.ConfigProto(allow_soft_placement=True))
    sess.run(init)
    
    print(sess.run(xyzs[0, :2]))
    print(sess.run(VectorsToOrient(xyzs[:, 0], xyzs[:, 1])))
    print(sess.run(RotToQuat(VectorsToOrient(xyzs[:, 0], xyzs[:, 1]))))
    print(sess.run(QuatToRot(RotToQuat(VectorsToOrient(xyzs[:, 0], xyzs[:, 1])))))
          `}
        </code>
      </pre>
    </div>
  );
};
