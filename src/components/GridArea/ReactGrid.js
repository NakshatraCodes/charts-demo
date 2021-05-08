import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import Chart2 from "../Chart2";
import config2 from "../../data/config2";

const ReactGridLayout = WidthProvider(RGL);

export default class BasicLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    onLayoutChange: function () {},
    isDraggable: true,
    isResizable: true,
    items: 12,
    rowHeight: 30,
    preventCollision: false,
    cols: 8,
  };

  constructor(props) {
    super(props);

    // const layout = this.generateLayout();
    const layout = [
      { x: 0, y: 0, w: 2, h: 3, i: "0" },
      { x: 2, y: 0, w: 2, h: 4, i: "1" },
      { x: 4, y: 0, w: 2, h: 2, i: "2" },
      { x: 6, y: 0, w: 2, h: 5, i: "3" },
      { x: 8, y: 0, w: 2, h: 5, i: "4" },
      { x: 10, y: 0, w: 2, h: 2, i: "5" },
    ];
    console.log(layout);
    this.state = { layout };
  }

  generateDOM() {
    return this.state.layout.map(function (item) {
      return (
        <div
          key={item.i}
          style={{ backgroundColor: "#f3f4f5", overflow: "hidden" }}
        >
          {/* <span className="text">{i}</span> */}
          <Chart2 data={config2} />
        </div>
      );
    });
  }

  addItem = () => {};

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    return (
      <ReactGridLayout
        style={{ width: "100%" }}
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}
