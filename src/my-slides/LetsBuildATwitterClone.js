import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# LET'S BUILD...

a [twitter clone] (https://nitwit.netlify.com) :)
 `;
  return <MarkdownSlide markdown={markdown} />;
};
