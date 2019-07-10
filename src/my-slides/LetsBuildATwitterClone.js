import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# LET'S BUILD...

a <a href="https://nitwit.netlify.com" target="_blank">twitter clone</a> :)
    `;
  return <MarkdownSlide markdown={markdown} />;
};
