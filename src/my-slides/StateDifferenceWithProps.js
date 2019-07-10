import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# STATE & PROPS

- State is data **within** a component


- Props is data **between** components
    `;
  return <MarkdownSlide markdown={markdown} />;
};
