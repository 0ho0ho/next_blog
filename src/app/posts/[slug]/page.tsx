import Content from '@components/post/Content';
import DateFormatter from '@components/shared/DateFormatter';
import { getPostBySlug } from '@lib/api';
import markdownToHtml from '@lib/markdownToHtml';

import type { Metadata } from 'next';

interface Props {
  params: {
    slug: string;
  };
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
    title,
    description: excerpt,
    openGraph: {
      url: `/posts/${slug}`,
      title,
      description: excerpt,
    },
    twitter: {
      title,
      description: excerpt,
    },
  };
}

export default Page;
