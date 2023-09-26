import Preview from '@components/post/Preview';
import { getAllPosts } from '@lib/api';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

const Page = () => {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt']);

  return (
    <ul className="flex flex-col gap-2">
      {posts.map(post => (
        <li key={post.slug}>
          <Preview title={post.title} date={post.date} slug={post.slug} excerpt={post.excerpt} />
        </li>
      ))}
    </ul>
  );
};

export default Page;
