import React, { useEffect } from 'react';

const EmbedComponentOfirPress = () => {
  useEffect(() => {
    // Dynamically load the external script for embedding
    const script = document.createElement('script');
    script.src = 'https://embed.bsky.app/static/embed.js';
    script.async = true;
    script.charset = 'utf-8';
    document.body.appendChild(script);

    // Cleanup the script after the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="embed-container">
      {/* Embed blockquote code */}
      <blockquote
        className="bluesky-embed"
        data-bluesky-uri="at://did:plc:jt6vfiqztljw7kvv3qekdfer/app.bsky.feed.post/3lbsj6eh63c24"
        data-bluesky-cid="bafyreict6c5ls3l6pkimwvm4kwyy6suh7acjzmhfkihad6t6dduog2nnte"
      >
        <p lang="en">
          I wrote some thoughts on how to build good LM benchmarks: ofir.io/How-to-Build...
          <br />
          <br />
          <a href="https://bsky.app/profile/did:plc:jt6vfiqztljw7kvv3qekdfer/post/3lbsj6eh63c24?ref_src=embed">
            [image or embed]
          </a>
        </p>
        &mdash; Ofir Press (
        <a href="https://bsky.app/profile/did:plc:jt6vfiqztljw7kvv3qekdfer?ref_src=embed">
          @ofirpress.bsky.social
        </a>
        ){' '}
        <a href="https://bsky.app/profile/did:plc:jt6vfiqztljw7kvv3qekdfer/post/3lbsj6eh63c24?ref_src=embed">
          November 26, 2024 at 3:24 AM
        </a>
      </blockquote>
    </div>
  );
};

export default EmbedComponentOfirPress;
