import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# LET'S BUILD...

a <a href="https://nitwit.netlify.com" target="_blank">twitter clone</a> :)
    `;
  return <MarkdownSlide markdown={markdown} />;
};
