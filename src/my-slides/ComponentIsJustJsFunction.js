import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# COMPONENTS

A component is just 

a **javascript function**
      `;
  return <MarkdownSlide markdown={markdown} />;
};
