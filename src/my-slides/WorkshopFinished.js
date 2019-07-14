import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# GOOD JOB!!!

<MyConfetti />

You finished the workshop!

But maybe we have time for the BONUS exercise?
    `;
  return <MarkdownSlide markdown={markdown} />;
};
