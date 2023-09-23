import Head from 'next/head';
import Container from '@components/container';
import Layout from '@components/layout';
import MoreStories from '@components/more-stories';
import { getAllPosts } from '@lib/api';
import type { PostType } from '@type/post';

type Props = {
  allPosts: PostType[];
};

const Index = ({ allPosts }: Props) => {
  const posts = allPosts;

  return (
    <>
      <Layout>
        <Head>
          <title>0HO&apos;s Blog</title>
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
  const allPosts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return {
    props: { allPosts },
  };
};
