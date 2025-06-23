"use client"; // Add this at the top

import React, { useState } from "react";
import "./ItzamiAccordian.css";
import Tag from "./Tag";
 // import { BrainPedersonTelemetryClient } from "./BrainPedersonTelemetryClient";

const ShayRojanskyAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index : any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="itzami-accordionContainer">
      <h1>Accordion</h1>

      <div className="itzami-accordionItem">
     
          <h1
            className={`itzami-accordionTitle ${
              openIndex === 0 ? "itzami-is-open" : ""
            }`}
            onClick={() => toggleAccordion(0)}
          >
          Shay Rojansky
          
          </h1>
    <h3>Microsoft software engineer working on .NET data access and perf, member of the Entity Framework team. Lead dev of Npgsql, the PostgreSQL provider.</h3>
        <div
          className={`itzami-accordionContent ${
            openIndex === 0 ? "itzami-show" : ""
          }`}
        >


        { <div className="a row pr-2" style={{ padding: '.75em 1em' }}>
                <div className="col-sm-12">

                        <div  // itemtype="https://schema.org/Person" 
                        className="h-card">

                
                                <div className="author__avatar">
                                  <a href="https://www.roji.org/">
                                    <img src="https://www.gravatar.com/avatar/018fc595a3e6b1ac5c18cb27e73a066d" alt="Shay Rojansky"  className="u-photo"></img>
                                  </a>
                                </div>
                

                            <div className="author__content">
                              <h3 className="author__name p-name" >
                                <a className="u-url" rel="me" href="https://www.roji.org/" 
                                // itemprop="url" 
                                >Shay Rojansky</a>
                              </h3>
                              
                                <div className="author__bio p-note" 
                                // itemprop="description"
                                >
                                  <p>Microsoft software engineer working on .NET data access and perf, member of the Entity Framework team. Lead dev of Npgsql, the PostgreSQL provider.</p>

                                </div>
                              
                            </div>

                            <div className="author__urls-wrapper">
                              <button className="btn btn--inverse">Follow</button>
                                  <ul className="author__urls social-icons">
                                    

                                    
                                      
                                        
                                          <li><a href="https://twitter.com/shayrojansky" rel="nofollow noopener noreferrer me" 
                                          // itemprop="sameAs"
                                          ><i className="fab fa-fw fa-twitter-square" aria-hidden="true"></i><span className="label">Twitter</span></a></li>
                                        
                                      
                                        
                                          <li><a href="https://github.com/roji/" rel="nofollow noopener noreferrer me" 
                                          // itemprop="sameAs"
                                          ><i className="fab fa-fw fa-github" aria-hidden="true"></i><span className="label">GitHub</span></a></li>
                                        
                                  
                                <li>
                                  <a href="http://link-to-whatever-social-network.com/user/" 
                                  // itemprop="sameAs" 
                                  rel="nofollow noopener noreferrer me">
                                    <i className="fas fa-fw" aria-hidden="true"></i> Custom Social Profile Link
                                  </a>
                                </li>

                                  </ul>
                            </div>
                        </div>



        {/* <div className="list__item">
          <article className="archive__item" 
          // itemscope="" 
          // itemtype="https://schema.org/CreativeWork"
          >
            
            <h2 className="archive__item-title no_toc" 
            // itemprop="headline"
            >
              
                <a href="/storing-timezones-in-the-db" rel="permalink">When &#34;UTC&#34; everywhere isn&#39;t enough - storing time zones in PostgreSQL and SQL Server
        </a>
              
            </h2>
            

          <p className="page__meta">
            

            

            
              
              

              <span className="page__meta-readtime">
                <i className="far fa-clock" aria-hidden="true"></i>
                
                  8 minute read
                
              </span>
            
          </p>


                  <p className="archive__item-excerpt" 
                  //itemprop="description"
                  >When &#34;UTC everywhere&#34; isn&#39;t enough

              </p>
          </article>
        </div> */}

<div className="ShayRojansky list__item">
    <article className="ShayRojansky archive__item" 
    // <!-- itemscope="" --> 
    // <!-- itemtype="https://schema.org/CreativeWork" -->
    >
        <h2 className="ShayRojansky archive__item-title no_toc" 
        // <!-- itemprop="headline" -->
        >
            <a href="https://www.roji.org/queryable-pg-arrays-in-ef8" rel="permalink" style={{ textDecoration: 'underline' }}>
            Queryable PostgreSQL arrays in EF Core 8.0
            </a>
        </h2>

        <p className="ShayRojansky page__meta">
            <span className="ShayRojansky page__meta-readtime">
                <i className="far fa-clock" aria-hidden="true"></i>
                6 minute read
            </span>
        </p>

        <p className="ShayRojansky archive__item-excerpt" 
        // <!-- itemprop="description" -->
        >
        Queryable collections?
        </p>
    </article>
</div>



<div className="ShayRojansky list__item">
    <article className="ShayRojansky archive__item" 
    // <!-- itemscope="" --> 
    // <!-- itemtype="https://schema.org/CreativeWork" -->
    >
        <h2 className="ShayRojansky archive__item-title no_toc" 
        // <!-- itemprop="headline" -->
        >
            <a href="https://www.roji.org/storing-timezones-in-the-db" rel="permalink" style={{ textDecoration: 'underline' }}>
                When &#34;UTC&#34; everywhere isn&#39;t enough - storing time zones in PostgreSQL and SQL Server
            </a>
        </h2>

        <p className="ShayRojansky page__meta">
            <span className="ShayRojansky page__meta-readtime">
                <i className="far fa-clock" aria-hidden="true"></i>
                8 minute read
            </span>
        </p>

        <p className="ShayRojansky archive__item-excerpt" 
        // <!-- itemprop="description" -->
        >
            When &#34;UTC everywhere&#34; isn&#39;t enough
        </p>
    </article>
</div>


<div className="ShayRojansky list__item">
    <article className="ShayRojansky archive__item" 
    // <!-- itemscope="" --> 
    // <!-- itemtype="https://schema.org/CreativeWork" -->
    >
        <h2 className="ShayRojansky archive__item-title no_toc" 
        // <!-- itemprop="headline" -->
        >
            <a href="https://www.roji.org/storing-timezones-in-the-db" rel="permalink" style={{ textDecoration: 'underline' }}>
            Query parameters, batching and SQL rewriting
            </a>
        </h2>

        <p className="ShayRojansky page__meta">
            <span className="ShayRojansky page__meta-readtime">
                <i className="far fa-clock" aria-hidden="true"></i>
                7 minute read
            </span>
        </p>

        <p className="ShayRojansky archive__item-excerpt" 
        // <!-- itemprop="description" -->
        >
            When &#34;UTC everywhere&#34; isn&#39;t enough
            In the upcoming version 6.0 of the Npgsql PostgreSQL driver for .NET, we implemented what I think of as &#34;raw mode&#34; (#3852). In a nutshell, this means that you can now use Npgsql without it doing anything to the SQL you provide it - it will simply send your queries as-is to PostgreSQL, without parsing or rewriting them in any way
        </p>
    </article>
</div>






                </div>
                <div className="tags">
                    <span className="bold">Tags: </span> 
                    <Tag value="Microsoft software engineer working on .NET data access and perf, member of the Entity Framework team. Lead dev of Npgsql, the PostgreSQL provider." />
                </div>
              </div> }

        </div>
      </div>

      {/* <div className="itzami-accordionItem">
        <h2
          className={`itzami-accordionTitle ${
            openIndex === 1 ? "itzami-is-open" : ""
          }`}
          onClick={() => toggleAccordion(1)}
        >
          Tab 2
        </h2>
        <div
          className={`itzami-accordionContent ${
            openIndex === 1 ? "itzami-show" : ""
          }`}
        >
          <p>Information here</p>
        </div>
      </div> */}

      {/* <div className="itzami-accordionItem">
        <h2
          className={`itzami-accordionTitle ${
            openIndex === 2 ? "itzami-is-open" : ""
          }`}
          onClick={() => toggleAccordion(2)}
        >
          Tab 3
        </h2>
        <div
          className={`itzami-accordionContent ${
            openIndex === 2 ? "itzami-show" : ""
          }`}
        >
          <p>Information here</p>
        </div>
      </div> */}
    </div>
  );
};

export default ShayRojanskyAccordion;
