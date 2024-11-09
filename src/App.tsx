import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        <div className="sidebar sticky">
            <div 
            // itemscope itemtype="http://schema.org/Person"
            >
              <div className="author__avatar">
                <img src="https://calebrob.com/images/face.jpg" className="author__avatar" alt="Caleb Robinson"></img>
              </div>
              
              <div className="author__content">
                <h3 className="author__name">Caleb Robinson</h3>
                <p className="author__bio">
                  Principal Research Scientist Manager at 
                  <a style={{ color: 'black' }} href="https://www.microsoft.com/en-us/research/group/ai-for-good-research-lab/">Microsoft's AI for Good Lab</a> - 
<a style={{ color: 'black' }} href="https://www.microsoft.com/en-us/research/project/geospatial-machine-learning/">Geospatial ML center</a>

                </p>
              </div>
              
              <div className="author__urls-wrapper">
                <button className="btn btn--inverse">Follow</button>
                
                <ul className="author__urls social-icons" style={{display: 'none'}}>
                 {/*  <!-- Location --> */}
                  <li className="author__desktop">
                    <i className="fa-solid fa-location-dot icon-pad-right" aria-hidden="true"></i>Seattle, Washington
                  </li>
                  
                   {/* <!-- Email -->*/}
                  <li>
                    <a href="mailto:calebrob6@gmail.com">
                      <i className="fas fa-fw fa-envelope icon-pad-right" aria-hidden="true"></i>Email
                    </a>
                  </li>
                  
                   {/* <!-- Google Scholar -->*/}
                  <li>
                    <a href="https://scholar.google.com/citations?user=cjYgLT0AAAAJ">
                      <i className="ai ai-google-scholar icon-pad-right"></i>Google Scholar
                    </a>
                  </li>
                  
                  {/*  <!-- ORCID -->*/}
                  <li>
                    <a href="http://orcid.org/0000-0003-1975-4454">
                      <i className="ai ai-orcid ai-fw icon-pad-right"></i>ORCID
                    </a>
                  </li>
                  
                  {/*  <!-- Github -->*/}
                  <li>
                    <a href="https://github.com/calebrob6">
                      <i className="fab fa-fw fa-github icon-pad-right" aria-hidden="true"></i>Github
                    </a>
                  </li>
                  
                   {/* <!-- Twitter -->*/}
                  <li>
                    <a href="https://twitter.com/calebrob6">
                      <i className="fab fa-fw fa-x-twitter icon-pad-right" aria-hidden="true"></i>X (formerly Twitter)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h1 className="page__title">
            <a href="https://calebrob.com/ml/2018/09/11/understanding-iou.html">
              Understanding intersection-over-union
            </a>
          </h1>


          <p>Intersection-over-union (IoU), also known as the Jaccard index, is a commonly used measure for determining how accurate a proposed image segmentation is, compared to a known/ground-truth segmentation. In segmentation tasks the IoU is prefered over accuracy as it is not as affected by the class imblances that are inherent in foreground/background segmentation tasks. As an example, if a ground truth image is made up of 90% background pixels, a proposed segmentation that classifies all pixels as background will have an accuracy of 90% whereas it would have an IoU of 0%.</p>



          <div className="post-meta-dr-pasquale-minervini">
              <time 
              // datetime="1 Jan 2017" 
              className="post-meta__date-dr-pasquale-minervini date">1 Jan 2017</time> • 
              <span className="post-meta__tags-dr-pasquale-minervini">on 
                <a href="/tags/#machine learning">machine learning</a> 
                <a href="/tags/#semi-supervised learning">semi-supervised learning</a> 
              </span>
</div>

        <h1 className="post-title-dr-pasquale-minervini">
          
        <a href="https://neuralnoise.com/2017/gaussian-fields/">
        Some notes on Gaussian Fields and Label Propagation
                    </a>
        </h1>

        <h3 id="propagation-as-a-cost-minimization-problem">Propagation as a Cost Minimization Problem</h3>




        <div className="row-peter-melchior">
  <div className="col-md-12-peter-melchior">
    <table className="table table-striped-peter-melchior">
      <tbody>
        <tr>
          <td>
            <b><a href="https://pmelchior.net/blog/scarlet2-redesign.html">Scarlet2 – Thoughts for a major redesign</a></b><br></br>
            Astronomical source modeling and separation, all new and shiny
          </td>
        </tr>
        <tr>
          <td>
            <b><a href="https://pmelchior.net/blog/bayesian-inference-three-ways.html">Bayesian inference three ways</a></b><br></br>
            Running MCMC, Hamiltonian MC, and simulation-based inference with a few lines of code
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



      </header>
    </div>
  );
}

export default App;
