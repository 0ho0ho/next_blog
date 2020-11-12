import React from 'react';

const Insta = () => {
  const feed = new Instafeed({
    accessToken:
      "IGQVJXTXkxcm96SjFXRGw4dXlKOHNtUmR6SE5lQ3M0d1A0dW9BRDdJTVN2eTliTFRhQUxfT2Q1a2EwZATJ6bEwwRHVRZAzVjTmswRFNPTVUwLWI0Xy02M3dDdnliTXZAodnczclZAsNTJR",
  });
  feed.run();
  return (
    <div id="instafeed"> 
    </div>
  );
}

export default Insta;

