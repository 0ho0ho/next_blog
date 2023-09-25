import PostBody from '@components/post-body';
import PostHeader from '@components/post-header';
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
      <PostHeader title={post.title} date={post.date} />
      <PostBody content={content} />
    </article>
  );
};

export default Page;
