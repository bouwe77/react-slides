import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# FORMS

Uncontrolled: 
- maintain their own state
- access values via refs
- values available on submit
- for simple forms

Controlled:
- you control state
- access values via state
- values always available
- for interactive, user-friendly forms
    `;
  return <MarkdownSlide markdown={markdown} />;
};
