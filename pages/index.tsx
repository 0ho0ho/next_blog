import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import Post from "../types/post";
type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const posts = allPosts;

  return (
    <>
      <Layout>
        <div id="instafeed"></div>

        <Head>
          <title>blog</title>
          <script
            type="text/javascript"
            src="https://cdn.boomcdn.com/libs/instafeed-js/1.4.1/instafeed.min.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var feed = new Instafeed({
                  accessToken: "IGQVJXTW5OSk4xQkxIeGsxNU1FR1p3WHNMcDJNaXVCTldUUnFKc0d3aDFNUWhCNzMtSUtkLXZAtTDhidWQyV0VqcUJTUjdXRktsV3JwX2VQWmlIZADMybHJDWUhaaHI2dmY5bHd5N2xtZAXBPMDBNckJpdQZDZD",
                  debug: true
                });
                feed.run();
                `,
            }}
          />
        </Head>
        <Container>
          <MoreStories posts={posts} />
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["title", "date", "slug", "excerpt"]);

  return {
    props: { allPosts },
  };
};

// curl -X GET 'https://graph.instagram.com/me?fields=id,username&access_token=IGQVJXTXkxcm96SjFXRGw4dXlKOHNtUmR6SE5lQ3M0d1A0dW9BRDdJTVN2eTliTFRhQUxfT2Q1a2EwZATJ6bEwwRHVRZAzVjTmswRFNPTVUwLWI0Xy02M3dDdnliTXZAodnczclZAsNTJR'

// curl -X GET 'https://graph.instagram.com/me/media?fields=id,caption&access_token=IGQVJXTXkxcm96SjFXRGw4dXlKOHNtUmR6SE5lQ3M0d1A0dW9BRDdJTVN2eTliTFRhQUxfT2Q1a2EwZATJ6bEwwRHVRZAzVjTmswRFNPTVUwLWI0Xy02M3dDdnliTXZAodnczclZAsNTJR'

// curl -X GET 'https://graph.instagram.com/17841401585390558?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXTXkxcm96SjFXRGw4dXlKOHNtUmR6SE5lQ3M0d1A0dW9BRDdJTVN2eTliTFRhQUxfT2Q1a2EwZATJ6bEwwRHVRZAzVjTmswRFNPTVUwLWI0Xy02M3dDdnliTXZAodnczclZAsNTJR'
