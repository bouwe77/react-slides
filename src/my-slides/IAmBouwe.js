import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
I am **Bouwe**

Software Engineer @ New Nexus

[bouwe.io]

[bouwe.io]: https://bouwe.io
  `;
  return <MarkdownSlide markdown={markdown} />;
};
