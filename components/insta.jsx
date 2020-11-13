import React, { useEffect } from 'react';
import Head from 'next/head';

const Insta = () => {
  
  useEffect(() => {
    const feed = new Instafeed({
      accessToken: "IGQVJYRWJ5eTNtMi15cWhOY0dLUWZAaOHNhbUd4RGxkdUpDZA0hjazYwR2ptYU41aExxb3UydGxSVkVfX0RQUjh3bk44V2UwdkVpQ29zNzdOVFFkT2I1T05hRE4xdm5QdTFJaURTRmdn",
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
