import DateFormatter from './date-formatter';

interface Props {
  title: string;
  date: string;
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <h1 className="max-w-2xl mx-auto mb-3 text-4xl font-bold leading-tight tracking-tighter lg:text-3xl md:leading-none">
        {title}
      </h1>
      <DateFormatter dateString={date} />
    </>
  );
};

export default PostHeader;
