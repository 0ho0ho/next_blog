import DateFormatter from './date-formatter';

interface Props {
  title: string;
  date: string;
}

const PostHeader = ({ title, date }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold">{title}</h1>
      <DateFormatter dateString={date} />
    </>
  );
};

export default PostHeader;
