import Content from '@components/post/Content';
import DateFormatter from '@components/shared/DateFormatter';
import { getAllPosts, getPostBySlug } from '@lib/api';
import markdownToHtml from '@lib/markdownToHtml';

import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);

  return posts.map(({ slug }) => ({ slug }));
}

const Page = async ({ params }: Props) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content', 'ogImage', 'excerpt']);
  const content = await markdownToHtml(post.content);

  return (
    <article>
      <h1 className="text-3xl font-extrabold">{post.title}</h1>
      <DateFormatter dateString={post.date} />
      <Content content={content} />
    </article>
  );
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, slug, excerpt } = getPostBySlug(params.slug, ['title', 'slug', 'ogImage', 'excerpt']);

  return {
    metadataBase: new URL('https://oungo.github.io'),
    title,
    description: excerpt,
    openGraph: {
      url: `/posts/${slug}`,
      title,
      description: excerpt,
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      title,
      description: excerpt,
      images: {
        url: '/og-image.svg',
      },
    },
  };
}

export default Page;
