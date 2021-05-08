import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  justify-content: center;
  align-items: center;
`;
