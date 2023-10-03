import Preview from '@components/post/Preview';
import { getAllPosts } from '@lib/api';

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
