'use client';

import Prism from 'prismjs';
import { useEffect } from 'react';

import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import '@styles/markdown.css';
import Utterances from './Utterances';

interface Props {
  content: string;
}

const Content = ({ content }: Props) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div className="mt-5 markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
      <Utterances />
    </>
  );
};

export default Content;
