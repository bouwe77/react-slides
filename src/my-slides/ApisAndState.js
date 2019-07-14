import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# APIS AND STATE

- You’ll need an HTTP library


- Keeping state in sync with api


- This is a side effect: useEffect hook
      `;
  return <MarkdownSlide markdown={markdown} />;
};
