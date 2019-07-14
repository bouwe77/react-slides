import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE 4

Add a component with a form

https://bouwe.io/workshops/3
    `;
  return <MarkdownSlide markdown={markdown} />;
};
