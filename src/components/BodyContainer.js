import styled from "styled-components";

export default styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  min-height: 160vh;
  width: 100%;
  background-color: ${(props) => (props.dark === "dark" ? "#100c2a" : "white")};
`;
