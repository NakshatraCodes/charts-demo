import React, { useState } from "react";
import Nav from "./components/Nav";
import RootContainer from "./components/RootContainer";
import SideBar from "./components/SideBar/index";
import GridArea from "./components/GridArea/index";

const App = () => {
  const [layout, setLayout] = useState([
    { x: 0, y: 0, w: 4, h: 8, i: "0", chartType: "Bar" },
    { x: 4, y: 0, w: 4, h: 8, i: "1", chartType: "Waterfall" },
    { x: 8, y: 0, w: 4, h: 8, i: "2", chartType: "Waterfall" },
  ]);

  const onChartAdd = (activeChart) => {
    let chartType = activeChart === "chart1" ? "Waterfall" : "Bar";
    let i = (parseInt(layout.length - 1) + 1).toString();
    const newLayout = [
      ...layout,
      {
        x: 0,
        y: 0,
        w: 4,
        h: 8,
        chartType,
        i,
      },
    ];
    setLayout(newLayout);
    console.log(layout);
  };
  return (
    <RootContainer>
      <Nav />
      <GridArea layout={layout} />
      <SideBar onAddClick={onChartAdd}></SideBar>
    </RootContainer>
  );
};

export default App;
