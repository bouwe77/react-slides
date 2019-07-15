import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# PROPS.CHILDREN
`;
  return <MarkdownSlide markdown={markdown} />;
};
