import React from "react";
import GridAreaContainer from "./GridAreaContainer";
import ReactGrid from "./ReactGrid";
import ReactGridFunctional from "./ReactGridFunctional";

const GridArea = ({ layout }) => {
  return (
    <GridAreaContainer>
      <ReactGridFunctional layout={layout} />
    </GridAreaContainer>
  );
};

export default GridArea;
