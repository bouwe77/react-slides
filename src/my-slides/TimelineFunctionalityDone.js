import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# HURRAY!!!

<MyConfetti />

Our timeline functionality is DONE!

However, it’s all local state… :(
    `;
  return <MarkdownSlide markdown={markdown} />;
};
