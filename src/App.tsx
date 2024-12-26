import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heiner_Math_ML_Component from './Heiner_Math_ML_Component';
import vxnuaj_DeepLearningDay78_Page_Tweet_Embed from './vxnuaj_DeepLearningDay78_Page_Tweet_Embed'
// import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

// Define the expected props type for the component
interface MyTwitterWidgetProps {
  name: string; // The 'name' prop will be a string
}

export function MyTwitterWidget({ name }:MyTwitterWidgetProps ) {
  return (
    <div>
      <h3>MyTwitterWidget</h3>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: name,
        }}
        options={{
          height: '400',
        }}
      />
    </div>
  );
}

export function MyTwitterEmbed({ name }: MyTwitterWidgetProps) {
  return (
    <div>
      <h3>MyTwitterEmbed</h3>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={name}
        options={{ height: 400 }}
      />
    </div>
  );
}


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
        </header>
        <div className="App-header_replica">

        <h3>In this article</h3>
        <ul>
        <li>
        <h1 className="vcard-names1 ">
            <a href="#caleb-robinson-blog-archives" style={{ textDecoration: 'underline' }}>
            Caleb-robinson - Understanding intersection-over-union
            </a>
        </h1>
        <h3 className="archive__item-title" 
// itemprop="headline"
>  <span className="post-date">August 13, 2023 </span><a href="https://calebrob.com/algorithms/2023/08/13/ball-sort-puzzle.html" rel="permalink">Solving a game called  &#39;ball sort puzzle&#39; </a>
</h3>


<h3 className="archive__item-title" 
// itemprop="headline"
> <span className="post-date">October 02, 2019 </span> <a href="https://calebrob.com/fun/2019/10/02/elementary-cellular-automata.html" rel="permalink">Generating elementary cellular automata with Python</a>
</h3>

<h3 className="archive__item-title" 
// itemprop="headline"
> <span className="post-date">October 22, 2018 </span> <a href="https://calebrob.com/ml/imagenet/ilsvrc2012/2018/10/22/imagenet-benchmarking.html" rel="permalink">How to reproduce ImageNet validation results</a>
</h3>

        </li>

        <li>
        <h1 className="vcard-names1 ">
            <a href="#dr-pasquale-minervini" style={{ textDecoration: 'underline' }}>
            Dr Pasquale Minervini - Some notes on Gaussian Fields and Label Propagation
            </a>
        </h1>
        </li> 
        <h1 className="vcard-names1 ">
          <a href="#PeterMelchior" style={{ textDecoration: 'underline' }}>
                Peter Melchior - 
              </a>
          </h1>
            <ul>
                    <li>
                        <strong>Scarlet2 – Thoughts for a major redesign</strong> 
                    </li>
                   <li>
                    <strong>Bayesian inference three ways</strong> Running MCMC, Hamiltonian MC, and simulation-based inference with a few lines of code

                   </li>
            </ul>
        <li>
        <h1 className="vcard-names1 ">
            <a href="#Nicolas_P_Rougier" style={{ textDecoration: 'underline' }}>
            Nicolas P. Rougier - From Python to Numpy
            </a>
        </h1>
            <p>There are already a fair number of books about Numpy (see Bibliography) and a legitimate question is to wonder if another book is really necessary. As you may have guessed by reading these lines, my personal answer is yes, mostly because I think there is room for a different approach concentrating on the migration from Python to Numpy through vectorization. </p>
        </li>
        <li>
        <h1 className="vcard-names1 ">
        <a href="#HeinerKüttler" style={{ textDecoration: 'underline' }}>
          Heiner Küttler - 
            </a>
          </h1>
            <li>
                  <span className="post-date">Feb 19, 2023</span>

                    <a className="post-link" href="https://heiner.ai/blog/2023/02/19/chain-rule-jacobians-autograd-shapes.html">The chain rule, Jacobians, autograd, and shapes</a>
                </li>
              
                <li>
                  <span className="post-date">Apr 14, 2021</span>

                    <a className="post-link" href="https://heiner.ai/blog/2021/04/14/gompertz-annuities-and-special-functions.html">Gompertz, annuities, and special functions</a>
                </li>
              
                <li>
                  <span className="post-date">Mar 23, 2021</span>

                    <a className="post-link" href="https://heiner.ai/blog/2021/03/23/pis-deaths-and-statistics.html">πs, deaths, and statistics</a>
                </li>
              
                <li>
                  <span className="post-date">Dec 29, 2020</span>

                    <a className="post-link" href="https://heiner.ai/blog/2020/12/29/well-definedness-in-measure-theory.html">Well-definedness in measure theory</a>
                </li>
              
                <li>
                  <span className="post-date">Sep 8, 2020</span>

                    <a className="post-link" href="https://heiner.ai/blog/2020/09/08/more-linear-regression-capm.html">More on linear regression: Capital asset pricing models</a>
                </li>
              
                <li>
                  <span className="post-date">Feb 19, 2020</span>

                    <a className="post-link" href="https://heiner.ai/blog/2020/02/19/linear-regression.html">On linear regression</a>
                </li>
              
                <li>
                  <span className="post-date">Aug 19, 2019</span>

                    <a className="post-link" href="https://heiner.ai/blog/2019/08/19/annuity-loans.html">Annuity loans</a>
                </li>
              
                <li>
                  <span className="post-date">Dec 25, 2016</span>

                    <a className="post-link" href="https://heiner.ai/blog/2016/12/25/dylaniki.html">Dylanchords</a>
                </li>
              
                <li>
                  <span className="post-date">Aug 21, 2016</span>

                    <a className="post-link" href="https://heiner.ai/blog/2016/08/21/in-every-beginning-there-is-a-delusion.html">In every beginning there is a delusion</a>
                </li>
          </li>
          <li>
          <h1 className="vcard-names1">
            <a href="#Felix-Altenberger" style={{ textDecoration: 'underline' }}>
                <strong>Felix-Altenberger - ML Engineer at ZenML.
                Posting about ML, MLOps, Computer Vision.</strong>
              </a>
          </h1>


              <li>
                    <span className="post-date">2021, Mar 30 </span>

                      <a className="post-link" href="https://fa9r.com/blog/2020/12/30/tips-for-gan-training.html">A Guide for Building GANs - 10 Tips and Tricks</a>
                  </li>
                  <li>
                    <span className="post-date">Feb 19, 2023 </span>

                      <a className="post-link" href="https://fa9r.com/blog/2021/03/30/icp-analysis.html">An Analysis of ICP Variants</a>
                  </li>
                  <li>
                    <span className="post-date">Feb 19, 2023 </span>

                      <a className="post-link" href="https://fa9r.com/projects/2021/03/30/differentiable-icp.html">3D Reconstruction with Differentiable ICP</a>
                  </li>
        </li>
        <li>
            <a href="#ArminRonacher" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  Armin Ronacher
                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                  mitsuhiko

                </span>
                </h1>
            </a>


          
              <li>
                    <span className="post-date">2018, Mar 18 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2018/3/31/you-cant-rust-that/">You can't Rust that
                      Some tips for how to be more productive in Rust by avoiding situations you cannot solve in Rust.</a>
                  </li>
                  <li>
                    <span className="post-date">Oct 19, 2016 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/">I don't understand Python's Asyncio</a>
                  </li>
                  <li>
                    <span className="post-date">Nov 18, 2015 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems/">Python's Hidden Regular Expression Gems</a>
                  </li>
        </li>

        <li>
            <a href="#PeterGoldsborough" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  Peter Goldsborough
                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                 

                </span>
                </h1>
            </a>


          
              <li>
                    <span className="post-date">2018, Feb 4 </span>

                      <a className="post-link" href="https://www.goldsborough.me/ml/ai/python/2018/02/04/20-17-20-a_promenade_of_pytorch/">A Promenade of PyTorch.</a>
                  </li>
                  <li>
                    <span className="post-date">Jan 20, 2018 </span>

                      <a className="post-link" href="https://www.goldsborough.me/rust/web/tutorial/2018/01/20/17-01-11-writing_a_microservice_in_rust/">Writing a Microservice in Rust</a>
                  </li>
                  <li>
                    {/* <span className="post-date">Nov 18, 2015 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems/">Python's Hidden Regular Expression Gems</a> */}
                  </li>
        </li>
        <li>
            <a href="#AayushAgrawal" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  Aayush Agrawal
                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                 

                </span>
                </h1>
            </a>


          
              <li>
                    <span className="post-date">2022, Oct 12 </span>

                      <a className="post-link" href="https://aayushmnit.com/posts/2022-10-26-Model_Calibration/Model%20Calibration.html">Model calibration for classification tasks using Python</a>
                  </li>
                  <li>
                    <span className="post-date">Jan 20, 2024 </span>

                      <a className="post-link" href="https://aayushmnit.com/posts/2024-08-24-MLInterviewPrep/MLInterviewPrep.html">ML Interview Prepration Guide (Draft)</a>
                  </li>
                  <li>
                    {/* <span className="post-date">Nov 18, 2015 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems/">Python's Hidden Regular Expression Gems</a> */}
                  </li>
        </li>
        <li>

                {/* <h1>
          <a href="http://blog.ezyang.com/about/" className="site-title">ezyang &#39;s blog</a>

          </h1> */}
            <a href="#ezyang" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  ezyang &#39;s blog
                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                 

                </span>
                </h1>
            </a>


            <li>

                <a href="http://blog.ezyang.com/2019/05/pytorch-internals/" rel="bookmark">PyTorch internals</a>
                <abbr className="published small" title="2019-05-16T22:11:22-0500">(May 16, 2019)</abbr>
              </li>
              
        </li>
  
        <li>

                {/* <h1>
          <a href="http://blog.ezyang.com/about/" className="site-title">ezyang &#39;s blog</a>

          </h1> */}
            <a href="#Vincent_Qin" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                   Vincent_Qin &#39;s blog
                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                 

                </span>
                </h1>
            </a>



          <li>

            <a className="post-title-link" href="https://vincentqin.tech/posts/python-zip/" 
            // itemprop="url"
            
            >
              <span 
              // itemprop="name"
              >
                {/* <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;"> */}
                    📝Note: Python zip()
                    {/* </font></font> */}
                    </span>
            </a>
            </li>
            <li>

            <a className="post-title-link" href="https://vincentqin.tech/posts/light-field-depth-estimation/" 
            // itemprop="url"
            
            >
              <span 
              // itemprop="name"
              >
                {/* <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;"> */}
                    Light Field Depth Estimation
                    {/* </font></font> */}
                    </span>
            </a>
            <abbr className="published small" title="2019-05-16T22:11:22-0500">( 16/05/2018)</abbr>
            </li>
            <li>

<a className="post-title-link" href="https://vincentqin.tech/posts/instant-ngp/" //itemprop="url"
>
<span 
 // itemprop="name"
 >
 {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> */}
 📝Note: 5 seconds to train NeRF, NVIDIA Instant NeRF test
 {/* </font></font> */}
 </span>
 </a>
<abbr className="published small" title="2019-05-16T22:11:22-0500">( 01-05-2022)</abbr>
</li>


<li>
<a className="post-title-link" href="https://vincentqin.tech/posts/slam-common-issues-ICP/" //itemprop="url"
>
<span 
 // itemprop="name"
 >
 {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> */}
 📝Note: SLAM FAQ (IV): Solve ICP and use SVD decomposition to get the rotation matrix
{/* </font></font> */}
 </span>
</a>
<abbr className="published small" title="2019-05-16T22:11:22-0500">( 18-08-2019)</abbr>
</li>



        </li>


        <li>

                {/* <h1>
          <a href="http://blog.ezyang.com/about/" className="site-title">ezyang &#39;s blog</a>

          </h1> */}
            <a href="#Vincent_Qin" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  Andrew Tulloch—Machine Learning, Statistics, Systems
               

                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                 

                </span>
                </h1>
                <h2>
                About | Academic | GitHub | CV
                </h2>
            </a>


            <li>

            { <a className="post-title-link" href="https://tullo.ch/articles/pytorch-gpu-inference-performance/" 
            // itemprop="url"
            
            >
              <span 
              // itemprop="name"
              >
               
               Improving PyTorch inference performance on GPUs with a few simple tricks
                    
                    </span>
            </a> }
            <abbr className="published small" title="2019-05-16T22:11:22-0500">( 3/10/2021)</abbr>
            </li>
          <li>

            <a className="post-title-link" href="https://tullo.ch/articles/lasso-estimator/" 
            // itemprop="url"
            
            >
              <span 
              // itemprop="name"
              >
                {/* <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;"> */}
                   The LASSO Estimator
                    {/* </font></font> */}
                    </span>
            </a>
            <abbr className="published small" title="2019-05-16T22:11:22-0500">( 13/05/2014)</abbr>
            </li>

           
        </li>

        <li>

                {/* <h1>
          <a href="http://blog.ezyang.com/about/" className="site-title">ezyang &#39;s blog</a>

          </h1> */}
            <a href="#m-clark" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  Michael Clarke
               

                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                 

                </span>
                </h1>
                <h2>
                https://m-clark.github.io/about.html
                </h2>
            </a>


            <li>

            { <a className="post-title-link" href="https://m-clark.github.io/posts/2022-09-deep-linear-models/" 
            // itemprop="url"
            
            >
              <span 
              // itemprop="name"
              >
               
               Deep Linear Models
                    
                    </span>
            </a> }
            <abbr className="published small" title="2019-05-16T22:11:22-0500">( 10/10/2022)</abbr>
            </li>
          <li>

            <a className="post-title-link" href="https://m-clark.github.io/posts/2021-10-30-double-descent/" 
            // itemprop="url"
            
            >
              <span 
              // itemprop="name"
              >
                {/* <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;"> */}
                   Double Descent
                    {/* </font></font> */}
                    </span>
            </a>
            <abbr className="published small" title="2019-05-16T22:11:22-0500">( 13/11/2021)</abbr>
            </li>

           
        </li>
        <li>
            <a href="#Hugo-Bowne-Anderson" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  Hugo-Bowne-Anderson
                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                  data scientist - educator - writer - podcaster

                </span>
                </h1>
            </a>


          
              <li>
                    <span className="post-date">2020, Apr 14 </span>

                      <a className="post-link" href="https://github.com/ericmjl/bayesian-stats-modelling-tutorial">How to do Bayesian statistical modelling using numpy and PyMC3.</a>
                  </li>
                  {/* <li>
                    <span className="post-date">Oct 19, 2016 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/">I don't understand Python's Asyncio</a>
                  </li>
                  <li>
                    <span className="post-date">Nov 18, 2015 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems/">Python's Hidden Regular Expression Gems</a>
                  </li> */}
        </li>
        <li>
            <a href="#@sanjeevs_iitr" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  Sanjeev Sharma

                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                @sanjeevs_iitr, Founder & CEO, Swaayatt Robot, Deep Eigen

                </span>
                </h1>
            </a>


          
              <li>
                    <span className="post-date">2024, Aug 24 </span>

                      <a className="post-link" href="https://x.com/sanjeevs_iitr/status/1827230702095495328">Projective 3-Point (P3P) algorithm plays a crucial role in understanding the Visual Odometry and typical SLAM algorithmic pipelines.</a>
                  </li>
                  {/* <li>
                    <span className="post-date">Oct 19, 2016 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/">I don't understand Python's Asyncio</a>
                  </li>
                  <li>
                    <span className="post-date">Nov 18, 2015 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems/">Python's Hidden Regular Expression Gems</a>
                  </li> */}
        </li>
        <li>
        <a href="@KanakaRajanPhD" className="vcard-names1">
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Kanaka Rajan </span>
            <span className="p-nickname vcard-username d-block">
            I'm an Entreprenuer| Researcher
            </span>
          </h1>
          <h3>
        
          </h3>
        </a>


          
              <li>
                    <span className="post-date">2024, Oct 17 </span>

                      <a className="post-link" href="https://www.rajanlab.com/resources">research. Resources.</a>
                  </li>
                  {/* <li>
                    <span className="post-date">Oct 19, 2016 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/">I don't understand Python's Asyncio</a>
                  </li>
                  <li>
                    <span className="post-date">Nov 18, 2015 </span>

                      <a className="post-link" href="https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems/">Python's Hidden Regular Expression Gems</a>
                  </li> */}
        </li>

        </ul>

        <div className="sidebar sticky">
            <div 
            // itemscope itemtype="http://schema.org/Person"
            >
              <div className="author__avatar">
                <img src="https://calebrob.com/images/face.jpg" className="author__avatar" alt="Caleb Robinson"  style={{ width: '150px', height: 'auto' }} ></img>
              </div>
              
              <div id="#caleb-robinson-blog-archives" className="author__content">
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




<div className="list__item">
<article className="archive__item" 
// itemscope="" itemtype="http://schema.org/CreativeWork"
>
<h2 className="archive__item-title" 
// itemprop="headline"
> <a href="https://calebrob.com/algorithms/2023/08/13/ball-sort-puzzle.html" rel="permalink">Solving a game called  &#39;ball sort puzzle&#39; </a>
</h2>
<p className="page__meta"><i className="fa fa-clock-o" aria-hidden="true"></i> 9 minute read</p>
<p className="page__date"><strong><i className="fa fa-fw fa-calendar" aria-hidden="true"></i> Published:</strong> <time 
// datetime="2023-08-13T01:00:00-07:00"
>August 13, 2023</time></p>
<p className="archive__item-excerpt" 
// itemprop="description"
></p>
{/* <!-- --> */}</article></div>


<div className="list__item">
<article className="archive__item" 
// itemscope="" itemtype="http://schema.org/CreativeWork"
>
<h2 className="archive__item-title" 
// itemprop="headline"
> <a href="https://calebrob.com/fun/2019/10/02/elementary-cellular-automata.html" rel="permalink">Generating elementary cellular automata with Python</a>
</h2>
<p className="page__meta"><i className="fa fa-clock-o" aria-hidden="true"></i> 4 minute read</p>
<p className="page__date"><strong><i className="fa fa-fw fa-calendar" aria-hidden="true"></i> Published:</strong> <time 
// datetime="2023-08-13T01:00:00-07:00"
>October 02, 2019</time></p>
<p className="archive__item-excerpt" 
// itemprop="description"
></p>
{/* <!-- --> */}</article></div>

<div className="list__item">
<article className="archive__item" 
// itemscope="" itemtype="http://schema.org/CreativeWork"
>
<h2 className="archive__item-title" 
// itemprop="headline"
> <a href="https://calebrob.com/ml/imagenet/ilsvrc2012/2018/10/22/imagenet-benchmarking.html" rel="permalink">How to reproduce ImageNet validation results</a>
</h2>
<p className="page__meta"><i className="fa fa-clock-o" aria-hidden="true"></i> 4 minute read</p>
<p className="page__date"><strong><i className="fa fa-fw fa-calendar" aria-hidden="true"></i> Published:</strong> <time 
// datetime="2023-08-13T01:00:00-07:00"
>October 22, 2018</time></p>
<p className="archive__item-excerpt" 
// itemprop="description"
></p>
{/* <!-- --> */}</article></div>


        <h1 className="post-title-dr-pasquale-minervini" id="dr-pasquale-minervini">
          
        <a href="https://neuralnoise.com/2017/gaussian-fields/">
        Some notes on Gaussian Fields and Label Propagation
                    </a>
        </h1>

        <h3 id="propagation-as-a-cost-minimization-problem">Propagation as a Cost Minimization Problem</h3>


        <h1 className="title" id="PeterMelchior">Peter Melchior</h1>
       
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

<h1 className="title" id="Nicolas_P_Rougier">From Python to Numpy</h1>
<p dir="auto">This is a collection of numpy exercises from numpy mailing list, stack overflow, and numpy documentation. I've also created some problems myself to reach the 100 limit. The goal of this collection is to offer a quick reference for both old and new users but also to provide a set of exercises for those who teach. For extended exercises, make sure to read <a href="http://www.labri.fr/perso/nrougier/from-python-to-numpy/" rel="nofollow">From Python to NumPy</a>.</p>
    
<p>There are already a fair number of books about Numpy (see <a className="reference internal" href="#bibliography">Bibliography</a>) and a
legitimate question is to wonder if another book is really necessary. As you
may have guessed by reading these lines, my personal answer is yes, mostly
because I think there is room for a different approach concentrating on the
migration from Python to Numpy through vectorization. There are a lot of
techniques that you don't find in books and such techniques are mostly learned
through experience. The goal of this book is to explain some of these
techniques and to provide an opportunity for making this experience in the
process.</p>

<p><strong>Website:</strong> <a className="reference external" href="http://www.labri.fr/perso/nrougier/from-python-to-numpy">http://www.labri.fr/perso/nrougier/from-python-to-numpy</a></p>
    

<div className="container-three-columns">
  <div className="column-one">

  <h2>Preface</h2>
    <ul>
      <li><a href="#id60">About the author</a></li>
      <li><a href="#id61">About this book</a></li>
      <li><a href="#id62">License</a></li>
    </ul>

    <h2>Introduction</h2>
    <ul>
      <li><a href="#simple-example">Simple Example</a></li>
      <li><a href="#readability-vs-speed">Readability vs Speed</a></li>
    </ul>

    <h2>Anatomy of an Array</h2>
    <ul>
      <li><a href="#id68">Introduction</a></li>
      <li><a href="#memory-layout">Memory Layout</a></li>
      <li><a href="#views-and-copies">Views and Copies</a></li>
      <li><a href="#id71">Conclusion</a></li>
    </ul>


    <h2>Code Vectorization</h2>
    <ul>
      <li><a href="#id72">Introduction</a></li>
      <li><a href="#uniform-vectorization">Uniform Vectorization</a></li>
      <li><a href="#temporal-vectorization">Temporal Vectorization</a></li>
      <li><a href="#spatial-vectorization">Spatial Vectorization</a></li>
      <li><a href="#id77">Conclusion</a></li>
    </ul>
  </div>
    

  <div className="column-two">

  <h2>Problem Vectorization</h2>
    <ul>
      <li><a href="#id78">Introduction</a></li>
      <li><a href="#path-finding">Path Finding</a></li>
      <li><a href="#fluid-dynamics">Fluid Dynamics</a></li>
      <li><a href="#blue-noise-sampling">Blue Noise Sampling</a></li>
      <li><a href="#id83">Conclusion</a></li>
    </ul>

    <h2>Custom Vectorization</h2>
    <ul>
      <li><a href="#id84">Introduction</a></li>
      <li><a href="#typed-list">Typed List</a></li>
      <li><a href="#memory-aware-array">Memory Aware Array</a></li>
      <li><a href="#id88">Conclusion</a></li>
    </ul>
  

    <h2>Beyond Numpy</h2>
    <ul>
      <li><a href="#back-to-python">Back to Python</a></li>
      <li><a href="#numpy-co">Numpy & co</a></li>
      <li><a href="#scipy-co">Scipy & co</a></li>
      <li><a href="#id93">Conclusion</a></li>
    </ul>
  </div>

  <div className="column-three">
   

    <h2>Quick References</h2>
    <ul>
      <li><a href="#id56">Data Type</a></li>
      <li><a href="#id57">Creation</a></li>
      <li><a href="#id58">Indexing</a></li>
      <li><a href="#reshaping">Reshaping</a></li>
      <li><a href="#broadcasting">Broadcasting</a></li>
    </ul>

    <h2>Bibliography</h2>
    <ul>
      <li><a href="#tutorials">Tutorials</a></li>
      <li><a href="#articles">Articles</a></li>
      <li><a href="#books">Books</a></li>
    </ul>
  </div>
</div>



<div className="contents-main-content-nicolas-p-rougie topic-nicolas-p-rougie" id="table-of-contents">
  <p className="topic-title-first-nicolas-p-rougie"><strong>Table of Contents</strong></p>
  <ul className="simple-nicolas-p-rougie">
    <li><a className="reference-internal-nicolas-p-rougie" href="#preface" id="id60">Preface</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#about-the-author" id="id61">About the author</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#about-this-book" id="id62">About this book</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#license" id="id63">License</a></li>
      </ul>
    </li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#introduction" id="id64">Introduction</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#simple-example" id="id65">Simple example</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#readability-vs-speed" id="id66">Readability vs speed</a></li>
      </ul>
    </li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#anatomy-of-an-array" id="id67">Anatomy of an array</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id3" id="id68">Introduction</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#memory-layout" id="id69">Memory layout</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#views-and-copies" id="id70">Views and copies</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#conclusion" id="id71">Conclusion</a></li>
      </ul>
    </li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#code-vectorization" id="id72">Code vectorization</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id5" id="id73">Introduction</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#uniform-vectorization" id="id74">Uniform vectorization</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#temporal-vectorization" id="id75">Temporal vectorization</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#spatial-vectorization" id="id76">Spatial vectorization</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id17" id="id77">Conclusion</a></li>
      </ul>
    </li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#problem-vectorization" id="id78">Problem vectorization</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id19" id="id79">Introduction</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#path-finding" id="id80">Path finding</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#fluid-dynamics" id="id81">Fluid Dynamics</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#blue-noise-sampling" id="id82">Blue noise sampling</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id27" id="id83">Conclusion</a></li>
      </ul>
    </li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#custom-vectorization" id="id84">Custom vectorization</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id29" id="id85">Introduction</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#typed-list" id="id86">Typed list</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#memory-aware-array" id="id87">Memory aware array</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id36" id="id88">Conclusion</a></li>
      </ul>
    </li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#beyond-numpy" id="id89">Beyond Numpy</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#back-to-python" id="id90">Back to Python</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#numpy-co" id="id91">Numpy &amp; co</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#scipy-co" id="id92">Scipy &amp; co</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id52" id="id93">Conclusion</a></li>
      </ul>
    </li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#id53" id="id94">Conclusion</a></li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#quick-references" id="id95">Quick References</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id56" id="id96">Data type</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id57" id="id97">Creation</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#id58" id="id98">Indexing</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#reshaping" id="id99">Reshaping</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#broadcasting" id="id100">Broadcasting</a></li>
      </ul>
    </li>
    <li><a className="reference-internal-nicolas-p-rougie" href="#bibliography" id="id101">Bibliography</a>
      <ul>
        <li><a className="reference-internal-nicolas-p-rougie" href="#tutorials" id="id102">Tutorials</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#articles" id="id103">Articles</a></li>
        <li><a className="reference-internal-nicolas-p-rougie" href="#books" id="id104">Books</a></li>
      </ul>
    </li>
  </ul>
</div>


<div id="HeinerKüttler">
    <ul className="posts">
    <p>I am Heinrich 'Heiner' Küttler.
    I am a member of the technical team at <a href="https://x.ai">xAI</a>.
    Previously, I was the LLM Infra Lead and a member of the founding team
    at <a href="https://inflection.ai">Inflection AI</a>.
    <a href="https://inflection.ai/inflection-1">We</a>
    <a href="https://inflection.ai/inflection-2">built</a>
    <a href="https://inflection.ai/inflection-2-5">LLMs</a>.
    Before this, was a Research Engineering Manager at <a href="https://ai.meta.com/research/">Meta AI
    Research</a> in London, leading
    Reinforcement Learning engineering across EMEA, and before that I was
    a Senior Research Engineer and Team Lead at
    <a href="https://deepmind.google/">DeepMind</a>, working on projects like DMLab,
    StarCraft, and AGI. I also once was a Technical Solutions Consultant
    at Google in London. I received my PhD in Mathematical Physics from
    <a href="https://www.lmu.de/">LMU Munich</a> in 2014.</p>
    <li>
      <span className="post-date">Feb 19, 2023</span>

        <a className="post-link" href="https://heiner.ai/blog/2023/02/19/chain-rule-jacobians-autograd-shapes.html">The chain rule, Jacobians, autograd, and shapes</a>
    </li>
  
    <li>
      <span className="post-date">Apr 14, 2021</span>

        <a className="post-link" href="https://heiner.ai/blog/2021/04/14/gompertz-annuities-and-special-functions.html">Gompertz, annuities, and special functions</a>
    </li>
  
    <li>
      <span className="post-date">Mar 23, 2021</span>

        <a className="post-link" href="https://heiner.ai/blog/2021/03/23/pis-deaths-and-statistics.html">πs, deaths, and statistics</a>
    </li>
  
    <li>
      <span className="post-date">Dec 29, 2020</span>

        <a className="post-link" href="https://heiner.ai/blog/2020/12/29/well-definedness-in-measure-theory.html">Well-definedness in measure theory</a>
    </li>
  
    <li>
      <span className="post-date">Sep 8, 2020</span>

        <a className="post-link" href="https://heiner.ai/blog/2020/09/08/more-linear-regression-capm.html">More on linear regression: Capital asset pricing models</a>
    </li>
  
    <li>
      <span className="post-date">Feb 19, 2020</span>

        <a className="post-link" href="https://heiner.ai/blog/2020/02/19/linear-regression.html">On linear regression</a>
    </li>
  
    <li>
      <span className="post-date">Aug 19, 2019</span>

        <a className="post-link" href="https://heiner.ai/blog/2019/08/19/annuity-loans.html">Annuity loans</a>
    </li>
  
    <li>
      <span className="post-date">Dec 25, 2016</span>

        <a className="post-link" href="https://heiner.ai/blog/2016/12/25/dylaniki.html">Dylanchords</a>
    </li>
  
    <li>
      <span className="post-date">Aug 21, 2016</span>

        <a className="post-link" href="https://heiner.ai/blog/2016/08/21/in-every-beginning-there-is-a-delusion.html">In every beginning there is a delusion</a>
    </li>
  
</ul>

<h1>πs, deaths, and statistics</h1>
<h3 id="pdfs-cdfs-and-hazard-functions">PDFs, CDFs, and Hazard Functions</h3>


<p>If you have taken a probability or statistics course, you probably
(ha!) know about <em>probability density functions</em> (pdfs). A pdf is a
positive function that we use as a density and to make it a
<em>probabilty</em> density it needs to integrate to one. If
</p> 
    <p>
    <Heiner_Math_ML_Component />
    </p>
</div>
  
{/* Reference: Tweet Embed: https://stackblitz.com/edit/react-ts-x5ckuu?file=index.tsx 
https://www.npmjs.com/package/react-twitter-embed
*/}
{/* <MyTwitterWidget name="vxnuaj" />
<MyTwitterEmbed name="vxnuaj"  /> */}



<div id="Felix-Altenberger">


<article className="Felix-Altenberger-post">
    
    <a className="post-thumbnail" 
    // style="background-image: url(/blog/images/icp-analysis.png)" 
    style={{ backgroundImage: 'url(https://fa9r.com/blog/images/icp-analysis.png)' }} 
    href="https://fa9r.com/blog/2021/03/30/icp-analysis.html"></a>
    
    <div className="post-content">
        <h2 className="post-title"><a href="https://fa9r.com/blog/2021/03/30/icp-analysis.html">An Analysis of ICP Variants</a></h2>
        <p>Over the years, various ICP modifications have been proposed. Now, which one should you use?...</p>
        <span className="post-date">2021, Mar 30&nbsp;&nbsp;&nbsp;—&nbsp;</span>
        <span className="post-words">6 minute read</span>
    </div>
</article>
<article className="Felix-Altenberger-post">
    
    <a className="post-thumbnail" 
    // style="background-image: url(/blog/images/gan.png)" 
    style={{ backgroundImage: 'url(https://fa9r.com/blog/images/gan.png' }} 
    href="/blog/2020/12/30/tips-for-gan-training.html"></a>
    
    <div className="post-content">
      <h2 className="post-title"><a href="/blog/2020/12/30/tips-for-gan-training.html">A Guide for Building GANs - 10 Tips and Tricks</a></h2>
      <p>After having focused on GANs exclusively for the last year and a half, I wanted...</p>
      <span className="post-date">2020, Dec 30&nbsp;&nbsp;&nbsp;—&nbsp;</span>
      <span className="post-words">7 minute read</span>
    </div>
  </article>

  <article className="Felix-Altenberger-post">
    
    <a className="post-thumbnail" 
     style={{ backgroundImage: 'url(https://fa9r.com/blog/images/difficp.png' }} 
    // style="background-image: url(/projects/images/difficp.png)" 
    href="https://fa9r.com/projects/2021/03/30/differentiable-icp.html"></a>
    <a className="post-thumbnail" 
   style={{ backgroundImage: 'url(https://fa9r.com/blog/images/difficp.png)', 
            width: '100%', height: '200px', 
            backgroundSize: 'cover', backgroundPosition: 'center' }} 
   href="https://fa9r.com/projects/2021/03/30/differentiable-icp.html">
</a>

    <div className="post-content">
      <h2 className="post-title"><a href="https://fa9r.com/projects/2021/03/30/differentiable-icp.html">3D Reconstruction with Differentiable ICP</a></h2>
      {/* <!--
      <p>The Iterative Closest Point (ICP) algorithm is a widely used registration method, which iteratively approximates...</p>
      --> */}
      <div className="page-tag">
        
        <a href="/tags#Python" className="tag"># Python</a>
        
        <a href="/tags#PyTorch" className="tag"># PyTorch</a>
        
        <a href="/tags#ML" className="tag"># ML</a>
        
        <a href="/tags#Graphics" className="tag"># Graphics</a>
        
        <a href="/tags#3D Reconstruction" className="tag"># 3D Reconstruction</a>
        
        <a href="/tags#ICP" className="tag"># ICP</a>
        
        <a href="/tags#WithCode" className="tag"># WithCode</a>
        
      </div>
      <br></br>
      <span className="post-date">2021, Mar 30&nbsp;&nbsp;&nbsp;—&nbsp;</span>
      <span className="post-words">9 minute read</span>
    </div>

    <ul>
      <li><strong>Duration:</strong> July 2020 to March 2021 (9 months)</li>
      <li><strong>Team:</strong> Me and supervising prof.</li>
      <li><strong>My Responsibilities:</strong> Research, design and implementation of differentiable
    ICP in Pytorch, ML model training and evaluation</li>
      <li><strong>Source Code:</strong> <a href="https://github.com/fa9r/DiffICP">https://github.com/fa9r/DiffICP</a></li>
    </ul>

    <h3 id="differentiable-icp">Differentiable ICP</h3>

    <p className="Felix-Altenberger">The ICP algorithm consists of the following five steps: source point selection,
    correspondence search, correspondence weighting, correspondence rejection,
    and the minimization of an error metric.
    Source point selection and correspondence weighting are by default 
    differentiable, so it is the remaining three steps that we need to explore
    in more detail.</p>

    <h4 id="differentiable-correspondence-finding">Differentiable Correspondence Finding</h4>
    <p className="Felix-Altenberger">Standard ICP correspondences are found by searching the nearest neighbor of each
    source point within the target point cloud, which can be formulated as follows:</p>



    <p>
      <img src="https://fa9r.com/projects/images/difficp_corrs.png" style={{width: '20%'}}></img>
    </p>
    <p className="Felix-Altenberger">The problem here is that the <em>argmin</em> operation is not properly differentiable,
        since its derivative is everywhere either 0 or undefined.
        There exist a variety of approximate methods, but they are similarly based on
        concrete selections and are, therefore, not differentiable either.</p>


        <p className="Felix-Altenberger">Fortunately, a soft relaxation can be formulated by
expressing correspondence points as linear combinations of all target points
with weights calculated as the softmax over negative distances:</p>


      <p >
        <img src="https://fa9r.com/projects/images/difficp_diffcorrs.png" style={{width: '50%'}}></img>
      </p>

  </article>



  {/* <div>
    <p>
    Software developer and Open Source nut. Creator of the Flask framework. Engineering at <a className="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/getsentry/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/getsentry">@getsentry</a>. Other things of interest: <a class="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/pallets/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/pallets">@pallets</a> and <a className="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/rust-lang/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/rust-lang">@rust-lang</a>

    </p>
  </div>
  <div className="m-0 mt-1 wb-break-all feed-sponsored-user-description Armin-Ronacher">
  <p>Creator of the Flask framework, Jinja template engine, Lektor CMS, Insta snapshot testing tool and more. These days I dedicate most of my work to @getsentry, but I maintain a range of Rust libraries and always create more Open Source work.</p>
  </div> */}


  <div>






<div id="ArminRonacher">


          <h1 className="vcard-names ">

          <span className="p-name vcard-fullname d-block overflow-hidden" 
          // itemprop="name"
          >
            Armin Ronacher
          </span>
          <span className="p-nickname vcard-username d-block" 
          //itemprop="additionalName"
          >
            mitsuhiko

          </span>
          </h1>


          <p>
          Software developer and Open Source nut. Creator of the Flask framework. Engineering at 
          <a 
          className="user-mention notranslate" 
          data-hovercard-type="organization" 
          data-hovercard-url="/orgs/getsentry/hovercard" 
          data-octo-click="hovercard-link-click" 
          data-octo-dimensions="link_type:self" 
          href="https://github.com/getsentry"
          >
          @getsentry
          </a>. 
          Other things of interest: 
          <a 
          className="user-mention notranslate" 
          data-hovercard-type="organization" 
          data-hovercard-url="/orgs/pallets/hovercard" 
          data-octo-click="hovercard-link-click" 
          data-octo-dimensions="link_type:self" 
          href="https://github.com/pallets"
          >
          @pallets
          </a> 
          and 
          <a 
          className="user-mention notranslate" 
          data-hovercard-type="organization" 
          data-hovercard-url="/orgs/rust-lang/hovercard" 
          data-octo-click="hovercard-link-click" 
          data-octo-dimensions="link_type:self" 
          href="https://github.com/rust-lang"
          >
          @rust-lang
          </a>
          </p>
          </div>



          <div className="entry-overview Armin-Ronacher">
            <div className="date">Mar 31, 2018</div>
            <div className="detail">
              <h1><a href="https://lucumr.pocoo.org/2018/3/31/you-cant-rust-that">You can't Rust that</a></h1>
              
              <div className="summary">
                <p>Some tips for how to be more productive in Rust by avoiding situations you cannot solve in Rust.</p>
              </div>
            </div>
          </div>


          <div className="entry-overview">
            <div className="date">Oct 30, 2016</div>
                <div className="detail">
                  <h1><a href="https://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio">I don't understand Python's Asyncio</a></h1>
                  
                  <div className="summary"><p>A little confession that I have no idea how asyncio works in Python 3.</p>
                </div>
              
            </div>
          </div>

          <h2>The Primitives</h2>
                  <p><cite>asyncio</cite> is supposed to implement asynchronous IO with the help of
          coroutines.  Originally implemented as a library around the <cite>yield</cite> and
          <cite>yield from</cite> expressions it's now a much more complex beast as the
          language evolved at the same time.  So here is the current set of things
          that you need to know exist:</p>

          <ul className="ui-simple-Armin-Ronacher">
                  <li>event loops</li>
                  <li>event loop policies</li>
                  <li>awaitables</li>
                  <li>coroutine functions</li>
                  <li>old style coroutine functions</li>
                  <li>coroutines</li>
                  <li>coroutine wrappers</li>
                  <li>generators</li>
                  <li>futures</li>
                  <li>concurrent futures</li>
                  <li>tasks</li>
                  <li>handles</li>
                  <li>executors</li>
                  <li>transports</li>
                  <li>protocols</li>
                  </ul>
                  <p>In addition the language gained a few special methods that are new:</p>

                  {/* <ul className="simple">
                        <li><tt class="docutils literal">__aenter__</tt> and <tt class="docutils literal">__aexit__</tt> for asynchronous <cite>with</cite> blocks</li>
                        <li><tt class="docutils literal">__aiter__</tt> and <tt class="docutils literal">__anext__</tt> for asynchronous iterators (async loops
                        and async comprehensions).  For extra fun that protocol already changed
                        once.  In 3.5 it returns an awaitable (a coroutine) in Python 3.6 it
                        will return a newfangled async generator.</li>
                        <li><tt class="docutils literal">__await__</tt> for custom awaitables</li>
                        </ul> */}


                    <div className="entry-overview">
                                <div className="date">Nov 18, 2015</div>
                                <div className="detail">
                                  <h1 className="Felix-Altenberger"><a href="https://lucumr.pocoo.org/2015/11/18/pythons-hidden-re-gems">Python's Hidden Regular Expression Gems</a></h1>
                                  
                                  <div className="summary"><p className="Felix-Altenberger">Some hidden features of the Python re module and the support machinery
                                  that drives it.</p>
                                  </div>
                                  
                                </div>
                              </div>
                              <p className="Felix-Altenberger">There are many terrible modules in the Python standard library, but the
                                Python <cite>re</cite> module is not one of them.  While it's old and has not been
                                updated in many years, it's one of the best of all dynamic languages I
                                would argue.</p>

                                <h2>Fixing up Groups</h2>
                                <p>One annoying thing is that our group indexes are not local to our own
                              regular expression but to the combined one.  This means if you have a
                              rule like 
                              {/* <tt class="docutils literal">(a|b)</tt>  */}
                              and you want to access that group by index, it will
                              be wrong.  This would require a bit of extra engineering with a class that
                              wraps the SRE match object with a custom one that adjusts the indexes and
                              group names.  If you are curious about that I made a more complex version
                              of the above solution that implements a proper match wrapper <a className="reference external" href="https://github.com/mitsuhiko/python-regex-scanner">in a github
                              repository</a> together
                              with some samples of what you can do with it.</p>

          </div>
      

</div>
<div id="PeterGoldsborough">
<h1>
  <a href="https://www.goldsborough.me/ml/ai/python/2018/02/04/20-17-20-a_promenade_of_pytorch/" className="site-title">Peter Goldsborough</a>

  </h1>


    <h1>A Promenade of PyTorch</h1>
    <p>For the past two years, I’ve been quite heavily invested in
    <a href="http://tensorflow.org">TensorFlow</a>, either <a href="https://arxiv.org/pdf/1610.01178.pdf">writing papers about it</a>, giving
    <a href="https://www.youtube.com/watch?v=Lo1rXJdAJ7w">talks on how to extend its backend</a> or <a href="https://www.biorxiv.org/content/early/2017/12/02/227645">using it for my own deep learning
    research</a>. As part of this journey, I’ve gotten quite a good sense of both
    TensorFlow’s strong points as well as weaknesses – or simply architectural
    decisions – that leave room for competition. That said, I have recently joined
    the PyTorch team at <a href="https://research.fb.com/category/facebook-ai-research-fair/">Facebook AI Research</a> (FAIR), arguably TensorFlow’s biggest
    competitor to date, and currently much favored in the research community for
    reasons that will become apparent in subsequent paragraphs.</p>

    <a href="https://disqus.com/by/disqus_vSdwzFeUPA/" data-action="profile" data-tab="" data-username="disqus_vSdwzFeUPA" target="_blank" rel="noopener noreferrer">No Name</a>
    <p className="Felix-Altenberger">FYI: this idea of constructing a computation graph at runtime was done by Acar at CMU for self adjusting computations. You might be able to steal some ideas from them.</p>



    <footer className="comment__footer">
  <menu className="comment-footer__menu">
    {/* <!-- Voting Section --> */}
    <li className="voting" data-role="voting">
      <div className="post-votes">
        <a href="#" className="vote-up count-10" data-action="upvote" title="Vote up" 
        // name="Vote up"
        >Upvote
          <span className="control"></span>
          <span className="updatable count" data-role="likes"> 10</span>
        </a>
        <a href="#" className="vote-down count-0" data-action="downvote" title="Vote down" 
         // name="Vote down"
        > Downvote
          <span className="control"></span>
          <span className="updatable count" data-role="dislikes"> 0</span>
        </a>
      </div>
    </li>

    {/* <!-- Reply Section -->
    <li class="reply" data-role="reply-link">
      <a class="comment-footer__action" href="#" data-action="reply">
        <span class="text">Reply</span>
      </a>
    </li> */}

    {/* <!-- Share Section --> */}
    {/* <li id="comment__share-3771658268" class="comment__share">
      <a class="toggle" href="#" data-action="expand-share">
        <i class="icon icon-share"></i>
        <span class="text">Share ›</span>
      </a>
      <ul class="comment-share__buttons">
        <div class="comment-share__social-share-buttons">
          { <!-- Twitter Share Button --> }
          <li class="twitter share__button-container">
            <button class="share__button icon icon-twitter-x" data-action="share:twitter" aria-label="Share comment on X (Twitter)"></button>
          </li>
          { <!-- Facebook Share Button --> }
          <li class="facebook share__button-container">
            <button class="share__button icon icon-facebook" data-action="share:facebook" aria-label="Share comment on Facebook"></button>
          </li>
        </div>
        { <!-- Link Share Button --> }
        <li class="link share__button-container">
          <button class="share__button icon icon-link" value="http://disq.us/p/1qdjq58" name="Link" title="Click to copy post link" data-action="copy-link" aria-label="Copy link to comment"></button>
          <input class="share__button link_url" name="Link" title="Click to copy post link" data-action="copy-link" readonly>
        </li>
      </ul>
    </li> */}

    {/* <!-- Real-time Notification Section --> */}
    {/* <li class="realtime" data-role="realtime-notification:3771658268">
      <span class="realtime-replies realtime-replies--refresh icon icon-pencil" style="display: none;"></span>
      <a href="#" class="realtime-button realtime-button--refresh" style="display: none;"></a>
    </li> */}
  </menu>
</footer>
<a href="https://www.goldsborough.me/go/2020/12/06/12-24-24-non-blocking_parallelism_for_services_in_go/" className="post-link">
          <h3 className="h1 post-title">Non-Blocking Parallelism for Services in Go</h3>
        </a>
<h3 className="h1 post-title">Non-Blocking Parallelism for Services in Go</h3>
</div>
 
<div id="AayushAgrawal">
<a href="#AayushAgrawal" style={{ textDecoration: 'underline' }}>
            <h1 className="vcard-names1 ">

                <span className="p-name vcard-fullname d-block overflow-hidden" 
                // itemprop="name"
                >
                  Aayush Agrawal
                </span>
                <span className="p-nickname vcard-username d-block" 
                //itemprop="additionalName"
                >
                 

                </span>
                </h1>
            </a>

<p className="Felix-Altenberger">I’m an experienced Data Scientist with specialized skills in machine learning-based solutions. I enjoy staying on top of cutting-edge data technologies, including big data platforms, deep learning, optimization methods, and business analytics. My current work involves building data-driven products to enable smarter recommendations for Microsoft Partners, M365 service administrators and end-users to ensure the best usage of M365 services. Before that, I have experience working in various verticals like agricultural technology, pharmaceuticals, retail, e-commerce, and ride-sharing business model.</p>
  <a href="https://aayushmnit.com/posts/2022-10-26-Model_Calibration/Model%20Calibration.html" className="quarto-grid-link">
    <div className="card-body post-contents">
          <h5 className="no-anchor card-title listing-title">
          Model calibration for classification tasks using Python
          </h5>
          <div className="listing-reading-time card-text text-muted">
          6 min
          </div>
          <div className="listing-categories">
          <div className="listing-category" 
          // onclick="window.quartoListingCategory('Model Calibration'); return false;"
          >
          Model Calibration
          </div>
          <div className="listing-category" 
          // onclick="window.quartoListingCategory('Machine Learning'); return false;"
          >
          Machine Learning
          </div>
          </div>
          <div className="card-text listing-description">
          A hands-on introduction to model calibration using Python.
          </div>
          <div className="card-attribution card-text-small end">
          <div className="listing-date">
          Oct 12, 2022
          </div>
          </div>
          </div>
    </a>

        


    <a href="https://aayushmnit.com/posts/2024-08-24-MLInterviewPrep/MLInterviewPrep.html" className="quarto-grid-link">
    <div className="card-body post-contents">
            <h5 className="no-anchor card-title listing-title">
            ML Interview Prepration Guide (Draft)
            </h5>
            <div className="listing-reading-time card-text text-muted">
            11 min
            </div>
            <div className="listing-categories">
            <div className="listing-category" 
            // onclick="window.quartoListingCategory('ML Interview Guide'); return false;"
            >
            ML Interview Guide
            </div>
            </div>
            <div className="card-text listing-description">
            A collection of resources while preparing for MLE interviews at Meta or other big tech companies.
            </div>
            <div className="card-attribution card-text-small end">
            <div className="listing-date">
            Aug 24, 2024
            </div>
            </div>
            </div>

    </a>


</div>


<div id="ezyang">
<h1>
  <a href="http://blog.ezyang.com/about/" className="site-title">ezyang &#39;s blog</a>

  </h1>

<p>Edward Z. Yang is a research engineer at Facebook who works on PyTorch, an open source deep learning library.  In a previous life, he worked on Backpack, a new module system for Haskell.</p>

<p>You can find more outdated information about me at <a href="http://ezyang.com">http://ezyang.com</a>.</p>
<ul>
              <li>
          <a href="http://blog.ezyang.com/2024/10/tensor-programming-for-databases-with-first-class-dimensions/" rel="bookmark">Tensor programming for databases, with first class dimensions</a>
          <abbr className="published small" title="2024-10-14T01:07:14-0500">(October 14, 2024)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2024/10/whats-different-this-time-llm-edition/" rel="bookmark">What’s different this time? LLM edition</a>
          <abbr className="published small" title="2024-10-04T00:30:09-0500">(October 4, 2024)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2021/11/interactive-scraping-with-jupyter-and-puppeteer/" rel="bookmark">Interactive scraping with Jupyter and Puppeteer</a>
          <abbr className="published small" title="2021-11-23T09:28:07-0500">(November 23, 2021)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2021/05/pytorch-developer-podcast/" rel="bookmark">PyTorch Developer Podcast</a>
          <abbr className="published small" title="2021-05-05T11:26:42-0500">(May 5, 2021)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2021/04/rage-bug-reporting/" rel="bookmark">Rage bug reporting</a>
          <abbr className="published small" title="2021-04-25T00:03:41-0500">(April 25, 2021)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2021/01/pytorch-open-source-process/" rel="bookmark">The PyTorch open source process</a>
          <abbr className="published small" title="2021-01-06T11:56:33-0500">(January 6, 2021)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2020/10/the-hidden-problem-with-basic-block-procedures-in-ssa/" rel="bookmark">The hidden problem(?) with basic block procedures in SSA</a>
          <abbr className="published small" title="2020-10-24T19:34:21-0500">(October 24, 2020)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2020/10/idiomatic-algebraic-data-types-in-python-with-dataclasses-and-union/" rel="bookmark">Idiomatic algebraic data types in Python with dataclasses and Union</a>
          <abbr className="published small" title="2020-10-14T14:08:54-0500">(October 14, 2020)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2020/09/lets-talk-about-the-pytorch-dispatcher/" rel="bookmark">Let’s talk about the PyTorch dispatcher</a>
          <abbr className="published small" title="2020-09-10T14:29:05-0500">(September 10, 2020)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2020/08/dynamic-scoping-is-an-effect-implicit-parameters-are-a-coeffect/" rel="bookmark">Dynamic scoping is an effect, implicit parameters are a coeffect</a>
          <abbr className="published small" title="2020-08-27T01:51:36-0500">(August 27, 2020)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2020/05/a-brief-taxonomy-of-pytorch-operators-by-shape-behavior/" rel="bookmark">A brief taxonomy of PyTorch operators by shape behavior</a>
          <abbr className="published small" title="2020-05-06T11:56:43-0500">(May 6, 2020)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2020/01/vmap-in-haskell/" rel="bookmark">vmap in Haskell</a>
          <abbr className="published small" title="2020-01-29T14:14:34-0500">(January 29, 2020)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2019/05/pytorch-internals/" rel="bookmark">PyTorch internals</a>
          <abbr className="published small" title="2019-05-16T22:11:22-0500">(May 16, 2019)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2019/05/a-short-note-about-functional-linear-maps/" rel="bookmark">A short note about functional linear maps</a>
          <abbr className="published small" title="2019-05-15T17:42:10-0500">(May 15, 2019)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2019/03/microsoft-surface-book-2/" rel="bookmark">Microsoft Surface Book 2</a>
          <abbr className="published small" title="2019-03-17T21:59:52-0500">(March 17, 2019)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2018/09/hiw18-lets-go-mainstream-with-eta/" rel="bookmark">HIW’18: Let’s Go Mainstream with Eta!</a>
          <abbr className="published small" title="2018-09-23T11:02:53-0500">(September 23, 2018)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2018/07/a-year-into-backpack/" rel="bookmark">A year into Backpack</a>
          <abbr className="published small" title="2018-07-14T19:34:16-0500">(July 14, 2018)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2018/04/a-compile-time-debugger-that-helps-you-write-tensor-shape-checks/" rel="bookmark">A compile-time debugger that helps you write tensor shape checks</a>
          <abbr className="published small" title="2018-04-06T23:49:53-0500">(April 6, 2018)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2018/03/online-offline-continuous-integration/" rel="bookmark">Online/offline continuous integration</a>
          <abbr className="published small" title="2018-03-12T22:52:29-0500">(March 12, 2018)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2018/02/semantic-import-versioning-in-the-wild/" rel="bookmark">Semantic Import Versioning in the wild</a>
          <abbr className="published small" title="2018-02-23T00:06:00-0500">(February 23, 2018)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/12/systems-ml-workshop-panel/" rel="bookmark">Systems ML workshop panel</a>
          <abbr className="published small" title="2017-12-08T21:17:08-0500">(December 8, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/12/accelerating-persistent-neural-networks-at-datacenter-scale-daniel-lo/" rel="bookmark">Accelerating Persistent Neural Networks at Datacenter Scale (Daniel Lo)</a>
          <abbr className="published small" title="2017-12-08T15:08:44-0500">(December 8, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/12/mocha-federated-multi-tasks-learning-virginia-smith/" rel="bookmark">MOCHA: Federated Multi-Tasks Learning (Virginia Smith)</a>
          <abbr className="published small" title="2017-12-08T13:15:32-0500">(December 8, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/12/a-machine-learning-approach-to-database-indexes-alex-beutel/" rel="bookmark">A Machine Learning Approach to Database Indexes (Alex Beutel)</a>
          <abbr className="published small" title="2017-12-08T13:11:02-0500">(December 8, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/12/ray-a-distributed-execution-framework-for-emerging-ai-applications-ion-stoica/" rel="bookmark">Ray: A Distributed Execution Framework for Emerging AI Applications (Ion Stoica)</a>
          <abbr className="published small" title="2017-12-08T13:07:16-0500">(December 8, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/08/backpack-for-deep-learning/" rel="bookmark">Backpack for deep learning</a>
          <abbr className="published small" title="2017-08-17T22:05:03-0500">(August 17, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/03/proposal-suggest-explicit-type-application-for-foldable-length/" rel="bookmark">Proposal: Suggest explicit type application for Foldable length and friends</a>
          <abbr className="published small" title="2017-03-21T19:50:13-0500">(March 21, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/03/prio-private-robust-and-scalable-computation-of-aggregate-statistics/" rel="bookmark">Prio: Private, Robust, and Scalable Computation of Aggregate Statistics</a>
          <abbr className="published small" title="2017-03-17T19:35:48-0500">(March 17, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/03/designing-the-backpack-signature-ecosystem/" rel="bookmark">Designing the Backpack signature ecosystem</a>
          <abbr className="published small" title="2017-03-11T06:40:42-0500">(March 11, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2017/02/how-to-integrate-ghc-api-programs-with-cabal/" rel="bookmark">How to integrate GHC API programs with Cabal</a>
          <abbr className="published small" title="2017-02-08T19:45:00-0500">(February 8, 2017)</abbr>
        </li>
              {/* <li>
          <a href="http://blog.ezyang.com/2017/01/try-backpack-cabal-packages/" rel="bookmark">Try Backpack: Cabal packages</a>
          <abbr class="published small" title="2017-01-17T23:17:21-0500">(January 17, 2017)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/12/a-tale-of-backwards-compatibility-in-asts/" rel="bookmark">A tale of backwards compatibility in ASTs</a>
          <abbr class="published small" title="2016-12-31T23:35:33-0500">(December 31, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/12/backpack-and-the-pvp/" rel="bookmark">Backpack and the PVP</a>
          <abbr class="published small" title="2016-12-30T01:32:31-0500">(December 30, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/12/left-recursive-parsing-of-haskell-imports-and-declarations/" rel="bookmark">Left-recursive parsing of Haskell imports and declarations</a>
          <abbr class="published small" title="2016-12-21T20:24:11-0500">(December 21, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/12/the-problem-of-reusable-and-composable-specifications/" rel="bookmark">The problem of reusable and composable specifications</a>
          <abbr class="published small" title="2016-12-17T05:54:31-0500">(December 17, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/12/thoughts-about-spec-ulation-rich-hickey/" rel="bookmark">Thoughts about Spec-ulation (Rich Hickey)</a>
          <abbr class="published small" title="2016-12-16T19:26:00-0500">(December 16, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/10/try-backpack-ghc-backpack/" rel="bookmark">Try Backpack: <code>ghc --backpack</code></a>
          <abbr class="published small" title="2016-10-10T04:39:14-0500">(October 10, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/09/seize-the-means-of-production-of-apis/" rel="bookmark">Seize the Means of Production (of APIs)</a>
          <abbr class="published small" title="2016-09-13T01:09:52-0500">(September 13, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/09/the-base-of-a-string-theory-for-haskell/" rel="bookmark">The Base of a String Theory for Haskell</a>
          <abbr class="published small" title="2016-09-07T02:22:53-0500">(September 7, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/09/the-edit-recompile-manager/" rel="bookmark">The Edit-Recompile Manager</a>
          <abbr class="published small" title="2016-09-02T20:40:43-0500">(September 2, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/09/backpack-and-separate-compilation/" rel="bookmark">Backpack and separate compilation</a>
          <abbr class="published small" title="2016-09-01T02:26:40-0500">(September 1, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/08/cabal-new-build-is-a-package-manager/" rel="bookmark">cabal new-build is a package manager</a>
          <abbr class="published small" title="2016-08-29T17:32:36-0500">(August 29, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/08/optimizing-incremental-compilation/" rel="bookmark">Optimizing incremental compilation</a>
          <abbr class="published small" title="2016-08-27T06:03:03-0500">(August 27, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/07/what-template-haskell-gets-wrong-and-racket-gets-right/" rel="bookmark">What Template Haskell gets wrong and Racket gets right</a>
          <abbr class="published small" title="2016-07-18T11:19:37-0500">(July 18, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/05/debugging-tcifaceglobal-errors-in-ghc-a-study-in-interpreting-trace-output/" rel="bookmark">Debugging tcIfaceGlobal errors in GHC: a study in interpreting trace output</a>
          <abbr class="published small" title="2016-05-15T18:02:52-0500">(May 15, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/05/announcing-cabal-new-build-nix-style-local-builds/" rel="bookmark">Announcing cabal new-build: Nix-style local builds</a>
          <abbr class="published small" title="2016-05-02T12:45:01-0500">(May 2, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/04/hindley-milner-with-top-level-existentials/" rel="bookmark">Hindley-Milner with top-level existentials</a>
          <abbr class="published small" title="2016-04-24T04:05:09-0500">(April 24, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2016/01/ghc-shake-reimplementing-ghc-make/" rel="bookmark">ghc-shake: Reimplementing ghc -&ZeroWidthSpace;-make</a>
          <abbr class="published small" title="2016-01-07T12:59:32-0500">(January 7, 2016)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2015/12/the-convergence-of-compilers-build-systems-and-package-managers/" rel="bookmark">The convergence of compilers, build systems and package managers</a>
          <abbr class="published small" title="2015-12-07T01:50:28-0500">(December 7, 2015)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2015/11/what-is-stateless-user-interface/" rel="bookmark">What is Stateless User Interface?</a>
          <abbr class="published small" title="2015-11-27T01:53:49-0500">(November 27, 2015)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2015/09/is-no-reinstall-cabal-coming-to-ghc-8/" rel="bookmark">Is no-reinstall Cabal coming to GHC 8.0?</a>
          <abbr class="published small" title="2015-09-18T23:15:47-0500">(September 18, 2015)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2015/08/help-us-beta-test-no-reinstall-cabal/" rel="bookmark">Help us beta test “no-reinstall Cabal”</a>
          <abbr class="published small" title="2015-08-29T00:31:15-0500">(August 29, 2015)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2015/05/ubuntu-vivid-upgrade-xmonad/" rel="bookmark">Ubuntu Vivid upgrade (Xmonad)</a>
          <abbr class="published small" title="2015-05-29T14:09:30-0500">(May 29, 2015)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2015/05/width-adaptive-xmonad-layout/" rel="bookmark">Width-adaptive XMonad layout</a>
          <abbr class="published small" title="2015-05-02T00:36:55-0500">(May 2, 2015)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2015/01/an-eq-instance-for-non-de-bruijn-terms/" rel="bookmark">An Eq instance for non de Bruijn terms</a>
          <abbr class="published small" title="2015-01-30T21:14:10-0500">(January 30, 2015)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/12/unintended-consequences-bound-threads-and-unsafe-ffi-calls/" rel="bookmark">Unintended consequences: Bound threads and unsafe FFI calls</a>
          <abbr class="published small" title="2014-12-08T19:09:33-0500">(December 8, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/12/ubuntu-utopic-upgrade-xmonad/" rel="bookmark">Ubuntu Utopic upgrade (Xmonad)</a>
          <abbr class="published small" title="2014-12-04T18:48:19-0500">(December 4, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/11/tomatoes-are-a-subtype-of-vegetables/" rel="bookmark">Tomatoes are a subtype of vegetables</a>
          <abbr class="published small" title="2014-11-14T21:00:36-0500">(November 14, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/09/haskell-implementors-workshop-14/" rel="bookmark">Haskell Implementor’s Workshop ’14</a>
          <abbr class="published small" title="2014-09-07T09:05:02-0500">(September 7, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/09/open-type-families-are-not-modular/" rel="bookmark">Open type families are not modular</a>
          <abbr class="published small" title="2014-09-04T18:12:23-0500">(September 4, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/08/a-taste-of-cabalized-backpack/" rel="bookmark">A taste of Cabalized Backpack</a>
          <abbr class="published small" title="2014-08-26T18:01:48-0500">(August 26, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/08/the-fundamental-problem-of-programming-language-package-management/" rel="bookmark">The fundamental problem of programming language package management</a>
          <abbr class="published small" title="2014-08-21T09:02:53-0500">(August 21, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/08/whats-a-module-system-good-for-anyway/" rel="bookmark">What’s a module system good for anyway?</a>
          <abbr class="published small" title="2014-08-09T19:21:19-0500">(August 9, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/07/new-theme/" rel="bookmark">New theme!</a>
          <abbr class="published small" title="2014-07-26T09:58:27-0500">(July 26, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/07/type-classes-confluence-coherence-global-uniqueness/" rel="bookmark">Type classes: confluence, coherence and global uniqueness</a>
          <abbr class="published small" title="2014-07-11T12:07:53-0500">(July 11, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/05/parsec-try-a-or-b-considered-harmful/" rel="bookmark">Parsec: “try a &lt;|&gt; b” considered harmful</a>
          <abbr class="published small" title="2014-05-17T21:46:52-0500">(May 17, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/05/ghc-and-mutable-arrays-a-dirty-little-secret/" rel="bookmark">GHC and mutable arrays: a DIRTY little secret</a>
          <abbr class="published small" title="2014-05-09T02:34:46-0500">(May 9, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/05/elimination-with-a-motive-in-coq/" rel="bookmark">Elimination with a Motive (in Coq)</a>
          <abbr class="published small" title="2014-05-07T23:13:15-0500">(May 7, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/05/the-cost-of-weak-pointers-and-finalizers-in-ghc/" rel="bookmark">The cost of weak pointers and finalizers in GHC</a>
          <abbr class="published small" title="2014-05-04T04:55:36-0500">(May 4, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/04/calculating-shanten-in-mahjong/" rel="bookmark">Calculating Shanten in Mahjong</a>
          <abbr class="published small" title="2014-04-01T04:20:46-0500">(April 1, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/03/haskell-for-coq-programmers/" rel="bookmark">Haskell for Coq programmers</a>
          <abbr class="published small" title="2014-03-17T02:06:47-0500">(March 17, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/01/equality-roughly-speaking/" rel="bookmark">Equality, roughly speaking</a>
          <abbr class="published small" title="2014-01-30T00:05:03-0500">(January 30, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/01/how-to-maintain-a-pristine-copy-of-your-configuration-files/" rel="bookmark">How to maintain a pristine copy of your configuration files</a>
          <abbr class="published small" title="2014-01-20T19:02:31-0500">(January 20, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/01/pepm14-the-hermit-in-the-stream/" rel="bookmark">PEPM’14: The HERMIT in the Stream</a>
          <abbr class="published small" title="2014-01-17T02:36:41-0500">(January 17, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/01/ott-iff-plt-redex/" rel="bookmark">Ott ⇔ PLT Redex</a>
          <abbr class="published small" title="2014-01-13T19:11:39-0500">(January 13, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/01/when-a-lock-is-better-than-an-mvar/" rel="bookmark">When a lock is better than an MVar</a>
          <abbr class="published small" title="2014-01-07T18:47:26-0500">(January 7, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2014/01/so-you-want-to-add-a-new-concurrency-primitive-to-ghc/" rel="bookmark">So you want to add a new concurrency primitive to GHC…</a>
          <abbr class="published small" title="2014-01-01T10:37:00-0500">(January 1, 2014)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/12/two-bugs-in-the-borrow-checker-every-rust-developer-should-know-about/" rel="bookmark">Two bugs in the borrow checker every Rust developer should know about</a>
          <abbr class="published small" title="2013-12-17T07:57:31-0500">(December 17, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/10/visualizing-a-block-allocator/" rel="bookmark">Visualizing a block allocator</a>
          <abbr class="published small" title="2013-10-30T21:48:02-0500">(October 30, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/10/xmonad-and-media-keys-on-saucy/" rel="bookmark">Xmonad and media keys on Saucy</a>
          <abbr class="published small" title="2013-10-27T16:30:39-0500">(October 27, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/09/if-youre-using-lift-youre-doing-it-wrong-probably/" rel="bookmark">If you’re using lift, you’re doing it wrong (probably)</a>
          <abbr class="published small" title="2013-09-26T15:03:42-0500">(September 26, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/09/of-monadic-fixpoints-and-heap-offsets/" rel="bookmark">Of Monadic Fixpoints and Heap Offsets</a>
          <abbr class="published small" title="2013-09-24T22:20:57-0500">(September 24, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/09/induction-and-logical-relations/" rel="bookmark">Induction and logical relations</a>
          <abbr class="published small" title="2013-09-18T19:35:37-0500">(September 18, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/09/cost-semantics-for-stg-in-modern-ghc/" rel="bookmark">Cost semantics for STG in modern GHC</a>
          <abbr class="published small" title="2013-09-07T16:54:51-0500">(September 7, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/08/blame-trees/" rel="bookmark">Blame Trees</a>
          <abbr class="published small" title="2013-08-12T14:55:28-0500">(August 12, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/07/oplss-lecture-notes/" rel="bookmark">OPLSS lecture notes</a>
          <abbr class="published small" title="2013-07-29T00:02:10-0500">(July 29, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/07/no-grammar-no-problem/" rel="bookmark">No grammar? No problem!</a>
          <abbr class="published small" title="2013-07-02T22:17:02-0500">(July 2, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/07/hott-exercises-in-coq-in-progress/" rel="bookmark">HoTT exercises in Coq (in progress)</a>
          <abbr class="published small" title="2013-07-01T16:21:18-0500">(July 1, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/06/homotopy-type-theory-chapter-one/" rel="bookmark">(Homotopy) Type Theory: Chapter One</a>
          <abbr class="published small" title="2013-06-24T18:56:27-0500">(June 24, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/05/the-ast-typing-problem/" rel="bookmark">The AST Typing Problem</a>
          <abbr class="published small" title="2013-05-28T07:25:03-0500">(May 28, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/05/anatomy-of-an-mvar-operation/" rel="bookmark">Anatomy of an MVar operation</a>
          <abbr class="published small" title="2013-05-19T20:00:37-0500">(May 19, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/05/hotos-unconference-reportverifying-systems/" rel="bookmark">HotOS “Unconference” report:<br>Verifying Systems</a>
          <abbr class="published small" title="2013-05-14T00:58:40-0500">(May 14, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/05/category-theory-for-loop-optimizations/" rel="bookmark">Category theory for loop optimizations</a>
          <abbr class="published small" title="2013-05-12T00:25:40-0500">(May 12, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/04/the-difference-between-recursion-induction/" rel="bookmark">The Difference between Recursion &amp; Induction</a>
          <abbr class="published small" title="2013-04-27T03:30:17-0500">(April 27, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/04/kindle-is-not-good-for-textbooks/" rel="bookmark">Kindle is not good for textbooks</a>
          <abbr class="published small" title="2013-04-15T19:52:20-0500">(April 15, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/04/a-zerocoin-puzzle/" rel="bookmark">A Zerocoin puzzle</a>
          <abbr class="published small" title="2013-04-11T18:54:02-0500">(April 11, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/04/a-classical-logic-fairy-tale/" rel="bookmark">A classical logic fairy tale</a>
          <abbr class="published small" title="2013-04-07T17:52:08-0500">(April 7, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/04/ndseg/" rel="bookmark">NDSEG</a>
          <abbr class="published small" title="2013-04-05T22:40:31-0500">(April 5, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/04/resource-limits-for-haskell/" rel="bookmark">Resource limits for Haskell</a>
          <abbr class="published small" title="2013-04-02T16:36:40-0500">(April 2, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/03/the-single-export-pattern/" rel="bookmark">The single export pattern</a>
          <abbr class="published small" title="2013-03-31T20:39:41-0500">(March 31, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/03/duality-of-weak-maps-and-private-symbols/" rel="bookmark">The duality of weak maps and private symbols</a>
          <abbr class="published small" title="2013-03-19T00:12:16-0500">(March 19, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/03/what-is-a-membran/" rel="bookmark">What is a membrane?</a>
          <abbr class="published small" title="2013-03-15T03:49:08-0500">(March 15, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/01/kindle-paperwhite-notes/" rel="bookmark">Kindle Paperwhite notes</a>
          <abbr class="published small" title="2013-01-30T09:00:17-0500">(January 30, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/01/the-ghc-scheduler/" rel="bookmark">The GHC scheduler</a>
          <abbr class="published small" title="2013-01-28T03:00:48-0500">(January 28, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2013/01/nlp-the-missing-framework/" rel="bookmark">NLP: the missing framework</a>
          <abbr class="published small" title="2013-01-02T00:00:30-0500">(January 2, 2013)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/12/googl-nexus-7-setup-notes/" rel="bookmark">Google Nexus 7 setup notes</a>
          <abbr class="published small" title="2012-12-31T21:19:30-0500">(December 31, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/12/metro-maps-of-the-news/" rel="bookmark">Metro Maps of the News</a>
          <abbr class="published small" title="2012-12-13T04:44:40-0500">(December 13, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/12/maildir-synchronizing-sup/" rel="bookmark">Maildir synchronizing Sup</a>
          <abbr class="published small" title="2012-12-01T18:33:38-0500">(December 1, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/11/why-cant-i-just-be-a-little-lazy/" rel="bookmark">Why can’t I just be a little lazy?</a>
          <abbr class="published small" title="2012-11-26T09:00:28-0500">(November 26, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/11/functional-encryption/" rel="bookmark">Functional Encryption</a>
          <abbr class="published small" title="2012-11-25T15:24:20-0500">(November 25, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/11/extremist-programming/" rel="bookmark">Extremist Programming</a>
          <abbr class="published small" title="2012-11-20T16:15:06-0500">(November 20, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/11/plan-9-mounts-and-dependency-injection/" rel="bookmark">Plan 9 mounts and dependency injection</a>
          <abbr class="published small" title="2012-11-08T19:45:57-0500">(November 8, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/11/hpd3-js-an-interactive-heap-profile-viewer/" rel="bookmark">hp/D3.js: an interactive heap profile viewer</a>
          <abbr class="published small" title="2012-11-02T02:42:18-0500">(November 2, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/10/ubuntu-quantal-upgrade-thinkpadxmonad/" rel="bookmark">Ubuntu Quantal upgrade (Thinkpad/Xmonad)</a>
          <abbr class="published small" title="2012-10-24T11:00:01-0500">(October 24, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/10/acm-xrds-jeff-dean-profile/" rel="bookmark">ACM XRDS: Jeff Dean profile</a>
          <abbr class="published small" title="2012-10-22T10:00:04-0500">(October 22, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/10/duality-for-haskellers/" rel="bookmark">Duality for Haskellers</a>
          <abbr class="published small" title="2012-10-19T11:00:50-0500">(October 19, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/10/hails-protecting-data-privacy-in-untrusted-web-applications/" rel="bookmark">Hails: Protecting Data Privacy in Untrusted Web Applications</a>
          <abbr class="published small" title="2012-10-16T11:00:33-0500">(October 16, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/10/visualizing-satisfiability-validity-and-entailment/" rel="bookmark">Visualizing satisfiability, validity &amp; entailment</a>
          <abbr class="published small" title="2012-10-15T11:00:51-0500">(October 15, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/10/get-browser-exe/" rel="bookmark">GET /browser.exe</a>
          <abbr class="published small" title="2012-10-12T14:26:17-0500">(October 12, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/10/generalizing-the-programmable-semicolon/" rel="bookmark">Generalizing the programmable semicolon</a>
          <abbr class="published small" title="2012-10-03T17:49:28-0500">(October 3, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/09/template-project-for-ghc-plugins/" rel="bookmark">Template project for GHC plugins</a>
          <abbr class="published small" title="2012-09-28T18:56:20-0500">(September 28, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/09/feit-thompson-true/" rel="bookmark">“This is really the End.”</a>
          <abbr class="published small" title="2012-09-24T09:00:12-0500">(September 24, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/09/common-misconceptions-about-safe-haskell/" rel="bookmark">Unintuitive facts about Safe Haskell</a>
          <abbr class="published small" title="2012-09-17T20:34:45-0500">(September 17, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/09/y-combinator-and-strict-positivity/" rel="bookmark">The Y Combinator and strict positivity</a>
          <abbr class="published small" title="2012-09-12T18:52:23-0500">(September 12, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/08/so-you-want-to-hack-on-imap/" rel="bookmark">So you want to hack on IMAP…</a>
          <abbr class="published small" title="2012-08-31T10:00:34-0500">(August 31, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/08/offlineimap-sucks/" rel="bookmark">OfflineIMAP sucks</a>
          <abbr class="published small" title="2012-08-30T01:07:58-0500">(August 30, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/08/how-offlineimap-works/" rel="bookmark">How OfflineIMAP works</a>
          <abbr class="published small" title="2012-08-27T10:00:33-0500">(August 27, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/08/the-monad-reader-issue-20/" rel="bookmark">The Monad Reader: Issue 20</a>
          <abbr class="published small" title="2012-08-25T23:39:18-0500">(August 25, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/08/applicative-functors/" rel="bookmark">Applicative functors</a>
          <abbr class="published small" title="2012-08-16T05:34:30-0500">(August 16, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/08/practical-foundations-for-programming-languages/" rel="bookmark">Practical Foundations for Programming Languages (first impressions)</a>
          <abbr class="published small" title="2012-08-15T01:00:31-0500">(August 15, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/08/is-haskell-liberal-or-conservative/" rel="bookmark">Is Haskell liberal or conservative?</a>
          <abbr class="published small" title="2012-08-10T09:12:50-0500">(August 10, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/08/statically-checked-perfect-binary-trees/" rel="bookmark">Two ways of representing perfect binary trees</a>
          <abbr class="published small" title="2012-08-04T11:04:33-0500">(August 4, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/07/polymorphic-variants-in-urweb/" rel="bookmark">Polymorphic variants in Ur/Web</a>
          <abbr class="published small" title="2012-07-29T01:33:18-0500">(July 29, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/07/managing-the-server-client-split-in-ur-web/" rel="bookmark">Managing the server/client split in Ur/Web</a>
          <abbr class="published small" title="2012-07-25T01:17:14-0500">(July 25, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/07/secure-multiparty-bitcoin-anonymization/" rel="bookmark">Secure multiparty Bitcoin anonymization</a>
          <abbr class="published small" title="2012-07-20T11:42:13-0500">(July 20, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/06/why-verification-results-in-higher-quality-code/" rel="bookmark">Why verification results in higher quality code</a>
          <abbr class="published small" title="2012-06-23T00:40:11-0500">(June 23, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/05/thoughts-on-gamifying-textbooks/" rel="bookmark">Thoughts on gamifying textbooks</a>
          <abbr class="published small" title="2012-05-24T19:10:57-0500">(May 24, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/05/an-interactive-tutorial-of-the-sequent-calculus/" rel="bookmark">An Interactive Tutorial of the Sequent Calculus</a>
          <abbr class="published small" title="2012-05-22T09:00:28-0500">(May 22, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/05/ubuntu-precise-upgrade-thinkpad-xmonad/" rel="bookmark">Ubuntu Precise upgrade (Thinkpad/Xmonad)</a>
          <abbr class="published small" title="2012-05-18T20:51:12-0500">(May 18, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/05/what-happens-when-you-mix-three-research-programming-languages-together/" rel="bookmark">What happens when you mix three research programming languages together</a>
          <abbr class="published small" title="2012-05-16T02:54:22-0500">(May 16, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/05/some-thoughts-about-literature-review/" rel="bookmark">Some thoughts about literature review</a>
          <abbr class="published small" title="2012-05-13T19:03:00-0500">(May 13, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/04/how-urweb-records-work-and-what-it-might-mean-for-haskell/" rel="bookmark">How Ur/Web records work and what it might mean for Haskell</a>
          <abbr class="published small" title="2012-04-20T01:24:41-0500">(April 20, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/04/use-the-source-dont-read-it/" rel="bookmark">Use the source, don’t read it</a>
          <abbr class="published small" title="2012-04-17T12:51:49-0500">(April 17, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/03/reduce-ubuntu-latency-by-disabling-mdns/" rel="bookmark">Reduce Ubuntu latency by disabling mDNS</a>
          <abbr class="published small" title="2012-03-24T15:56:04-0500">(March 24, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/03/visit-month-princeton/" rel="bookmark">Visit month: Princeton</a>
          <abbr class="published small" title="2012-03-20T09:00:46-0500">(March 20, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/03/is-it-better-to-teach-formalism-or-intuition/" rel="bookmark">Is it better to teach formalism or intuition?</a>
          <abbr class="published small" title="2012-03-18T16:51:31-0500">(March 18, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/03/visit-month-upen/" rel="bookmark">Visit month: University of Pennsylvania</a>
          <abbr class="published small" title="2012-03-16T01:59:16-0500">(March 16, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/03/you-could-have-invented-fractional-cascading/" rel="bookmark">You could have invented fractional cascading</a>
          <abbr class="published small" title="2012-03-05T01:30:22-0500">(March 5, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/02/visualizing-range-trees/" rel="bookmark">Visualizing range trees</a>
          <abbr class="published small" title="2012-02-26T03:41:40-0500">(February 26, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/02/anatomy-of-you-could-have-invented/" rel="bookmark">Anatomy of “You could have invented…”</a>
          <abbr class="published small" title="2012-02-23T14:42:04-0500">(February 23, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/02/transcript-of-inventing-on-principleb/" rel="bookmark">Transcript of “Inventing on Principle”</a>
          <abbr class="published small" title="2012-02-20T16:23:10-0500">(February 20, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/02/travel-spring-2012-edition/" rel="bookmark">Travel: Spring 2012 Edition</a>
          <abbr class="published small" title="2012-02-18T10:55:15-0500">(February 18, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/02/how-to-build-drm-you-can-trust/" rel="bookmark">How to build DRM you can trust</a>
          <abbr class="published small" title="2012-02-15T16:49:19-0500">(February 15, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/01/popl/" rel="bookmark">POPL</a>
          <abbr class="published small" title="2012-01-28T08:30:59-0500">(January 28, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/01/modelling-io/" rel="bookmark">Modelling IO: MonadIO and beyond</a>
          <abbr class="published small" title="2012-01-24T13:31:06-0500">(January 24, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/01/monadbasecontrol-is-unsound/" rel="bookmark">monad-control is tricky</a>
          <abbr class="published small" title="2012-01-23T12:39:00-0500">(January 23, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/01/mystery-hunt-and-the-scientific-endeavour/" rel="bookmark">Mystery Hunt and the Scientific Endeavour</a>
          <abbr class="published small" title="2012-01-16T16:12:52-0500">(January 16, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/01/problem-set-the-codensity-transformation/" rel="bookmark">Problem Set: The Codensity Transformation</a>
          <abbr class="published small" title="2012-01-07T03:00:20-0500">(January 7, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2012/01/why-iteratees-are-hard-to-understand/" rel="bookmark">Why iteratees are hard to understand</a>
          <abbr class="published small" title="2012-01-04T08:00:26-0500">(January 4, 2012)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/12/bugs-and-battleships/" rel="bookmark">Bugs and Battleships</a>
          <abbr class="published small" title="2011-12-19T11:04:51-0500">(December 19, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/12/how-to-build-i686-glibc-on-ubuntu/" rel="bookmark">How to build i686 glibc on Ubuntu</a>
          <abbr class="published small" title="2011-12-18T18:03:44-0500">(December 18, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/12/interactive-demo-of-zero-knowledge-proofs/" rel="bookmark">Interactive Demo of Zero-Knowledge Proofs</a>
          <abbr class="published small" title="2011-12-17T13:56:39-0500">(December 17, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/12/accessing-lazy-structures-from/" rel="bookmark">Accessing lazy structures from C</a>
          <abbr class="published small" title="2011-12-15T17:18:27-0500">(December 15, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/11/transparent-xmobar/" rel="bookmark">Transparent xmobar</a>
          <abbr class="published small" title="2011-11-28T05:09:32-0500">(November 28, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/11/ubuntu-oneiric-thinkpad-xmonad/" rel="bookmark">Ubuntu Oneiric upgrade (Thinkpad/Xmonad)</a>
          <abbr class="published small" title="2011-11-24T03:59:50-0500">(November 24, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/11/how-to-read-haskell/" rel="bookmark">How to read Haskell like Python</a>
          <abbr class="published small" title="2011-11-14T09:00:26-0500">(November 14, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/10/the-new-reflections-on-trusting-trust/" rel="bookmark">The new Reflections on Trusting Trust</a>
          <abbr class="published small" title="2011-10-28T09:00:57-0500">(October 28, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/10/obviously-correct/" rel="bookmark">Obviously Correct</a>
          <abbr class="published small" title="2011-10-24T09:00:34-0500">(October 24, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/10/polyglot-programming/" rel="bookmark">Polyglot programming</a>
          <abbr class="published small" title="2011-10-12T22:22:54-0500">(October 12, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/09/do-not-phd-in-systems/" rel="bookmark">Why you shouldn’t do a PhD in systems</a>
          <abbr class="published small" title="2011-09-26T02:41:39-0500">(September 26, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/09/lets-play-a-game/" rel="bookmark">Let’s play a game</a>
          <abbr class="published small" title="2011-09-05T04:04:46-0500">(September 5, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/08/8-ways-to-report-errors-in-haskell-revisited/" rel="bookmark">8 ways to report errors in Haskell revisited</a>
          <abbr class="published small" title="2011-08-29T12:30:02-0500">(August 29, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/08/joseph-and-the-amazing-technicolor-box/" rel="bookmark">Joseph and the Amazing Technicolor Box</a>
          <abbr class="published small" title="2011-08-23T03:46:58-0500">(August 23, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/08/diskless-paxos-crash-recovery/" rel="bookmark">Diskless Paxos crash recovery</a>
          <abbr class="published small" title="2011-08-14T00:41:30-0500">(August 14, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/08/first-impressions-of-module-programming/" rel="bookmark">First impressions of module programming</a>
          <abbr class="published small" title="2011-08-05T09:00:21-0500">(August 5, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/08/in-program-gc-stats-redux/" rel="bookmark">In-program GC stats redux</a>
          <abbr class="published small" title="2011-08-03T09:00:08-0500">(August 3, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/08/changes-to-intmap/" rel="bookmark">Changes to IntMap</a>
          <abbr class="published small" title="2011-08-01T09:00:27-0500">(August 1, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/food-related-functional-humor/" rel="bookmark">Food-related functional humor</a>
          <abbr class="published small" title="2011-07-29T09:00:18-0500">(July 29, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/blockedindefinitelyonmvar/" rel="bookmark">BlockedIndefinitelyOnMVar</a>
          <abbr class="published small" title="2011-07-27T09:00:08-0500">(July 27, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/data-type-definitions-to-code/" rel="bookmark">From data type definitions to code</a>
          <abbr class="published small" title="2011-07-25T09:00:48-0500">(July 25, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/variant-types-and-gadts/" rel="bookmark">Variant types and GADTs</a>
          <abbr class="published small" title="2011-07-22T09:00:21-0500">(July 22, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/in-program-gc-stats-for-ghc/" rel="bookmark">In-program GC stats for GHC</a>
          <abbr class="published small" title="2011-07-20T09:00:00-0500">(July 20, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/synthetic-git-merges/" rel="bookmark">Synthetic Git merges</a>
          <abbr class="published small" title="2011-07-18T09:00:14-0500">(July 18, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/parallelism-to-plug-space-leaks/" rel="bookmark">Parallelism to plug space leaks</a>
          <abbr class="published small" title="2011-07-15T09:00:26-0500">(July 15, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/facebook-support-for-barnowl/" rel="bookmark">Facebook support for BarnOwl</a>
          <abbr class="published small" title="2011-07-13T09:00:15-0500">(July 13, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/grad-school-oh-my/" rel="bookmark">Grad School, Oh My</a>
          <abbr class="published small" title="2011-07-11T09:00:07-0500">(July 11, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/cambridge-hps/" rel="bookmark">Cambridge retrospective: History and Philosophy of Science</a>
          <abbr class="published small" title="2011-07-08T09:00:02-0500">(July 8, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/a-new-vision-for-mendeley/" rel="bookmark">A new vision for Mendeley</a>
          <abbr class="published small" title="2011-07-06T09:00:54-0500">(July 6, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/ivar-leaks/" rel="bookmark">IVar leaks</a>
          <abbr class="published small" title="2011-07-04T09:00:17-0500">(July 4, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/07/scheduling-ivar/" rel="bookmark">Scheduling IVars</a>
          <abbr class="published small" title="2011-07-01T09:00:20-0500">(July 1, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/the-iva-monad/" rel="bookmark">The IVar monad</a>
          <abbr class="published small" title="2011-06-29T08:57:31-0500">(June 29, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/debugging-compilers-with-optimization-fuel/" rel="bookmark">Debugging compilers with optimization fuel</a>
          <abbr class="published small" title="2011-06-27T09:00:49-0500">(June 27, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/multi-monitor-xmobar-placement-on-nome/" rel="bookmark">Multi-monitor xmobar placement on Gnome</a>
          <abbr class="published small" title="2011-06-24T09:00:57-0500">(June 24, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/a-year-of-notebooking-part-2/" rel="bookmark">A Year of Notebooking (Part 2)</a>
          <abbr class="published small" title="2011-06-22T09:00:50-0500">(June 22, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/a-year-of-notebooking-part-1/" rel="bookmark">A Year of Notebooking (Part 1)</a>
          <abbr class="published small" title="2011-06-20T09:13:29-0500">(June 20, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/a-pattern-for-increasing-sharing/" rel="bookmark">A pattern for increasing sharing</a>
          <abbr class="published small" title="2011-06-17T12:55:32-0500">(June 17, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/on-type-synonyms/" rel="bookmark">On type synonyms</a>
          <abbr class="published small" title="2011-06-15T12:22:05-0500">(June 15, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/taxonomy-of-socialization-on-the-internet/" rel="bookmark">A Taxonomy of Socialization on the Internet</a>
          <abbr class="published small" title="2011-06-13T11:19:01-0500">(June 13, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/pinpointing-space-leaks-in-big-programs/" rel="bookmark">Pinpointing space leaks in big programs</a>
          <abbr class="published small" title="2011-06-10T09:00:53-0500">(June 10, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/measurement-quantification-and-reduction/" rel="bookmark">Measurement, quantification and reduction</a>
          <abbr class="published small" title="2011-06-08T09:00:26-0500">(June 8, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/philosophy-of-software-engineering/" rel="bookmark">What Philosophy of Science Can Say for Software Engineers</a>
          <abbr class="published small" title="2011-06-06T09:00:05-0500">(June 6, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/the-cryptography-of-bitcoin/" rel="bookmark">The Cryptography of Bitcoin</a>
          <abbr class="published small" title="2011-06-03T09:00:11-0500">(June 3, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/06/bitcoin-is-not-decentralized/" rel="bookmark">Bitcoin is not decentralized</a>
          <abbr class="published small" title="2011-06-01T07:00:52-0500">(June 1, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/neural-networks/" rel="bookmark">Chain Rule + Dynamic Programming <br>= Neural Networks</a>
          <abbr class="published small" title="2011-05-30T09:00:24-0500">(May 30, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/an-insufficiently-lazy-map/" rel="bookmark">An insufficiently lazy map</a>
          <abbr class="published small" title="2011-05-27T09:00:58-0500">(May 27, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/byron-cook-sla/" rel="bookmark">If it has lots of comments, it’s probably buggy</a>
          <abbr class="published small" title="2011-05-25T09:00:04-0500">(May 25, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/tail-recursion-makes-your-loops-cleaner/" rel="bookmark">Tail recursion makes your loops cleaner</a>
          <abbr class="published small" title="2011-05-23T09:00:04-0500">(May 23, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/computing-function-composition/" rel="bookmark">Computing function composition</a>
          <abbr class="published small" title="2011-05-20T09:00:50-0500">(May 20, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/anatomy-of-a-thunk-leak/" rel="bookmark">Anatomy of a thunk leak</a>
          <abbr class="published small" title="2011-05-18T08:29:19-0500">(May 18, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/space-leak-zoo/" rel="bookmark">Space leak zoo</a>
          <abbr class="published small" title="2011-05-16T09:00:28-0500">(May 16, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/reified-laziness/" rel="bookmark">Reified laziness</a>
          <abbr class="published small" title="2011-05-13T21:45:11-0500">(May 13, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/calling-all-space-leaks/" rel="bookmark">Calling all space leaks</a>
          <abbr class="published small" title="2011-05-11T16:00:15-0500">(May 11, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/bindings-and-cafs-on-the-haskell-heap/" rel="bookmark">Bindings and CAFs on the Haskell Heap</a>
          <abbr class="published small" title="2011-05-09T11:23:43-0500">(May 9, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/how-aristotle-got-it-wrongon-the-importance-of-conceptual-frameworks/" rel="bookmark">How Aristotle got it Wrong<br>On the importance of conceptual frameworks</a>
          <abbr class="published small" title="2011-05-06T09:00:35-0500">(May 6, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/unraveling-the-mystery-of-the-io-monad/" rel="bookmark">Unraveling the mystery of the IO monad</a>
          <abbr class="published small" title="2011-05-04T09:00:24-0500">(May 4, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/05/haskell-not-pure-enough/" rel="bookmark">Haskell: Not pure enough?</a>
          <abbr class="published small" title="2011-05-02T09:00:06-0500">(May 2, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/how-the-grinch-stole-the-haskell-heap/" rel="bookmark">How the Grinch stole the Haskell Heap</a>
          <abbr class="published small" title="2011-04-29T07:31:26-0500">(April 29, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/functions-produce-the-haskell-heap/" rel="bookmark">Functions produce the Haskell Heap</a>
          <abbr class="published small" title="2011-04-27T11:18:38-0500">(April 27, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/implementing-the-haskell-heap-in-python-v1/" rel="bookmark">Implementing the Haskell Heap in Python, v1</a>
          <abbr class="published small" title="2011-04-25T09:00:47-0500">(April 25, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/io-evaluates-the-haskell-heap/" rel="bookmark">IO evaluates the Haskell Heap</a>
          <abbr class="published small" title="2011-04-24T12:36:46-0500">(April 24, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/evaluation-on-the-haskell-heap/" rel="bookmark">Evaluation on the Haskell Heap</a>
          <abbr class="published small" title="2011-04-20T16:41:00-0500">(April 20, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/the-haskell-heap/" rel="bookmark">The Haskell Heap</a>
          <abbr class="published small" title="2011-04-18T09:00:46-0500">(April 18, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/mailbox-advice-for-a-sup-first-timer/" rel="bookmark">Mailbox: Advice for a sup first-timer</a>
          <abbr class="published small" title="2011-04-16T13:48:54-0500">(April 16, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/tracing-the-compilation-of-hello-factorial/" rel="bookmark">Tracing the compilation of Hello Factorial!</a>
          <abbr class="published small" title="2011-04-13T12:27:18-0500">(April 13, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/bugs-from-using-the-wrong-variable/" rel="bookmark">Bugs from using the wrong variable</a>
          <abbr class="published small" title="2011-04-11T09:00:44-0500">(April 11, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/hoopl-dataflow-analysis/" rel="bookmark">Hoopl: Dataflow analysis</a>
          <abbr class="published small" title="2011-04-08T21:07:34-0500">(April 8, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/type-kata-local-data-type/" rel="bookmark">Type Kata: Local data type</a>
          <abbr class="published small" title="2011-04-05T06:20:52-0500">(April 5, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/hoopl-dataflow-lattices/" rel="bookmark">Hoopl: Dataflow lattices</a>
          <abbr class="published small" title="2011-04-04T09:00:31-0500">(April 4, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/04/hoopl-guided-tour-base-system/" rel="bookmark">Hoopl guided tour: Base system</a>
          <abbr class="published small" title="2011-04-01T09:00:44-0500">(April 1, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/ghc-migrating-to-git/" rel="bookmark">GHC migrating to Git</a>
          <abbr class="published small" title="2011-03-30T09:00:46-0500">(March 30, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/html-purifier-4-3-0-released/" rel="bookmark">HTML Purifier 4.3.0 released</a>
          <abbr class="published small" title="2011-03-28T09:00:39-0500">(March 28, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/ely-cycles/" rel="bookmark">Ely Cycles</a>
          <abbr class="published small" title="2011-03-25T09:00:00-0500">(March 25, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/interleaving-stream-processor/" rel="bookmark">Interleaving stream processors</a>
          <abbr class="published small" title="2011-03-23T09:00:36-0500">(March 23, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/the-return-of-hellenistic-reasonin/" rel="bookmark">The return of Hellenistic reasoning</a>
          <abbr class="published small" title="2011-03-21T09:00:42-0500">(March 21, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/spring-reading-2011-edition/" rel="bookmark">Spring Reading: 2011 edition</a>
          <abbr class="published small" title="2011-03-18T18:29:11-0500">(March 18, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/on-expressivity/" rel="bookmark">On expressivity</a>
          <abbr class="published small" title="2011-03-16T09:00:12-0500">(March 16, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/someone-is-wrong-on-the-internet/" rel="bookmark">Someone is wrong on the Internet</a>
          <abbr class="published small" title="2011-03-14T09:00:01-0500">(March 14, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/many-valued-logics-and-bottom/" rel="bookmark">Many-valued logics and bottom</a>
          <abbr class="published small" title="2011-03-11T09:00:05-0500">(March 11, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/killer-mutants-attack-mutation-gone-wrong/" rel="bookmark">Killer mutants attack (mutation gone wrong)</a>
          <abbr class="published small" title="2011-03-09T09:00:46-0500">(March 9, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/type-tech-tree/" rel="bookmark">Type Technology Tree</a>
          <abbr class="published small" title="2011-03-07T09:00:26-0500">(March 7, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/petri-net-concurrency/" rel="bookmark">Petri net concurrency</a>
          <abbr class="published small" title="2011-03-04T09:00:50-0500">(March 4, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/03/the-creation-of-a-statically-typed-functional-programmer/" rel="bookmark">The creation of a statically-typed functional programmer</a>
          <abbr class="published small" title="2011-03-02T09:00:26-0500">(March 2, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/on-cargo-culting-and-hacking/" rel="bookmark">On cargo culting and hacking</a>
          <abbr class="published small" title="2011-02-28T09:00:46-0500">(February 28, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/multi-day-debugging/" rel="bookmark">Multi-day debugging</a>
          <abbr class="published small" title="2011-02-25T09:00:51-0500">(February 25, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/ad-hoc-approximations/" rel="bookmark">Ad hoc approximations</a>
          <abbr class="published small" title="2011-02-23T09:00:25-0500">(February 23, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/semi-automatic-testing/" rel="bookmark">Semi-automatic testing</a>
          <abbr class="published small" title="2011-02-21T09:00:14-0500">(February 21, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/two-short-tips-for-ffi-binding/" rel="bookmark">Two short tips for FFI bindings</a>
          <abbr class="published small" title="2011-02-20T20:57:03-0500">(February 20, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/on-checked-exceptions-and-proof-obligations/" rel="bookmark">On checked exceptions and proof obligations</a>
          <abbr class="published small" title="2011-02-18T09:00:05-0500">(February 18, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/picturing-hoopl-transferrewrite-functions/" rel="bookmark">Picturing Hoopl transfer/rewrite functions</a>
          <abbr class="published small" title="2011-02-16T09:00:44-0500">(February 16, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/picturing-binomial-coefficient-identities/" rel="bookmark">Picturing binomial coefficient identities</a>
          <abbr class="published small" title="2011-02-14T09:00:10-0500">(February 14, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/android-2-x-sensor-simulator/" rel="bookmark">Android 2.x Sensor Simulator</a>
          <abbr class="published small" title="2011-02-11T09:00:16-0500">(February 11, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/inden-php-vim/" rel="bookmark">A suggestion for indent/php.vim</a>
          <abbr class="published small" title="2011-02-09T09:00:17-0500">(February 9, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/lavnet-is-watching-you/" rel="bookmark">Lav’net is watching you</a>
          <abbr class="published small" title="2011-02-07T09:00:02-0500">(February 7, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/ocaml-gotchas/" rel="bookmark">OCaml gotchas</a>
          <abbr class="published small" title="2011-02-04T09:00:04-0500">(February 4, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2011/02/all-about-mvars/" rel="bookmark">All about MVars</a>
          <abbr class="published small" title="2011-02-02T09:00:37-0500">(February 2, 2011)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/a-year-of-blogging/" rel="bookmark">A year of blogging</a>
          <abbr class="published small" title="2010-12-31T09:00:04-0500">(December 31, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/greetings-from-switzerland/" rel="bookmark">Greetings from Switzerland</a>
          <abbr class="published small" title="2010-12-29T14:25:35-0500">(December 29, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/no-one-expects-the-scott-induction/" rel="bookmark">No one expects the Scott induction!</a>
          <abbr class="published small" title="2010-12-27T09:00:42-0500">(December 27, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/thriller/" rel="bookmark">Thriller: Doing it for the thrills</a>
          <abbr class="published small" title="2010-12-24T09:00:28-0500">(December 24, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/travel-advisory/" rel="bookmark">Travel advisory</a>
          <abbr class="published small" title="2010-12-21T04:36:05-0500">(December 21, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/generalization-and-vagueness-in-specifications/" rel="bookmark">Generalization and vagueness in specifications</a>
          <abbr class="published small" title="2010-12-20T09:00:35-0500">(December 20, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/tourist-by-day-blogger-by-night/" rel="bookmark">Tourist by day, Blogger by night</a>
          <abbr class="published small" title="2010-12-17T09:00:00-0500">(December 17, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/omega-i-m-lubbin-it/" rel="bookmark">ω: I’m lubbin’ it</a>
          <abbr class="published small" title="2010-12-15T09:00:14-0500">(December 15, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/getting-a-fix-on-fixpoints/" rel="bookmark">Getting a fix on fixpoints</a>
          <abbr class="published small" title="2010-12-13T09:00:20-0500">(December 13, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/errata-for-gin-and-monotonic/" rel="bookmark">Errata for gin and monotonic</a>
          <abbr class="published small" title="2010-12-10T09:00:25-0500">(December 10, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/gin-and-monotonic/" rel="bookmark">Gin and monotonic</a>
          <abbr class="published small" title="2010-12-08T09:00:02-0500">(December 8, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/hussling-haskell-types-into-hasse-diagrams/" rel="bookmark">Hussling Haskell types into Hasse diagrams</a>
          <abbr class="published small" title="2010-12-06T09:00:24-0500">(December 6, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/talk-friday/" rel="bookmark">Talk Friday</a>
          <abbr class="published small" title="2010-12-03T09:00:25-0500">(December 3, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/12/how-i-learned-to-stop-worrying-and-love-the-bottom/" rel="bookmark">How I Learned to Stop Worrying and Love the ⊥</a>
          <abbr class="published small" title="2010-12-01T09:00:09-0500">(December 1, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/my-first-proof-in-isabelle/" rel="bookmark">My first proof in Isabelle</a>
          <abbr class="published small" title="2010-11-29T09:00:28-0500">(November 29, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/reflexivity-qed/" rel="bookmark">Reflexivity. Qed.</a>
          <abbr class="published small" title="2010-11-26T09:00:24-0500">(November 26, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/integer-sequences-every-computer-scientist-should-know/" rel="bookmark">Integer sequences every computer scientist should know?</a>
          <abbr class="published small" title="2010-11-24T09:00:09-0500">(November 24, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/is-multiply-carry-strongly-universal/" rel="bookmark">Is multiply-carry strongly universal?</a>
          <abbr class="published small" title="2010-11-22T09:00:33-0500">(November 22, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/cambridge-potpourri/" rel="bookmark">Cambridge potpourri</a>
          <abbr class="published small" title="2010-11-19T09:00:39-0500">(November 19, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/haskell-org-committee/" rel="bookmark">Haskell.org committee</a>
          <abbr class="published small" title="2010-11-17T09:00:40-0500">(November 17, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/its-just-a-longjmp-to-the-left/" rel="bookmark">It’s just a longjmp to the left</a>
          <abbr class="published small" title="2010-11-15T09:00:56-0500">(November 15, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/another-ghc-hacking-post/" rel="bookmark">You are in a maze of twisty little passages, all alike… (a GHC hacking post)</a>
          <abbr class="published small" title="2010-11-12T09:00:00-0500">(November 12, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/mod_fcgid-is-broke/" rel="bookmark">mod_fcgid 2.3 is broken (fixed in 2.3.6)</a>
          <abbr class="published small" title="2010-11-10T09:00:48-0500">(November 10, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/medieval-medicine-and-computers/" rel="bookmark">Medieval medicine and computers</a>
          <abbr class="published small" title="2010-11-08T09:00:15-0500">(November 8, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/dp-zoo-tour/" rel="bookmark">DP Zoo Tour</a>
          <abbr class="published small" title="2010-11-05T09:00:46-0500">(November 5, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/dead-edward-day/" rel="bookmark">Dead Edward Day</a>
          <abbr class="published small" title="2010-11-03T09:00:02-0500">(November 3, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/11/dp-zoo/" rel="bookmark">DP Zoo</a>
          <abbr class="published small" title="2010-11-01T09:00:09-0500">(November 1, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/finer-distinctions/" rel="bookmark">Intelligence is the ability to make finer distinctions: Another Haskell Advocacy Post</a>
          <abbr class="published small" title="2010-10-29T09:00:13-0500">(October 29, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/blog-name-changed/" rel="bookmark">Blog name changed…</a>
          <abbr class="published small" title="2010-10-27T09:00:07-0500">(October 27, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/ocaml-for-haskellers/" rel="bookmark">OCaml for Haskellers</a>
          <abbr class="published small" title="2010-10-25T09:00:54-0500">(October 25, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/dry-is-context-dependen/" rel="bookmark">Don’t Repeat Yourself is context dependent</a>
          <abbr class="published small" title="2010-10-22T09:00:52-0500">(October 22, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/purpose-of-proof-sem-formal-methods/" rel="bookmark">Purpose of proof: semi-formal methods</a>
          <abbr class="published small" title="2010-10-20T09:00:42-0500">(October 20, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/rapid-prototyping-in-haskell/" rel="bookmark">Rapidly prototyping scripts in Haskell</a>
          <abbr class="published small" title="2010-10-18T09:00:08-0500">(October 18, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/existential-type-curry/" rel="bookmark">Existential type-curry</a>
          <abbr class="published small" title="2010-10-15T09:00:02-0500">(October 15, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/quote-day/" rel="bookmark">Quote Day</a>
          <abbr class="published small" title="2010-10-13T09:00:56-0500">(October 13, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/why-being-a-sysadmin-will-help-you-do-scienc/" rel="bookmark">Why being a sysadmin will help you do Science!</a>
          <abbr class="published small" title="2010-10-11T09:00:40-0500">(October 11, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/the-html-purification-manifesto/" rel="bookmark">The HTML purification manifesto</a>
          <abbr class="published small" title="2010-10-08T09:00:07-0500">(October 8, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/beyond-generalizatio/" rel="bookmark">Abstraction without a concrete concept</a>
          <abbr class="published small" title="2010-10-06T09:00:28-0500">(October 6, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/why-i-m-in-cambridge/" rel="bookmark">Why I am in Cambridge</a>
          <abbr class="published small" title="2010-10-04T09:00:10-0500">(October 4, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/10/tips-for-running-a-hackatho/" rel="bookmark">Tips for running a hackathon</a>
          <abbr class="published small" title="2010-10-01T09:00:54-0500">(October 1, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/how-to-get-answers-from-busy-maintainers/" rel="bookmark">How to get answers from busy maintainers</a>
          <abbr class="published small" title="2010-09-29T09:00:45-0500">(September 29, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/so-long-america/" rel="bookmark">So long America!</a>
          <abbr class="published small" title="2010-09-27T09:00:18-0500">(September 27, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/high-performance-monads/" rel="bookmark">High performance monads</a>
          <abbr class="published small" title="2010-09-24T09:00:51-0500">(September 24, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/data-is-code/" rel="bookmark">Data is Code</a>
          <abbr class="published small" title="2010-09-22T09:00:38-0500">(September 22, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/tension-of-patch-and-tree-version-control/" rel="bookmark">Tension of patch and tree version control</a>
          <abbr class="published small" title="2010-09-20T09:00:06-0500">(September 20, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/session-types-subtyping-and-dependent-types/" rel="bookmark">Session types, subtyping and dependent types</a>
          <abbr class="published small" title="2010-09-17T09:00:09-0500">(September 17, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/evolution-of-a-shared-web-host/" rel="bookmark">Evolution of a Shared Web Host</a>
          <abbr class="published small" title="2010-09-15T09:00:03-0500">(September 15, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/keyword-arguments-in-haskell/" rel="bookmark">Keyword arguments in Haskell</a>
          <abbr class="published small" title="2010-09-13T09:00:24-0500">(September 13, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/towards-platform-agnostic-interruptibility/" rel="bookmark">Towards platform-agnostic interruptibility</a>
          <abbr class="published small" title="2010-09-10T09:00:47-0500">(September 10, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/pthread-cancel-on-window/" rel="bookmark">pthread_cancel on Windows</a>
          <abbr class="published small" title="2010-09-08T09:00:27-0500">(September 8, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/embracing-window/" rel="bookmark">Embracing Windows</a>
          <abbr class="published small" title="2010-09-06T09:00:27-0500">(September 6, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/annotating-slides/" rel="bookmark">Annotating slides</a>
          <abbr class="published small" title="2010-09-03T09:00:53-0500">(September 3, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/09/my-type-signature-overfloweth/" rel="bookmark">My type signature overfloweth</a>
          <abbr class="published small" title="2010-09-01T09:00:35-0500">(September 1, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/defining-haskelly/" rel="bookmark">Defining “Haskelly”</a>
          <abbr class="published small" title="2010-08-30T09:00:05-0500">(August 30, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/interrupting-ghc/" rel="bookmark">Interrupting GHC</a>
          <abbr class="published small" title="2010-08-27T09:00:27-0500">(August 27, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/galois-tech-talk-abcbridge-functional-interfaces-for-aigs-and-sat-solving/" rel="bookmark">abcBridge: Functional interfaces for AIGs and SAT solving</a>
          <abbr class="published small" title="2010-08-25T09:00:48-0500">(August 25, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/type-kata-newtypes/" rel="bookmark">Type Kata: Distinguishing different data with the same underlying representation</a>
          <abbr class="published small" title="2010-08-23T09:00:36-0500">(August 23, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/day-in-the-life-of-a-galois-intern/" rel="bookmark">Day in the life of a Galois intern</a>
          <abbr class="published small" title="2010-08-20T09:00:11-0500">(August 20, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/type-kata-controlled-sharing-of-references/" rel="bookmark">Type kata: Controlled sharing of references</a>
          <abbr class="published small" title="2010-08-18T09:00:51-0500">(August 18, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/what-high-school-algebra-quizzes-and-np-complete-problems-have-in-common/" rel="bookmark">What high school Algebra quizzes and NP-complete problems have in common</a>
          <abbr class="published small" title="2010-08-16T09:00:03-0500">(August 16, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/generalizing-apis/" rel="bookmark">Generalizing APIs</a>
          <abbr class="published small" title="2010-08-13T09:00:54-0500">(August 13, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/the-radical-hackage-social-experiment/" rel="bookmark">A radical Hackage social experiment</a>
          <abbr class="published small" title="2010-08-11T09:00:26-0500">(August 11, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/paper-monday/" rel="bookmark">Paper Monday</a>
          <abbr class="published small" title="2010-08-09T09:00:03-0500">(August 9, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/the-gateway-drug-to-type-programming/" rel="bookmark">The Gateway Drug to Type Programming</a>
          <abbr class="published small" title="2010-08-06T09:00:14-0500">(August 6, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/tour-of-preach-distributed-erlang/" rel="bookmark">Tour of a distributed Erlang application</a>
          <abbr class="published small" title="2010-08-05T09:00:16-0500">(August 5, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/buffered-streams-and-iteratee/" rel="bookmark">Buffered streams and iteratees</a>
          <abbr class="published small" title="2010-08-04T09:00:42-0500">(August 4, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/08/strings-in-haskell/" rel="bookmark">How to pick your string library in Haskell</a>
          <abbr class="published small" title="2010-08-02T09:00:50-0500">(August 2, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/suggestion-box/" rel="bookmark">Suggestion box</a>
          <abbr class="published small" title="2010-07-30T09:00:46-0500">(July 30, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/delaying-implicit-parameter-binding/" rel="bookmark">Delaying implicit parameter binding</a>
          <abbr class="published small" title="2010-07-28T09:00:38-0500">(July 28, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/implicit-parameters-in-haskell/" rel="bookmark">Reader monad and implicit parameters</a>
          <abbr class="published small" title="2010-07-26T12:46:43-0500">(July 26, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/managing-foreign-pointers-effectively/" rel="bookmark">Managing foreign pointers effectively</a>
          <abbr class="published small" title="2010-07-23T09:00:43-0500">(July 23, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/pipelines-and-continuation/" rel="bookmark">Pipelines and continuations</a>
          <abbr class="published small" title="2010-07-21T09:00:19-0500">(July 21, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/system-posix-redirect/" rel="bookmark">System.Posix.Redirect</a>
          <abbr class="published small" title="2010-07-19T09:00:28-0500">(July 19, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/maximum-matching-deadlock-solution/" rel="bookmark">Maximum matching deadlock solution</a>
          <abbr class="published small" title="2010-07-16T09:00:13-0500">(July 16, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/flipping-arrows-in-coburger-king/" rel="bookmark">Flipping arrows in coBurger King</a>
          <abbr class="published small" title="2010-07-14T09:00:40-0500">(July 14, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/graphs-not-grids/" rel="bookmark">Graphs not grids: How caches are corrupting young algorithms designers and how to fix it</a>
          <abbr class="published small" title="2010-07-12T09:00:17-0500">(July 12, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/safety-first-ffi-and-threading/" rel="bookmark">Safety first: FFI and threading</a>
          <abbr class="published small" title="2010-07-09T09:00:05-0500">(July 9, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/groom-human-readable-show-for-haskell/" rel="bookmark">Groom: human readable Show for Haskell</a>
          <abbr class="published small" title="2010-07-07T09:00:34-0500">(July 7, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/littles-law/" rel="bookmark">Little’s law</a>
          <abbr class="published small" title="2010-07-05T09:00:47-0500">(July 5, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/07/mvc-and-purity/" rel="bookmark">MVC and Purity</a>
          <abbr class="published small" title="2010-07-02T09:00:21-0500">(July 2, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/call-and-fun-marshalling-redux/" rel="bookmark">Call and fun: marshalling redux</a>
          <abbr class="published small" title="2010-06-30T09:00:36-0500">(June 30, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/thinking-about-talk/" rel="bookmark">Thinking about talk</a>
          <abbr class="published small" title="2010-06-28T09:00:44-0500">(June 28, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/marshalling-with-get-and-set/" rel="bookmark">Marshalling with get and set</a>
          <abbr class="published small" title="2010-06-25T09:00:43-0500">(June 25, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/first-steps-in-c2hs/" rel="bookmark">First steps in c2hs</a>
          <abbr class="published small" title="2010-06-23T09:00:52-0500">(June 23, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/secret-of-autogenerated-docs/" rel="bookmark">The secret to successful autogenerated docs</a>
          <abbr class="published small" title="2010-06-21T09:00:26-0500">(June 21, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/principles-of-ffi-api-design/" rel="bookmark">Principles of FFI API design</a>
          <abbr class="published small" title="2010-06-18T09:00:26-0500">(June 18, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/well-founded-recursion-in-agda/" rel="bookmark">Well-founded recursion in Agda</a>
          <abbr class="published small" title="2010-06-16T09:00:35-0500">(June 16, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/setting-up-cabal-the-ffi-and-c2hs/" rel="bookmark">Setting up Cabal, the FFI and c2hs</a>
          <abbr class="published small" title="2010-06-14T09:00:18-0500">(June 14, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/the-haskell-preprocessor-hierarchy/" rel="bookmark">The Haskell Preprocessor Hierarchy</a>
          <abbr class="published small" title="2010-06-11T09:00:12-0500">(June 11, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/static-analysis-mozilla/" rel="bookmark">Static Analysis for everyday (not-PhD) man</a>
          <abbr class="published small" title="2010-06-09T09:00:48-0500">(June 9, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/ap-physics-stuck-in-the-concrete/" rel="bookmark">AP Physics: Stuck in the concrete</a>
          <abbr class="published small" title="2010-06-07T09:00:32-0500">(June 7, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/databases-are-categories/" rel="bookmark">Databases are categories</a>
          <abbr class="published small" title="2010-06-04T09:00:38-0500">(June 4, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/06/bug-boogie-git-and-symlinks/" rel="bookmark">Bug boogie: Git and symlinks</a>
          <abbr class="published small" title="2010-06-02T09:00:09-0500">(June 2, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/punt-the-prelude/" rel="bookmark">Punt the Prelude</a>
          <abbr class="published small" title="2010-05-31T09:00:03-0500">(May 31, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/use-the-monoid/" rel="bookmark">Use The Monoid: A worked example</a>
          <abbr class="published small" title="2010-05-28T09:00:14-0500">(May 28, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/bananas-lenses-envelopes-and-barbed-wire-a-translation-guide/" rel="bookmark">Bananas, Lenses, Envelopes and Barbed Wire <br>A Translation Guide</a>
          <abbr class="published small" title="2010-05-26T09:00:05-0500">(May 26, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/imprecise-exceptions-and-io/" rel="bookmark">Lazy exceptions and IO</a>
          <abbr class="published small" title="2010-05-24T09:00:41-0500">(May 24, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/upgrading-to-ubuntu-lucid/" rel="bookmark">Upgrading to Ubuntu Lucid</a>
          <abbr class="published small" title="2010-05-21T09:00:58-0500">(May 21, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/class-reflections/" rel="bookmark">Class Reflections</a>
          <abbr class="published small" title="2010-05-19T09:00:49-0500">(May 19, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/i-hate-patches-confessions-of-an-open-source-developer/" rel="bookmark">I Hate Patches: <br>Confessions of an Open-Source Developer</a>
          <abbr class="published small" title="2010-05-17T09:00:11-0500">(May 17, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/spring-2010-a-random-walk/" rel="bookmark">Spring 2010: A Random Walk</a>
          <abbr class="published small" title="2010-05-14T09:00:05-0500">(May 14, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/refactoring-haskell-code/" rel="bookmark">Refactoring Haskell code?</a>
          <abbr class="published small" title="2010-05-12T09:00:41-0500">(May 12, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/nd-vs-catamorphisms/" rel="bookmark">Nested Data Parallelism versus Creative Catamorphisms</a>
          <abbr class="published small" title="2010-05-10T09:00:49-0500">(May 10, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/omnipresent-cabal/" rel="bookmark">Omnipresent Cabal</a>
          <abbr class="published small" title="2010-05-07T09:00:34-0500">(May 7, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/name-conflicts-on-hackage/" rel="bookmark">Name conflicts on Hackage</a>
          <abbr class="published small" title="2010-05-05T09:00:12-0500">(May 5, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/05/design-patterns-in-haskel/" rel="bookmark">Design Patterns in Haskell</a>
          <abbr class="published small" title="2010-05-03T09:00:32-0500">(May 3, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/art-code-math-and-mit-scheme/" rel="bookmark">Art. Code. Math. (And mit-scheme)</a>
          <abbr class="published small" title="2010-04-30T09:00:49-0500">(April 30, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/inessential-guide-to-fclabels/" rel="bookmark">Inessential guide to fclabels</a>
          <abbr class="published small" title="2010-04-28T09:00:04-0500">(April 28, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/the-problem-with-xunit/" rel="bookmark">The Problem with xUnit</a>
          <abbr class="published small" title="2010-04-26T09:00:07-0500">(April 26, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/creative-catamorphisms/" rel="bookmark">Creative catamorphisms</a>
          <abbr class="published small" title="2010-04-23T09:00:57-0500">(April 23, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/association-maps-in-mit-scheme/" rel="bookmark">Association maps in mit-scheme</a>
          <abbr class="published small" title="2010-04-21T09:00:08-0500">(April 21, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/thoughts-on-discussion/" rel="bookmark">Thoughts on discussion</a>
          <abbr class="published small" title="2010-04-19T09:00:52-0500">(April 19, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/dudamel-visits-mit/" rel="bookmark">Dudamel visits MIT</a>
          <abbr class="published small" title="2010-04-16T09:00:54-0500">(April 16, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/inessential-guide-to-data-accessor/" rel="bookmark">Inessential Guide to data-accessor</a>
          <abbr class="published small" title="2010-04-14T09:00:23-0500">(April 14, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/later-impressions-of-the-vx-8r/" rel="bookmark">Later Impressions of the VX-8R</a>
          <abbr class="published small" title="2010-04-12T09:00:02-0500">(April 12, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/diagramming-in-xournal-and-gimp/" rel="bookmark">Diagramming in Xournal and Gimp</a>
          <abbr class="published small" title="2010-04-09T09:00:35-0500">(April 9, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/you-could-have-invented-zippers/" rel="bookmark">You could have invented zippers</a>
          <abbr class="published small" title="2010-04-07T09:00:54-0500">(April 7, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/cup-of-fp-java-twis/" rel="bookmark">Cup of FP with a Java twist</a>
          <abbr class="published small" title="2010-04-05T09:00:26-0500">(April 5, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/04/summer-internship-at-galois/" rel="bookmark">Summer internship at Galois</a>
          <abbr class="published small" title="2010-04-02T09:00:46-0500">(April 2, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/more-fun-with-futamura-projections/" rel="bookmark">More fun with Futamura projections</a>
          <abbr class="published small" title="2010-03-31T09:00:41-0500">(March 31, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/the-case-of-the-hash-array-mapped-trie/" rel="bookmark">The case of the Hash Array Mapped Trie</a>
          <abbr class="published small" title="2010-03-29T09:00:46-0500">(March 29, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/ad-hoc-wireless/" rel="bookmark">Ad hoc wireless</a>
          <abbr class="published small" title="2010-03-24T09:00:05-0500">(March 24, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/abstractions-in-mathematics/" rel="bookmark">Hunting for abstractions in mathematics</a>
          <abbr class="published small" title="2010-03-22T09:00:20-0500">(March 22, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/mutation-sleuthing-in-python/" rel="bookmark">Mutation sleuthing in Python</a>
          <abbr class="published small" title="2010-03-19T09:00:27-0500">(March 19, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/haskell-the-hard-sell/" rel="bookmark">Haskell, The Hard Sell</a>
          <abbr class="published small" title="2010-03-17T09:00:13-0500">(March 17, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/straitjacket-programming/" rel="bookmark">Straitjacket programming</a>
          <abbr class="published small" title="2010-03-15T09:00:41-0500">(March 15, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/five-tips-for-maintainable-shell-scripts/" rel="bookmark">Five tips for maintainable shell scripts</a>
          <abbr class="published small" title="2010-03-12T09:00:07-0500">(March 12, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/replacing-small-c-programs-with-haskell/" rel="bookmark">Replacing small C programs with Haskell</a>
          <abbr class="published small" title="2010-03-10T09:00:24-0500">(March 10, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/expert-considered-harmful/" rel="bookmark">Being an expert considered harmful</a>
          <abbr class="published small" title="2010-03-08T09:00:20-0500">(March 8, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/vim-textwidth/" rel="bookmark">How to use Vim’s textwidth like a pro</a>
          <abbr class="published small" title="2010-03-05T09:00:53-0500">(March 5, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/third-party-unattended-upgrade/" rel="bookmark">Third-party unattended upgrades in three steps</a>
          <abbr class="published small" title="2010-03-03T12:00:59-0500">(March 3, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/03/writing-generator-friendly-code/" rel="bookmark">Writing generator friendly code</a>
          <abbr class="published small" title="2010-03-01T12:00:34-0500">(March 1, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/history-as-documentation/" rel="bookmark">History as documentation</a>
          <abbr class="published small" title="2010-02-26T12:00:40-0500">(February 26, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/art-of-posing-a-problem/" rel="bookmark">The Art of Posing a Problem</a>
          <abbr class="published small" title="2010-02-24T12:00:01-0500">(February 24, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/comonads-and-convolutions/" rel="bookmark">Comonads and Convolutions</a>
          <abbr class="published small" title="2010-02-22T12:00:08-0500">(February 22, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/type-manipulation-tricks-of-the-trade/" rel="bookmark">Type manipulation: Tricks of the trade</a>
          <abbr class="published small" title="2010-02-19T12:00:56-0500">(February 19, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/why-mit-students-stay-up-late/" rel="bookmark">Why we stay up late</a>
          <abbr class="published small" title="2010-02-17T12:00:58-0500">(February 17, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/hunting-for-constraints/" rel="bookmark">Hunting for constraints</a>
          <abbr class="published small" title="2010-02-15T12:00:31-0500">(February 15, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/scheming-environment/" rel="bookmark">Scheming environments</a>
          <abbr class="published small" title="2010-02-12T12:00:59-0500">(February 12, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/sources-of-music/" rel="bookmark">Sources of music</a>
          <abbr class="published small" title="2010-02-10T12:00:18-0500">(February 10, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/nested-loops-and-exceptions-oleg-kiselyov/" rel="bookmark">Nested loops and exceptions (Oleg Kiselyov)</a>
          <abbr class="published small" title="2010-02-08T12:00:52-0500">(February 8, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/nested-loops-and-continuation/" rel="bookmark">Nested loops and continuations</a>
          <abbr class="published small" title="2010-02-05T12:00:43-0500">(February 5, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/classes-begin/" rel="bookmark">Classes begin</a>
          <abbr class="published small" title="2010-02-03T12:00:49-0500">(February 3, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/02/kernel-macro-tricks/" rel="bookmark">Cute macro tricks in the kernel</a>
          <abbr class="published small" title="2010-02-01T12:00:16-0500">(February 1, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/single-user-git-workflow/" rel="bookmark">Workflows in Git: Single-user style</a>
          <abbr class="published small" title="2010-01-29T12:00:41-0500">(January 29, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/arcadia-rising-posters/" rel="bookmark">Arcadia Rising posters</a>
          <abbr class="published small" title="2010-01-27T12:00:08-0500">(January 27, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/to-the-right-autocompletable-names/" rel="bookmark">To the right! Autocompletable names</a>
          <abbr class="published small" title="2010-01-25T12:00:00-0500">(January 25, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/hacking-git-rerere/" rel="bookmark">Hacking git-rerere</a>
          <abbr class="published small" title="2010-01-22T12:00:31-0500">(January 22, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/too-many-leftovers/" rel="bookmark">Too many leftovers!</a>
          <abbr class="published small" title="2010-01-20T12:00:02-0500">(January 20, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/advanced-git-merge/" rel="bookmark">Five advanced Git merge techniques</a>
          <abbr class="published small" title="2010-01-18T12:00:17-0500">(January 18, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/typeclasses-matter/" rel="bookmark">Typeclasses matter</a>
          <abbr class="published small" title="2010-01-15T12:00:46-0500">(January 15, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/sup/" rel="bookmark">Sup: Mail for Nerds</a>
          <abbr class="published small" title="2010-01-13T12:00:35-0500">(January 13, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/vx-8r-review/" rel="bookmark">First impressions of the VX-8R</a>
          <abbr class="published small" title="2010-01-11T23:01:42-0500">(January 11, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/why-haskell/" rel="bookmark">Why Haskell? The big question</a>
          <abbr class="published small" title="2010-01-08T12:00:03-0500">(January 8, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/rxvt-unicode-for-gnome-terminal-refugees/" rel="bookmark">rxvt-unicode for gnome-terminal refugees</a>
          <abbr class="published small" title="2010-01-06T12:00:24-0500">(January 6, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/audio-connectors/" rel="bookmark">Audio connectors and radios</a>
          <abbr class="published small" title="2010-01-04T12:00:50-0500">(January 4, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2010/01/adventures-in-three-monads/" rel="bookmark">Adventures in Three Monads</a>
          <abbr class="published small" title="2010-01-01T13:16:05-0500">(January 1, 2010)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2009/12/2010-roadmap/" rel="bookmark">2010: A Roadmap</a>
          <abbr class="published small" title="2009-12-31T00:12:36-0500">(December 31, 2009)</abbr>
        </li>
              <li>
          <a href="http://blog.ezyang.com/2009/12/iron-blogger/" rel="bookmark">Iron Blogger</a>
          <abbr class="published small" title="2009-12-28T14:20:54-0500">(December 28, 2009)</abbr>
        </li> */}
          </ul>

</div>


<div id="Vincent_Qin">
<h1>
<a href="https://vincentqin.tech/" className="site-title">Vincent_Qin &#39;s blog</a>
</h1>

        {/* <h1 className="vcard-names1 ">

                        <span className="p-name vcard-fullname d-block overflow-hidden" 
                        // itemprop="name"
                        >
                          Vincent_Qin &#39;s blog
                        </span>
                        <span className="p-nickname vcard-username d-block" 
                        //itemprop="additionalName"
                        >
                        

                        </span>
                        </h1> */}


<ul>
<li>🔭 I am currently working on SLAM.</li>
<li>🌱 I am currently learning SLAM and AI.</li>
<li>💬 Ask me about depth estimation/light filed/SLAM etc.</li>
<li>👯 I am looking to collaborate on repo <a target="_blank" rel="noopener" href="https://github.com/Vincentqyw/Recent-Stars-2020">Recent-Stars-2020</a></li>
<li>📫 How to reach me: vincentqin#hotmail.com (#-&gt;@)</li>
<li>⚡ Fun fact: I 🧡🐈</li>
</ul>

<article 
// itemscope="" itemtype="http://schema.org/Article"
>
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-11-05T21:01:43+08:00" content="2022-11-05"
        >
        11-05
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          
        </font></font> */}
        </time>
      </div>

      <div className="post-title">
          <a className="post-title-link" href="https://vincentqin.tech/posts/python-zip/" 
          // itemprop="url"
          
          >
            <span 
            // itemprop="name"
            >
              {/* <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> */}
                  📝Note: Python zip()
                  {/* </font></font> */}
                  </span>
          </a>
      </div>

     
      
    </header>
  </article>
  <article 
// itemscope="" itemtype="http://schema.org/Article"
>
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-11-05T21:01:43+08:00" content="2022-11-05"
        >
        2018-05-16
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          
        </font></font> */}
        </time>
      </div>

      <div className="post-title">
            <a className="post-title-link" href="https://vincentqin.tech/posts/light-field-depth-estimation/" 
            // itemprop="url"
            
            >
              <span 
              // itemprop="name"
              >
                {/* <font style="vertical-align: inherit;">
                  <font style="vertical-align: inherit;"> */}
                    Light Field Depth Estimation
                    {/* </font></font> */}
                    </span>
            </a>
        </div>

     
      
    </header>
  </article>

  <article 
  // itemscope="" itemtype="http://schema.org/Article"
  >
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-05-01T02:28:39+08:00" content="2022-05-01"
        >
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> */}
          01-05-2022
        {/* </font></font> */}
        </time>
      </div>

      <div className="post-title">
          <a className="post-title-link" href="https://vincentqin.tech/posts/instant-ngp/" //itemprop="url"
          >
            <span 
            // itemprop="name"
            >
              {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> */}
                📝Note: 5 seconds to train NeRF, NVIDIA Instant NeRF test
            {/* </font></font> */}
            </span>
          </a>
      </div>

      
    </header>
  </article>




  <article 
  // itemscope="" itemtype="http://schema.org/Article"
  >
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-05-01T02:28:39+08:00" content="2022-05-01"
        >
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> */}
          18-08-2019
        {/* </font></font> */}
        </time>
      </div>

      <div className="post-title">
          <a className="post-title-link" href="https://vincentqin.tech/posts/slam-common-issues-ICP/" //itemprop="url"
          >
            <span 
            // itemprop="name"
            >
              {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> */}
                📝Note: SLAM FAQ (IV): Solve ICP and use SVD decomposition to get the rotation matrix
            {/* </font></font> */}
            </span>
          </a>
      </div>

      
    </header>
  </article>

</div>


<div id="Andrew_Tulloch">
<h1>
<a href="https://tullo.ch/" className="site-title">Andrew Tulloch &#39;s New blog</a>
</h1>
<h1>
<a href="https://ajtulloch.github.io/" className="site-title">Andrew Tulloch &#39;s Old blog</a>
</h1>

        {/* <h1 className="vcard-names1 ">

                        <span className="p-name vcard-fullname d-block overflow-hidden" 
                        // itemprop="name"
                        >
                          Vincent_Qin &#39;s blog
                        </span>
                        <span className="p-nickname vcard-username d-block" 
                        //itemprop="additionalName"
                        >
                        

                        </span>
                        </h1> */}

<article 
// itemscope="" itemtype="http://schema.org/Article"
>
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-11-05T21:01:43+08:00" content="2022-11-05"
        >
      3-10-2021
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          
        </font></font> */}
        </time>
      </div>

      <div className="post-title">
          <a className="post-title-link" href="https://tullo.ch/articles/pytorch-gpu-inference-performance/" 
          // itemprop="url"
          
          >
            <span 
            // itemprop="name"
            >
              {/* <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> */}
                  Improving PyTorch inference performance on GPUs with a few simple tricks
                  {/* </font></font> */}
                  </span>
          </a>
      </div>

     
      
    </header>
  </article>

<article 
// itemscope="" itemtype="http://schema.org/Article"
>
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-11-05T21:01:43+08:00" content="2022-11-05"
        >
        13-05-2014
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          
        </font></font> */}
        </time>
      </div>

      <div className="post-title">
          <a className="post-title-link" href="https://tullo.ch/articles/lasso-estimator/" 
          // itemprop="url"
          
          >
            <span 
            // itemprop="name"
            >
              {/* <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> */}
                  The LASSO Estimator
                  {/* </font></font> */}
                  </span>
          </a>
      </div>

     
      
    </header>
  </article>
 
    

</div>

<div id="m-clark">
<h1>
<a href="https://m-clark.github.io/about.html" className="site-title">Michael Clarke &#39;s blog</a>
</h1>


        {/* <h1 className="vcard-names1 ">

                        <span className="p-name vcard-fullname d-block overflow-hidden" 
                        // itemprop="name"
                        >
                          Vincent_Qin &#39;s blog
                        </span>
                        <span className="p-nickname vcard-username d-block" 
                        //itemprop="additionalName"
                        >
                        

                        </span>
                        </h1> */}
<p>From t-tests to deep learning, I&#39;ve covered a lot of ground in modeling, visualizing, and understanding data. I can provide inference for models on millions of observations, classify biomedical images to determine pathology, and scrape the web to explore political sentiment. What &#39;s more, I can help others understand the results and take appropriate action regarding them.</p>
<article 
// itemscope="" itemtype="http://schema.org/Article"
>
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-11-05T21:01:43+08:00" content="2022-11-05"
        >
      10-10-2022
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          
        </font></font> */}
        </time>
      </div>

      <div className="post-title">
          <a className="post-title-link" href="https://m-clark.github.io/posts/2022-09-deep-linear-models/" 
          // itemprop="url"
          
          >
            <span 
            // itemprop="name"
            >
              {/* <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> */}
                  Deep Linear Models
                  {/* </font></font> */}
                  </span>
          </a>
      </div>

     
      
    </header>
  </article>

<article 
// itemscope="" itemtype="http://schema.org/Article"
>
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-11-05T21:01:43+08:00" content="2022-11-05"
        >
        13-11-2021
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          
        </font></font> */}
        </time>
      </div>

      <div className="post-title">
          <a className="post-title-link" href="https://m-clark.github.io/posts/2021-10-30-double-descent/" 
          // itemprop="url"
          
          >
            <span 
            // itemprop="name"
            >
              {/* <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> */}
                  Double Descent
                  {/* </font></font> */}
                  </span>
          </a>
      </div>

     
      
    </header>
  </article>
 
    

</div>

<div id="Hugo-Bowne-Anderson">

  <a href="https://hugobowne.github.io/#writing" className="vcard-names1">
    <h1>
      <span className="p-name vcard-fullname d-block overflow-hidden">
        Hugo-Bowne-Anderson
      </span>
      <span className="p-nickname vcard-username d-block">
        data scientist - educator - writer - podcaster
      </span>
    </h1>
  </a>




<div className="row">
    <div className="col-sm-4">
        <img 
            src="https://hugobowne.github.io/img/hba-fb-live.jpeg" 
            alt="HBA FB Live" 
            className="img-responsive img-rounded center-block"
        />
    </div>
    <div className="col-sm-8">
        <h3>other initiatives</h3>
        <p>
            I'm interested in exploring other ways to teach and discuss data science, machine learning, and AI. To this end, I piloted a series of 
            <u>Facebook Live coding sessions</u> at DataCamp, which saw up to 40K unique viewers. Two of my favourites are 
            <a 
                href="https://www.datacamp.com/community/tutorials/tidyverse-tutorial-r" 
                className="link-primary"
            >
                Getting Started with the Tidyverse
            </a> through the Titanic data set and 
            <a 
                href="https://www.datacamp.com/community/tutorials/web-scraping-python-nlp" 
                className="link-primary"
            >
                Web Scraping &amp; NLP in Python
            </a>,  in which I scrape novels from the web and plot word frequency distributions.
        </p>
        <p>
            I enjoy <u>writing tutorials</u>. You can find a bunch I've written on 
            <a 
                href="https://www.datacamp.com/community/tutorials" 
                className="link-primary"
            >
                DataCamp's community page
            </a> by searching for my name. Here are a few to get started with:
        </p>
        <p>
            <a 
                className="btn btn-primary" 
                href="https://www.datacamp.com/community/tutorials/pandas-split-apply-combine-groupby"
            >
                Groupby, split-apply-combine and pandas 
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
            <a 
                className="btn btn-primary" 
                href="https://www.datacamp.com/community/tutorials/pandas-multi-index"
            >
                Hierarchical indices, groupby and pandas 
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
            <a 
                className="btn btn-primary" 
                href="https://www.datacamp.com/community/tutorials/preprocessing-in-data-science-part-1-centering-scaling-and-knn"
            >
                Preprocessing in Data Science (Part 1)
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
            <a 
                className="btn btn-primary" 
                href="https://www.datacamp.com/community/tutorials/preprocessing-in-data-science-part-2-centering-scaling-and-logistic-regression"
            >
                Preprocessing in Data Science (Part 2)
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
            <a 
                className="btn btn-primary" 
                href="https://www.datacamp.com/community/tutorials/preprocessing-in-data-science-part-3-scaling-synthesized-data"
            >
                Preprocessing in Data Science (Part 3)
                <span className="glyphicon glyphicon-chevron-right"></span>
            </a>
        </p>
        <p>
            I'm constantly thinking about <u>how data science notebook technologies can be used to design productive educational environments</u>. You can check out Eric Ma's and my interactive Jupyter notebooks for our Bayesian data science workshops 
            <a 
                href="https://gke.mybinder.org/v2/gh/ericmjl/bayesian-stats-modelling-tutorial/master" 
                className="link-primary"
            >
                here on Binder
            </a> (more context in the GitHub repo 
            <a 
                href="https://github.com/ericmjl/bayesian-stats-modelling-tutorial" 
                className="link-primary"
                style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
            >
                here
            </a>). I also built a DataCamp project that leverages the capabilities of Jupyter notebooks to create a novel educational experience: it's called 
            <a 
                href="https://www.datacamp.com/projects/38" 
                className="link-primary"
            >
                "Word Frequency in Moby Dick"
            </a> and in it, you'll get to scrape the novel Moby Dick from the website Project Gutenberg (which contains a large corpus of books), extract words from it, and dive into analyzing the distribution of words using the Natural Language Toolkit (nltk).
        </p>
        <p>
            I've given a lot of <u>webinars for business leaders, managers, and learning and development leaders across several verticals</u>. Highlights include:
            <a 
                href="https://support.datacamp.com/hc/en-us/articles/360008278474-August-2018-Webinar-What-Managers-Need-To-Know-About-Machine-Learning" 
                className="link-primary"
            >
                What Managers Need To Know About Machine Learning
            </a>, 
            <a 
                href="https://support.datacamp.com/hc/en-us/articles/360006341254-June-2018-Webinar-Inside-the-Data-Science-Workflow" 
                className="link-primary"
            >
                Inside the Data Science Workflow
            </a> and 
            <a 
                href="https://support.datacamp.com/hc/en-us/articles/360013643274-Dec-2018-Webinar-Data-Literacy-in-the-21st-Century" 
                className="link-primary"
            >
                Data Literacy in the 21st Century
            </a>.
        </p>
    </div>
</div>



</div>

<div id="@sanjeevs_iitr">
<a href="https://sanjeevsharma.ai/" className="vcard-names1">
    <h1>
      <span className="p-name vcard-fullname d-block overflow-hidden">
        Sanjeev Sharma </span>
      <span className="p-nickname vcard-username d-block">
       I'm an Entreprenuer| Researcher
      </span>
    </h1>
    <h3>
    As the founder of Swaayatt Robots and Deep Eigen, I focus on developing cutting-edge algorithms for autonomous vehicles, enabling them to navigate highly complex and unpredictable environments.
    </h3>
  </a>


<div id="row">
<TwitterTweetEmbed tweetId="1827230702095495328"  />
  
</div>
    

</div>

<div id="@KanakaRajanPhD">
<a href="https://www.rajanlab.com/resources" className="vcard-names1">
    <h1>
      <span className="p-name vcard-fullname d-block overflow-hidden">
      Kanaka Rajan </span>
      <span className="p-nickname vcard-username d-block">
       I'm an Entreprenuer| Researcher
      </span>
    </h1>
    <h3>
   
    </h3>
  </a>
  <p>Both lectures are available on the COSYNE YouTube channel (see lecture title links) under a Creative Commons license. To request access to the lecture slides, please email: <a href="mailto:kanaka_rajan@hms.harvard.edu">kanaka_rajan@hms.harvard.edu</a> &amp; <a href="mailto:kanaka-admin@stellatecomms.com">kanaka-admin@stellatecomms.com</a></p>
  <p className="text-size-regular">If you &#39;d like to deepen your understanding of recurrent neural networks, I encourage you to <a href="https://drive.google.com/file/d/15xhRdgyyLB2YQNDvWybtAW0-Gazyg3v0/view" target="_blank"   className="link-primary"
                style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>complete a problem set</a> created in collaboration with the COSYNE Tutorial TAs. The problem set has detailed instructions and questions to work through. Problems 1 and 2 are intermediate and should be done after watching Lecture 1; Problem 3 is advanced and should be done after watching Lecture 2. Solutions are available in Julia, MATLAB, and Python.</p>
<div id="row">
<TwitterTweetEmbed tweetId="1846965942422507703"  />
   
</div>
    
</div>




        </div> {/* Closing for className="App-header_replica"*/}
        


<TwitterTweetEmbed tweetId="1855509794993692780"  />
      
    </div>
  );
}

export default App;
