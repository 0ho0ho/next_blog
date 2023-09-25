import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="max-w-2xl mx-auto mb-3 text-4xl font-bold leading-tight tracking-tighter lg:text-3xl md:leading-none">
      {children}
    </h1>
  );
};

export default PostTitle;
