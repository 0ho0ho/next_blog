import Link from 'next/link';

import Date from './Date';

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <Link href={`/posts/${slug}`} className="flex flex-col gap-2 p-4 border border-gray-400 rounded-md">
      <h2 className="text-xl font-semibold text-teal-600">{title}</h2>
      <p className="text-gray-700">{excerpt}</p>
      <div className="text-gray-700">
        <Date dateString={date} />
      </div>
    </Link>
  );
};

export default PostPreview;
