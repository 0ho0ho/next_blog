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
        <Head>
          <title>blog</title>
          <script
            type="text/javascript"
            src="https://cdn.boomcdn.com/libs/instafeed-js/1.4.1/instafeed.min.js"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `var feed = new Instafeed({
    accessToken:
      "IGQVJXTXkxcm96SjFXRGw4dXlKOHNtUmR6SE5lQ3M0d1A0dW9BRDdJTVN2eTliTFRhQUxfT2Q1a2EwZATJ6bEwwRHVRZAzVjTmswRFNPTVUwLWI0Xy02M3dDdnliTXZAodnczclZAsNTJR",
  })
  feed.run()
  `,
            }}
          />
        </Head>
        <div id="instafeed"></div>
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
