import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# FORMS

- Uncontrolled inputs: DOM


- Controlled inputs: state
    `;
  return <MarkdownSlide markdown={markdown} />;
};
