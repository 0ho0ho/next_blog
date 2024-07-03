'use client';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import typescript from 'highlight.js/lib/languages/typescript';
import yaml from 'highlight.js/lib/languages/yaml';
import { useEffect } from 'react';
import '@styles/markdown.css';
import 'highlight.js/styles/vs.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('yaml', yaml);

interface Props {
  content: string;
}

const Content = ({ content }: Props) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return <div className="mt-5 markdown-body" dangerouslySetInnerHTML={{ __html: content }} />;
};

export default Content;
