import React from 'react';

const Heiner_Math_ML_Component: React.FC = () => {
    const mathMLCode = `
 <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>f</mi>
      </math> is a pdf and 
      <math xmlns="http://www.w3.org/1998/Math/MathML">
        <mi>X</mi>
      </math>   is a random variable with that distribution then
      
      <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
        <mrow data-mjx-texclass="ORD">
          <mrow data-mjx-texclass="ORD">
            <mi mathvariant="double-struck">P</mi>
          </mrow>
        </mrow>
        <mo stretchy="false">(</mo>
        <mi>a</mi>
        <mo>&lt;</mo>
        <mi>X</mi>
        <mo>&#x2264;</mo>
        <mi>b</mi>
        <mo stretchy="false">)</mo>
        <mo>=</mo>
        <msubsup>
          <mo data-mjx-texclass="OP">&#x222B;</mo>
          <mi>a</mi>
          <mi>b</mi>
        </msubsup>
        <mi>f</mi>
        <mo stretchy="false">(</mo>
        <mi>x</mi>
        <mo stretchy="false">)</mo>
        <mstyle scriptlevel="0">
          <mspace width="0.167em"></mspace>
        </mstyle>
        <mrow data-mjx-texclass="ORD">
          <mrow data-mjx-texclass="ORD">
            <mi mathvariant="normal">d</mi>
          </mrow>
        </mrow>
        <mi>x</mi>
        <mo>,</mo>
      </math>


    `;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: mathMLCode }} />
        </div>
    );
};

export default Heiner_Math_ML_Component;


// import React, { useEffect } from 'react';
// // Import MathJax (adjust the import based on your MathJax version)

// const MathComponent: React.FC = () => {
//   useEffect(() => {
//     // Trigger MathJax to render math on component load (if you want MathJax support)
//     // MathJax.typeset();
//   }, []);

//   return (
//     <div>
     
//     </div>
//   );
// };

// export default MathComponent;
