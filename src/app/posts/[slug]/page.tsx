import Date from '@components/Date';
import Content from '@components/post/Content';
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
    <article>
      <h1 className="text-3xl font-extrabold">{post.title}</h1>
      <Date dateString={post.date} />
      <Content content={content} />
    </article>
  );
};

export default Page;
