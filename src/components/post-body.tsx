'use client';

import Prism from 'prismjs';
import { useEffect } from 'react';

import markdownStyles from './markdown-styles.module.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      Prism.highlightAll();
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
