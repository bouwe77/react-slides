import React from "react";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

const color = "gray";

const Box = styled.div`
  border-radius: 25px;
  width: 400px;
  padding: 20px;
  margin: 10px;
  background: Red;
  color: white;
  &:hover {
    color: ${color};
  }
`;

function App() {
  return (
    <>
      <div
        css={css`
          border-radius: 25px;
          width: 400px;
          padding: 20px;
          margin: 10px;
          background: Red;
          color: white;
          &:hover {
            color: ${color};
          }
        `}
      >
        CSS-in-JS
        <br />
        (inline styles)
      </div>
      <Box>
        CSS-in-JS
        <br />
        (styled components)
      </Box>
    </>
  );
}

export default App;
