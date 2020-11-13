import { useEffect } from "react";
import markdownStyles from "./markdown-styles.module.css";
import Head from "next/head";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  useEffect(() => {
    let script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "0ho0ho/0ho0ho.github.io");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-light");
    script.setAttribute("crossorigin", "anonymous");

    document.getElementById("utterances")?.appendChild(script);
  });

  return (
    <>
      <Head>
        <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/highlight.min.js"></script>
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.1.1/styles/default.min.css"
        />
        <script>hljs.initHighlightingOnLoad();</script>
      </Head>
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div id="utterances"></div>
    </>
  );
};

export default PostBody;
