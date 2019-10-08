import React from "react";
import MarkdownSlide from "../slide-wrappers/MarkdownSlide";

export default () => {
  const markdown = `
# FORMS

| **Uncontrolled**        |  | **Controlled**           | 
| ------------- | --- | ------------- | 
| maintain their own state      | <-> | you control state | 
| access values via refs      | <-> | access values via state      | 
| values available on submit | <-> | values always available      | 
| for simple forms | <-> | for interactive, user-friendly forms |


To choose, answer the following question: 

WHEN do I need the entered values?
`;
  return <MarkdownSlide markdown={markdown} />;
};
