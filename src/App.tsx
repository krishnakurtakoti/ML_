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
        <h3>In this article</h3>
        <ul>
        <li>
        <h1 className="vcard-names ">
            <a href="#caleb-robinson-blog-archives" style={{ textDecoration: 'underline' }}>
            Caleb-robinson - Understanding intersection-over-union
            </a>
        </h1>
        </li>
        <li>
        <h1 className="vcard-names ">
            <a href="#dr-pasquale-minervini" style={{ textDecoration: 'underline' }}>
            Dr Pasquale Minervini - Some notes on Gaussian Fields and Label Propagation
            </a>
        </h1>
        </li> <a href="#PeterMelchior" style={{ textDecoration: 'underline' }}>
              Peter Melchior - 
            </a>
            <ul>
                    <li>
                        <strong>Scarlet2 – Thoughts for a major redesign</strong> 
                    </li>
                   <li>
                    <strong>Bayesian inference three ways</strong> Running MCMC, Hamiltonian MC, and simulation-based inference with a few lines of code

                   </li>
            </ul>
        <li>
        <h1 className="vcard-names ">
            <a href="#Nicolas_P_Rougier" style={{ textDecoration: 'underline' }}>
            Nicolas P. Rougier - From Python to Numpy
            </a>
        </h1>
            <p>There are already a fair number of books about Numpy (see Bibliography) and a legitimate question is to wonder if another book is really necessary. As you may have guessed by reading these lines, my personal answer is yes, mostly because I think there is room for a different approach concentrating on the migration from Python to Numpy through vectorization. </p>
        </li>
        <li>
        <h1 className="vcard-names ">
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
            <a href="#Felix-Altenberger" style={{ textDecoration: 'underline' }}>
              <strong>Felix-Altenberger - ML Engineer at ZenML.
              Posting about ML, MLOps, Computer Vision.</strong>
            </a>
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
            <h1 className="vcard-names ">

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
 

<TwitterTweetEmbed tweetId="1855509794993692780"  />
      </header>
    </div>
  );
}

export default App;
