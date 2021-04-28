import React, { useState } from "react";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import BodyContainer from "./components/BodyContainer";
import ToggleButton from "./components/ToggleButton";
import ChartContainer from "./components/ChartContainer";

import Chart2 from "./components/Chart2";
import Bar from "./components/Bar";
import BarWithNegativeValues from "./components/BarWithNegativeValues";

const App = () => {
  const [active, setActive] = useState("chart1");
  const [theme, setTheme] = useState("light");

  const renderChart = () => {
    if (active === "chart2") {
      return <Chart2 theme={theme} />;
    } else {
      return (
        <ChartContainer>
          <Bar theme={theme} />
          <BarWithNegativeValues theme={theme} />
        </ChartContainer>
      );
    }
  };

  const changeTheme = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#100c2a";
      setTheme("dark");
    } else {
      document.body.style.backgroundColor = "white";
      setTheme("light");
    }
  };

  return (
    <BodyContainer dark={theme}>
      <Wrapper>
        <Button
          primary={active === "chart1"}
          onClick={() => setActive("chart1")}
        >
          Chart 1
        </Button>
        <Button
          primary={active === "chart2"}
          onClick={() => setActive("chart2")}
        >
          Chart 2
        </Button>
        <ToggleButton changeTheme={changeTheme} />
        {renderChart()}
      </Wrapper>
    </BodyContainer>
  );
};
export default App;
