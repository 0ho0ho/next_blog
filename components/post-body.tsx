import { useEffect } from "react";
import markdownStyles from "./markdown-styles.module.css";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  return (
    <>
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
