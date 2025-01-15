import React from 'react';

const StathisKamperisLinks: React.FC = () => {
  return (
    <ul>
      {/* Main Page Link */}
      <li>
        <a 
          href="https://www.linkedin.com/in/stathis-kamperis/details/featured/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
         Featured - https://www.linkedin.com/in/stathis-kamperis/details/featured
        </a>
      </li>
      
      {/* Contents Link with Likes */}
      <li>
        <a 
          href="https://www.linkedin.com/feed/update/urn:li:activity:6750785499813691392?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A6750785499813691392%29&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_featured_details%3Bqg2KtT7yT52sBgN1r9MbSw%3D%3D" 
          target="_blank" 
          rel="noopener noreferrer"
        >
         How to implement a Naive Bayes classifier with Tensorflow
        </a> 
        <span> - 11 likes</span>
      </li>
    </ul>
  );
};

export default StathisKamperisLinks;
