import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# COMPONENTS

Example
      `;
  return <MarkdownSlide markdown={markdown} />;
};
