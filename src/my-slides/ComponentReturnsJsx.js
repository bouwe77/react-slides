import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# COMPONENTS

That function returns a piece of UI:

**JSX**
      `;
  return <MarkdownSlide markdown={markdown} />;
};
