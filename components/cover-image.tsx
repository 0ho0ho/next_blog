import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src }: Props) => {
  return (
    <img
      className="absolute h-full"
      src={src}
      alt={`Cover Image for ${title}`}
    />
  );
};

export default CoverImage;
