import React from "react";
import MarkdownSlide from "./MarkdownSlide";

export default () => {
  const markdown = `
# WHAT'S NEXT?

- Type safety:

  _prop-types and/or TypeScript_


- Libraries/technologies:

  _Hooks (useContext, useReducer, etc), React Testing Library, Formik, React router, GraphQL, etc._


- People:

  _Dan Abramov, Kent C. Dodds, Ryan Florence_
    `;
  return <MarkdownSlide markdown={markdown} />;
};
