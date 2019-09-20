import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# PROPS

Passing data between components from **parent to child**
    `;
  return <MarkdownSlide markdown={markdown} />;
};
