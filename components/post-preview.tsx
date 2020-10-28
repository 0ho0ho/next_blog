import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import Author from "../types/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <div className="border-solid border-4 p-5">
        <div className="flex">
          <div className="inline-block w-50">
            <h3 className="text-3xl mb-3 leading-snug">
              <a className="hover:underline">{title}</a>
            </h3>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <div className="text-lg mb-4">
              <DateFormatter dateString={date} />
            </div>
          </div>
          <div className="inline-block w-20">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
