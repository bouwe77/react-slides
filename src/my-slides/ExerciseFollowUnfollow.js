import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# EXERCISE 6

Users can follow or unfollow each other

https://bouwe.io/workshops/3
      `;
  return <MarkdownSlide markdown={markdown} />;
};
