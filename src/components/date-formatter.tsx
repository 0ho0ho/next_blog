import { parseISO, format } from 'date-fns';

interface Props {
  dateString: string;
}

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time className="font-hairline" dateTime={dateString}>
      {format(date, 'yyyy LLLL d')}
    </time>
  );
};

export default DateFormatter;
