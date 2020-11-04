import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <div className="text-6xl md:text-7xl lg:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left mx-auto">
      {children}
    </div>
  );
};

export default PostTitle;
