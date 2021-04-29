import React from "react";
import ReactEcharts from "echarts-for-react";

const Bar = ({ theme, data }) => {
  const getYAxis = () => {
    let yAxisData = [];
    data.forEach((element) => {
      yAxisData.push(element.name);
    });
    return yAxisData;
  };

  const getSeries1 = () => {
    let series1 = [];
    data.forEach((element) => {
      series1.push(element.caseDaysToClose);
    });
    return series1;
  };

  const getSeries2 = () => {
    let series2 = [];
    data.forEach((element) => {
      series2.push(element.openCasesAge);
    });
    return series2;
  };

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
          data: getYAxis(),
        },
        series: [
          {
            name: "Case Days to Close",
            type: "bar",
            barGap: "0%",
            barCategoryGap: "20%",
            data: getSeries1(),
          },
          {
            name: "Open Cases Age",
            type: "bar",
            barGap: "0%",
            barCategoryGap: "20%",
            data: getSeries2(),
          },
        ],
      }}
      theme={theme}
      style={{ height: "80vh", width: "80vw" }}
    />
  );
};
export default Bar;
