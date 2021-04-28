import React from "react";
import ReactEcharts from "echarts-for-react";

const CandleStick = ({ theme }) => {
  return (
    <ReactEcharts
      option={{
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        xAxis: {
          data: [
            "Expansion",
            "Replacement",
            "Involuntary Turnover",
            "Discrepencies",
          ],
        },
        yAxis: {},
        series: [
          {
            type: "k",
            data: [
              [20, 34, 10, 38],
              [40, 35, 30, 50],
              [31, 38, 33, 44],
              [38, 15, 5, 42],
            ],
          },
        ],
      }}
      theme={theme}
      style={{
        height: "80vh",
        width: "50vw",
        margin: "auto",
      }}
    />
  );
};
export default CandleStick;
