import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# BONUS EXERCISE

Users can follow or unfollow each other

https://bouwe.io/workshops/3
      `;
  return <MarkdownSlide markdown={markdown} />;
};
