import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heiner_Math_ML_Component from './Heiner_Math_ML_Component';
import vxnuaj_DeepLearningDay78_Page_Tweet_Embed from './vxnuaj_DeepLearningDay78_Page_Tweet_Embed'
// import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Timeline } from 'react-twitter-widgets';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import EmbedComponent from './EmbedComponent';
import ArticleListAlexNichole from './ArticleListAlexNichole';
import John_Parkhill_MathMLComponent_1 from './John_Parkhill_MathMLComponent_1';
import { Slerp_for_quaternions_in_TF } from './Slerp_for_quaternions_in_TF';
import { Slerp_for_quaternions_in_TF_copy } from './Slerp_for_quaternions_in_TF_copy';
import { Slerp_for_quaternions_in_TF_copy1 } from './Slerp_for_quaternions_in_TF_copy1';
import Alexandre_MutelBlogPosts from './Alexandre_Mutel';
import Bishal_Santra_BlogPosts from './Bishal_Santra';
import CharlieMarsh_PublicProjects from './CharlieMarsh_PublicProjects';
import CharlieMarshNotionArticle from './CharlieMarshNotionArticle';
import CharlieMarsh_PostsList from './CharlieMarsh_PostsList';
import KevinFransPostCard from './KevinFransPostCard';
import KevinFransPostCardWithSeparateCSS from './KevinFransPostCardWithSeparateCSS';
import {stathiskamperisLinkedInPost} from './stathiskamperisLinkedInPost';
import StathisKamperisLinks from './StathisKamperisLinks';
import SewonMinTwitterUserDescription from './SewonMinTwitterUserDescription';
import KristofferCarlsson from './KristofferCarlsson';
import KristofferCarlssonTilesOnly from './KristofferCarlssonTilesOnly';
import KristofferCarlssonTilesOnly1 from './KristofferCarlssonTilesOnly1';

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
      {/* <header className="App-header">
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
        </header> */}
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
<li>
                  <span className="post-date">October 22, 2018 </span>

                    <a className="post-link" href="#Caleb-Robinson-imagenet_validation">GitHub: How to reproduce ImageNet validation results</a>
                </li>


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
            <li>

<a className="post-title-link" href="#Andrew_Tulloch_Cambridge_Part_III" 
// itemprop="url"

>
  <span 
  // itemprop="name"
  >
    {/* <font style="vertical-align: inherit;">
      <font style="vertical-align: inherit;"> */}
       Cambridge Part III Mathematics Notes
        {/* </font></font> */}
        </span>
</a>
<abbr className="published small" title="2019-05-16T22:11:22-0500">( 27/10/2014)</abbr>
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
                  <li>
                    <span className="post-date">2020, Apr 14 </span>

                      <a className="post-link" href="#bayesian-stats-modelling-tutorial">GitHUb Repository: How to do Bayesian statistical modelling using numpy and PyMC3.</a>
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
          <a href="#@gdb" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Greg Brockman </span>
            <span className="p-nickname vcard-username d-block">
            President & Co-Founder @OpenAI
            </span>
          </h1>
        </a>

        <li>
                    <span className="post-date">2019, Jul 30 </span>

                      <a className="post-link" href="https://blog.gregbrockman.com/how-i-became-a-machine-learning-practitioner">How I became a machine learning practitioner</a>
                  </li>
                  <li>
                    <span className="post-date">2025, Jan 01 </span>

                      <a className="post-link" href="https://x.com/goyal__pramod/status/1874379586714341803">If you are starting ML in 2025, read this blog by 
@gdb. I believe it will help you out.</a> Link: TwitterID: goyal__pramod
                  </li>
                  

        </li>
        <li>
            <a href="#@GrantSlatton" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Grant Slatton </span>
              <span className="p-nickname vcard-username d-block">
              
              </span>
            </h1>
            <h3>Formerly built the world's fastest filesystem at AWS, now the fastest spreadsheet at http://rowzero.com</h3>
          </a>

          <p><a href="https://grantslatton.com/binary-iq" className="grantslatton-a">Binary IQ</a> — A model of LLM capability</p>

<p><a href="https://grantslatton.com/rowzero-property-testing" className="grantslatton-a">Lightweight property-based testing at Row Zero</a> — How we verify correctness</p>

<p><a href="https://grantslatton.com/rust-macros" className="grantslatton-a">Rust Macros: Zero to Hero</a> — A comprehensive guide on Rust macros</p>
<p><a href="https://grantslatton.com/software-pathfinding" className="grantslatton-a">Algorithms we develop software by</a> — Pathfinding applied to the software solution domain</p>
<p><a href="https://grantslatton.com/filesystems" className="grantslatton-a">Building Filesystems</a> — High level ideas in filesystem design</p>
<p><a href="https://grantslatton.com/quasirandom" className="grantslatton-a">Quasirandom sequences</a> — Cool method to generate non-clumping random points</p>



        </li>
        <li>
        <a href="#@KanakaRajanPhD" className="vcard-names1" style={{ textDecoration: 'underline' }}>
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


        <li>

<a href="#SewonMin" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Sewon Min </span>
            <span className="p-nickname vcard-username d-block">
            Incoming faculty @Berkeley_EECS @berkeley_ai ||  Research scientist at @allen_ai  ||  PhD from @uwcse @uwnlp.
            </span>
          </h1>
        </a>
</li>

        <li>

        <a href="#@j0hnparkhill" className="vcard-names1" style={{ textDecoration: 'underline' }}>
  <h1>
    <span className="p-name vcard-fullname d-block overflow-hidden">
    John Parkhill </span>
    <span className="p-nickname vcard-username d-block">
    ML, director of machine learning Terray Therapeutics (https://x.com/Terray_Tx).
    </span>
  </h1>
</a>
          
      {/* <ul className="post-list"> */}
  {/* <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Nov 19, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/CoinHedge/">
        Coin Vol-II Hedging your BTC/ETH - The basics
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Nov 13, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/memecoin/">
        Coin Volatility Surfaces
      </a>
    </h3>
  </li> */}
  {/* <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Sep 5, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/cryptocarrytrade/">
        The Crypto-Carry Trade
      </a>
    </h3>
  </li> */}
  {/* <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Aug 5, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/quantumstorytelling/">
        Woo, Quantum Storytelling, Time Crystals and Misallocation
      </a>
    </h3>
  </li> */}
  <li style={{ marginBottom: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="post-meta" style={{ marginRight: '10px' }}>May 30, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/torchSDE/">
        Pricing Options with TorchSDE
      </a>
    </h3>
  </div>
</li>

  {/* <li style={{ marginBottom: '8px' }}>
    <span className="post-meta" style={{ marginRight: '10px' }}>May 30, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/torchSDE/">
        Pricing Options with TorchSDE
      </a>
    </h3>
  </li> */}
  <li style={{ marginBottom: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="post-meta">Apr 30, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/SolvingDiffusions/">
        Solving multidimensional PDEs in pytorch
      </a>
    </h3>
    </div>
  </li>
  <li style={{ marginBottom: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="post-meta">Apr 7, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/HoldingVIX/">
        Using simple mean-reversion to remove carry from a VIX futures position
      </a>
    </h3>
    </div>
  </li>
  {/* <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Mar 11, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/QuittingAAPL/">
        Moving on from the Macbook Pro
      </a>
    </h3>
  </li> */}
  <li style={{ marginBottom: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="post-meta">Mar 6, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/InformationInStochasticSeries/">
        Simply Extracting information out of your Stochastic Series
      </a>
    </h3>
    </div>
  </li>
  <li style={{ marginBottom: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
  <span className="post-meta">Jan 6, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/MultivariateGumbel/">
        Copulas made simple with Pytorch Distributions
      </a>
    </h3>
  </div>

  </li>
  <li style={{ marginBottom: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="post-meta">Dec 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/HowToBet/">
        How to Size Bets. The Kelly Criterion in PyTorch
      </a>
    </h3>
    </div>
  </li>
  {/* <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Nov 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/TheMostUseful3DP/">
        The #1 Reason to have a 3D Printer.
      </a>
    </h3>
  </li> */}
  {/* <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Oct 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/MakeScienceGreatAgain/">
        Modest Proposals to Make Science Great Again.
      </a>
    </h3>
  </li> */}
  <li style={{ marginBottom: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="post-meta">Sep 21, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/SomeArt/">
        Some Robot Art
      </a>
    </h3>
    </div>
  </li>
  <li style={{ marginBottom: '8px' }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="post-meta">Sep 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/QuaternionAveraging/">
        Quaternion Averaging in Pytorch
      </a>
    </h3>
    </div>
  </li>
  {/* <li style={{ marginBottom: '8px' }}> 
    <span className="post-meta">Aug 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/welcome-to-jekyll/">
        Yet another static blog!
      </a>
    </h3>
  </li> */}
{/* </ul> */}



              {/* <li>
                    <span className="post-date">2024, Oct 17 </span>

                      <a className="post-link" href="https://www.rajanlab.com/resources">research. Resources.</a>
                  </li> */}
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
        <a href="#@tarantulae" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Christian S. Perone </span>
            <span className="p-nickname vcard-username d-block">
            / Machine Learning  (@polymtl/@UMontreal)
            </span>
          </h1>
        </a>
          
        <ul className="christianperone-list">
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/11/the-geometry-of-data-part-ii/">The geometry of data: the missing metric tensor and the Stein score [Part II]</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/08/torch-titan-distributed-training/">Torch Titan distributed training code analysis</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/08/mmap-torch-np-jax-tf/">Memory-mapped CPU tensor between Torch, Numpy, Jax and TensorFlow</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/06/schematism/">Generalisation, Kant’s schematism and Borges’ Funes el memorioso – Part I</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2023/12/pytorch-2-internals-talk/">PyTorch 2 Internals – Talk</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2023/09/thoughts-on-riemannian-metrics-and-its-connection-with-diffusion-score-matching-part-i/">Thoughts on Riemannian metrics and its connection with diffusion/score matching [Part I]</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2023/06/appreciating-llms-data-pipelines/">Large language model data pipelines and Common Crawl (WARC/WAT/WET)</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2023/03/feste-composing-nlp-tasks-with-automatic-parallelization-and-batching/">Feste: composing NLP tasks with automatic parallelization and batching</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2022/11/couple-of-recent-publications-in-uncertainty-estimation-and-autonomous-vehicles/">Couple of recent publications in uncertainty estimation and autonomous vehicles</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/05/dados-das-enchentes-no-rio-grande-do-sul-rs-em-2024/">[pt-br] Dados das enchentes no Rio Grande do Sul (RS) em 2024</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2022/09/tutorial-on-using-llvm-to-jit-pytorch-fx-graphs-to-native-code-x86-arm-risc-v-wasm-part-i-scalars/">Tutorial on using LLVM to JIT PyTorch fx graphs to native code (x86/arm/risc-v/w...)</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2022/01/arduino-wan-helium-network-and-cryptography/">Arduino WAN, Helium network and cryptographic co-processor</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2021/03/episuite-epidemiology-in-python/">Episuite: epidemiology in Python</a>
    </li>
</ul>

</li>
<li>
<a href="#@jfrankle.com" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Jonathan Frankle </span>
              <span className="p-nickname vcard-username d-block">
              
              </span>
            </h1>
            <h3>Chief AI Scientist at Databricks. Founding team at MosaicML. MIT/Princeton alum. Lottery ticket enthusiast. Working on data intelligence.</h3>
          </a>
          <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Nov 26, 2024</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://ofir.io/How-to-Build-Good-Language-Modeling-Benchmarks/">
      Reposted by Jonathan Frankle: Ofir Press‬ ‪@ofirpress.bsky.social· 
        I wrote some thoughts on how to build good LM benchmarks: ofir.io/How-to-Build...
      </a>
    </h3>
  </li>
</li>





<li>

<h1 style={{ 
  // fontSize: '32px',
   marginTop: '0.5em', marginBottom: '0'
  , textDecoration: 'underline' 
   }}>
      <a href="#@Charlie_Marsh" className="implicit">
        Charlie Marsh
      </a>
    </h1>

  
    <h3 style={{ fontWeight: 'normal', marginTop: '0.5em', marginBottom: '0', lineHeight: '1.4' }}>
  Building{' '}
  <b style={{ margin: '0' }}>
    <a target="_blank" rel="noopener noreferrer" href="https://astral.sh" style={{ margin: '0' }}>
      Astral
    </a>
  </b>
  : high-performance tools for Python, starting with{' '}
  <b style={{ margin: '0' }}>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/charliermarsh/ruff" style={{ margin: '0' }}>
      Ruff
    </a>
  </b>
  .
  <br />
  <br />
  In the past: Staff software engineer at{' '}
  <b style={{ margin: '0' }}>
    <a target="_blank" rel="noopener noreferrer" href="https://www.springdiscovery.com" style={{ margin: '0' }}>
      Spring Discovery
    </a>
  </b>
  , senior engineer at{' '}
  <b style={{ margin: '0' }}>
    <a target="_blank" rel="noopener noreferrer" href="https://www.khanacademy.org" style={{ margin: '0' }}>
      Khan Academy
    </a>
  </b>
  , and Computer Science major at <b style={{ margin: '0' }}>Princeton</b>.
  <br />
  <br />
  These days, I write on{' '}
  <a target="_blank" rel="noopener noreferrer" href="https://notes.crmarsh.com/" style={{ margin: '0' }}>
    Notion
  </a>
  .
  <br />
  <br />
  Check out some of my public projects:
</h3>

    <CharlieMarshNotionArticle />

</li>
<li>
{/* <h1 style={{fontSize: '3em',
    marginTop: '-0.5em'}} href="#@kevin_frans">kevin frans website v5</h1> */}
<a href="#@kevin_frans" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              kevin frans website v5</span>
              <span className="p-nickname vcard-username d-block">
              
              </span>
            </h1>
          </a>

<p className="desc">
            {/* <!-- Hi, I'm Kevin! I'm a second-year undergrad at MIT. In the past, I was a research intern at OpenAI on the reinforcement learning team, and I was at Autodesk Research working on AI to automate design. In my free time, I play a lot of weird games and build some of my own. --> */}
            Hey, I'm Kevin. I am a PhD student at <a href="https://bair.berkeley.edu/">BAIR</a> 
            advised by <a href="https://people.eecs.berkeley.edu/~pabbeel/">Pieter Abbeel</a> and 
            <a href="https://people.eecs.berkeley.edu/~svlevine/">Sergey Levine</a>. 
            I did my B.S. and M.Eng at MIT with <a href="http://web.mit.edu/phillipi/">Phillip Isola</a>. 
            I&nbsp;am&nbsp;interested in deep reinforcement learning, unsupervised learning, and AI-based creative tools. 
            I&nbsp;also lead engineering at <a href="https://paragraphai.com/">ParagraphAI</a>. I&nbsp;have spent time at 
            <a href="https://crosslabs.org">Cross Labs</a>, <a href="https://twitter.com/sizigistudios">Sizigi</a>, 
            <a href="https://www.autodeskresearch.com/">Autodesk Research</a>, and <a href="https://openai.com/">OpenAI</a>. 
            In&nbsp;my&nbsp;free&nbsp;time, I&nbsp;like to design and build&nbsp;<a href="https://store.steampowered.com/app/810780/RAIN_Project__a_touhou_fangame/">video</a>
            &nbsp;<a href="https://store.steampowered.com/app/1256660/Iwate_Mountain_Dance/">games</a>.</p>

<KevinFransPostCardWithSeparateCSS />
</li>


<li>

<a href="#@Alexandre_Mutel" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              @Alexandre_Mutel </span>
              {/* <span className="p-nickname vcard-username d-block"></span> */}
            </h1>
            <h3><div>Director C#/.NET Tech Group at Unity, OSS, lang/compilers, GPU/sound, architecture 🏎️
Microsoft MVP, ex-demoscene PC/Amiga 🎆
Veggie 🌿, opinions are my own.</div></h3>
          </a>

<Alexandre_MutelBlogPosts />
{/* 
          <h2 className="year" id="2018">
      2023
      <a
        className="anchorjs-link"
        aria-label="Anchor"
        data-anchorjs-icon=""
        href="#2018"
        style={{
          font: '1em / 1 anchorjs-icons',
          marginLeft: '0.1875em',
          paddingRight: '0.1875em',
          paddingLeft: '0.1875em',
        }}
      ></a>
    </h2>
<li 
// className="prefix-Alexandre-Mutel"
>
  <a href="https://xoofx.github.io/blog/2023/07/09/10x-performance-with-simd-in-csharp-dotnet">10x Performance with SIMD Vectorized Code in C#/.NET</a>
  <span className="blog-post-meta">
    - <span className="date"><time 
    // datetime="2023-07-09" itemprop="datePublished"
    >Jul 9</time></span>
    <i className="bi bi-tags"></i><a href="/blog/tag/csharp/" className="prefix-Alexandre-Mutel">C#</a>, <a href="/blog/tag/net/" className="prefix-Alexandre-Mutel">.NET</a>, <a href="/blog/tag/x86/" className="prefix-Alexandre-Mutel">x86</a>, <a href="/blog/tag/assembler/" className="prefix-Alexandre-Mutel">assembler</a>
  </span>
  <span className="subtitle">Use your CPU at its full width!</span>
</li>



<h2 className="year" id="2018">
      2018
      <a
        className="anchorjs-link"
        aria-label="Anchor"
        data-anchorjs-icon=""
        href="#2018"
        style={{
          font: '1em / 1 anchorjs-icons',
          marginLeft: '0.1875em',
          paddingRight: '0.1875em',
          paddingLeft: '0.1875em',
        }}
      ></a>
    </h2>
      <ul>
        <li>
          <a href="https://xoofx.github.io/blog/2018/12/26/generate-async-from-sync-code-with-roslyn">Generate automatically async/await code from sync code with Roslyn</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2018-12-26" itemprop="datePublished"
             >Dec 26</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>, <a href="/blog/tag/roslyn/">Roslyn</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/04/12/writing-managed-jit-in-csharp-with-coreclr">Writing a Managed JIT in C# with CoreCLR</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
           // datetime="2018-04-12" itemprop="datePublished"
            >Apr 12</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>, <a href="/blog/tag/coreclr/">CoreCLR</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/04/06/porting-unity-to-coreclr">Porting the Unity Engine to .NET CoreCLR</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2018-04-06" itemprop="datePublished"
            >Apr  6</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>, <a href="/blog/tag/coreclr/">CoreCLR</a>, <a href="/blog/tag/unity/">Unity</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/03/09/productivity-with-resharper">Productivity with ReSharper</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2018-03-09" itemprop="datePublished"
            >Mar  9</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/visual-studio/">Visual Studio</a>, <a href="/blog/tag/visual-studio-2015/">Visual Studio 2015</a>, <a href="/blog/tag/roslyn/">Roslyn</a>
          </span>
        </li>

      </ul> */}

</li>
<li>

<a href="#Bishal_Santra" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              @Bishal Santra </span>
              {/* <span className="p-nickname vcard-username d-block"></span> */}
            </h1>
            <h3> <div>Research Engineer <a className="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/microsoft/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/microsoft">@microsoft</a> Research India | 
            Working on Language Modeling for Retrieval | IIT KGP</div></h3>
          </a>

          <Bishal_Santra_BlogPosts />
</li>
<li>

<a href="#KristofferCarlsson" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Kristoffer Carlsson </span>
              {/* <span className="p-nickname vcard-username d-block"></span> */}
            </h1>
            <h3>    <div>Software engineer, Julia Computing</div></h3>
          </a>
            <KristofferCarlssonTilesOnly1 />
          {/* <KristofferCarlssonTilesOnly /> */}
          {/* <KristofferCarlsson /> */}

</li>
<li>

<a href="#StathisKamperis" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Stathis Kamperis </span>
              {/* <span className="p-nickname vcard-username d-block"></span> */}
            </h1>
            <h3>    <div>I am a radiation oncologist and physicist. I like to build bridges between different scientific disciplines (medicine, physics, informatics).</div></h3>
          </a>


</li>
<li>

<a href="#@unixpickle" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Alex Nichol </span>
              <span className="p-nickname vcard-username d-block">
              
              </span>
            </h1>
            <h3>AI researcher, hobby web developer, math geek. Constantly learning.</h3>
          </a>
<ul className="article-list">
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2024/11/29/honeycrisp-a-deep-learning-framework/">
              Honeycrisp: An Apple-First Deep Learning Framework
              <label className="article-date">(11/29/2024)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2024/01/01/vpn-tunneling-to-share-streaming-services/">
              Sharing Streaming Services Across Households
              <label className="article-date">(01/01/2024)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2023/05/20/representing-3d-models-as-decision-trees/">
              Representing 3D Models as Decision Trees
              <label className="article-date">(05/20/2023)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2022/12/31/large-scale-vehicle-classification/">
              Large-Scale Vehicle Classification
              <label className="article-date">(12/31/2022)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="/2021/04/12/data-and-machines/">
              Data and Machines
              <label className="article-date">(04/12/2021)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2020/03/04/vq-draw-a-new-generative-model/">
              VQ-DRAW: A New Generative Model
              <label className="article-date">(03/04/2020)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2020/01/18/research-didnt-pan-out/">
              Research Projects That Didn’t Pan Out
              <label className="article-date">(01/18/2020)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2019/07/24/competing-in-the-obstacle-tower-challenge/">
              Competing in the Obstacle Tower Challenge
              <label className="article-date">(07/24/2019)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2019/04/03/prierarchy-implicit-hierarchies/">
              Prierarchy: Implicit Hierarchies
              <label className="article-date">(04/03/2019)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2018/12/24/solving-murder-with-go/">
              Solving murder with Go
              <label className="article-date">(12/24/2018)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/12/23/what-i-dont-know/">
              What I Don’t Know
              <label className="article-date">(12/23/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/10/31/adversarial-traintest-splits/">
              Adversarial Train/Test Splits
              <label className="article-date">(10/31/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/08/30/decision-trees-as-rl-policies/">
              Decision Trees as RL Policies
              <label className="article-date">(08/30/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/07/04/keeping-tabs-on-all-my-neural-networks/">
              Keeping Tabs On All My Neural Networks
              <label className="article-date">(07/04/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/06/11/why-im-remaking-openai-universe/">
              Why I’m Remaking OpenAI Universe
              <label className="article-date">(06/11/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/04/15/the-meta-learning-quest-part-1/">
              The Meta-Learning Quest: Part 1
              <label className="article-date">(04/15/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/04/05/slice-aliasing/">
              Slice Aliasing Is Nicer Than You Realize
              <label className="article-date">(04/05/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/03/08/the-bug-that-wasted-a-month-of-gpu-time/">
              The Bug That Wasted a Month of GPU Time
              <label className="article-date">(03/08/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/03/01/random-fun-with-linear-svms/">
              Random Fun with Linear SVMs
              <label className="article-date">(03/01/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/02/14/can-neural-networks-learn-to-spell/">
              Can Neural Networks Learn to Spell?
              <label className="article-date">(02/14/2017)</label>
            </a>
          </li>
          <li style={{ marginBottom: '0' }}>
            <a href="https://blog.aqnichol.com/2017/02/12/ancient-philosophy-as-a-classification-problem/">
              Ancient Philosophy as a Classification Problem
              <label className="article-date">(02/12/2017)</label>
            </a>
          </li>
        </ul>

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



<div id="Caleb-Robinson-imagenet_validation">

</div>
<div className="a row pr-2" style={{ padding: '.75em 1em' }}>
    <div className="col-sm-12">
        <div className="col-sm-12 col-lg-4 mt-6">
            <div className="rob-conery-card card shadow h-100" style={{ border: '2px solid black', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' 
             // Add shadow here 
             }}>
                <div className="Box d-flex p-3 width-full public source">
                    <div className="pinned-item-list-item-content">
                        <div className="d-flex width-full position-relative">
                            <div className="flex-1">
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    className="octicon octicon-repo mr-1 color-fg-muted"
                                >
                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                </svg>
                                <span data-view-component="true" className="position-relative">
                                    <a
                                        href="https://github.com/calebrob6/imagenet_validation"
                                        className="Link mr-1 text-bold wb-break-word"
                                        aria-labelledby="tooltip-6baf9a22-427b-4407-9260-e2fbc25d7c37"
                                        style={{ textDecoration: 'underline' }} // Example of underlined link
                                    >
                                        <span className="repo">imagenet_validation </span>
                                    </a>
                                    <span></span>
                                    <span className="Label Label--attention v-align-middle mt-1 no-wrap v-align-baseline Label--inline">
                                        Public 
                                    </span>
                                </span>

                                <p className="pinned-item-desc color-fg-muted text-small mt-2 mb-0">
                                How to reproduce ImageNet validation results
                                </p>

                                <p className="mb-0 mt-2 f6 color-fg-muted">
                                    <a href="https://github.com/calebrob6/imagenet_validation" className="pinned-item-meta Link--muted">
                                        <svg
                                            aria-label="stars"
                                            role="img"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            className="octicon octicon-star"
                                        >
                                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                        </svg>
                                        34
                                    </a>
                                    <a href="https://github.com/robconery/pg_docs_api/forks" className="pinned-item-meta Link--muted">
                                        <svg
                                            aria-label="forks"
                                            role="img"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            className="octicon octicon-repo-forked"
                                        >
                                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                                        </svg>
                                        9
                                    </a>
                                </p>

                                <p dir="auto">Jupyter Notebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<p dir="auto">This code in this repository can be used to reproduce the <a href="https://keras.io/applications/index.html#documentation-for-individual-models" rel="nofollow">ImageNet validation results for Keras pretrained models</a>. A blog post describing this process in more detail is <a href="http://calebrob.com/ml/imagenet/ilsvrc2012/2018/10/22/imagenet-benchmarking.html" rel="nofollow">here</a>.</p>
<h3>Code</h3>
<ul>
  <li>
    <a href="https://github.com/calebrob6/imagenet_validation/blob/master/1.%20Preprocess%20ImageNet%20validation%20set.ipynb">1. Preprocess ImageNet validation set</a> - converts the raw ILSVRC2012 validation images/labels into NumPy arrays (<code className="language-plaintext highlighter-rouge">.npy</code> files) that can be used “as is” with pre-trained Keras models</li>
    <li><a href="https://github.com/calebrob6/imagenet_validation/blob/master/2.%20Benchmark%20Keras%20pretrained%20models%20on%20ImageNet.ipynb">2. Benchmark Keras pretrained models on ImageNet.ipynb</a> - uses the preprocessed data and the VGG19 pre-trained network to reproduce the Top-1 and Top-5 accuracy reported in the Keras documentation.
</li>
</ul>


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
 
  <article 
// itemscope="" itemtype="http://schema.org/Article"
>
    <header className="post-header">
      <div className="post-meta-container">
        <time 
        // itemprop="dateCreated" datetime="2022-11-05T21:01:43+08:00" content="2022-11-05"
        >
        27-10-2014
          {/* <font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          
        </font></font> */}
        </time>
      </div>

      <div className="post-title">
          <a className="post-title-link" href="https://tullo.ch/articles/cambridge-mathematics-notes/" 
          // itemprop="url"
          
          >
            <span 
            // itemprop="name"
            >
              {/* <font style="vertical-align: inherit;">
                <font style="vertical-align: inherit;"> */}
                  Cambridge Part III Mathematics Notes
                  {/* </font></font> */}
                  </span>
          </a>
      </div>

     
      
    </header>
  </article> 

  <div id="Andrew_Tulloch_Cambridge_Part_III">
      <div className="the-content">
        <section className="intro-content">
            <p>I've cleaned up (somewhat) my notes from Cambridge Part III and have put them online - with LaTeX sources available on 
            <a href="https://github.com/ajtulloch/CambridgeMathematicsPartIII">GitHub</a> and PDFs linked below.</p>

            <h3 id="advanced-financial-models" className="Andrew-Tulloch-H3">Advanced Financial Models</h3>
            <ul>
                <li><a href="/static/cambridge/AdvancedFinancialModels-LectureNotes.pdf">Lecture Notes</a></li>
                <li><a href="/static/cambridge/AdvancedFinancialModels-Summary.pdf">Summary</a></li>
            </ul>

            <h3 id="advanced-probability" className="Andrew-Tulloch-H3">Advanced Probability</h3>
            <ul>
                <li><a href="/static/cambridge/AdvancedProbability-LectureNotes.pdf">Lecture Notes</a></li>
            </ul>

            <h3 id="applied-bayesian-statistics" className="Andrew-Tulloch-H3">Applied Bayesian Statistics</h3>
            <ul>
                <li><a href="/static/cambridge/AppliedBayesianStatistics-Summary.pdf">Summary</a></li>
            </ul>

            <h3 id="convex-optimization" className="Andrew-Tulloch-H3">Convex Optimization</h3>
            <ul>
                <li><a href="/static/cambridge/ConvexOptimization-LectureNotes.pdf">Lecture Notes</a></li>
                <li><a href="/static/cambridge/ConvexOptimization-Summary.pdf">Summary</a></li>
            </ul>

            <h3 id="mathematics-of-operations-research" className="Andrew-Tulloch-H3">Mathematics Of Operations Research</h3>
            <ul>
                <li><a href="/static/cambridge/MathematicsOfOperationsResearch-LectureNotes.pdf">Lecture Notes</a></li>
                <li><a href="/static/cambridge/MathematicsOfOperationsResearch-Summary.pdf">Summary</a></li>
            </ul>

            <h3 id="non-parametric-statistics" className="Andrew-Tulloch-H3">Non-Parametric Statistics</h3>
            <ul>
                <li><a href="/static/cambridge/NonParametricStatistics-LectureNotes.pdf">Lecture Notes</a></li>
                <li><a href="/static/cambridge/NonParametricStatistics-Summary.pdf">Summary</a></li>
            </ul>

            <h3 id="percolation" className="Andrew-Tulloch-H3">Percolation</h3>
            <ul>
                <li><a href="/static/cambridge/Percolation-LectureNotes.pdf">Lecture Notes</a></li>
            </ul>

            <h3 id="ramsay-theory" className="Andrew-Tulloch-H3">Ramsay Theory</h3>
            <ul>
                <li><a href="/static/cambridge/RamsayTheory-LectureNotes.pdf">Lecture Notes</a></li>
            </ul>

            <h3 id="statistical-theory" className="Andrew-Tulloch-H3">Statistical Theory</h3>
            <ul>
                <li><a href="/static/cambridge/StatisticalTheory-LectureNotes.pdf">Lecture Notes</a></li>
                <li><a href="/static/cambridge/StatisticalTheory-Summary.pdf">Summary</a></li>
            </ul>

            <h3 id="time-series-and-monte-carlo-analysis" className="Andrew-Tulloch-H3">Time Series and Monte Carlo Analysis</h3>
            <ul>
                <li><a href="/static/cambridge/TimeSeriesMonteCarlo-LectureNotes.pdf">Lecture Notes</a></li>
                <li><a href="/static/cambridge/TimeSeriesMonteCarlo-Summary.pdf">Summary</a></li>
            </ul>
        </section>
    </div>
</div>



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


{/* <div className="row">
                <div className="col-sm-4">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/0pZc5u3e884"></iframe>
                    </div>
                </div>
                <div className="col-sm-8">
                    <h3>Bayesian Data Science by Simulation</h3>
                    <p>PyCon 2019 Tutorial</p>
                    <p>This tutorial was an Introduction to Bayesian data science through the lens of simulation or hacker statistics. Learners became familiar with many common probability distributions through i) matching them to real-world stories &amp; ii) simulating them. They worked with joint/conditional probabilities, Bayes Theorem, prior/posterior distributions and likelihoods, while seeing their applications in real-world data analyses. They then saw the utility of Bayesian inference in parameter estimation and comparing groups and we wrapped up with a dive into the wonderful world of probabilistic programming using PyMC3.</p>
                    <a className="btn btn-primary" href="https://github.com/ericmjl/bayesian-stats-modelling-tutorial">Tutorial material<span className="glyphicon glyphicon-chevron-right">
                    </span></a>
                </div>
            </div> */}

{/* 
            <div className="row hugo bowne-anderson-SelectedTalks">
    // <!-- Video on the left, 4 columns wide --> 
    <div className="col-sm-4">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/0pZc5u3e884"></iframe>
        </div>
    </div>
    
    // <!-- Description on the right, 8 columns wide --> 
    <div className="col-sm-8">
        <h3>Bayesian Data Science by Simulation</h3>
        <p>PyCon 2019 Tutorial</p>
        <p>This tutorial was an Introduction to Bayesian data science through the lens of simulation or hacker statistics. Learners became familiar with many common probability distributions through i) matching them to real-world stories &amp; ii) simulating them. They worked with joint/conditional probabilities, Bayes Theorem, prior/posterior distributions and likelihoods, while seeing their applications in real-world data analyses. They then saw the utility of Bayesian inference in parameter estimation and comparing groups and we wrapped up with a dive into the wonderful world of probabilistic programming using PyMC3.</p>
        <a className="btn btn-primary" href="https://github.com/ericmjl/bayesian-stats-modelling-tutorial">Tutorial material<span className="glyphicon glyphicon-chevron-right"></span></a>
    </div>
</div> 
*/}
<h2>Selected Talks</h2>
<div className="hugo bowne-anderson-SelectedTalks">
                <div className="col-sm-4">
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/89ye2hfsAsk"></iframe>
                    </div>
                </div>
                <div className="col-sm-8">
                    <h3>Bayesian Data Science Two Ways: Simulation and Probabilistic Programming </h3>
                    <p>SciPy 2018 Tutorial</p>
                    <p>This was a tutorial that I co-taught with Eric Ma to build participants&#39; knowledge of Bayesian inference, workflows and decision making under uncertainty. We started with the basics of probability via simulation and analysis of real-world datasets, building up to an understanding of Bayes&#39; theorem. We then introduced the use of probabilistic programming to do statistical modelling. Throughout this tutorial, we used a mixture of instructional time and hands-on time. During instructional time, we used a variety of datasets to anchor our instruction; during hands-on time, which immediately followed instructional time, our participants applied the concepts learned to <a href="https://datadryad.org/resource/doi:10.5061/dryad.g6g3h" style={{color: 'rgb(0, 0, 150)'}}>the Darwin&#39;s finches dataset</a>, which permeated the entire tutorial. </p>
                    <a className="btn btn-primary" href="https://github.com/ericmjl/bayesian-stats-modelling-tutorial">Tutorial material<span className="glyphicon glyphicon-chevron-right">
                    </span></a>
                </div>
            </div>

            <div className="hugo bowne-anderson-SelectedTalks">
    <div className="col-sm-4">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/0pZc5u3e884"></iframe>
        </div>
    </div>
    <div className="col-sm-8">
        <h3>Bayesian Data Science by Simulation</h3>
        <p>PyCon 2019 Tutorial</p>
        <p>This tutorial was an Introduction to Bayesian data science through the lens of simulation or hacker statistics. Learners became familiar with many common probability distributions through i) matching them to real-world stories &amp; ii) simulating them. They worked with joint/conditional probabilities, Bayes Theorem, prior/posterior distributions and likelihoods, while seeing their applications in real-world data analyses. They then saw the utility of Bayesian inference in parameter estimation and comparing groups and we wrapped up with a dive into the wonderful world of probabilistic programming using PyMC3.</p>
        <a className="btn btn-primary" href="https://github.com/ericmjl/bayesian-stats-modelling-tutorial">Tutorial material<span className="glyphicon glyphicon-chevron-right"></span></a>
    </div>
</div>


<div id="robconery_github_repo">



</div>


<div id="bayesian-stats-modelling-tutorial">

</div>
<div className="a row pr-2" style={{ padding: '.75em 1em' }}>
    <div className="col-sm-12">
        <div className="col-sm-12 col-lg-4 mt-6">
            <div className="rob-conery-card card shadow h-100" style={{ border: '2px solid black', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' 
             // Add shadow here 
             }}>
                <div className="Box d-flex p-3 width-full public source">
                    <div className="pinned-item-list-item-content">
                        <div className="d-flex width-full position-relative">
                            <div className="flex-1">
                                <svg
                                    aria-hidden="true"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    version="1.1"
                                    width="16"
                                    data-view-component="true"
                                    className="octicon octicon-repo mr-1 color-fg-muted"
                                >
                                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                                </svg>
                                <span data-view-component="true" className="position-relative">
                                    <a
                                        href="https://github.com/ericmjl/bayesian-stats-modelling-tutorial"
                                        className="Link mr-1 text-bold wb-break-word"
                                        aria-labelledby="tooltip-6baf9a22-427b-4407-9260-e2fbc25d7c37"
                                        style={{ textDecoration: 'underline' }} // Example of underlined link
                                    >
                                        <span className="repo">bayesian-stats-modelling-tutorial</span>
                                    </a>
                                    <span></span>
                                    <span className="Label Label--attention v-align-middle mt-1 no-wrap v-align-baseline Label--inline">
                                        Public 
                                    </span>
                                </span>

                                <p className="pinned-item-desc color-fg-muted text-small mt-2 mb-0">
                                How to do Bayesian statistical modelling using numpy and PyMC3
                                </p>

                                <p className="mb-0 mt-2 f6 color-fg-muted">
                                    <a href="https://github.com/ericmjl/bayesian-stats-modelling-tutorial" className="pinned-item-meta Link--muted">
                                        <svg
                                            aria-label="stars"
                                            role="img"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            className="octicon octicon-star"
                                        >
                                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                                        </svg>
                                        659
                                    </a>
                                    <a href="https://github.com/robconery/pg_docs_api/forks" className="pinned-item-meta Link--muted">
                                        <svg
                                            aria-label="forks"
                                            role="img"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            version="1.1"
                                            width="16"
                                            data-view-component="true"
                                            className="octicon octicon-repo-forked"
                                        >
                                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                                        </svg>
                                        279
                                    </a>
                                </p>

                                <p dir="auto">Jupyter Notebook</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
{/* <ul role="list">
  <li>
  <a href="https://colab.research.google.com/drive/1JUqsVxFhPYy6XsqHOvD0JzbXyIyOsxXN?usp=sharing" target="_blank"  style={{textDecoration: 'underline' }}>Julia</a> solution script</li>
  <li><a href="https://drive.google.com/drive/folders/1inwMSHnld_50oAx0ohdnepIHqCM5NorL?usp=sharing" target="_blank"  style={{textDecoration: 'underline' }}>MATLAB solution scripts</a>
    <ul role="list">
      <li><a href="https://drive.google.com/file/d/1eXF8Xgv6DJsZuJd1oMdq6rNZi6b-FZO0/view?usp=sharing" target="_blank"  style={{textDecoration: 'underline' }}>Problem 3: train RNN (generate data)</a>
      </li>
    </ul>
  </li>
    <li>Python:
      <ul role="list">
            <li><a href="https://colab.research.google.com/drive/1mhhGJ0QlwwyCj7me891tqN06QrAWxHni?usp=sharing" target="_blank"  style={{textDecoration: 'underline' }}>Problem 1</a></li>
          <li><a href="https://colab.research.google.com/drive/1KK-6DhjIfPy87VaMcfeETy9USwRhfhvY?usp=sharing" target="_blank"  style={{textDecoration: 'underline' }}>Problem 2</a></li>
          <li><a href="https://colab.research.google.com/drive/1OyW3xiW3BbvY2JsTBauj2_Cb2fIClchU?usp=sharing" target="_blank"  style={{textDecoration: 'underline' }}>Problem 3</a> and <a href="https://drive.google.com/file/d/13kMPt-ayxRrJGhfdGHgLNvltdLAV6nzK/view?usp=sharing" target="_blank"  style={{textDecoration: 'underline' }}>Problem 3 data.mat</a>
        </li>
      </ul>
    </li>
</ul> */}
<div className="rob-conery-card card shadow h-100" 
     style={{
        border: '2px solid black',  // Black border for the card
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',  // Shadow effect
        padding: '1em',  // Padding inside the card for spacing
        borderRadius: '8px',  // Optional: Rounded corners for a smoother look
        backgroundColor: '#fff'  // White background for the card
    }}>

  <p className="text-size-regular">If you &#39;d like to deepen your understanding of recurrent neural networks, I encourage you to <a href="https://drive.google.com/file/d/15xhRdgyyLB2YQNDvWybtAW0-Gazyg3v0/view" target="_blank"   className="link-primary"
                style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>complete a problem set</a> created in collaboration with the COSYNE Tutorial TAs. The problem set has detailed instructions and questions to work through. Problems 1 and 2 are intermediate and should be done after watching Lecture 1; Problem 3 is advanced and should be done after watching Lecture 2. Solutions are available in Julia, MATLAB, and Python.</p>
  <h3>Solution Scripts</h3>
  <ul role="list" style={{ listStyleType: 'none', paddingLeft: '0' }}>
    <li>
      <a 
        href="https://colab.research.google.com/drive/1JUqsVxFhPYy6XsqHOvD0JzbXyIyOsxXN?usp=sharing" 
        target="_blank"  
        style={{ textDecoration: 'underline' }}>
        Julia solution script
      </a>
    </li>
    <li>
      <a 
        href="https://drive.google.com/drive/folders/1inwMSHnld_50oAx0ohdnepIHqCM5NorL?usp=sharing" 
        target="_blank"  
        style={{ textDecoration: 'underline' }}>
        MATLAB solution scripts
      </a>
      <ul role="list" style={{ listStyleType: 'none', paddingLeft: '20px' }}>
        <li>
          <a 
            href="https://drive.google.com/file/d/1eXF8Xgv6DJsZuJd1oMdq6rNZi6b-FZO0/view?usp=sharing" 
            target="_blank"  
            style={{ textDecoration: 'underline' }}>
            Problem 3: train RNN (generate data)
          </a>
        </li>
      </ul>
    </li>
    <li>
      Python:
      <ul role="list" style={{ listStyleType: 'none', paddingLeft: '20px' }}>
        <li>
          <a 
            href="https://colab.research.google.com/drive/1mhhGJ0QlwwyCj7me891tqN06QrAWxHni?usp=sharing" 
            target="_blank"  
            style={{ textDecoration: 'underline' }}>
            Problem 1
          </a>
        </li>
        <li>
          <a 
            href="https://colab.research.google.com/drive/1KK-6DhjIfPy87VaMcfeETy9USwRhfhvY?usp=sharing" 
            target="_blank"  
            style={{ textDecoration: 'underline' }}>
            Problem 2
          </a>
        </li>
        <li>
          <a 
            href="https://colab.research.google.com/drive/1OyW3xiW3BbvY2JsTBauj2_Cb2fIClchU?usp=sharing" 
            target="_blank"  
            style={{ textDecoration: 'underline' }}>
            Problem 3
          </a> 
          and 
          <a 
            href="https://drive.google.com/file/d/13kMPt-ayxRrJGhfdGHgLNvltdLAV6nzK/view?usp=sharing" 
            target="_blank"  
            style={{ textDecoration: 'underline' }}>
            Problem 3 data.mat
          </a>
        </li>
      </ul>
    </li>
  </ul>



</div>

<div id="row">
<TwitterTweetEmbed tweetId="1846965942422507703"  />
   
</div>

<div id="@j0hnparkhill">

<a href="#@j0hnparkhill" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            John Parkhill </span>
            <span className="p-nickname vcard-username d-block">
            ML, director of machine learning Terray Therapeutics (https://x.com/Terray_Tx).
            </span>
          </h1>
        </a>

<h3>
  <a href="https://x.com/memming/following" target="_blank" rel="noopener noreferrer">
    Followings of @memming on X
  </a>
</h3>


<div className="css-175oi2r r-1iusvr4 r-16y2uox">
  <div className="css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep">
    <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
      <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
        <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
          <a href="https://x.com/_Jaivardhan_" role="link" className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
            <div className="css-175oi2r r-1awozwy r-18u37iz r-dnmrzs">
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Jaivardhan Kapoor</span>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-9iso6" style={{ textOverflow: 'unset' }}></span>
                </span>
              </div>
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1awozwy r-xoduu5" style={{ textOverflow: 'unset' }}>
                  {/* Updated SVG size */}
                  <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified" style={{ width: '16px', height: '16px' }}>
                    <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2">
          <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
            <a href="https://x.com/_Jaivardhan_" role="link" 
            // tabIndex="-1" 
            className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
              <div className="css-175oi2r">
                <div dir="ltr" className="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978" style={{ textOverflow: 'unset', color: 'rgb(83, 100, 113)' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>@_Jaivardhan_</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="css-175oi2r r-1cwvpvk" style={{ minWidth: '0px' }}>
      <button aria-describedby="id__wcoj9flt6h" aria-label="Follow @_Jaivardhan_" role="button" className="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" data-testid="731230526778970112-follow" type="button" style={{ backgroundColor: 'rgb(15, 20, 25)', borderColor: 'rgba(0, 0, 0, 0)' }}>
        <div dir="ltr" className="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style={{ textOverflow: 'unset', color: 'rgb(255, 255, 255)' }}>
          <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1b43r93 r-1cwl3u0" style={{ textOverflow: 'unset' }}>
            <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Follow</span>
          </span>
        </div>
      </button>
    </div>
    <div dir="auto" className="css-146c3p1" id="id__wcoj9flt6h" style={{ display: 'none' }}>
      Click to Follow _Jaivardhan_
    </div>
  </div>
</div>


<h3>
  <a href="https://x.com/_Jaivardhan_/following" target="_blank" rel="noopener noreferrer">
    Followings of @_Jaivardhan_ on X
  </a>
</h3>


<div className="css-175oi2r r-1iusvr4 r-16y2uox">
  <div className="css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep">
    <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
      <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
        <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
          <a href="https://x.com/tarantulae" role="link" className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
            <div className="css-175oi2r r-1awozwy r-18u37iz r-dnmrzs">
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Christian S. Perone</span>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-9iso6" style={{ textOverflow: 'unset' }}></span>
                </span>
              </div>
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1awozwy r-xoduu5" style={{ textOverflow: 'unset' }}>
                  {/* Updated SVG size */}
                  <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified" style={{ width: '16px', height: '16px' }}>
                    <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2">
          <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
            <a href="https://x.com/tarantulae" role="link" 
            // tabIndex="-1" 
            className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
              <div className="css-175oi2r">
                <div dir="ltr" className="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978" style={{ textOverflow: 'unset', color: 'rgb(83, 100, 113)' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>@tarantulae</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="css-175oi2r r-1cwvpvk" style={{ minWidth: '0px' }}>
      <button aria-describedby="id__wcoj9flt6h" aria-label="Follow @_Jaivardhan_" role="button" className="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" data-testid="731230526778970112-follow" type="button" style={{ backgroundColor: 'rgb(15, 20, 25)', borderColor: 'rgba(0, 0, 0, 0)' }}>
        <div dir="ltr" className="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style={{ textOverflow: 'unset', color: 'rgb(255, 255, 255)' }}>
          <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1b43r93 r-1cwl3u0" style={{ textOverflow: 'unset' }}>
            <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Follow</span>
          </span>
        </div>
      </button>
    </div>
    <div dir="auto" className="css-146c3p1" id="id__wcoj9flt6h" style={{ display: 'none' }}>
      Click to Follow tarantulae
    </div>
  </div>
</div>



<div className="css-175oi2r r-1iusvr4 r-16y2uox">
  <div className="css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep">
    <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
      <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
        <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
          <a href="https://x.com/sedielem" role="link" className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
            <div className="css-175oi2r r-1awozwy r-18u37iz r-dnmrzs">
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Sander Dieleman</span>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-9iso6" style={{ textOverflow: 'unset' }}></span>
                </span>
              </div>
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1awozwy r-xoduu5" style={{ textOverflow: 'unset' }}>
                  {/* Updated SVG size */}
                  <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified" style={{ width: '16px', height: '16px' }}>
                    <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2">
          <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
            <a href="https://x.com/sedielem" role="link" 
            // tabIndex="-1" 
            className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
              <div className="css-175oi2r">
                <div dir="ltr" className="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978" style={{ textOverflow: 'unset', color: 'rgb(83, 100, 113)' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>@sedielem</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="css-175oi2r r-1cwvpvk" style={{ minWidth: '0px' }}>
      <button aria-describedby="id__wcoj9flt6h" aria-label="Follow @_Jaivardhan_" role="button" className="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" data-testid="731230526778970112-follow" type="button" style={{ backgroundColor: 'rgb(15, 20, 25)', borderColor: 'rgba(0, 0, 0, 0)' }}>
        <div dir="ltr" className="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style={{ textOverflow: 'unset', color: 'rgb(255, 255, 255)' }}>
          <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1b43r93 r-1cwl3u0" style={{ textOverflow: 'unset' }}>
            <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Follow</span>
          </span>
        </div>
      </button>
    </div>
    <div dir="auto" className="css-146c3p1" id="id__wcoj9flt6h" style={{ display: 'none' }}>
      Click to Follow sedielem
    </div>
  </div>
</div>


<div className="css-175oi2r r-1iusvr4 r-16y2uox">
  <div className="css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep">
    <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
      <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
        <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
          <a href="https://x.com/j0hnparkhill" role="link" className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
            <div className="css-175oi2r r-1awozwy r-18u37iz r-dnmrzs">
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>johnparkhill</span>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-9iso6" style={{ textOverflow: 'unset' }}></span>
                </span>
              </div>
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1awozwy r-xoduu5" style={{ textOverflow: 'unset' }}>
                  {/* Updated SVG size */}
                  <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified" style={{ width: '16px', height: '16px' }}>
                    <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2">
          <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
            <a href="https://x.com/j0hnparkhill" role="link" 
            // tabIndex="-1" 
            className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
              <div className="css-175oi2r">
                <div dir="ltr" className="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978" style={{ textOverflow: 'unset', color: 'rgb(83, 100, 113)' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>@j0hnparkhill</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="css-175oi2r r-1cwvpvk" style={{ minWidth: '0px' }}>
      <button aria-describedby="id__wcoj9flt6h" aria-label="Follow @_Jaivardhan_" role="button" className="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" data-testid="731230526778970112-follow" type="button" style={{ backgroundColor: 'rgb(15, 20, 25)', borderColor: 'rgba(0, 0, 0, 0)' }}>
        <div dir="ltr" className="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style={{ textOverflow: 'unset', color: 'rgb(255, 255, 255)' }}>
          <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1b43r93 r-1cwl3u0" style={{ textOverflow: 'unset' }}>
            <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Follow</span>
          </span>
        </div>
      </button>
    </div>
    <div dir="auto" className="css-146c3p1" id="id__wcoj9flt6h" style={{ display: 'none' }}>
      Click to Follow j0hnparkhill
    </div>
  </div>
</div>



<div 
  dir="auto" 
  className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-1h8ys4a r-1jeg54m" 
  style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}
>
  <span 
    className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" 
    style={{ textOverflow: 'unset' }}
  >
    ML, director of machine learning at Terray Therapeutics (
  </span>
  <a 
    dir="ltr" 
    href="https://x.com/Terray_Tx" 
    role="link" 
    className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1loqt21" 
    style={{ textOverflow: 'unset', color: 'rgb(29, 155, 240)' }}
  >
    <span 
      aria-hidden="true" 
      className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-qlhcfr r-qvk6io" 
      style={{ textOverflow: 'unset' }}
    >
      https://
    </span>
    x.com/Terray_Tx
  </a>
  <span 
    className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" 
    style={{ textOverflow: 'unset' }}
  >
    ). Father. NSF CAREER award giver-upper. Gibe and gambol enjoyer.
  </span>
</div>

<ul className="post-list">
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Nov 19, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/CoinHedge/">
        Coin Vol-II Hedging your BTC/ETH - The basics
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Nov 13, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/memecoin/">
        Coin Volatility Surfaces
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Sep 5, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/cryptocarrytrade/">
        The Crypto-Carry Trade
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Aug 5, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/quantumstorytelling/">
        Woo, Quantum Storytelling, Time Crystals and Misallocation
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">May 30, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/torchSDE/">
        Pricing Options with TorchSDE
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Apr 30, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/SolvingDiffusions/">
        Solving multidimensional PDEs in pytorch
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Apr 7, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/HoldingVIX/">
        Using simple mean-reversion to remove carry from a VIX futures position
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Mar 11, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/QuittingAAPL/">
        Moving on from the Macbook Pro
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Mar 6, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/InformationInStochasticSeries/">
        Simply Extracting information out of your Stochastic Series
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Jan 6, 2021</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/MultivariateGumbel/">
        Copulas made simple with Pytorch Distributions
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Dec 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/HowToBet/">
        How to Size Bets. The Kelly Criterion in PyTorch
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Nov 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/TheMostUseful3DP/">
        The #1 Reason to have a 3D Printer.
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Oct 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/MakeScienceGreatAgain/">
        Modest Proposals to Make Science Great Again.
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Sep 21, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/SomeArt/">
        Some Robot Art
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Sep 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/QuaternionAveraging/">
        Quaternion Averaging in Pytorch
      </a>
    </h3>
  </li>
  <li style={{ marginBottom: '8px' }}> 
    <span className="post-meta">Aug 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/welcome-to-jekyll/">
        Yet another static blog!
      </a>
    </h3>
  </li>
</ul>


<li style={{ marginBottom: '8px' }}>
    <span className="post-meta">Sep 5, 2020</span>
    <h3 style={{ margin: '4px 0' }}>
      <a className="post-link" href="https://jparkhill.netlify.app/QuaternionAveraging/">
        Quaternion Averaging in Pytorch: Detailed Page
      </a>
    </h3>
  </li>

  <p>At atomsandbits.ai we implement some seriously large formulas in TensorFlow. If we just went from LaTeX to tf. we wouldn&#39;t be able to do it. Here&#39;s a list of tricks and tools we use, applied to the problem of averaging rotations. Come for the tf. stay for the hypersphere.</p>
  <p>The tensormol0.2 model chemistry reproduces a huge swath of chemistry (37 elements), which is in some sense a large fraction of our world. It&#39;s a big ole&#39; formula for some geometry:</p>

  <p><img src="/assets/tensormol.png" alt="TensorMol"></img></p>

  {/* <p><img src="https://drive.google.com/file/d/1nVDhSeA60emakzFdNo9qY8gCawcI-lza/view?usp=drive_link" alt="tm"></img></p>
  <p><img src="https://drive.google.com/uc?export=view&id=1nVDhSeA60emakzFdNo9qY8gCawcI-lza" alt="tm"></img></p> */}
<p>How does one use TensorFlow effectively to get something complicated done? It&#39;s not easy. I thought I&#39;d write up an example a little simpler than modeling all of chemistry. How about averaging rotations/axis systems? Simple right? Well interesting story… The math is mostly due to Hamilton (~1843), however it wasn’t until the advent of computer graphics in 1985 that people even bothered to work out how to interpolate between rotations perfectly.</p>
<p>#Rotation &amp; Quaternions</p>

<p>The rotational algebra of our world is a beautiful bedeviling thing. The reason is that although rotations act on a three dimensional space, when embedded in three dimensions, rotations are not smooth or unique. When represented with Euler angles or matrices, every rotation has multiple representations. Change the order of rotations and you also change the endpoint (rotations are non-commutative) Traveling smoothly along some paths of rotations using a three dimensional embedding, suddenly the third degree of freedom can become inaccessible (the phenomenon of “Gimbal lock”). If you try to define an average or interpolated point-of-view in a naive way (axes=&gt; angles =&gt; interpolated angles) you will find gibberish zero axes, and jerky non-smooth behavior.</p>
<blockquote>
  <p className="custom-blockquote-John-Parkhill-Blog">The rotational algebra of our world is a beautiful bedeviling thing. The reason is that although rotations act on a three dimensional space, when embedded in three dimensions, rotations are not smooth or unique. When represented with Euler angles or matrices, every rotation has multiple representations. Change the order of rotations and you also change the endpoint (rotations are non-commutative) Traveling smoothly along some paths of rotations using a three dimensional embedding, suddenly the third degree of freedom can become inaccessible (the phenomenon of “Gimbal lock”). If you try to define an average or interpolated point-of-view in a naive way (axes=&gt; angles =&gt; interpolated angles) you will find gibberish zero axes, and jerky non-smooth behavior.</p>
</blockquote>
<p>To have smooth topology rotations must be embedded within a four-dimensional hypersphere, so we can forgive your brain. In this space a rotation is a 4-dimensional point, a quaternion, whose components can be thought of as the angle and 3 axis components of the rotation. Given a 3x3 rotation matrix Q, one can parameterize a quaternion (w,x,y,z)</p>
<p className="-John-Parkhill-Blog">
  To have smooth topology rotations must be embedded within a four-dimensional hypersphere, so we can forgive your brain. In this space a rotation is a 4-dimensional point, a quaternion, whose components can be thought of as the angle and 3 axis components of the rotation. Given a 3x3 rotation matrix Q, one can parameterize a quaternion (w,x,y,z).
</p>
<p><img src="/assets/quat2.png" alt="qm"/></p>


<p>Given any set of orthogonal axes (rows of Q), Euler&#39;s theorem guarantees an axis-angle rotation which can map the natural xyz axes back and forth into the new frame. The formula above yields the natural 4-d form of that rotation.</p>
<p>Now suppose you have two, three or four systems of axes (ax_1, ax_2, ax_3). For example you want to look at the sun then the moon, or you want to fit 4 pretty objects in your field of vision, or define invariant axes for a cloud of points (the reason we use this math in TensorMol). Can you simply average the quaternion components q_av = (ax_1+ax_2+ax_3)/3? Sadly no… You can immediately understand why if you imagine averaging rotations around opposite axis vectors as an owl might when spinning his head. The “good, smooth” quaternions keep to the surface of the 4-d hypersphere (a curvy subset of 4d-euclidean space). To interpolate lines on that sphere, you can use SLERP. To average multiple quaternions we must construct the 4x4 matrix which is the outer product of the list of quaternions (Nx4) with itself, weighted if desired:</p>
<John_Parkhill_MathMLComponent_1 />
<p>The largest eigenvector of this matrix is the desired average quaternion.</p>

<h1 id="implementing-complex-math-in-tf">Implementing complex math in tf.</h1>
<p>Again, my goal is to get rotationally invariant axes for a set of points which smooth, differentiable and local. I will walk through my whole implementation of this in tf.
Step 1- Don&#39;t use tf. Write a simple test of your formulas in a notebook like math interface (mathematica, ipython/sage). Verify everything is working when you use all the fancy library routines tf. doesn&#39;t have (eigenvectors etc.). Here&#39;s what that looks like using mathematica.</p>
<p><img src="/assets/quatrot.png" alt="qmrr"/></p>

<p>Those fancy manipulate sliders are a nice way to get tangible faith that the point cloud is rotationally invariant when transformed using an averaged axis system depending on points in the cloud. It remains for us to do this same thing in tf. Were&#39; ready for step 2:</p>
<script src="https://gist.github.com/krishnakurtakoti/f1226b9efe7b7a0a639bd77d166fbd92.js"></script>
{/* <Slerp_for_quaternions_in_TF /> */}
<Slerp_for_quaternions_in_TF_copy />
{/* <Slerp_for_quaternions_in_TF_copy1 /> */}

<p>Style notes about the tf. code given above:</p>


<ul>
  <li>Each routine can be easily compared with the mathematica output, to quickly debug.</li>
  <li>In general it is best to choose an order of dimensions for your tensor which goes (least often contracted,…,most often contracted), because several helpful tf. functions assume the first dimension of a tensor is the batch dimension.</li>
  <li>tf.sqrt, and 1/(tensor) are both unstable operations in tf. They are unstable in a tricky way, because the implied chain-rule derivative graph (coming from tf.gradients(… op…, var) will still often evaluate NaN’s even when it appears that the arguments to the routine would always be in the well-behaved domain. One must make liberal use of tf.clip_by_value() , tf.where(), and infinitesimals to ensure both the routine and routine’s derivatives are well-behaved. Safe_norm is a good example.</li>
</ul>

<h1 id="epilogue">Epilogue</h1>

<p>So is all this serious rotational mathematics only good for defining axis systems for atomic positions. No! Facebook AI-Research and collaborators from the EPFL published a nice use of quaternions for skeletal motion planning <a href="https://arxiv.org/abs/1805.06485">last week</a></p>

</div>



<div id="@tarantulae">
<a href="https://x.com/tarantulae" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Christian S. Perone </span>
            <span className="p-nickname vcard-username d-block">
            / Machine Learning  (@polymtl/@UMontreal)
            </span>
          </h1>
        </a>
          
        <ul className="christianperone-list">
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/11/the-geometry-of-data-part-ii/">The geometry of data: the missing metric tensor and the Stein score [Part II]</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/08/torch-titan-distributed-training/">Torch Titan distributed training code analysis</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/08/mmap-torch-np-jax-tf/">Memory-mapped CPU tensor between Torch, Numpy, Jax and TensorFlow</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/06/schematism/">Generalisation, Kant’s schematism and Borges’ Funes el memorioso – Part I</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2023/12/pytorch-2-internals-talk/">PyTorch 2 Internals – Talk</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2023/09/thoughts-on-riemannian-metrics-and-its-connection-with-diffusion-score-matching-part-i/">Thoughts on Riemannian metrics and its connection with diffusion/score matching [Part I]</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2023/06/appreciating-llms-data-pipelines/">Large language model data pipelines and Common Crawl (WARC/WAT/WET)</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2023/03/feste-composing-nlp-tasks-with-automatic-parallelization-and-batching/">Feste: composing NLP tasks with automatic parallelization and batching</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2022/11/couple-of-recent-publications-in-uncertainty-estimation-and-autonomous-vehicles/">Couple of recent publications in uncertainty estimation and autonomous vehicles</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2024/05/dados-das-enchentes-no-rio-grande-do-sul-rs-em-2024/">[pt-br] Dados das enchentes no Rio Grande do Sul (RS) em 2024</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2022/09/tutorial-on-using-llvm-to-jit-pytorch-fx-graphs-to-native-code-x86-arm-risc-v-wasm-part-i-scalars/">Tutorial on using LLVM to JIT PyTorch fx graphs to native code (x86/arm/risc-v/w...)</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2022/01/arduino-wan-helium-network-and-cryptography/">Arduino WAN, Helium network and cryptographic co-processor</a>
    </li>
    <li className="christianperone-item">
        <a href="https://blog.christianperone.com/2021/03/episuite-epidemiology-in-python/">Episuite: epidemiology in Python</a>
    </li>
</ul>

</div>


<div id="@gdb">
<a href="https://x.com/gdb" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Greg Brockman </span>
            <span className="p-nickname vcard-username d-block">
            President & Co-Founder @OpenAI
            </span>
          </h1>
        </a>



        <a href="https://gregbrockman.com/" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Greg Brockman's Blog </span>
            {/* <span className="p-nickname vcard-username d-block">
            President & Co-Founder @OpenAI
            </span> */}
          </h1>
        </a>


        <article id="u5TReR2cWsQifoMYSHMtAg" className="post user_show">
    <time 
    // datetime="2019-07-30" 
    className="article_time">Jul 30, 2019</time>
    <h1 className="article_title"><a href="https://blog.gregbrockman.com/how-i-became-a-machine-learning-practitioner">How I became a machine learning practitioner</a></h1>
    <a href="https://blog.gregbrockman.com/how-i-became-a-machine-learning-practitioner" className="content">
    <p>For the first three years of OpenAI, I dreamed of becoming a machine learning expert but made little progress towards that goal. Over the past nine months, I&#39;ve finally made the transition to being a machine learning practitioner. It was hard but not impossible, and I think most people who are good programmers and know (or are willing to learn) the math can do it too. There are many online courses to self-study the technical side, and what turned out to be my biggest blocker was a mental barrier — getting ok with being a beginner again.</p>
<p className="bleed_image">
  <img src="https://svbtleusercontent.com/dvwQxNxkr6FKLVsDTBoqwm0xspap_small.png" alt="gdb-ml1.png" className="bleed" data-rjs="https://svbtleusercontent.com/dvwQxNxkr6FKLVsDTBoqwm0xspap_retina.png"></img></p><p><em>Studying machine learning during the 2018 holiday season.</em></p>
<h1>Early days 
</h1>
<p>A founding principle of OpenAI is that we value research and engineering equally&nbsp;—&nbsp;our goal is to build working systems that solve previously impossible tasks, so we need both. (In fact, our team is comprised of 25% people primarily using software skills, 25% primarily using machine...</p></a>
    <p className="continue_mark"><a href="https://blog.gregbrockman.com/how-i-became-a-machine-learning-practitioner" className="buttonize outline small">Continue reading →</a></p>
  </article>

  <h1 id="early-days_1">Early days <a className="head_anchor" href="#early-days_1">#</a></h1>

  <p>A founding principle of OpenAI is that we value research and engineering equally&nbsp;—&nbsp;our goal is to build working systems that solve previously impossible tasks, so we need both. (In fact, our team is comprised of 25% people primarily using software skills, 25% primarily using machine learning skills, and 50% doing a hybrid of the two.) So from day one of OpenAI, my software skills were always <a href="https://blog.gregbrockman.com/define-cto-openai#gym_1">in demand</a>, and I kept procrastinating on picking up the machine learning skills I wanted.</p>
  <p>After helping build <a href="https://openai.com/blog/openai-gym-beta/">OpenAI Gym</a>, I was called to work on <a href="https://openai.com/blog/universe/">Universe</a>. And as Universe was winding down, we decided to start working on <a href="https://openai.com/five/#timeline">Dota</a> — and we needed someone to turn the game into a reinforcement learning environment before any machine learning could begin.</p>
  <h1 id="dota_1">Dota <a className="head_anchor" href="#dota_1">#</a></h1>



  <h1 id="time-out_1">Time out <a className="head_anchor" href="#time-out_1">#</a></h1>
  <p>After we lost two games in The International in 2018, most observers thought we&#39;d <a href="https://twitter.com/polynoamial/status/1032988066967965696">topped out</a> what our approach could do. But we knew from our metrics that we were right on the edge of success and mostly needed more training. This meant the demands on my time had relented, and in November 2018, I felt I had an opening to take a gamble with three months of my time.</p>
  <p className="gregbrockman-p"><em>I learn best when I have something specific in mind to build.</em> I decided to try building a chatbot. I started self-studying the curriculum we developed for our <a href="https://openai.com/blog/openai-fellows/">Fellows</a> program, selecting only the NLP-relevant modules. For example, I wrote and trained an LSTM language model and then a Transformer-based one. I also read up on topics like <a href="https://colah.github.io/posts/2015-09-Visual-Information/">information theory</a> and read many papers, poring over each line until I fully absorbed it.</p>

  <p><em>I learn best when I have something specific in mind to build.</em> I decided to try building a chatbot. I started self-studying the curriculum we developed for our <a href="https://openai.com/blog/openai-fellows/">Fellows</a> program, selecting only the NLP-relevant modules. For example, I wrote and trained an LSTM language model and then a Transformer-based one. I also read up on topics like <a href="https://colah.github.io/posts/2015-09-Visual-Information/">information theory</a> and read many papers, poring over each line until I fully absorbed it.</p>

  <p className="gregbrockman-p">It was slow going, but this time I expected it. I didn&#39;t experience flow state. I was reminded of how I&#39;d felt when I just started programming, and I kept thinking of how many years it had taken to achieve a feeling of mastery. I honestly wasn&#39;t confident that I would ever become good at machine learning. But I kept pushing because… well, honestly because I didn&#39;t want to be constrained to only understanding one part of my projects. I wanted to see the whole picture clearly.</p>

  <p>It was slow going, but this time I expected it. I didn&#39;t experience flow state. I was reminded of how I&#39;d felt when I just started programming, and I kept thinking of how many years it had taken to achieve a feeling of mastery. I honestly wasn&#39;t confident that I would ever become good at machine learning. But I kept pushing because… well, honestly because I didn&#39;t want to be constrained to only understanding one part of my projects. I wanted to see the whole picture clearly.</p>


  <p className="gregbrockman-p">One important conceptual step was overcoming a barrier I&#39;d been too timid to do with Dota: make substantive changes to someone else&#39;s machine learning code. I fine-tuned <a href="https://github.com/openai/finetune-transformer-lm">GPT-1</a> on chat datasets I&#39;d found, and made a small change to add my own naive sampling code. But it became so painfully slow as I tried to generate longer messages that my frustration overwhelmed my fear, and I implemented GPU caching — a change which touched the entire model.</p>


  <p>One important conceptual step was overcoming a barrier I&#39;d been too timid to do with Dota: make substantive changes to someone else&#39;s machine learning code. I fine-tuned <a href="https://github.com/openai/finetune-transformer-lm">GPT-1</a> on chat datasets I&#39;d found, and made a small change to add my own naive sampling code. But it became so painfully slow as I tried to generate longer messages that my frustration overwhelmed my fear, and I implemented GPU caching — a change which touched the entire model.</p>

  <p className="gregbrockman-p">I had to try a few times, throwing out my changes as they exceeded the complexity I could hold in my head. By the time I got it working a few days later, I realized I&#39;d learned something that I would have previously thought impossible: I now understood how the whole model was put together, down to small stylistic details like how the codebase elegantly handles TensorFlow variable scopes.</p>


  <p>I had to try a few times, throwing out my changes as they exceeded the complexity I could hold in my head. By the time I got it working a few days later, I realized I&#39;d learned something that I would have previously thought impossible: I now understood how the whole model was put together, down to small stylistic details like how the codebase elegantly handles TensorFlow variable scopes.</p>

</div>


<div id="goyal__pramod">
<TwitterTweetEmbed tweetId="1874379586714341803"  />
   
</div>

<div id="@GrantSlatton">
{/* <a href="https://x.com/GrantSlatton" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Grant Slatton </span>
              <span className="p-nickname vcard-username d-block">
                Formerly built the world's fastest filesystem at AWS, now the fastest spreadsheet at http://rowzero.com
              </span>
            </h1>
          </a> */}


          <a href="https://x.com/GrantSlatton" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Grant Slatton </span>
              <span className="p-nickname vcard-username d-block">
              
              </span>
            </h1>
            <h3>Formerly built the world's fastest filesystem at AWS, now the fastest spreadsheet at http://rowzero.com</h3>
          </a>
          
        <a href="https://grantslatton.com/" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Grant Slatton's Blog </span>
            {/* <span className="p-nickname vcard-username d-block">
            President & Co-Founder @OpenAI
            </span> */}
          </h1>
        </a>

        <p><a href="https://grantslatton.com/binary-iq" className="grantslatton-a">Binary IQ</a> — A model of LLM capability</p>

<p><a href="https://grantslatton.com/rowzero-property-testing" className="grantslatton-a">Lightweight property-based testing at Row Zero</a> — How we verify correctness</p>

<p><a href="https://grantslatton.com/rust-macros" className="grantslatton-a">Rust Macros: Zero to Hero</a> — A comprehensive guide on Rust macros</p>
<p><a href="https://grantslatton.com/software-pathfinding" className="grantslatton-a">Algorithms we develop software by</a> — Pathfinding applied to the software solution domain</p>
<p><a href="https://grantslatton.com/filesystems" className="grantslatton-a">Building Filesystems</a> — High level ideas in filesystem design</p>
<p><a href="https://grantslatton.com/quasirandom" className="grantslatton-a">Quasirandom sequences</a> — Cool method to generate non-clumping random points</p>

 <p><a href="https://grantslatton.com/how-to-software">How to write complex software</a> — A general method</p>
 <p><a href="https://grantslatton.com/bureaulogy">Bureaulogy</a> — The study of bureaucracy</p>
 <p><a href="https://grantslatton.com/peasants-plight">A peasant's plight</a> — On the shackling of the peasantry</p>
 <p><a href="https://grantslatton.com/personal-api">Every Man his own API</a> — A sociotechnological trend</p>
 <p><a href="https://grantslatton.com/culture-schelling">Culture is a set of social Schelling points</a> — Solving coordination problems in community-building</p>
 <p><a href="https://grantslatton.com/portals">Portals are Undertheorized</a> — The importance of arrival</p>
 <p><a href="https://grantslatton.com/binary-iq">Binary IQ</a> — A model of LLM capability</p>
 <p><a href="https://grantslatton.com/bug-proof-engines">Designing bug-proof engines</a> — A spectrum of engineering philosophies</p>
 <p><a href="https://grantslatton.com/accidental-urbanism">Accidental Urbanism</a> — How I got into the scene</p>
 <p><a href="https://grantslatton.com/town-bootstrapping">How to Bootstrap a Town</a> — A modest plan</p>
 <p><a href="https://grantslatton.com/sports-vs-games">Sports vs Games</a> — An aesthetic distinction</p>
 <p><a href="https://grantslatton.com/nobody-cares">Nobody Cares</a> — A rant about caring</p>
 <p><a href="https://grantslatton.com/rowzero-property-testing">Lightweight property-based testing at Row Zero</a> — How we verify correctness</p>
 <p><a href="https://grantslatton.com/rust-macros">Rust Macros: Zero to Hero</a> — A comprehensive guide on Rust macros</p>
 <p><a href="https://grantslatton.com/software-pathfinding">Algorithms we develop software by</a> — Pathfinding applied to the software solution domain</p>
 <p><a href="https://grantslatton.com/status-among-whom">Status among whom?</a> — An essay about status relativism</p>
 <p><a href="https://grantslatton.com/bjj-ghost-escape">Ghost Side Control Escape System (BJJ)</a> — A video instructional on my preferred side control escape system</p>
 <p><a href="https://grantslatton.com/filesystems">Building Filesystems</a> — High level ideas in filesystem design</p><p><a href="ai-auditability">AI follows auditability</a> — An essay about the order AI will move through the economy</p>
 <p><a href="https://grantslatton.com/books">Book List</a> — Stuff I've read</p>
 <p><a href="https://grantslatton.com/onsen-unreality">Onsen Unreality</a> — Our experience at an onsen 'theme park' in Tokyo</p>
 <p><a href="https://grantslatton.com/tesla-fsd">Tesla Full Self-Driving</a> — My experience with FSD</p>
 <p><a href="https://grantslatton.com/internet-fiction">Internet Fiction</a> — Collection of amateur stories — mainly sci-fi — that I like</p>
 <p><a href="https://grantslatton.com/all-the-way-down">All the way down</a> — Very short story about simulation</p>
 <p><a href="https://grantslatton.com/story-ideas">Story Ideas</a> — A collection of premises for stories</p>
 <p><a href="https://grantslatton.com/things-i-wish-i-knew">Things I wish I knew earlier</a> — Collection of stuff I would tell my younger self if I could</p>
 <p><a href="https://grantslatton.com/road-widths">Road Width Extremism</a> — In favor of narrow roads</p>
 <p><a href="https://grantslatton.com/small-web">Links to See Also</a> — Other "small web" personal sites I recommend</p>
 <p><a href="https://grantslatton.com/canvas-simulations">HTML5 Canvas simulations</a> — A collection of little HTML5 canvas demos</p>
 <p><a href="https://grantslatton.com/twitter">Twitter</a> — Essay about how getting on Twitter unexpectedly added a lot of value to my life</p>
 <p><a href="https://grantslatton.com/shuttle">Shuttle</a> — A useful concurrency checker library we used to verify our filesystem at AWS</p>
 <p><a href="https://grantslatton.com/quasirandom">Quasirandom sequences</a> — Cool method to generate non-clumping random points</p>
 <p><a href="https://grantslatton.com/book-review-the-perfectionists">Book Review: 'The Perfectionists: How Precision Engineers Created the Modern World'</a> — Excellent book about the history of precision machining</p>
 <p><a href="https://grantslatton.com/markdown-nom-parser">Markdown-ish</a> — Writing a Markdown(ish) parser with the nom library</p>
    <p><img src="/images/grant_and_sampson.jpg" alt="Grant holding Sampson at sunset overlooking Puget Sound"></img></p>

{/* <body style="">
    <h1>Howdy</h1>
    <p>I'm Grant Slatton. I'm a founding engineer at <a href="https://rowzero.io/">Row Zero</a> where we've built the world's fastest spreadsheet.</p>
    <p>Formerly, I was a senior engineer at <a href="https://en.wikipedia.org/wiki/Amazon_S3">AWS S3</a> where I led the team that built and owned the custom, high-performance storage node at the heart of the world's largest cloud storage service.</p>
    <p>When I'm not writing code, you can find me woodworking in my garage, training BJJ at the gym, or walking around West Seattle with my wife, Jessica, and our corgi, Sampson.</p>
    <p>Feel free to contact me at me@grantslatton.com, or <a href="https://twitter.com/grantslatton">on Twitter</a>.</p>
    <hr>
    <p>Here are some articles I've written that you might like:</p>
   
  <script defer="" src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon="{&quot;rayId&quot;:&quot;8fc0b6466999b2ab&quot;,&quot;version&quot;:&quot;2024.10.5&quot;,&quot;r&quot;:1,&quot;token&quot;:&quot;44f687eddfe14cd0acf2364d2d86e762&quot;,&quot;serverTiming&quot;:{&quot;name&quot;:{&quot;cfExtPri&quot;:true,&quot;cfL4&quot;:true,&quot;cfSpeedBrain&quot;:true,&quot;cfCacheStatus&quot;:true}}}" crossorigin="anonymous"></script>


</body> */}

        {/* <p><a href="https://grantslatton.com/binary-iq">Binary IQ</a> — A model of LLM capability</p>



        <p><a href="https://grantslatton.com/rowzero-property-testing">Lightweight property-based testing at Row Zero</a> — How we verify correctness</p> */}
</div>

<div id="@unixpickle">



<a href="https://github.com/unixpickle" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Alex Nichol </span>
              <span className="p-nickname vcard-username d-block">
              
              </span>
            </h1>
            <h3>AI researcher, hobby web developer, math geek. Constantly learning.</h3>
          </a>

          <a href="https://blog.aqnichol.com/" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Alex Nichol Blog - Pickled ML</span>
              <span className="p-nickname vcard-username d-block">
              
              </span>
            </h1>
          </a>
          
          <article>
        {/* <h1>Posts</h1> */}
       <ArticleListAlexNichole />
    </article>
</div>

<div id="@jfrankle.com">



<a href="https://bsky.app/profile/jfrankle.com" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Jonathan Frankle </span>
              <span className="p-nickname vcard-username d-block">
              
              </span>
            </h1>
            <h3>Chief AI Scientist at Databricks. Founding team at MosaicML. MIT/Princeton alum. Lottery ticket enthusiast. Working on data intelligence.</h3>
          </a>


<EmbedComponent />
{/* <blockquote class="bluesky-embed" data-bluesky-uri="at://did:plc:jt6vfiqztljw7kvv3qekdfer/app.bsky.feed.post/3lbsj6eh63c24" data-bluesky-cid="bafyreict6c5ls3l6pkimwvm4kwyy6suh7acjzmhfkihad6t6dduog2nnte"><p lang="en">I wrote some thoughts on how to build good LM benchmarks: ofir.io/How-to-Build...<br><br><a href="https://bsky.app/profile/did:plc:jt6vfiqztljw7kvv3qekdfer/post/3lbsj6eh63c24?ref_src=embed">[image or embed]</a></p>&mdash; Ofir Press (<a href="https://bsky.app/profile/did:plc:jt6vfiqztljw7kvv3qekdfer?ref_src=embed">@ofirpress.bsky.social</a>) <a href="https://bsky.app/profile/did:plc:jt6vfiqztljw7kvv3qekdfer/post/3lbsj6eh63c24?ref_src=embed">November 26, 2024 at 3:24 AM</a>
</blockquote><script async src="https://embed.bsky.app/static/embed.js" charset="utf-8"></script>
 */}
</div>





<div>
  
  
  
  <section aria-label="card content" data-view-component="true" className="mt-0">       
     <div className="d-flex color-bg-subtle rounded-1 flex-justify-between p-3">
        <div className="d-flex">
          <a data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;avatar&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;metadata&quot;:{&quot;clicked_resource_type&quot;:&quot;USER&quot;,&quot;clicked_resource_id&quot;:39672672},&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="3d157f5bd2d7b8717fe26a1be53aea1739fdce9b4de42cb7541db64bd93f260e" data-hovercard-type="user" data-hovercard-url="/users/Rishit-dagli/hovercard?event_type=feeds.feed_click&amp;hover_target=feed_user_avatar&amp;payload%5Bfeed_card%5D%5Bassignment_context%5D=c-cb738117%3A109742%3Bjccid629%3A115315%3B79878423%3A116832%3B6cha1124%3A143780%3B4h1jc170%3A184406%3B&amp;payload%5Bfeed_card%5D%5Bcard_position%5D=4&amp;payload%5Bfeed_card%5D%5Bcard_retrieved_id%5D=2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&amp;payload%5Bfeed_card%5D%5Bcard_sub_position%5D=&amp;payload%5Bfeed_card%5D%5Bcard_type%5D=FOLLOW&amp;payload%5Bfeed_card%5D%5Bcreated_at%5D=2025-01-06+21%3A15%3A42+-0800&amp;payload%5Bfeed_card%5D%5Bgatherer%5D=user&amp;payload%5Bfeed_card%5D%5Branking_model_id%5D=chronological&amp;payload%5Bfeed_card%5D%5Brecord_id%5D=39672672&amp;payload%5Bfeed_card%5D%5Bresource_id%5D=44053202&amp;payload%5Bfeed_card%5D%5Bresource_relationship%5D=followed&amp;payload%5Bfeed_card%5D%5Bresource_type%5D=USER&amp;payload%5Bfeed_card%5D%5Bvariant%5D=%7B%7D&amp;payload%5Bmetadata%5D%5Bclicked_resource_id%5D=39672672&amp;payload%5Bmetadata%5D%5Bclicked_resource_type%5D=USER&amp;payload%5Boriginal_request_id%5D=6ABF%3AB6243%3A26C236%3A2F7A3C%3A677CC3A7" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Rishit-dagli" data-view-component="true" className="Link d-block">
          {/* <img src="https://avatars.githubusercontent.com/u/39672672?s=96&amp;v=4" alt="@Rishit-dagli profile" size="48" height="48" width="48" data-view-component="true" className="feed-item-user-avatar avatar circle box-shadow-none"></img>
           */}
          <img 
  src="https://avatars.githubusercontent.com/u/39672672?s=96&amp;v=4" 
  alt="@Rishit-dagli profile" 
  height="48" 
  width="48" 
  data-view-component="true" 
  className="feed-item-user-avatar avatar circle box-shadow-none" 
/>
</a>
          <div className="ml-2">
            <p className="css-truncate text-bold wb-break-all m-0">
              <a data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;feed_user_link&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;metadata&quot;:{&quot;clicked_resource_type&quot;:&quot;USER&quot;,&quot;clicked_resource_id&quot;:39672672},&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="03ec8bcf1c360f8a58bb14636519040264e7fa8309f53fc8de53845452d0d76b" data-hovercard-type="user" data-hovercard-url="/users/Rishit-dagli/hovercard?event_type=feeds.feed_click&amp;hover_target=feed_user_login&amp;payload%5Bfeed_card%5D%5Bassignment_context%5D=c-cb738117%3A109742%3Bjccid629%3A115315%3B79878423%3A116832%3B6cha1124%3A143780%3B4h1jc170%3A184406%3B&amp;payload%5Bfeed_card%5D%5Bcard_position%5D=4&amp;payload%5Bfeed_card%5D%5Bcard_retrieved_id%5D=2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&amp;payload%5Bfeed_card%5D%5Bcard_sub_position%5D=&amp;payload%5Bfeed_card%5D%5Bcard_type%5D=FOLLOW&amp;payload%5Bfeed_card%5D%5Bcreated_at%5D=2025-01-06+21%3A15%3A42+-0800&amp;payload%5Bfeed_card%5D%5Bgatherer%5D=user&amp;payload%5Bfeed_card%5D%5Branking_model_id%5D=chronological&amp;payload%5Bfeed_card%5D%5Brecord_id%5D=39672672&amp;payload%5Bfeed_card%5D%5Bresource_id%5D=44053202&amp;payload%5Bfeed_card%5D%5Bresource_relationship%5D=followed&amp;payload%5Bfeed_card%5D%5Bresource_type%5D=USER&amp;payload%5Bfeed_card%5D%5Bvariant%5D=%7B%7D&amp;payload%5Bmetadata%5D%5Bclicked_resource_id%5D=39672672&amp;payload%5Bmetadata%5D%5Bclicked_resource_type%5D=USER&amp;payload%5Boriginal_request_id%5D=6ABF%3AB6243%3A26C236%3A2F7A3C%3A677CC3A7" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/Rishit-dagli" data-view-component="true" className="Link--primary Link text-bold">Rishit Dagli</a>
              <span data-view-component="true" className="color-fg-muted text-normal">Rishit-dagli</span>
            </p>
              <div className="m-0 mt-1 wb-break-all"><div>CS + Math <a className="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/UofT/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/UofT">@UofT</a> |
AI Research, Qualcomm |
Research ML, Vision  UofT, Vector |
RT <a className="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/kubernetes/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/kubernetes">@kubernetes</a> 1.26-9</div></div>

              <p className="m-0 mt-1 color-fg-muted">
                  <span className="mr-3">
                    106
                    repositories
                  </span>
                  <span>
                    891
                    followers
                  </span>
              </p>
          </div>
        </div>

        <div className="ml-1">
          
{/* <span className="user-following-container js-form-toggle-container">
     <!-- '"` --><!-- </textarea></xmp> --> 
    <form className="js-form-toggle-target" data-sr-feedback="You are following Rishit-dagli" data-turbo="false" action="/users/follow?target=Rishit-dagli" accept-charset="UTF-8" method="post" hidden=""><input type="hidden" name="authenticity_token" value="JodqzEyzLBXuymirb0_UYousEn4-PCoRC2oVdnJcD7PhXgLGtiMCx7JqSAYjcENt3axB03RDq5zMwrfL7Eg74w">
      <input type="submit" name="commit" value="Follow" className="btn btn-sm" title="Follow Rishit-dagli" aria-label="Follow Rishit-dagli" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Follow">
</form>
   <!-- '"` --><!-- </textarea></xmp> --> 
  <form className="js-form-toggle-target" data-sr-feedback="You are unfollowing Rishit-dagli" data-turbo="false" action="/users/unfollow?target=Rishit-dagli" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="DVmoX7Y9dBK9A0ZB1JcSEI8Qy0iFgS0NXJCLXk-PaNoH4quScA5OP-LwYDfMJoA4aYkK3zf03rFiVwsB65j9Dw">
    <input type="submit" name="commit" value="Unfollow" className="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Unfollow" title="Unfollow Rishit-dagli" aria-label="Unfollow Rishit-dagli">
</form>  </span> */}


<span className="user-following-container js-form-toggle-container">
    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
    <form className="js-form-toggle-target" data-sr-feedback="You are following Rishit-dagli" data-turbo="false" action="/users/follow?target=Rishit-dagli" acceptCharset="UTF-8" method="post" hidden>
        <input type="hidden" name="authenticity_token" value="JodqzEyzLBXuymirb0_UYousEn4-PCoRC2oVdnJcD7PhXgLGtiMCx7JqSAYjcENt3axB03RDq5zMwrfL7Eg74w" />
        <input type="submit" name="commit" value="Follow" className="btn btn-sm" title="Follow Rishit-dagli" aria-label="Follow Rishit-dagli" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Follow" />
    </form>
    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
    <form className="js-form-toggle-target" data-sr-feedback="You are unfollowing Rishit-dagli" data-turbo="false" action="/users/unfollow?target=Rishit-dagli" acceptCharset="UTF-8" method="post">
        <input type="hidden" name="authenticity_token" value="DVmoX7Y9dBK9A0ZB1JcSEI8Qy0iFgS0NXJCLXk-PaNoH4quScA5OP-LwYDfMJoA4aYkK3zf03rFiVwsB65j9Dw" />
        <input type="submit" name="commit" value="Unfollow" className="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Unfollow" title="Unfollow Rishit-dagli" aria-label="Unfollow Rishit-dagli" />
    </form>
</span>


        </div>
      </div>
</section>
</div>



<div id="@Alexandre_Mutel">

<a href="#@Alexandre_Mutel" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              @Alexandre_Mutel </span>
              {/* <span className="p-nickname vcard-username d-block"></span> */}
            </h1>
            <h3><div>Director C#/.NET Tech Group at Unity, OSS, lang/compilers, GPU/sound, architecture 🏎️
Microsoft MVP, ex-demoscene PC/Amiga 🎆
Veggie 🌿, opinions are my own.</div></h3>
          </a>
</div>

<h3>
  <a href="https://x.com/nietras1/following" target="_blank" rel="noopener noreferrer">
    Followings of @nietras1 on X
  </a>
</h3>


<div className="css-175oi2r r-1iusvr4 r-16y2uox">
  <div className="css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep">
    <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
      <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
        <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
          <a href="https://x.com/xoofx" role="link" className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
            <div className="css-175oi2r r-1awozwy r-18u37iz r-dnmrzs">
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Alexandre Mutel ▶ https://mastodon.social/@xoofx</span>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-9iso6" style={{ textOverflow: 'unset' }}></span>
                </span>
              </div>
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1awozwy r-xoduu5" style={{ textOverflow: 'unset' }}>
                  {/* Updated SVG size */}
                  <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified" style={{ width: '16px', height: '16px' }}>
                    <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2">
          <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
            <a href="https://x.com/xoofx" role="link" 
            // tabIndex="-1" 
            className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
              <div className="css-175oi2r">
                <div dir="ltr" className="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978" style={{ textOverflow: 'unset', color: 'rgb(83, 100, 113)' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>@xoofx</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="css-175oi2r r-1cwvpvk" style={{ minWidth: '0px' }}>
      <button aria-describedby="id__wcoj9flt6h" aria-label="Follow @_Jaivardhan_" role="button" className="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" data-testid="731230526778970112-follow" type="button" style={{ backgroundColor: 'rgb(15, 20, 25)', borderColor: 'rgba(0, 0, 0, 0)' }}>
        <div dir="ltr" className="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style={{ textOverflow: 'unset', color: 'rgb(255, 255, 255)' }}>
          <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1b43r93 r-1cwl3u0" style={{ textOverflow: 'unset' }}>
            <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Follow</span>
          </span>
        </div>
      </button>
    </div>
    <div dir="auto" className="css-146c3p1" id="id__wcoj9flt6h" style={{ display: 'none' }}>
      Click to Follow nietras1
    </div>
  </div>
</div>

<div>
  
  
  
  <section aria-label="card content" data-view-component="true" className="mt-0">       
     <div className="d-flex color-bg-subtle rounded-1 flex-justify-between p-3">
        <div className="d-flex">
          <a data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;avatar&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;metadata&quot;:{&quot;clicked_resource_type&quot;:&quot;USER&quot;,&quot;clicked_resource_id&quot;:39672672},&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="3d157f5bd2d7b8717fe26a1be53aea1739fdce9b4de42cb7541db64bd93f260e" data-hovercard-type="user" data-hovercard-url="/users/Rishit-dagli/hovercard?event_type=feeds.feed_click&amp;hover_target=feed_user_avatar&amp;payload%5Bfeed_card%5D%5Bassignment_context%5D=c-cb738117%3A109742%3Bjccid629%3A115315%3B79878423%3A116832%3B6cha1124%3A143780%3B4h1jc170%3A184406%3B&amp;payload%5Bfeed_card%5D%5Bcard_position%5D=4&amp;payload%5Bfeed_card%5D%5Bcard_retrieved_id%5D=2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&amp;payload%5Bfeed_card%5D%5Bcard_sub_position%5D=&amp;payload%5Bfeed_card%5D%5Bcard_type%5D=FOLLOW&amp;payload%5Bfeed_card%5D%5Bcreated_at%5D=2025-01-06+21%3A15%3A42+-0800&amp;payload%5Bfeed_card%5D%5Bgatherer%5D=user&amp;payload%5Bfeed_card%5D%5Branking_model_id%5D=chronological&amp;payload%5Bfeed_card%5D%5Brecord_id%5D=39672672&amp;payload%5Bfeed_card%5D%5Bresource_id%5D=44053202&amp;payload%5Bfeed_card%5D%5Bresource_relationship%5D=followed&amp;payload%5Bfeed_card%5D%5Bresource_type%5D=USER&amp;payload%5Bfeed_card%5D%5Bvariant%5D=%7B%7D&amp;payload%5Bmetadata%5D%5Bclicked_resource_id%5D=39672672&amp;payload%5Bmetadata%5D%5Bclicked_resource_type%5D=USER&amp;payload%5Boriginal_request_id%5D=6ABF%3AB6243%3A26C236%3A2F7A3C%3A677CC3A7" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Rishit-dagli" data-view-component="true" className="Link d-block">
          {/* <img src="https://avatars.githubusercontent.com/u/39672672?s=96&amp;v=4" alt="@Rishit-dagli profile" size="48" height="48" width="48" data-view-component="true" className="feed-item-user-avatar avatar circle box-shadow-none"></img>
           */}
          <img 
  src="https://avatars.githubusercontent.com/u/715038?v=4" 
  alt="@xoofx profile" 
  height="48" 
  width="48" 
  data-view-component="true" 
  className="feed-item-user-avatar avatar circle box-shadow-none mb-2" 
/>
</a>
          <div className="ml-2 mb-2">
            <p className="css-truncate text-bold wb-break-all m-0">
              <a data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;feed_user_link&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;metadata&quot;:{&quot;clicked_resource_type&quot;:&quot;USER&quot;,&quot;clicked_resource_id&quot;:39672672},&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="03ec8bcf1c360f8a58bb14636519040264e7fa8309f53fc8de53845452d0d76b" data-hovercard-type="user" data-hovercard-url="/users/Rishit-dagli/hovercard?event_type=feeds.feed_click&amp;hover_target=feed_user_login&amp;payload%5Bfeed_card%5D%5Bassignment_context%5D=c-cb738117%3A109742%3Bjccid629%3A115315%3B79878423%3A116832%3B6cha1124%3A143780%3B4h1jc170%3A184406%3B&amp;payload%5Bfeed_card%5D%5Bcard_position%5D=4&amp;payload%5Bfeed_card%5D%5Bcard_retrieved_id%5D=2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&amp;payload%5Bfeed_card%5D%5Bcard_sub_position%5D=&amp;payload%5Bfeed_card%5D%5Bcard_type%5D=FOLLOW&amp;payload%5Bfeed_card%5D%5Bcreated_at%5D=2025-01-06+21%3A15%3A42+-0800&amp;payload%5Bfeed_card%5D%5Bgatherer%5D=user&amp;payload%5Bfeed_card%5D%5Branking_model_id%5D=chronological&amp;payload%5Bfeed_card%5D%5Brecord_id%5D=39672672&amp;payload%5Bfeed_card%5D%5Bresource_id%5D=44053202&amp;payload%5Bfeed_card%5D%5Bresource_relationship%5D=followed&amp;payload%5Bfeed_card%5D%5Bresource_type%5D=USER&amp;payload%5Bfeed_card%5D%5Bvariant%5D=%7B%7D&amp;payload%5Bmetadata%5D%5Bclicked_resource_id%5D=39672672&amp;payload%5Bmetadata%5D%5Bclicked_resource_type%5D=USER&amp;payload%5Boriginal_request_id%5D=6ABF%3AB6243%3A26C236%3A2F7A3C%3A677CC3A7" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/xoofx" data-view-component="true" className="Link--primary Link text-bold">xoofx </a>
              <span data-view-component="true" className="color-fg-muted text-normal mb-2 mt-2">Alexandre Mutel</span>
            </p>
              {/* <div className="m-0 mt-1 wb-break-all"><div>CS + Math <a className="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/UofT/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/UofT">@UofT</a> |
AI Research, Qualcomm |
Research ML, Vision  UofT, Vector |
RT <a className="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/kubernetes/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/kubernetes">@kubernetes</a> 1.26-9</div></div> */}

<div>Director C#/.NET Tech Group at Unity, OSS, lang/compilers, GPU/sound, architecture 🏎️
Microsoft MVP, ex-demoscene PC/Amiga 🎆
Veggie 🌿, opinions are my own.</div>

              <p className="m-0 mt-1 color-fg-muted">
                  <span className="mr-3">
                    88
                    repositories
                  </span>
                  <span>
                    1.4k
                    followers
                  </span>
              </p>
          </div>
        </div>

        <div className="ml-1">
          
{/* <span className="user-following-container js-form-toggle-container">
     <!-- '"` --><!-- </textarea></xmp> --> 
    <form className="js-form-toggle-target" data-sr-feedback="You are following Rishit-dagli" data-turbo="false" action="/users/follow?target=Rishit-dagli" accept-charset="UTF-8" method="post" hidden=""><input type="hidden" name="authenticity_token" value="JodqzEyzLBXuymirb0_UYousEn4-PCoRC2oVdnJcD7PhXgLGtiMCx7JqSAYjcENt3axB03RDq5zMwrfL7Eg74w">
      <input type="submit" name="commit" value="Follow" className="btn btn-sm" title="Follow Rishit-dagli" aria-label="Follow Rishit-dagli" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Follow">
</form>
   <!-- '"` --><!-- </textarea></xmp> --> 
  <form className="js-form-toggle-target" data-sr-feedback="You are unfollowing Rishit-dagli" data-turbo="false" action="/users/unfollow?target=Rishit-dagli" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="DVmoX7Y9dBK9A0ZB1JcSEI8Qy0iFgS0NXJCLXk-PaNoH4quScA5OP-LwYDfMJoA4aYkK3zf03rFiVwsB65j9Dw">
    <input type="submit" name="commit" value="Unfollow" className="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Unfollow" title="Unfollow Rishit-dagli" aria-label="Unfollow Rishit-dagli">
</form>  </span> */}


<span className="user-following-container js-form-toggle-container">
    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
    <form className="js-form-toggle-target" data-sr-feedback="You are following Rishit-dagli" data-turbo="false" action="/users/follow?target=Rishit-dagli" acceptCharset="UTF-8" method="post" hidden>
        <input type="hidden" name="authenticity_token" value="JodqzEyzLBXuymirb0_UYousEn4-PCoRC2oVdnJcD7PhXgLGtiMCx7JqSAYjcENt3axB03RDq5zMwrfL7Eg74w" />
        <input type="submit" name="commit" value="Follow" className="btn btn-sm" title="Follow Rishit-dagli" aria-label="Follow Rishit-dagli" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Follow" />
    </form>
    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
    <form className="js-form-toggle-target" data-sr-feedback="You are unfollowing Rishit-dagli" data-turbo="false" action="/users/unfollow?target=Rishit-dagli" acceptCharset="UTF-8" method="post">
        <input type="hidden" name="authenticity_token" value="DVmoX7Y9dBK9A0ZB1JcSEI8Qy0iFgS0NXJCLXk-PaNoH4quScA5OP-LwYDfMJoA4aYkK3zf03rFiVwsB65j9Dw" />
        <input type="submit" name="commit" value="Unfollow" className="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Unfollow" title="Unfollow Rishit-dagli" aria-label="Unfollow Rishit-dagli" />
    </form>
</span>


        </div>
      </div>
</section>
</div>

<h2 className="year" id="2018">
      2023
      <a
        className="anchorjs-link"
        aria-label="Anchor"
        data-anchorjs-icon=""
        href="#2018"
        style={{
          font: '1em / 1 anchorjs-icons',
          marginLeft: '0.1875em',
          paddingRight: '0.1875em',
          paddingLeft: '0.1875em',
        }}
      ></a>
    </h2>
<li 
// className="prefix-Alexandre-Mutel"
>
  <a href="https://xoofx.github.io/blog/2023/07/09/10x-performance-with-simd-in-csharp-dotnet">10x Performance with SIMD Vectorized Code in C#/.NET</a>
  <span className="blog-post-meta">
    - <span className="date"><time 
    // datetime="2023-07-09" itemprop="datePublished"
    >Jul 9</time></span>
    <i className="bi bi-tags"></i><a href="/blog/tag/csharp/" className="prefix-Alexandre-Mutel">C#</a>, <a href="/blog/tag/net/" className="prefix-Alexandre-Mutel">.NET</a>, <a href="/blog/tag/x86/" className="prefix-Alexandre-Mutel">x86</a>, <a href="/blog/tag/assembler/" className="prefix-Alexandre-Mutel">assembler</a>
  </span>
  <span className="subtitle">Use your CPU at its full width!</span>
</li>
<h2 className="year" id="2018">
      2020
      <a
        className="anchorjs-link"
        aria-label="Anchor"
        data-anchorjs-icon=""
        href="#2018"
        style={{
          font: '1em / 1 anchorjs-icons',
          marginLeft: '0.1875em',
          paddingRight: '0.1875em',
          paddingLeft: '0.1875em',
        }}
      ></a>
    </h2>
<ul>
        <li 
        // className="prefix-Alexandre-Mutel"
        >
          <a href="https://xoofx.github.io/blog/2020/03/21/stark-native-compiler">Stark - Native Compiler - Prototype 2019</a>
          <span className="blog-post-meta">
            - <span className="date"><time
            // datetime="2020-03-21" itemprop="datePublished"
            >Mar 21</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/stark/">Stark</a>, <a href="/blog/tag/melody/">Melody</a>, <a href="/blog/tag/os/">OS</a>, <a href="/blog/tag/compiler/">Compiler</a>, <a href="/blog/tag/llvm/">LLVM</a>, <a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>
          </span>
          <span className="subtitle">Development of an AOT native compiler using RyuJIT</span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2020/03/06/stark-language-frontend-compiler">Stark - Language And Frontend Compiler - Prototype 2019</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2020-03-06" itemprop="datePublished"
            >Mar  6</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/stark/">Stark</a>, <a href="/blog/tag/melody/">Melody</a>, <a href="/blog/tag/os/">OS</a>, <a href="/blog/tag/compiler/">Compiler</a>, <a href="/blog/tag/llvm/">LLVM</a>, <a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>
          </span>
          <span className="subtitle">Syntax of the language and the development of the front-end compiler</span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2020/03/05/stark-melody-dotnet-sel4">The Odyssey of Stark and Melody</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2020-03-05" itemprop="datePublished"
            >Mar  5</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/stark/">Stark</a>, <a href="/blog/tag/melody/">Melody</a>, <a href="/blog/tag/os/">OS</a>, <a href="/blog/tag/compiler/">Compiler</a>, <a href="/blog/tag/llvm/">LLVM</a>, <a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>
          </span>
          <span className="subtitle">Prototyping a new language and OS with the help of the .NET ecosystem and seL4 micro-kernel</span>
        </li>

      </ul>
    
      <h2 className="year" id="2018">
      2018
      <a
        className="anchorjs-link"
        aria-label="Anchor"
        data-anchorjs-icon=""
        href="#2018"
        style={{
          font: '1em / 1 anchorjs-icons',
          marginLeft: '0.1875em',
          paddingRight: '0.1875em',
          paddingLeft: '0.1875em',
        }}
      ></a>
    </h2>
      <ul>
        <li>
          <a href="https://xoofx.github.io/blog/2018/12/26/generate-async-from-sync-code-with-roslyn">Generate automatically async/await code from sync code with Roslyn</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2018-12-26" itemprop="datePublished"
             >Dec 26</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>, <a href="/blog/tag/roslyn/">Roslyn</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/04/12/writing-managed-jit-in-csharp-with-coreclr">Writing a Managed JIT in C# with CoreCLR</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
           // datetime="2018-04-12" itemprop="datePublished"
            >Apr 12</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>, <a href="/blog/tag/coreclr/">CoreCLR</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/04/06/porting-unity-to-coreclr">Porting the Unity Engine to .NET CoreCLR</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2018-04-06" itemprop="datePublished"
            >Apr  6</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/csharp/">C#</a>, <a href="/blog/tag/net/">.NET</a>, <a href="/blog/tag/coreclr/">CoreCLR</a>, <a href="/blog/tag/unity/">Unity</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/03/09/productivity-with-resharper">Productivity with ReSharper</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2018-03-09" itemprop="datePublished"
            >Mar  9</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/visual-studio/">Visual Studio</a>, <a href="/blog/tag/visual-studio-2015/">Visual Studio 2015</a>, <a href="/blog/tag/roslyn/">Roslyn</a>
          </span>
        </li>

      </ul>
      <h2 className="year" id="2009">
  2009
  <a
    className="anchorjs-link"
    aria-label="Anchor"
    data-anchorjs-icon=""
    href="#2009"
    style={{
      font: '1em / 1 anchorjs-icons',
      marginLeft: '0.1875em',
      paddingRight: '0.1875em',
      paddingLeft: '0.1875em',
    }}
  />
</h2>
<ul>
<li>
          <a href="https://xoofx.github.io/blog/2009/10/25/random-float-number-using-x86-asm-code.html">Random float number generator using x86 ASM code optimized in size</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2009-10-25" itemprop="datePublished"
            >Oct 25</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/assembler/">assembler</a>, <a href="/blog/tag/x86/">x86</a>
          </span>
        </li>

      </ul>
<div id="Bishal_Santra">
  
  
  
  <section aria-label="card content" data-view-component="true" className="mt-0">       
     <div className="d-flex color-bg-subtle rounded-1 flex-justify-between p-3">
        <div className="d-flex">
          <a data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;avatar&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;metadata&quot;:{&quot;clicked_resource_type&quot;:&quot;USER&quot;,&quot;clicked_resource_id&quot;:39672672},&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="3d157f5bd2d7b8717fe26a1be53aea1739fdce9b4de42cb7541db64bd93f260e" data-hovercard-type="user" data-hovercard-url="/users/Rishit-dagli/hovercard?event_type=feeds.feed_click&amp;hover_target=feed_user_avatar&amp;payload%5Bfeed_card%5D%5Bassignment_context%5D=c-cb738117%3A109742%3Bjccid629%3A115315%3B79878423%3A116832%3B6cha1124%3A143780%3B4h1jc170%3A184406%3B&amp;payload%5Bfeed_card%5D%5Bcard_position%5D=4&amp;payload%5Bfeed_card%5D%5Bcard_retrieved_id%5D=2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&amp;payload%5Bfeed_card%5D%5Bcard_sub_position%5D=&amp;payload%5Bfeed_card%5D%5Bcard_type%5D=FOLLOW&amp;payload%5Bfeed_card%5D%5Bcreated_at%5D=2025-01-06+21%3A15%3A42+-0800&amp;payload%5Bfeed_card%5D%5Bgatherer%5D=user&amp;payload%5Bfeed_card%5D%5Branking_model_id%5D=chronological&amp;payload%5Bfeed_card%5D%5Brecord_id%5D=39672672&amp;payload%5Bfeed_card%5D%5Bresource_id%5D=44053202&amp;payload%5Bfeed_card%5D%5Bresource_relationship%5D=followed&amp;payload%5Bfeed_card%5D%5Bresource_type%5D=USER&amp;payload%5Bfeed_card%5D%5Bvariant%5D=%7B%7D&amp;payload%5Bmetadata%5D%5Bclicked_resource_id%5D=39672672&amp;payload%5Bmetadata%5D%5Bclicked_resource_type%5D=USER&amp;payload%5Boriginal_request_id%5D=6ABF%3AB6243%3A26C236%3A2F7A3C%3A677CC3A7" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Rishit-dagli" data-view-component="true" className="Link d-block">
          {/* <img src="https://avatars.githubusercontent.com/u/39672672?s=96&amp;v=4" alt="@Rishit-dagli profile" size="48" height="48" width="48" data-view-component="true" className="feed-item-user-avatar avatar circle box-shadow-none"></img>
           */}
          <img 
  src="https://avatars.githubusercontent.com/u/6783945?v=4" 
  alt="@xoofx profile" 
  height="48" 
  width="48" 
  data-view-component="true" 
  className="feed-item-user-avatar avatar circle box-shadow-none" 
/>
</a>
          <div className="ml-2">
            <p className="css-truncate text-bold wb-break-all m-0">
              <a data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;feed_user_link&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;metadata&quot;:{&quot;clicked_resource_type&quot;:&quot;USER&quot;,&quot;clicked_resource_id&quot;:39672672},&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="03ec8bcf1c360f8a58bb14636519040264e7fa8309f53fc8de53845452d0d76b" data-hovercard-type="user" data-hovercard-url="/users/Rishit-dagli/hovercard?event_type=feeds.feed_click&amp;hover_target=feed_user_login&amp;payload%5Bfeed_card%5D%5Bassignment_context%5D=c-cb738117%3A109742%3Bjccid629%3A115315%3B79878423%3A116832%3B6cha1124%3A143780%3B4h1jc170%3A184406%3B&amp;payload%5Bfeed_card%5D%5Bcard_position%5D=4&amp;payload%5Bfeed_card%5D%5Bcard_retrieved_id%5D=2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&amp;payload%5Bfeed_card%5D%5Bcard_sub_position%5D=&amp;payload%5Bfeed_card%5D%5Bcard_type%5D=FOLLOW&amp;payload%5Bfeed_card%5D%5Bcreated_at%5D=2025-01-06+21%3A15%3A42+-0800&amp;payload%5Bfeed_card%5D%5Bgatherer%5D=user&amp;payload%5Bfeed_card%5D%5Branking_model_id%5D=chronological&amp;payload%5Bfeed_card%5D%5Brecord_id%5D=39672672&amp;payload%5Bfeed_card%5D%5Bresource_id%5D=44053202&amp;payload%5Bfeed_card%5D%5Bresource_relationship%5D=followed&amp;payload%5Bfeed_card%5D%5Bresource_type%5D=USER&amp;payload%5Bfeed_card%5D%5Bvariant%5D=%7B%7D&amp;payload%5Bmetadata%5D%5Bclicked_resource_id%5D=39672672&amp;payload%5Bmetadata%5D%5Bclicked_resource_type%5D=USER&amp;payload%5Boriginal_request_id%5D=6ABF%3AB6243%3A26C236%3A2F7A3C%3A677CC3A7" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/bsantraigi/" data-view-component="true" className="Link--primary Link text-bold">Bishal Santra </a>
              <span data-view-component="true" className="color-fg-muted text-normal">Bishal Santra</span>
            </p>
            <div>Research Engineer <a className="user-mention notranslate" data-hovercard-type="organization" data-hovercard-url="/orgs/microsoft/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/microsoft">@microsoft</a> Research India | 
            Working on Language Modeling for Retrieval | IIT KGP</div>

              <p className="m-0 mt-1 color-fg-muted">
                  <span className="mr-3">
                    103
                    repositories
                  </span>
                  <span>
                    36
                    followers
                  </span>
              </p>
          </div>
        </div>

        <div className="ml-1">
          
{/* <span className="user-following-container js-form-toggle-container">
     <!-- '"` --><!-- </textarea></xmp> --> 
    <form className="js-form-toggle-target" data-sr-feedback="You are following Rishit-dagli" data-turbo="false" action="/users/follow?target=Rishit-dagli" accept-charset="UTF-8" method="post" hidden=""><input type="hidden" name="authenticity_token" value="JodqzEyzLBXuymirb0_UYousEn4-PCoRC2oVdnJcD7PhXgLGtiMCx7JqSAYjcENt3axB03RDq5zMwrfL7Eg74w">
      <input type="submit" name="commit" value="Follow" className="btn btn-sm" title="Follow Rishit-dagli" aria-label="Follow Rishit-dagli" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Follow">
</form>
   <!-- '"` --><!-- </textarea></xmp> --> 
  <form className="js-form-toggle-target" data-sr-feedback="You are unfollowing Rishit-dagli" data-turbo="false" action="/users/unfollow?target=Rishit-dagli" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="DVmoX7Y9dBK9A0ZB1JcSEI8Qy0iFgS0NXJCLXk-PaNoH4quScA5OP-LwYDfMJoA4aYkK3zf03rFiVwsB65j9Dw">
    <input type="submit" name="commit" value="Unfollow" className="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Unfollow" title="Unfollow Rishit-dagli" aria-label="Unfollow Rishit-dagli">
</form>  </span> */}


<span className="user-following-container js-form-toggle-container">
    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
    <form className="js-form-toggle-target" data-sr-feedback="You are following Rishit-dagli" data-turbo="false" action="/users/follow?target=Rishit-dagli" acceptCharset="UTF-8" method="post" hidden>
        <input type="hidden" name="authenticity_token" value="JodqzEyzLBXuymirb0_UYousEn4-PCoRC2oVdnJcD7PhXgLGtiMCx7JqSAYjcENt3axB03RDq5zMwrfL7Eg74w" />
        <input type="submit" name="commit" value="Follow" className="btn btn-sm" title="Follow Rishit-dagli" aria-label="Follow Rishit-dagli" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Follow" />
    </form>
    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
    <form className="js-form-toggle-target" data-sr-feedback="You are unfollowing Rishit-dagli" data-turbo="false" action="/users/unfollow?target=Rishit-dagli" acceptCharset="UTF-8" method="post">
        <input type="hidden" name="authenticity_token" value="DVmoX7Y9dBK9A0ZB1JcSEI8Qy0iFgS0NXJCLXk-PaNoH4quScA5OP-LwYDfMJoA4aYkK3zf03rFiVwsB65j9Dw" />
        <input type="submit" name="commit" value="Unfollow" className="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Unfollow" title="Unfollow Rishit-dagli" aria-label="Unfollow Rishit-dagli" />
    </form>
</span>


        </div>
      </div>
</section>



        <ul className="bishal-santra-post-list">
  <li>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="bishal-santra-post-meta">Aug 12, 2023</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/blog/2023/08/12/llm-channel-method-flaw.html">
        Explaining Issues with Channel Method in LLM Prompt-based Classification
      </a>
    </h3>
    </div>
  </li>
  <li>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span className="bishal-santra-post-meta" style={{ marginRight: '10px' }}>Aug 12, 2023</span>
    <h3 style={{ margin: '0' }}>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/blog/2023/08/12/llm-channel-method-flaw.html">
        Explaining Issues with Channel Method in LLM Prompt-based Classification
      </a>
    </h3>
  </div>
</li>

  <li>
    <span className="bishal-santra-post-meta">Feb 11, 2023</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/blog/2023/02/11/2022-02-11-algebraic-numbers-countable-proof.html">
        Prove that the set of algebraic numbers are countable (using primes)
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Feb 10, 2023</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/blog/2023/02/10/2023-02-10-sum-1-by-n-divergent.html">
        Is ∑<sub>i=1</sub><sup>n</sup> 1/n divergent?
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Oct 7, 2021</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2021/10/07/how-to-ssh-jump-cnerg.html">
        How to Connect through an SSH Jump Server (For CNeRG project students)
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Oct 26, 2019</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2019/10/26/transformer-language-models-and-pretraining.html">
        Transformer Language Models and Pretraining
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Aug 31, 2019</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2019/08/31/english-to-hindi-transliteration-using-seq2seq-model.html">
        English to Hindi Transliteration using Seq2Seq Model
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Aug 31, 2019</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2019/08/31/deep-sentiment-analysis.html">
        Deep Sentiment Analysis
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Jul 13, 2019</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/2019/07/13/text-classification-using-naive-bayes-method.html">
        Text Classification using Naive Bayes Method
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Jul 8, 2019</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2019/07/08/training-xtra-small-transformer-language-model.html">
        Training a Language Model with a Xtra-Small Transformer (Transformer-XS)
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Jul 7, 2019</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2019/07/07/simple-reddit-dialogue-preprocessor.html">
        Simple Reddit Dialogue Preprocessor
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Jul 3, 2019</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2019/07/03/how-i-made-this-site.html">
        How I created this site using Jekyll?
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Jan 12, 2017</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2017/01/12/generating-gamma-rv-cuda.html">
        Generating Gamma Random Variable in CUDA in Parallel
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Aug 6, 2016</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2016/08/06/mmse-estimator.html">
        Minimum Mean Squared Error (MMSE) Estimator
      </a>
    </h3>
  </li>
  <li>
    <span className="bishal-santra-post-meta">Mar 14, 2016</span>
    <h3>
      <a className="bishal-santra-post-link" href="https://bsantraigi.github.io/tutorial/2016/03/14/decycledjson.html">
        DecycledJSON - Circular reference breakers for JSON
      </a>
    </h3>
  </li>
</ul>




</div>


<div id="@Charlie_Marsh">

<h1 style={{ fontSize: '80px', marginTop: '0.5em', marginBottom: '0' }}>
      <a className="implicit" href="https://www.crmarsh.com/">
        Charlie Marsh
      </a>
    </h1>

<h2 style={{ fontWeight: 'normal', marginTop: '0.5em', lineHeight: '1.4' }}>
      Building{' '}
      <b>
        <a target="_blank" rel="noopener noreferrer" href="https://astral.sh">
          Astral
        </a>
      </b>
      : high-performance tools for Python, starting with{' '}
      <b>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/charliermarsh/ruff">
          Ruff
        </a>
      </b>
      .
      <br />
      <br />
      In the past: Staff software engineer at{' '}
      <b>
        <a target="_blank" rel="noopener noreferrer" href="https://www.springdiscovery.com">
          Spring Discovery
        </a>
      </b>
      , senior engineer at{' '}
      <b>
        <a target="_blank" rel="noopener noreferrer" href="https://www.khanacademy.org">
          Khan Academy
        </a>
      </b>
      , and Computer Science major at <b>Princeton</b>.
      <br />
      <br />
      These days, I write on{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://notes.crmarsh.com/">
        Notion
      </a>
      .
      <br />
      <br />
      Check out some of my public projects:
    </h2>

    <CharlieMarsh_PublicProjects />

<CharlieMarshNotionArticle />

{/* <article id="block-6d52b13d76774644b6424d22b79d7ea1" className="notion-root max-width has-footer">
  <p id="block-d16f6052f7f2490d84d90e313df30d1a" className="notion-text notion-text__content notion-semantic-string">Hi, I&#39;m <a href="https://www.crmarsh.com/" className="notion-link link" target="_blank" rel="noopener noreferrer">Charlie Marsh</a>.</p>
  <div id="block-faa963b710ea4dd7ad3ddd8b9c7f0735" className="notion-text"></div>
  <p id="block-14d8a36b9fe8467d9f7a4877ef596fdc" className="notion-text notion-text__content notion-semantic-string">I&#39;m building high-performance developer tools for Python, starting with <a href="https://github.com/charliermarsh/ruff" className="notion-link link" target="_blank" rel="noopener noreferrer">Ruff</a>, an extremely fast Python linter written in Rust.</p>
  <div id="block-4e8cb5d4688b44f3a5b76f567d06650a" class="notion-text"></div>
  <p id="block-09e4ccc0bcbf43f98e5991be767e4fd8" class="notion-text notion-text__content notion-semantic-string">I was most recently a staff software engineer at <a href="https://www.springdiscovery.com/" class="notion-link link" target="_blank" rel="noopener noreferrer">Spring Discovery</a>. Before that, I was a senior software engineer at <a href="https://www.khanacademy.org/" class="notion-link link" target="_blank" rel="noopener noreferrer">Khan Academy</a>.</p>
  <div id="block-a8de7fd07b2b476fa13f9c7b5655566e" class="notion-text"></div>
  <p id="block-3e79c0b321a94f82b834418b2c840a5a" class="notion-text notion-text__content notion-semantic-string">This is a collection of notes and blog posts I’ve written on Notion:</p>
  <a id="block-using-mypy-in-production-at-spring" class="notion-link notion-page emoji" href="/using-mypy-in-production-at-spring"><span class="notion-page__icon"><span class="notion-icon text" style="width:20px;height:20px;font-size:20px;fill:var(--color-text-default-light)">🐍</span></span>
  <span class="notion-page__title notion-semantic-string">Using Mypy in production at Spring</span></a><a id="block-whats-webassembly" class="notion-link notion-page emoji" href="/whats-webassembly"><span class="notion-page__icon"><span class="notion-icon text" style="width:20px;height:20px;font-size:20px;fill:var(--color-text-default-light)">🌐</span></span><span class="notion-page__title notion-semantic-string">What’s WebAssembly?</span></a><a id="block-python-tooling-could-be-much-much-faster" class="notion-link notion-page emoji" href="/python-tooling-could-be-much-much-faster">
  <span class="notion-page__icon"><span class="notion-icon text" style="width:20px;height:20px;font-size:20px;fill:var(--color-text-default-light)">🛠️</span></span>
  <span class="notion-page__title notion-semantic-string">Python tooling could be much, much faster</span></a>
  <a id="block-building-large-language-model-powered-applications" class="notion-link notion-page emoji" href="/building-large-language-model-powered-applications"><span class="notion-page__icon"><span class="notion-icon text" style="width:20px;height:20px;font-size:20px;fill:var(--color-text-default-light)">🤖</span></span><span class="notion-page__title notion-semantic-string">Building large language model-powered applications</span></a><a id="block-isolates-microvms-and-webassembly" class="notion-link notion-page emoji" href="/isolates-microvms-and-webassembly"><span class="notion-page__icon"><span class="notion-icon text" style="width:20px;height:20px;font-size:20px;fill:var(--color-text-default-light)">☁️</span></span><span class="notion-page__title notion-semantic-string">Isolates, microVMs, and WebAssembly</span></a><a id="block-ruff-the-first-200-releases" class="notion-link notion-page emoji" href="/ruff-the-first-200-releases"><span class="notion-page__icon"><span class="notion-icon text" style="width:20px;height:20px;font-size:20px;fill:var(--color-text-default-light)">⚡</span></span><span class="notion-page__title notion-semantic-string">Ruff: The First 200 Releases</span></a>
  <div id="block-6794a992cb584bb8b74aa9ff339b404f" class="notion-text"></div>
  <p id="block-9fb5f04bf7274d309fb92d0001cf2e36" class="notion-text notion-text__content notion-semantic-string">You can find me on <a href="https://twitter.com/charliermarsh" class="notion-link link" target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
  <div id="block-3e5145177df04491ad1646c446e029af" class="notion-text"></div>
  <p id="block-4dbb17370d7a42cf8a5f9114b0f62494" class="notion-text notion-text__content notion-semantic-string">For older posts and projects, check out my <a href="https://www.crmarsh.com/" class="notion-link link" target="_blank" rel="noopener noreferrer">personal site</a>.</p><div id="block-6b7e97965ac9469791dfdc655481fbca" class="notion-text"></div>
  </article> */}

<CharlieMarsh_PostsList />
{/* 
<ul className="posts-list">
  <li><a target="_blank" href="https://engineering.khanacademy.org/posts/a-really-small-app.htm">Building a Really, Really Small Android App</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/test-plans">Writing a Reproducible Test Plan</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/code-review">Reviewing Code from Both Sides</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/configuring-robolectric">Getting up and Running with Robolectric</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/learning-android">Learning Android in a Production Setting</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/flow">Exploring Flow, Facebook's JavaScript Type Checker</a> (JavaScript Weekly)</li>
  <li><a target="_blank" href="https://www.crmarsh.com/script">Bitcoin Script: An In-Browser Playground</a> (Hacker News)</li>
  <li><a target="_blank" href="https://www.crmarsh.com/svg-performance">Speeding up SVGs with CSS Transforms at Khan Academy</a> (Hacker News)</li>
  <li><a target="_blank" href="https://www.crmarsh.com/react-ssr">Rendering React Components on the Server</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/pdf/Styling_React_Components.pdf">Styling React Components: How to Escape Selector Hell</a> (talk delivered @ Khan Academy)</li>
  <li><a target="_blank" href="https://www.toptal.com/python/python-class-attributes-an-overly-thorough-guide">An Overly Thorough Guide to Python Class Attributes</a> (Python Weekly)</li>
  <li><a target="_blank" href="https://www.toptal.com/python/computational-geometry-in-python-from-theory-to-implementation">A Primer on Computational Geometry in Python</a> (Python Weekly)</li>
  <li><a target="_blank" href="https://www.toptal.com/python/why-are-there-so-many-pythons">Why Are There So Many Pythons?</a> (Hacker News, Python Weekly, Pycoder's Weekly)</li><li><a target="_blank" href="/compiling-to-js">Compiling to JavaScript: A Case-by-Case Guide to the *Scripts</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/phantomjs">PhantomJS: Common Gotchas for Beginners</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/aws">The Idiot-Proof Guide to Setting up Your Personal AWS Instance</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/intro-to-sdn">An Introduction to Rule Optimization in Software Defined Networking</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/prefix-vs-ternary">Prefix vs. Ternary Rules in SDN</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/ocaml-dev-environment">Setting up an OCaml Environment on Mac OS X</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/programming-languages">Programming Languages and the Solutions they Suggest</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/intro-to-ocaml">First Thoughts on OCaml</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/streams">A Primer on Streams and Lazy Computation</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/binomial-heaps">Binomial Heaps: Merge Better</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/ios-performance">Performance Improvements in iOS</a></li>
  <li><a target="_blank" href="https://www.crmarsh.com/np-vs-not-p">NP != NOT P</a></li>
  </ul> */}


</div>

<div id="@kevin_frans">
<h1 style={{fontSize: '3em',
    marginTop: '-0.5em'}}>kevin frans website v5</h1>


<p className="desc">
            {/* <!-- Hi, I'm Kevin! I'm a second-year undergrad at MIT. In the past, I was a research intern at OpenAI on the reinforcement learning team, and I was at Autodesk Research working on AI to automate design. In my free time, I play a lot of weird games and build some of my own. --> */}
            Hey, I'm Kevin. I am a PhD student at <a href="https://bair.berkeley.edu/">BAIR</a> 
            advised by <a href="https://people.eecs.berkeley.edu/~pabbeel/">Pieter Abbeel</a> and 
            <a href="https://people.eecs.berkeley.edu/~svlevine/">Sergey Levine</a>. 
            I did my B.S. and M.Eng at MIT with <a href="http://web.mit.edu/phillipi/">Phillip Isola</a>. 
            I&nbsp;am&nbsp;interested in deep reinforcement learning, unsupervised learning, and AI-based creative tools. 
            I&nbsp;also lead engineering at <a href="https://paragraphai.com/">ParagraphAI</a>. I&nbsp;have spent time at 
            <a href="https://crosslabs.org">Cross Labs</a>, <a href="https://twitter.com/sizigistudios">Sizigi</a>, 
            <a href="https://www.autodeskresearch.com/">Autodesk Research</a>, and <a href="https://openai.com/">OpenAI</a>. 
            In&nbsp;my&nbsp;free&nbsp;time, I&nbsp;like to design and build&nbsp;<a href="https://store.steampowered.com/app/810780/RAIN_Project__a_touhou_fangame/">video</a>
            &nbsp;<a href="https://store.steampowered.com/app/1256660/Iwate_Mountain_Dance/">games</a>.</p>

            <KevinFransPostCard />

</div>


<div id="StathisKamperis">

    
<section aria-label="card content" data-view-component="true" className="mt-0">       
     <div className="d-flex color-bg-subtle rounded-1 flex-justify-between p-3">
        <div className="d-flex">
          <a data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;avatar&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;metadata&quot;:{&quot;clicked_resource_type&quot;:&quot;USER&quot;,&quot;clicked_resource_id&quot;:39672672},&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="3d157f5bd2d7b8717fe26a1be53aea1739fdce9b4de42cb7541db64bd93f260e" data-hovercard-type="user" data-hovercard-url="/users/Rishit-dagli/hovercard?event_type=feeds.feed_click&amp;hover_target=feed_user_avatar&amp;payload%5Bfeed_card%5D%5Bassignment_context%5D=c-cb738117%3A109742%3Bjccid629%3A115315%3B79878423%3A116832%3B6cha1124%3A143780%3B4h1jc170%3A184406%3B&amp;payload%5Bfeed_card%5D%5Bcard_position%5D=4&amp;payload%5Bfeed_card%5D%5Bcard_retrieved_id%5D=2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&amp;payload%5Bfeed_card%5D%5Bcard_sub_position%5D=&amp;payload%5Bfeed_card%5D%5Bcard_type%5D=FOLLOW&amp;payload%5Bfeed_card%5D%5Bcreated_at%5D=2025-01-06+21%3A15%3A42+-0800&amp;payload%5Bfeed_card%5D%5Bgatherer%5D=user&amp;payload%5Bfeed_card%5D%5Branking_model_id%5D=chronological&amp;payload%5Bfeed_card%5D%5Brecord_id%5D=39672672&amp;payload%5Bfeed_card%5D%5Bresource_id%5D=44053202&amp;payload%5Bfeed_card%5D%5Bresource_relationship%5D=followed&amp;payload%5Bfeed_card%5D%5Bresource_type%5D=USER&amp;payload%5Bfeed_card%5D%5Bvariant%5D=%7B%7D&amp;payload%5Bmetadata%5D%5Bclicked_resource_id%5D=39672672&amp;payload%5Bmetadata%5D%5Bclicked_resource_type%5D=USER&amp;payload%5Boriginal_request_id%5D=6ABF%3AB6243%3A26C236%3A2F7A3C%3A677CC3A7" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/Rishit-dagli" data-view-component="true" className="Link d-block">
          {/* <img src="https://avatars.githubusercontent.com/u/39672672?s=96&amp;v=4" alt="@Rishit-dagli profile" size="48" height="48" width="48" data-view-component="true" className="feed-item-user-avatar avatar circle box-shadow-none"></img>
           */}
          <img 
  src="https://avatars.githubusercontent.com/u/9994264?v=4" 
  alt="@xoofx profile" 
  height="48" 
  width="48" 
  data-view-component="true" 
  className="feed-item-user-avatar avatar circle box-shadow-none" 
/>
</a>
          <div className="ml-2">
            <p className="css-truncate text-bold wb-break-all m-0">
              <a data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;feed_user_link&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;metadata&quot;:{&quot;clicked_resource_type&quot;:&quot;USER&quot;,&quot;clicked_resource_id&quot;:39672672},&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="03ec8bcf1c360f8a58bb14636519040264e7fa8309f53fc8de53845452d0d76b" data-hovercard-type="user" data-hovercard-url="/users/Rishit-dagli/hovercard?event_type=feeds.feed_click&amp;hover_target=feed_user_login&amp;payload%5Bfeed_card%5D%5Bassignment_context%5D=c-cb738117%3A109742%3Bjccid629%3A115315%3B79878423%3A116832%3B6cha1124%3A143780%3B4h1jc170%3A184406%3B&amp;payload%5Bfeed_card%5D%5Bcard_position%5D=4&amp;payload%5Bfeed_card%5D%5Bcard_retrieved_id%5D=2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&amp;payload%5Bfeed_card%5D%5Bcard_sub_position%5D=&amp;payload%5Bfeed_card%5D%5Bcard_type%5D=FOLLOW&amp;payload%5Bfeed_card%5D%5Bcreated_at%5D=2025-01-06+21%3A15%3A42+-0800&amp;payload%5Bfeed_card%5D%5Bgatherer%5D=user&amp;payload%5Bfeed_card%5D%5Branking_model_id%5D=chronological&amp;payload%5Bfeed_card%5D%5Brecord_id%5D=39672672&amp;payload%5Bfeed_card%5D%5Bresource_id%5D=44053202&amp;payload%5Bfeed_card%5D%5Bresource_relationship%5D=followed&amp;payload%5Bfeed_card%5D%5Bresource_type%5D=USER&amp;payload%5Bfeed_card%5D%5Bvariant%5D=%7B%7D&amp;payload%5Bmetadata%5D%5Bclicked_resource_id%5D=39672672&amp;payload%5Bmetadata%5D%5Bclicked_resource_type%5D=USER&amp;payload%5Boriginal_request_id%5D=6ABF%3AB6243%3A26C236%3A2F7A3C%3A677CC3A7" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/ekamperi" data-view-component="true" className="Link--primary Link text-bold">Stathis Kamperis </a>
              <span data-view-component="true" className="color-fg-muted text-normal">Stathis Kamperis</span>
            </p>
            <div>I am a radiation oncologist and physicist. I like to build bridges between different scientific disciplines (medicine, physics, informatics).</div>

              <p className="m-0 mt-1 color-fg-muted">
                  <span className="mr-3">
                    15
                    repositories
                  </span>
                  <span>
                    29
                    followers
                  </span>
              </p>
          </div>
        </div>

        <div className="ml-1">
          
{/* <span className="user-following-container js-form-toggle-container">
     <!-- '"` --><!-- </textarea></xmp> --> 
    <form className="js-form-toggle-target" data-sr-feedback="You are following Rishit-dagli" data-turbo="false" action="/users/follow?target=Rishit-dagli" accept-charset="UTF-8" method="post" hidden=""><input type="hidden" name="authenticity_token" value="JodqzEyzLBXuymirb0_UYousEn4-PCoRC2oVdnJcD7PhXgLGtiMCx7JqSAYjcENt3axB03RDq5zMwrfL7Eg74w">
      <input type="submit" name="commit" value="Follow" className="btn btn-sm" title="Follow Rishit-dagli" aria-label="Follow Rishit-dagli" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Follow">
</form>
   <!-- '"` --><!-- </textarea></xmp> --> 
  <form className="js-form-toggle-target" data-sr-feedback="You are unfollowing Rishit-dagli" data-turbo="false" action="/users/unfollow?target=Rishit-dagli" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="DVmoX7Y9dBK9A0ZB1JcSEI8Qy0iFgS0NXJCLXk-PaNoH4quScA5OP-LwYDfMJoA4aYkK3zf03rFiVwsB65j9Dw">
    <input type="submit" name="commit" value="Unfollow" className="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Unfollow" title="Unfollow Rishit-dagli" aria-label="Unfollow Rishit-dagli">
</form>  </span> */}


<span className="user-following-container js-form-toggle-container">
    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
    <form className="js-form-toggle-target" data-sr-feedback="You are following Rishit-dagli" data-turbo="false" action="/users/follow?target=Rishit-dagli" acceptCharset="UTF-8" method="post" hidden>
        <input type="hidden" name="authenticity_token" value="JodqzEyzLBXuymirb0_UYousEn4-PCoRC2oVdnJcD7PhXgLGtiMCx7JqSAYjcENt3axB03RDq5zMwrfL7Eg74w" />
        <input type="submit" name="commit" value="Follow" className="btn btn-sm" title="Follow Rishit-dagli" aria-label="Follow Rishit-dagli" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Follow" />
    </form>
    {/* <!-- '"` --><!-- </textarea></xmp> --> */}
    <form className="js-form-toggle-target" data-sr-feedback="You are unfollowing Rishit-dagli" data-turbo="false" action="/users/unfollow?target=Rishit-dagli" acceptCharset="UTF-8" method="post">
        <input type="hidden" name="authenticity_token" value="DVmoX7Y9dBK9A0ZB1JcSEI8Qy0iFgS0NXJCLXk-PaNoH4quScA5OP-LwYDfMJoA4aYkK3zf03rFiVwsB65j9Dw" />
        <input type="submit" name="commit" value="Unfollow" className="btn btn-sm" data-hydro-click="{&quot;event_type&quot;:&quot;feeds.feed_click&quot;,&quot;payload&quot;:{&quot;click_target&quot;:&quot;follow_button&quot;,&quot;feed_card&quot;:{&quot;card_type&quot;:&quot;FOLLOW&quot;,&quot;resource_relationship&quot;:&quot;followed&quot;,&quot;created_at&quot;:&quot;2025-01-06T21:15:42.000-08:00&quot;,&quot;record_id&quot;:39672672,&quot;resource_type&quot;:&quot;USER&quot;,&quot;resource_id&quot;:44053202,&quot;card_position&quot;:4,&quot;card_sub_position&quot;:null,&quot;card_retrieved_id&quot;:&quot;2F69FF6F-BD7C-4531-BE52-D8EED1D68A91&quot;,&quot;ranking_model_id&quot;:&quot;chronological&quot;,&quot;gatherer&quot;:&quot;user&quot;,&quot;variant&quot;:&quot;{}&quot;,&quot;assignment_context&quot;:&quot;c-cb738117:109742;jccid629:115315;79878423:116832;6cha1124:143780;4h1jc170:184406;&quot;},&quot;original_request_id&quot;:&quot;6ABF:B6243:26C236:2F7A3C:677CC3A7&quot;,&quot;originating_url&quot;:&quot;https://github.com/conduit/for_you_feed&quot;,&quot;user_id&quot;:30724917}}" data-hydro-click-hmac="48c17575211694b6fb0401c069c7e9882740180e5345c331dc3789526fdce814" data-disable-with="Unfollow" title="Unfollow Rishit-dagli" aria-label="Unfollow Rishit-dagli" />
    </form>
</span>


        </div>
      </div>
</section>

{/* <stathiskamperisLinkedInPost /> */}
<StathisKamperisLinks />


</div>
<div id="SewonMin">

<a href="#SewonMin" className="vcard-names1" style={{ textDecoration: 'underline' }}>
          <h1>
            <span className="p-name vcard-fullname d-block overflow-hidden">
            Sewon Min </span>
            <span className="p-nickname vcard-username d-block">
            Incoming faculty @Berkeley_EECS @berkeley_ai ||  Research scientist at @allen_ai  ||  PhD from @uwcse @uwnlp.
            </span>
          </h1>
        </a>



<div className="css-175oi2r r-1iusvr4 r-16y2uox">
  <div className="css-175oi2r r-1awozwy r-18u37iz r-1wtj0ep">
    <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
      <div className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l">
        <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
          <a href="https://x.com/sewon__min" role="link" className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
            <div className="css-175oi2r r-1awozwy r-18u37iz r-dnmrzs">
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-1udh08x r-3s2u2q" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>@sewon__min</span>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-9iso6" style={{ textOverflow: 'unset' }}></span>
                </span>
              </div>
              <div dir="ltr" className="css-146c3p1 r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-xoduu5 r-18u37iz r-1q142lx" style={{ textOverflow: 'unset', color: 'rgb(15, 20, 25)' }}>
                <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1awozwy r-xoduu5" style={{ textOverflow: 'unset' }}>
                  {/* Updated SVG size */}
                  <svg viewBox="0 0 22 22" aria-label="Verified account" role="img" className="r-4qtqp9 r-yyyyoo r-1xvli5t r-bnwqim r-lrvibr r-m6rgpd r-1cvl2hr r-f9ja8p r-og9te1 r-3t4u6i" data-testid="icon-verified" style={{ width: '16px', height: '16px' }}>
                    <g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g>
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </div>
        <div className="css-175oi2r r-1awozwy r-18u37iz r-1wbh5a2">
          <div className="css-175oi2r r-1wbh5a2 r-dnmrzs">
            <a href="https://x.com/sewon__min" role="link" 
            // tabIndex="-1" 
            className="css-175oi2r r-1wbh5a2 r-dnmrzs r-1ny4l3l r-1loqt21">
              <div className="css-175oi2r">
                <div dir="ltr" className="css-146c3p1 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-37j5jr r-a023e6 r-rjixqe r-16dba41 r-18u37iz r-1wvb978" style={{ textOverflow: 'unset', color: 'rgb(83, 100, 113)' }}>
                  <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>@sewon__min</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="css-175oi2r r-1cwvpvk" style={{ minWidth: '0px' }}>
      <button aria-describedby="id__wcoj9flt6h" aria-label="Follow @sewon__min" role="button" className="css-175oi2r r-sdzlij r-1phboty r-rs99b7 r-lrvibr r-15ysp7h r-4wgw6l r-3pj75a r-1loqt21 r-o7ynqc r-6416eg r-1ny4l3l" data-testid="731230526778970112-follow" type="button" style={{ backgroundColor: 'rgb(15, 20, 25)', borderColor: 'rgba(0, 0, 0, 0)' }}>
        <div dir="ltr" className="css-146c3p1 r-bcqeeo r-qvutc0 r-37j5jr r-q4m81j r-a023e6 r-rjixqe r-b88u0q r-1awozwy r-6koalj r-18u37iz r-16y2uox r-1777fci" style={{ textOverflow: 'unset', color: 'rgb(255, 255, 255)' }}>
          <span className="css-1jxf684 r-dnmrzs r-1udh08x r-3s2u2q r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3 r-1b43r93 r-1cwl3u0" style={{ textOverflow: 'unset' }}>
            <span className="css-1jxf684 r-bcqeeo r-1ttztb7 r-qvutc0 r-poiln3" style={{ textOverflow: 'unset' }}>Follow</span>
          </span>
        </div>
      </button>
    </div>
    <div dir="auto" className="css-146c3p1" id="id__wcoj9flt6h" style={{ display: 'none' }}>
      Click to Follow sewon__min
    </div>
  </div>





</div>


<SewonMinTwitterUserDescription />
<p id="news-0"><span className="glyphicon glyphicon-ok"></span> 11/2024: I won't be attending EMNLP or NeurIPS this year, but my co-authors will be presenting our work!
  Check out our papers on
  <a href="https://www.arxiv.org/abs/2407.07087" target="_blank">Benchmarking the Reproduction of Copyrighted Text</a><sup>(EMNLP Main, NeurIPS Regulatable ML Workshop Contributed Talk)</sup>,
  <a href="https://arxiv.org/abs/2407.12854" target="_blank">Scaling a Datastore in Retrieval-Based LMs</a><sup>(NeurIPS Main)</sup>, and
  <a href="https://arxiv.org/abs/2409.02060" target="_blank">An Open Mixture-of-Experts LM</a><sup>(NeurIPS Workshop on Efficient Natural Language and Speech Processing (ENLSP), Oral Talk)</sup>.
  </p>
  <p id="news-1"><span className="glyphicon glyphicon-ok"></span> 11/2024: <b>I am recruiting PhD students at UC Berkeley's EECS!</b>
  If you're interested, please apply directly through the UC Berkeley admissions portal (details <a href="https://www.sewonmin.com/faq.html" target="_blank">here</a>).
  Kindly note that I cannot discuss applications outside the official admissions process.</p><p id="news-2"><span className="glyphicon glyphicon-ok"></span> 12/2023: I am attending EMNLP and NeurIPS!
    At EMNLP, I will give an invited talk on <a href="https://arxiv.org/abs/2202.12837" target="_blank">Rethinking the Role of Demonstrations</a> at <a href="https://www.bigpictureworkshop.com/" target="_blank">the Big Picture Workshop</a> on Dec 7th,
    and give an oral talk on <a href="https://arxiv.org/abs/2305.14251" target="_blank">FActScore</a> on Dec 8th.
    At NeurIPS, I will give a spotlight talk on <a href="https://arxiv.org/abs/2308.04430" target="_blank">SILO</a> at <a href="https://sites.google.com/view/distshift2023" target="_blank">the Distribution Shifts Workshop</a> on Dec 15th,
    and give an oral talk on <a href="https://arxiv.org/abs/2308.04430" target="_blank">SILO</a> at <a href="https://regulatableml.github.io/" target="_blank">the Regulatable ML Workshop</a> on Dec 16th.</p><p id="news-3"><span className="glyphicon glyphicon-ok"></span> 08/2023: Together with <a href="https://suchin.io/" target="_blank">Suchin Gururangan</a>,
  we present <a href="https://arxiv.org/abs/2308.04430" target="_blank">SILO</a>, 
  proposing to segregate the training data and the inference-time data in nonparametric LMs to mitigate legal risk in LMs.
  </p>
  <p id="news-4"><span className="glyphicon glyphicon-ok"></span> 07/2023: <a href="https://arxiv.org/abs/2212.10001" target="_blank">Our paper that examines the role of demonstrations in CoT prompting</a>,
  led by <a href="https://boshi-wang.github.io/" target="_blank">Boshi Wang</a>, won an Honorable Mention at ACL 2023.
  </p>
  <p id="news-5"><span className="glyphicon glyphicon-ok"></span> 07/2023: I co-taught a tutorial on <a href="https://ACL2023-Retrieval-LM.github.io" target="_blank">retrieval-based LMs</a> at ACL 2023. Slides &amp; recordings are available on the website.</p><p id="news-6"><span className="glyphicon glyphicon-ok"></span> 12/2022: Check out our new preprint,
  <a href="https://arxiv.org/abs/2212.01349" target="_blank">Nonparametric Masked Language Modeling</a>.
  Code and model checkpoints available <a href="https://github.com/facebookresearch/NPM" target="_blank">here</a>.
  </p>
  <p id="news-7"><span className="glyphicon glyphicon-ok"></span> 09/2022: I was selected by the EECS Rising Stars Program.</p><p id="news-8"><span className="glyphicon glyphicon-ok"></span> 08/2022: Together with <a href="https://cs.stanford.edu/~eix/" target="_blank">Sang Michael Xie</a>, we wrote a post on <a href="https://ai.stanford.edu/blog/understanding-incontext/" target="_blank">How does in-context learning work? A framework for understanding the differences from traditional supervised learning</a> at Stanford AI Blog.</p>
  <p id="news-9"><span className="glyphicon glyphicon-ok"></span> 05/2022: I co-taught the ACL tutorial on Few-Shot NLP with Pretrained Language Models (<a href="https://github.com/allenai/acl2022-zerofewshot-tutorial" target="_blank">slides</a>, <a href="https://underline.io/events/284/sessions?eventSessionId=10748" target="_blank">recordings</a>).</p>
  <p id="news-10"><span className="glyphicon glyphicon-ok"></span> 02/2022: Check out our new preprint, <a href="https://arxiv.org/abs/2202.12837" target="_blank">Rethinking the Role of Demonstrations: What makes In-context Learning Work?</a>
  All experiments reproducible from <a href="https://github.com/Alrope123/rethinking-demonstrations" target="_blank">this code</a>.
  (Update 10/2022: The paper was accepted to EMNLP 2022.)
  </p>
  <p id="news-11"><span className="glyphicon glyphicon-ok"></span> 02/2022: I am co-organizing two workshops at ACL 2022: <a href="https://sites.google.com/view/repl4nlp2022/home" target="_blank">Repl4NLP</a> (<a href="https://sites.google.com/view/repl4nlp2022/call-for-papers?authuser=0" target="_blank">CFP</a>) and 
   <a href="http://semiparametric.ml/" target="_blank">Spa-NLP</a> (<a href="http://www.semiparametric.ml/cfp.html" target="_blank">CFP</a>).</p><p id="news-12"><span className="glyphicon glyphicon-ok"></span> 10/2021: Our new preprint, <a href="https://arxiv.org/abs/2110.15943" target="_blank">MetaICL: Learning to Learn In Context</a> is out (w/ <a href="https://github.com/facebookresearch/MetaICL" target="_blank">code</a>).
  Check out the <a href="http://qa.cs.washington.edu:2021" target="_blank">demo</a>!
  (Update 04/2022: The paper was accepted to NAACL 2022.)
  </p>

{/* <p id="news-10"><span className="glyphicon glyphicon-ok"></span> 02/2022: Check out our new preprint, <a href="https://arxiv.org/abs/2202.12837" target="_blank">Rethinking the Role of Demonstrations: What makes In-context Learning Work?</a>
  All experiments reproducible from <a href="https://github.com/Alrope123/rethinking-demonstrations" target="_blank">this code</a>.
  (Update 10/2022: The paper was accepted to EMNLP 2022.)
  </p> */}
<p id="news-13"><span className="glyphicon glyphicon-ok"></span> 08/2021: Our new preprint, <a href="https://arxiv.org/abs/2108.04106" target="_blank">Noisy Channel Language Model Prompting for Few-Shot Text Classification</a> is out w/ <a href="https://github.com/shmsw25/Channel-LM-Prompting" target="_blank">code</a>!
  (Update 02/2022: The paper was accepted to ACL 2022.)
  </p>
  <p id="news-14"><span className="glyphicon glyphicon-ok"></span> 07/2021: Our new preprint, <a href="https://arxiv.org/abs/2107.02153" target="_blank">FaVIQ: FAct Verification from Information-seeking Questions</a> is out! Visit <a href="https://faviq.github.io" target="_blank">FaVIQ website</a> to download data and see samples.
  (Update 02/2022: The paper was accepted to ACL 2022.)
  </p>
  <p id="news-15"><span className="glyphicon glyphicon-ok"></span> 07/2021: I am co-organizing <a href="https://uskb-workshop.github.io/" target="_blank">The 2nd Workshop on Unstructured/Structured KBs</a>, hosted at AKBC 2021.</p><p id="news-16"><span className="glyphicon glyphicon-ok"></span> 06/2021: I co-taught the NAACL-HLT tutorial on <a href="https://github.com/allenai/naacl2021-longdoc-tutorial" target="_blank">Beyond Paragraphs: NLP for Long Sequences</a>.</p><p id="news-17"><span className="glyphicon glyphicon-ok"></span> 04/2021: Our new preprint, <a href="https://arxiv.org/abs/2104.08445" target="_blank">Joint Passage Ranking for Diverse Multi-Answer Retrieval</a>
  is out! This is done as part of my internship at Google.
  (Update 08/2021: The paper was accepted to EMNLP.)
  </p>
  <p id="news-18"><span className="glyphicon glyphicon-ok"></span> 01/2021: We, the NeurIPS 2020 EfficientQA organizers, together with participants,
  wrote <a href="https://arxiv.org/abs/2101.00133" target="_blank">NeurIPS 2020 EfficientQA Competition:
  	Systems, Analyses and Lessons Learned</a>.
  The video of the NeuIPS event is also available <a href="https://www.youtube.com/watch?v=3tdWV4vAf2I" target="_blank">here</a>.
   (Update 05/2021: The paper was accepted to PMLR.)</p>
   <p id="news-19"><span className="glyphicon glyphicon-ok"></span> 12/2020: I am co-organizing <a href="https://mrqa.github.io/" target="_blank">The 3rd Workshop on Machine Reading for Question Answering</a>, hosted at EMNLP 2021. Stay tuned for Call for papers!</p><p id="news-20"><span className="glyphicon glyphicon-ok"></span> 09/2020: I made an <a href="http://qa.cs.washington.edu:2020" target="_blank">Open-domain QA Demo</a> using <a href="https://arxiv.org/abs/2004.04906" target="_blank">DPR</a>. Give it a try!</p>
   <p id="news-21"><span className="glyphicon glyphicon-ok"></span> 06/2020: I am co-organizing <a href="http://efficientqa.github.io/" target="_blank">Competition on Efficient Open-Domain Question Answering</a>, hosted at NeurIPS 2020. [<a href="https://ai.google.com/research/NaturalQuestions/efficientqa" target="_blank">leaderboard</a>]</p>
   <p id="news-22"><span className="glyphicon glyphicon-ok"></span> 06/2020: I am co-organizing <a href="https://uskb-workshop.github.io/" target="_blank">Workshop on Unstructured/Structured KBs</a>, hosted at AKBC 2020.</p>
   <p id="news-23"><span className="glyphicon glyphicon-ok"></span> 04/2020: Our new preprint, <a href="https://arxiv.org/abs/2004.10645" target="_blank">AmbigQA: Answering Ambiguous Open-domain Questions</a>
  is out! Visit <a href="https://nlp.cs.washington.edu/ambigqa/" target="_blank">AmbigQA website</a> to download data and see samples.</p>
  <p id="news-24"><span className="glyphicon glyphicon-ok"></span> 04/2020: Our new preprint, <a href="https://arxiv.org/abs/2004.04906" target="_blank">Dense Passage Retrieval for Open-domain Question Answering</a>
  is out (w/ <a href="https://github.com/facebookresearch/DPR" target="_blank">code</a>)!</p><p style={{marginTop: '5px'}}></p>

</div>




<div id="KristofferCarlsson">

<a href="https://kristofferc.github.io/" className="vcard-names1" style={{ textDecoration: 'underline' }}>
            <h1>
              <span className="p-name vcard-fullname d-block overflow-hidden">
              Kristoffer Carlsson </span>
              {/* <span className="p-nickname vcard-username d-block"></span> */}
            </h1>
            <h3>    <div>Software engineer, Julia Computing</div></h3>
          </a>
<KristofferCarlsson />


<p>Here are some of the open source projects I have created or been involved with:</p>
<ul>
<li><a href="https://github.com/JuliaLang/Pkg.jl" target="_blank">Pkg.jl</a> – Julia’s package manager.</li>
<li><a href="https://github.com/KristofferC/NearestNeighbors.jl" target="_blank">NearestNeighbors.jl</a> – High performance nearest neighbor data structures and algorithms.</li>
<li><a href="https://github.com/KristofferC/Tensors.jl" target="_blank">Tensors.jl</a> – Efficient computations with symmetric and non-symmetric tensors with support for automatic differentiation.</li>
<li><a href="https://github.com/KristofferC/OhMyREPL.jl" target="_blank">OhMyREPL.jl</a> – Syntax highlighting and other enhancements for the Julia REPL.</li>
<li><a href="https://github.com/KristofferC/Crayons.jl" target="_blank">Crayons.jl</a> – Colored and styled strings for terminals.</li>
<li><a href="https://github.com/KristofferC/PGFPlotsX" target="_blank">PGFPlotsX.jl</a> – Seamlessly create plots in Julia using the PGFPlots LaTeX package.</li>
<li><a href="https://github.com/JuliaSparse/Pardiso.jl" target="_blank">Pardiso.jl</a> – Calling the PARDISO sparse solver library.</li>
<li><a href="https://github.com/KristofferC/Tokenize.jl" target="_blank">Tokenize.jl</a> –Tokenization for Julia source code.</li>
<li><a href="https://github.com/KristofferC/TimerOutputs.jl" target="_blank">TimerOutputs.jl</a> – Formatted output of timed sections.</li>
<li><a href="https://github.com/KristofferC/BlockArrays.jl" target="_blank">BlockArrays.jl</a> – Interface for blocked arrays.</li>
<li><a href="https://github.com/JuliaStats/Distances.jl" target="_blank">Distances.jl</a> – A Julia package for evaluating distances(metrics) between vectors.</li>
<li><a href="https://github.com/EconForge/NLsolve.jl" target="_blank">NLsolve.jl</a> – Julia solvers for systems of nonlinear equations and mixed complementarity problems</li>
<li><a href="https://github.com/KristofferC/MMA.jl" target="_blank">MMA.jl</a> – The “Method of Moving Asymptotes”-algorithm. (old package)</li>
</ul>


</div>



</div>




        </div> {/* Closing for className="App-header_replica"*/}
        








<TwitterTweetEmbed tweetId="1855509794993692780"  />
      
    </div>
  );
}

export default App;
