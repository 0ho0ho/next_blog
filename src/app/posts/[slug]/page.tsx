import DateFormatter from '@components/date-formatter';
import PostBody from '@components/post-body';
import { getPostBySlug } from '@lib/api';
import markdownToHtml from '@lib/markdownToHtml';

interface Props {
  params: {
    slug: string;
  };
}

const Page = async ({ params }: Props) => {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content', 'ogImage', 'excerpt']);
  const content = await markdownToHtml(post.content);

  return (
    <article className="mb-32">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <DateFormatter dateString={post.date} />
      <PostBody content={content} />
    </article>
  );
};

export default Page;
