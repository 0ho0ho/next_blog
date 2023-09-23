import { parseISO, format } from 'date-fns';

type Properties = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Properties) => {
  const date = parseISO(dateString);
  return (
    <time className="font-hairline" dateTime={dateString}>
      {format(date, 'yyyy LLLL d')}
    </time>
  );
};

export default DateFormatter;
