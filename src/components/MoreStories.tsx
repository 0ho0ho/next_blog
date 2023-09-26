import PostPreview from './PostPreview';

import type { Post } from '@type/post';

interface Props {
  posts: Post[];
}

const MoreStories = ({ posts }: Props) => {
  return (
    <ul className="flex flex-col gap-2">
      {posts.map(post => (
        <li key={post.slug}>
          <PostPreview title={post.title} date={post.date} slug={post.slug} excerpt={post.excerpt} />
        </li>
      ))}
    </ul>
  );
};

export default MoreStories;
