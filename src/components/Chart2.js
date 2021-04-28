import React from "react";
import ReactEcharts from "echarts-for-react";

const Chart2 = ({ theme }) => {
  return (
    <ReactEcharts
      option={{
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          formatter: function (params) {
            var tar;
            for (let i = 1; i <= 4; i++) {
              if (params[i].value !== "-") {
                tar = params[i];
              }
            }
            return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
          },
        },
        legend: {
          data: ["Starts", "Exits", "Discrepencies", "Net Change"],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          splitLine: { show: false },
          data: [
            "Expansion",
            "Replacement",
            "Involuntary Turnover",
            "Voluntary Turnover",
            "Discrepencies",
            "Net Change",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Empty",
            type: "bar",
            stack: "empty",
            itemStyle: {
              barBorderColor: "rgba(0,0,0,0)",
              color: "rgba(0,0,0,0)",
            },
            emphasis: {
              itemStyle: {
                barBorderColor: "rgba(0,0,0,0)",
                color: "rgba(0,0,0,0)",
              },
            },
            barWidth: "95%",
            data: [0, 394, 604, 372, 372, "-"],
          },
          {
            name: "Starts",
            type: "bar",
            stack: "empty",
            itemStyle: {
              barBorderColor: "rgb(145,204,117)",
              color: "rgb(145,204,117)",
            },
            label: {
              show: true,
              position: "top",
            },
            data: [394, 326, "-", "-", "-", "-"],
          },
          {
            name: "Exits",
            type: "bar",
            stack: "empty",
            itemStyle: {
              barBorderColor: "rgb(238,102,102)",
              color: "rgb(238,102,102)",
            },
            label: {
              show: true,
              position: "bottom",
            },
            data: ["-", "-", 116, 232, "-", "-"],
          },
          {
            name: "Discrepencies",
            type: "bar",
            stack: "empty",
            itemStyle: {
              barBorderColor: "rgb(125,131,145)",
              color: "rgb(125,131,145)",
            },
            label: {
              show: true,
              position: "bottom",
            },
            data: ["-", "-", "-", "-", 7, "-"],
          },
          {
            name: "Net Change",
            type: "bar",
            stack: "empty",
            label: {
              show: true,
              position: "top",
            },
            data: ["-", "-", "-", "-", "-", 393],
          },
        ],
      }}
      theme={theme}
      style={{ height: "80vh", width: "80vw" }}
    />
  );
};
export default Chart2;
