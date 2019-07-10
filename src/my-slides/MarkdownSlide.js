const React = require("react");
const ReactMarkdown = require("react-markdown");

function MarkDownSlide({ markdown }) {
  return <ReactMarkdown source={markdown} />;
}

export default MarkDownSlide;
