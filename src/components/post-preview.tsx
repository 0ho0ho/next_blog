import Link from 'next/link';

import DateFormatter from './date-formatter';

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className="m-auto transition-shadow dur ation-200 hover:shadow-medium lg:w-2/3 "
    >
      <div className="p-6">
        <h3 className="mb-2 text-2xl font-medium leading-snug text-teal-600">
          <p>{title}</p>
        </h3>
        <p className="mb-2 text-sm font-normal text-gray-700">{excerpt}</p>
        <div className="text-sm text-gray-700">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
