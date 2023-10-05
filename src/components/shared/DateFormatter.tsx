import { parseISO, format } from 'date-fns';

interface Props {
  dateString: string;
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);

  return (
    <time className="text-gray-400 font-extralight" dateTime={dateString}>
      {format(date, 'yyyy LLLL d')}
    </time>
  );
};

export default DateFormatter;
