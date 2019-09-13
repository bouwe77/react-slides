import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# COMPONENTS

A component is just a **javascript function**
      `;
  return <MarkdownSlide markdown={markdown} />;
};
