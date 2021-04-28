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
          left: "1%",
          right: "1%",
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
            "Level of Absence",
            "HR Policies Inquiry",
            "Employee Relations",
            "Data Change",
            "Benefits",
            "Compensation",
            "Employee Grievance",
          ],
        },
        series: [
          {
            name: "Case Days to Close",
            type: "bar",
            barGap: "0%",
            barCategoryGap: "20%",
            data: [23.2, 23.9, 38.6, 41.7, 48.7, 60.6, 83.9],
          },
          {
            name: "Open Cases Age",
            type: "bar",
            barGap: "0%",
            barCategoryGap: "20%",
            data: [15.9, 15.5, 28.7, 54.5, 53.6, 68.3, 64],
          },
        ],
      }}
      theme={theme}
      style={{ height: "80vh", width: "80vw" }}
    />
  );
};
export default Bar;
