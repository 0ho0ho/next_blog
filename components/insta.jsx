import React, { useEffect } from 'react';
import Head from 'next/head';

const Insta = () => {
  
  useEffect(() => {
    const feed = new Instafeed({
      accessToken: "IGQVJXS0lsZAU1xUDhLTmg4SkpPTC0yVi1haXRma1FnMFB6Ni02aGRFTFFOTzBnMzJqOU1ycElmZA2IxVEF5QWFuNFljN01PM3Y4S3NzejNTWHVsQ29NeGFReUliaExfZAmI5V2ZAGSGZAB",
      template: '<a href="{{link}}"><img style="width: 100px; height: 100px; display: inline-block;" src={{image}} /></a>'
    });
    feed.run();
  }, []);
  
  return(
    <>
      <Head>
        <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>
      </Head>
      <div id="instafeed">
      </div>
    </>
  );
}

export default Insta;
