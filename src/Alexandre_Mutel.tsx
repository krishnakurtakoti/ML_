// React Component (or JSX)

import React from 'react';
import './App.css'; // Assuming you have a CSS file for styles

const Alexandre_MutelBlogPosts = () => {
  return (
    <>
      {/* Year 2023 Section */}
      <h2 className="year" id="2023" style={{ marginBottom: 0 }}>
        2023
        <a
          className="anchorjs-link"
          aria-label="Anchor"
          data-anchorjs-icon=""
          href="#2023"
          style={{
            font: '1em / 1 anchorjs-icons',
            marginLeft: '0.1875em',
            paddingRight: '0.1875em',
            paddingLeft: '0.1875em',
          }}
        ></a>
      </h2>

      <ul style={{ marginTop: 0, paddingTop: 0 }}>
        <li>
          <a href="https://xoofx.github.io/blog/2023/07/09/10x-performance-with-simd-in-csharp-dotnet">
            10x Performance with SIMD Vectorized Code in C#/.NET
          </a>
          <span className="blog-post-meta">
            - <span className="date"><time>Jul 9</time></span>
            <i className="bi bi-tags"></i>
            <a href="/blog/tag/csharp/" className="prefix-Alexandre-Mutel">C#</a>, 
            <a href="/blog/tag/net/" className="prefix-Alexandre-Mutel">.NET</a>, 
            <a href="/blog/tag/x86/" className="prefix-Alexandre-Mutel">x86</a>, 
            <a href="/blog/tag/assembler/" className="prefix-Alexandre-Mutel">assembler</a>
          </span>
          <span className="subtitle">Use your CPU at its full width!</span>
        </li>
      </ul>

      {/* Year 2018 Section */}
      <h2 className="year" id="2018" style={{ marginBottom: 0 }}>
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

      <ul style={{ marginTop: 0, paddingTop: 0 }}>
        <li>
          <a href="https://xoofx.github.io/blog/2018/12/26/generate-async-from-sync-code-with-roslyn">
            Generate automatically async/await code from sync code with Roslyn
          </a>
          <span className="blog-post-meta">
            - <span className="date"><time>Dec 26</time></span>
            <i className="bi bi-tags"></i>
            <a href="/blog/tag/csharp/">C#</a>, 
            <a href="/blog/tag/net/">.NET</a>, 
            <a href="/blog/tag/roslyn/">Roslyn</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/04/12/writing-managed-jit-in-csharp-with-coreclr">
            Writing a Managed JIT in C# with CoreCLR
          </a>
          <span className="blog-post-meta">
            - <span className="date"><time>Apr 12</time></span>
            <i className="bi bi-tags"></i>
            <a href="/blog/tag/csharp/">C#</a>, 
            <a href="/blog/tag/net/">.NET</a>, 
            <a href="/blog/tag/coreclr/">CoreCLR</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/04/06/porting-unity-to-coreclr">
            Porting the Unity Engine to .NET CoreCLR
          </a>
          <span className="blog-post-meta">
            - <span className="date"><time>Apr 6</time></span>
            <i className="bi bi-tags"></i>
            <a href="/blog/tag/csharp/">C#</a>, 
            <a href="/blog/tag/net/">.NET</a>, 
            <a href="/blog/tag/coreclr/">CoreCLR</a>, 
            <a href="/blog/tag/unity/">Unity</a>
          </span>
        </li>

        <li>
          <a href="https://xoofx.github.io/blog/2018/03/09/productivity-with-resharper">
            Productivity with ReSharper
          </a>
          <span className="blog-post-meta">
            - <span className="date"><time>Mar 9</time></span>
            <i className="bi bi-tags"></i>
            <a href="/blog/tag/visual-studio/">Visual Studio</a>, 
            <a href="/blog/tag/visual-studio-2015/">Visual Studio 2015</a>, 
            <a href="/blog/tag/roslyn/">Roslyn</a>
          </span>
        </li>
      </ul>

      {/* Year 2009 Section */}
      <h2 className="year" id="2018" style={{ marginBottom: 0 }}>
        2009
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
      <li>
          <a href="https://xoofx.github.io/blog/2009/10/25/random-float-number-using-x86-asm-code.html">Random float number generator using x86 ASM code optimized in size</a>
          <span className="blog-post-meta">
            - <span className="date"><time 
            // datetime="2009-10-25" itemprop="datePublished"
            >Oct 25</time></span>
            <i className="bi bi-tags"></i><a href="/blog/tag/assembler/">assembler</a>, <a href="/blog/tag/x86/">x86</a>
          </span>
        </li>
    </>
  );
};

export default Alexandre_MutelBlogPosts;
