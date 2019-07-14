import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";
import ConfettiSlide from "../slide-wrappers/ConfettiSlide";

export default () => {
  const markdown = `
# GOOD JOB!!!

You finished the workshop!

But maybe we have time for the BONUS exercise?
    `;
  return (
    <ConfettiSlide>
      <MarkdownSlide markdown={markdown} />
    </ConfettiSlide>
  );
};
