import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# COMPONENTS

Parent-Child relationship
      `;
  return <MarkdownSlide markdown={markdown} />;
};
