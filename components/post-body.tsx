import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <script
        src="https://utteranc.es/client.js"
        repo="0ho0ho/0ho0ho.github.io"
        issue-term="pathname"
        theme="github-light"
        crossOrigin="anonymous"
        async
      />
    </>
  );
};

export default PostBody;
