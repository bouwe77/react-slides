const React = require("react");
const ReactMarkdown = require("react-markdown");

function MarkDownSlide({ markdown }) {
  return (
    <p className="">
      <ReactMarkdown source={markdown} />
    </p>
  );
}

export default MarkDownSlide;
