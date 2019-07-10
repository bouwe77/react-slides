import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# PICS

...or it didn't happen?
    `;
  return <MarkdownSlide markdown={markdown} />;
};
