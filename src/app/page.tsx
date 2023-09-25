import MoreStories from '@components/more-stories';
import { getAllPosts } from '@lib/api';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function Page() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return <MoreStories posts={posts} />;
}
