import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# CSS STYLING

Global CSS with className only: simple, familiar, ...

Inline CSS: Write styling with JS, no pseudo classes, no syntax highlighting 

CSS Modules: Requires Webpack, separate CSS files, full CSS support, syntax highlighting, affects the whole application because you enable it in the webpack config.

CSS-in-JS: Separate library, write styling with JS using string literals, syntax highlighting depends on IDE, wrapper components, declarative, may lack full CSS support.

Zie https://app.pluralsight.com/player?course=react-creating-reusable-components&author=cory-house&name=react-creating-reusable-components-m8&clip=9&mode=live
    `;
  return <MarkdownSlide markdown={markdown} />;
};
