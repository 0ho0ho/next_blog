import Preview from '@components/post/Preview';
import { getAllPosts } from '@lib/api';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'oungo',
  description: '개발을 즐기는 프론트엔드 개발자입니다. 아무 글이나 끄적이고 있습니다.',
  metadataBase: new URL('https://oungo.github.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://oungo.github.io',
    title: 'oungo',
    description: '개발을 즐기는 프론트엔드 개발자입니다. 아무 글이나 끄적이고 있습니다.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'oungo',
    description: '개발을 즐기는 프론트엔드 개발자입니다. 아무 글이나 끄적이고 있습니다.',
    images: {
      url: 'https://oungo.github.io/og-image.svg',
    },
  },
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
