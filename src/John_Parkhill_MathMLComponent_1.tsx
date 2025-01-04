import React from 'react';

const John_Parkhill_MathMLComponent_1: React.FC = () => {
    const mathMLCode = `
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                <mi>Q</mi>
                    <mo>=</mo>
                    <msub>
                        <mi>q</mi>
                        <mn>1</mn>
                    </msub>
                    <mo>,</mo>
                    <msub>
                        <mi>q</mi>
                        <mn>2</mn>
                    </msub>
                    <mo>,</mo>
                    <mo>.</mo>
                    <mo>.</mo>
                    <mo>.</mo>
                <mi>M</mi>
                <mo>=</mo>
                <mo stretchy="false">(</mo>
                <mi>w</mi>
                <mo>&#x22C5;<!-- ⋅ --></mo>
                <mi>Q</mi>
                <msup>
                    <mo stretchy="false">)</mo>
                    <mi>t</mi>
                </msup>
                <mi>Q</mi>
                </math>
    `;

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: mathMLCode }} />
        </div>
    );
};

export default John_Parkhill_MathMLComponent_1;