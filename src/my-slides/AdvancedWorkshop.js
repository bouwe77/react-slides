import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Workshop Advanced React Patterns

Q4 2019

**_Context, reducers, testing etc._**
      `;
  return <MarkdownSlide markdown={markdown} />;
};
