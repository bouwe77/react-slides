import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE 2

Pass props between components

https://bouwe.io/workshops/4
    `;
  return <MarkdownSlide markdown={markdown} />;
};
