import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
};

const PostPreview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="hover:shadow-medium transition-shadow duration-200 lg:w-2/3 m-auto ">
        <div className="p-6">
          <h3 className="text-2xl text-teal-600 mb-2 leading-snug font-medium text-gray-800">
            <p>{title}</p>
          </h3>
          <p className="text-sm mb-2 text-gray-700 font-normal">{excerpt}</p>
          <div className="text-sm text-gray-700">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
