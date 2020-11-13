import React, { useEffect } from 'react';
import Head from 'next/head';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

const Insta = () => {
  useEffect(() => {
    const feed = new Instafeed({
      accessToken: publicRuntimeConfig.ACCESS_TOKEN,
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
