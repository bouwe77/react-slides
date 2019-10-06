import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# COMPONENTS

Separation of concern on the **component** level,

not on the **technology** level 
`;
  return <MarkdownSlide markdown={markdown} />;
};
