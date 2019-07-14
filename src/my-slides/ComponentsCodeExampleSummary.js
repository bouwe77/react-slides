import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# SUMMARY OF THE EXAMPLES

- Component names start with **Capital Letter**

- Use **import/export** if your components are in separate files

- A component **always** returns JSX

- JSX can be both "html" and/or other &lt;Components /&gt;

- Javascript expressions in JSX between **curly brackets**
      `;
  return <MarkdownSlide markdown={markdown} />;
};
