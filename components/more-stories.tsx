import PostPreview from './post-preview';
import Post from '../types/post';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <div className="grid grid-cols-1 mb-32 md:grid-cols-1 lg:row-gap-5">
        {posts.map((post) => (
          <PostPreview key={post.slug} title={post.title} date={post.date} slug={post.slug} excerpt={post.excerpt} />
        ))}
      </div>
    </section>
  );
};

export default MoreStories;
