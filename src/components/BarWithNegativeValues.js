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
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          position: "top",
          boundaryGap: [0.05, 0.05],
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
            type: "bar",
            label: {
              show: true,
              position: "left",
            },
            data: [
              {
                value: +7.3,
                label: {
                  show: true,
                  position: "right",
                },
              },
              {
                value: +8.4,
                label: {
                  show: true,
                  position: "right",
                },
              },
              {
                value: +9.9,
                label: {
                  show: true,
                  position: "right",
                },
              },
              {
                value: -12.8,
                label: {
                  show: true,
                  position: "left",
                },
              },
              {
                value: -4.9,
                label: {
                  show: true,
                  position: "left",
                },
              },
              {
                value: -7.7,
                label: {
                  show: true,
                  position: "left",
                },
              },
              {
                value: +19.9,
                label: {
                  show: true,
                  position: "right",
                },
              },
            ],
          },
        ],
      }}
      theme={theme}
      style={{ height: "80vh", width: "80vw" }}
    />
  );
};
export default Bar;
