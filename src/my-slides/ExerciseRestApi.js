import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE 5

Calling a REST API

https://bouwe.io/workshops/3
    `;
  return <MarkdownSlide markdown={markdown} />;
};
