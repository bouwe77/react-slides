import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# CSS STYLING

hier de voor- en nadelen van de verschillende manieren beschrijven.
Meenemen: hergebruik, unieke class names, beperkingen enz. 

Zie https://app.pluralsight.com/player?course=react-creating-reusable-components&author=cory-house&name=react-creating-reusable-components-m8&clip=9&mode=live
    `;
  return <MarkdownSlide markdown={markdown} />;
};
