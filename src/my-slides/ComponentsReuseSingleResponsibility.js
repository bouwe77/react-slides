import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# COMPONENTS

Reusability and Single Responsibility
      `;
  return <MarkdownSlide markdown={markdown} />;
};
