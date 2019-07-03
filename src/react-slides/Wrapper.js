import styled from "@emotion/styled";

// https://stackoverflow.com/questions/1719452/how-to-make-a-div-always-full-screen/23951500

const Wrapper = styled.div`
  /* Height and width fallback for older browsers. */
  height: 100%;
  width: 100%;

  /* Set the height to match that of the viewport. */
  height: 100vh;

  /* Set the width to match that of the viewport. */
  width: 100vw;

  /* Remove any browser-default margins. */
  margin: 0;

  background-color: ${props => props.backgroundColor};
`;

export default Wrapper;
