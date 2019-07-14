import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE 1

Create your first components

for the twitter clone

https://bouwe.io/workshops/3
    `;
  return <MarkdownSlide markdown={markdown} />;
};
