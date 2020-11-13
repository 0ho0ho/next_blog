import Container from "../components/container";
import MoreStories from "../components/more-stories";
import Layout from "../components/layout";
// import Insta from "../components/insta";
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
        </Head>
        <Container>
          {/* <Insta /> */}
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
