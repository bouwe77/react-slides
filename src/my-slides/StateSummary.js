import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# STATE SUMMARY

- One way data binding


- Events


- Re-render !== Repaint
    `;
  return <MarkdownSlide markdown={markdown} />;
};
