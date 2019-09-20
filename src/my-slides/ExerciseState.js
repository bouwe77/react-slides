import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE 3

Add state to a component:

https://bouwe.io/workshops/4
    `;
  return <MarkdownSlide markdown={markdown} />;
};
