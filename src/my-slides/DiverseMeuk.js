import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# Diverse meuk

Nu hebben we alles geleerd.

Ik wil eigenlijk nog wat (advanced) voorbeelden laten zien.

Dit zijn variaties op hetgeen we geleerd hebben.
  `;
  return <MarkdownSlide markdown={markdown} />;
};
