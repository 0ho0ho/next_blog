import Container from '@components/container';
import MoreStories from '@components/more-stories';
import { getAllPosts } from '@lib/api';

import Layout from './layout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function Page() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return (
    <>
      <Layout>
        <Container>
          <MoreStories posts={posts} />
        </Container>
      </Layout>
    </>
  );
}
