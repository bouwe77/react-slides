import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# NITWIT API

https://nitwit-api.azurewebsites.net
    `;
  return <MarkdownSlide markdown={markdown} />;
};
