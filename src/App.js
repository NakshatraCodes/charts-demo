import React, { useState } from "react";
import Button from "./components/Button";
import Wrapper from "./components/Wrapper";
import BodyContainer from "./components/BodyContainer";
import ToggleButton from "./components/ToggleButton";

import CandleStick from "./components/CandleStick";
import Bar from "./components/Bar";

const App = () => {
  const [active, setActive] = useState("bar");
  const [theme, setTheme] = useState("light");

  const renderChart = () => {
    if (active === "candle") {
      return <CandleStick theme={theme} />;
    } else {
      return <Bar theme={theme} />;
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
        <Button primary={active === "bar"} onClick={() => setActive("bar")}>
          Bar
        </Button>
        <Button
          primary={active === "candle"}
          onClick={() => setActive("candle")}
        >
          CandleStick
        </Button>
        <ToggleButton changeTheme={changeTheme} />
        {renderChart()}
      </Wrapper>
    </BodyContainer>
  );
};
export default App;
