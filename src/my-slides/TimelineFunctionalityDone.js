import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";
import ConfettiSlide from "../slide-wrappers/ConfettiSlide";

export default () => {
  const markdown = `
# HURRAY!!!

Our timeline functionality is DONE!

However, it’s all local state… :(
    `;
  return (
    <ConfettiSlide>
      <MarkdownSlide markdown={markdown} />
    </ConfettiSlide>
  );
};
