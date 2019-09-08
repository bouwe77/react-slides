const React = require("react");
const ReactMarkdown = require("react-markdown");

function MarkDownSlide({ markdown }) {
  return (
    <div className="content">
      <ReactMarkdown source={markdown} />
    </div>
  );
}

export default MarkDownSlide;
