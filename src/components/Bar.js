import React from "react";
import ReactEcharts from "echarts-for-react";

const Bar = ({ theme }) => {
  return (
    <ReactEcharts
      option={{
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        legend: {
          data: ["Case Days to Close", "Open Cases Age"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: "category",
          data: [
            "Employee Grievance",
            "Compensation",
            "Benefits",
            "Data Change",
            "Employee Relations",
            "HR Policy",
          ],
        },
        series: [
          {
            name: "Case Days to Close",
            type: "bar",
            data: [18203, 23489, 29034, 104970, 131744, 63230],
          },
          {
            name: "Open Cases Age",
            type: "bar",
            data: [19325, 23438, 31000, 121594, 134141, 68807],
          },
        ],
      }}
      theme={theme}
      style={{ height: "80vh", width: "80vw" }}
    />
  );
};
export default Bar;
