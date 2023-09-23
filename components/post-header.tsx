import DateFormatter from './date-formatter';
import PostTitle from './post-title';

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto asdfasdfasdfasdfasdfasdfasdfasdfasdfasjkfhvbawkefhjaerfkhbaweflahbwefawefkjaawefawef">
        <div className="block mb-6 md:hidden">asdasd asdasf asdasd </div>
        <div className="mb-6 text-gray-700">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
