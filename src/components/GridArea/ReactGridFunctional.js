import React, { useState, useEffect } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import Chart2 from "../Chart2";
import Bar from "../Bar";

import Container from "../Container";
import config2 from "../../data/config2";
import config from "../../data/config";
import { FaTrashAlt } from "react-icons/fa";
const ReactGridLayout = WidthProvider(RGL);

const ReactGridFunctional = (props) => {
  const [toggle, setToggle] = useState(false);

  //   useEffect(() => {
  //     setLayout(props.taskList);
  //     console.log(props.taskList);
  //   }, [props.taskList]);

  const onLayoutChange = (e) => {};

  const renderChart = (item) => {
    if (item.chartType === "Bar") {
      return <Bar data={config} />;
    } else if (item.chartType === "Waterfall") {
      return <Chart2 data={config2} />;
    }
  };

  return (
    <ReactGridLayout
      {...props}
      style={{ width: "100%" }}
      onLayoutChange={(e) => onLayoutChange(e)}
    >
      {props.layout &&
        props.layout.map((item) => (
          <div
            key={item.i}
            data-grid={item}
            style={{ backgroundColor: "#f3f4f5", overflow: "hidden" }}
          >
            {/* <Container>
              <FaTrashAlt />
            </Container> */}
            {renderChart(item)}
          </div>
        ))}
    </ReactGridLayout>
  );
};
ReactGridFunctional.defaultProps = {
  isDraggable: true,
  isResizable: true,
  items: 5,
  onLayoutChange: function () {},
  rowHeight: 30,
  preventCollision: false,
  cols: 12,
};
export default ReactGridFunctional;
