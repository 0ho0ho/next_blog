import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  if (slug)
    return (
      <img
        className="absolute h-full"
        src={src}
        alt={`Cover Image for ${title}`}
      />
    );

  return <img className="" src={src} />;
};

export default CoverImage;
