'use client';

import Prism from 'prismjs';
import { useEffect } from 'react';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

interface Props {
  content: string;
}

const Content = ({ content }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Content;
