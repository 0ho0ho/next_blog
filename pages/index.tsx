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
          <script src="https://cdn.jsdelivr.net/gh/stevenschobert/instafeed.js@2.0.0rc1/src/instafeed.min.js"></script>
          <div id="instafeed"></div>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              var feed = new Instafeed({
                accessToken: "IGQVJYRWJ5eTNtMi15cWhOY0dLUWZAaOHNhbUd4RGxkdUpDZA0hjazYwR2ptYU41aExxb3UydGxSVkVfX0RQUjh3bk44V2UwdkVpQ29zNzdOVFFkT2I1T05hRE4xdm5QdTFJaURTRmdn",
                template: '<a href="{{link}}"><img style="width: 100px; height: 100px; display: inline-block;" src={{image}} /></a>'
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
