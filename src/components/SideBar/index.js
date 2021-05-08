import React, { useState } from "react";
import SideContainer from "./SideContainer";
import Button from "../Button";
import Chart2 from "../Chart2";
import Bar from "../Bar";
import Box from "../Box";
import BarWithNegativeValues from "../BarWithNegativeValues";

import config from "../../data/config";
import config2 from "../../data/config2";

const SideBar = ({ onAddClick }) => {
  const [active, setActive] = useState("chart1");
  const renderChart = () => {
    if (active === "chart1") {
      return (
        <Box>
          <Chart2 data={config2} />
        </Box>
      );
    } else {
      return (
        <>
          <Box>
            <Bar data={config} />
          </Box>
          <Box>
            <BarWithNegativeValues data={config} />
          </Box>
        </>
      );
    }
  };

  return (
    <SideContainer>
      <Button primary={active === "chart1"} onClick={() => setActive("chart1")}>
        WaterFall
      </Button>
      <Button primary={active === "chart2"} onClick={() => setActive("chart2")}>
        Bar
      </Button>
      {renderChart()}
      <Button primary onClick={(e) => onAddClick(active)}>
        Add
      </Button>
    </SideContainer>
  );
};

export default SideBar;
