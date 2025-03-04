// React Component (or JSX)

import React from 'react';
import './App.css'; // Assuming you have a CSS file for styles

const Alexandre_MutelPR_From_2025_02_01_To_2025_02_28_Avalonia_AvaloniaUI = () => {
  return (
    <>
     <a
        href="https://github.com/xoofx?tab=overview&from=2025-02-01&to=2025-02-28"
        target="_blank"
        rel="noopener noreferrer"
      >
        Overview of commits/PRs from Feb 1, 2025 to Feb 28, 2025
      </a>
<div>
<a
        href="https://github.com/xoofx?tab=overview&from=2025-02-01&to=2025-02-28"
        target="_blank"
        rel="noopener noreferrer"
      >
        Backend URL Link  https://github.com/xoofx?tab=overview&from=2025-02-01&to=2025-02-28
      </a>
</div>
      
    
<h1 style={{ margin: 0 }}
  className="Box-sc-g0xbh4-0 clYxDg prc-Heading-Heading-6CmGO"
  data-component="PH_Title"
  data-hidden="false"
>
<bdi className="js-issue-title markdown-title">Remove <code>List&lt;IObserver&lt;T&gt;&gt;.ToArray()</code> allocations in <code>LightweightObservableBase</code></bdi>

  <span className="Box-sc-g0xbh4-0 YJa-Di">
  <a href="https://github.com/AvaloniaUI/Avalonia/pull/18316" target="_blank" rel="noopener noreferrer">
  #18316
    </a>
   
    </span>
</h1>

<div style={{ display: 'flex', alignItems: 'center' }}>
<a className="Box-sc-g0xbh4-0 cRhwji prc-Link-Link-85e08" 
href="https://github.com/xoofx" data-hovercard-url="/users/stevengj/hovercard" data-testid="issue-body-header-author">xoofx</a>

<div className="Box-sc-g0xbh4-0 bJQcYY ActivityHeader-module__footer--FVHp7"><span>commented </span>
<a className="Box-sc-g0xbh4-0 bjFvWy prc-Link-Link-85e08" href="https://github.com/AvaloniaUI/Avalonia/pull/18316" 
data-testid="issue-body-header-link"><relative-time 
// sx="[object Object]" 
className="sc-aXZVg gcWyXp" 
datetime="2024-07-18T08:44:29.000Z" title="Jul 18, 2024, 2:14 PM GMT+5:30">on Feb 26, 2025</relative-time></a>

{/* <span className="MarkdownLastEditedBy-module__container--fKxHN"><span> · </span><span>edited by 
  <a className="Box-sc-g0xbh4-0 bjFvWy prc-Link-Link-85e08" href="https://github.com/stevengj">stevengj</a></span></span> */}

  </div>
</div>

<p>Here are the details of a specific PR from the <a href="https://github.com/AvaloniaUI/Avalonia/pull/18316" target="_blank">AvaloniaUI/Avalonia repository</a>:</p>
<p dir="auto">This PR is removing the <code className="notranslate">List&lt;IObserver&lt;T&gt;&gt;.ToArray()</code> allocations happening in <code className="notranslate">LightweightObservableBase</code> when Routing events are fired (e.g. whenever you move the mouse)</p>
<p dir="auto">When profiling the memory, I noticed that when generating lots of routing events (e.g. just moving the mouse over a window) several MB of <code className="notranslate">IObserver&lt;ValueTuple&lt;Object, RoutedEventArgs&gt;&gt;[]</code> were created.</p>
    </>
  );
};

export default Alexandre_MutelPR_From_2025_02_01_To_2025_02_28_Avalonia_AvaloniaUI;
