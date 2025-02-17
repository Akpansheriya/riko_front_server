import React from "react";
import ReactApexChart from "react-apexcharts";
import "./graph.scss";

const Graph = () => {
  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: { 
        enabled: false,
      },
      toolbar: {
        show: false, 
      },
    },
    colors: ["#26BF94", "#535FFF"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [3, 2], 
      curve: "smooth", 
      dashArray: [0, 8], 
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        gradientToColors: ["#26BF94", "#535FFF"],
        shadeIntensity: 0.5,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
      },
    },
    legend: {
      position: "bottom",
      horizontalAlign: "center",
      markers: {
        width: 25,
        height: 25,
        fillColors: ["#26BF94", "#535FFF"], 
      },
      labels: {
        colors: ["#26BF94", "#535FFF"],
      },
    },
    xaxis: {
      categories: [
        1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
        12000,
      ], 
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " Users";
            },
          },
        },
        {
          title: {
            formatter: function (val) {
              return val + " Listeners";
            },
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    dropShadow: {
      enabled: true,
      color: "#000", 
      top: 3,
      left: 3,
      blur: 4,
      opacity: 0.5,
    },
  };

  const series = [
    {
      name: "Users",
      data: [1800, 4000, 3300, 2000, 3600, 4900, 3200, 3400, 4500, 3200, 3400, 2100],
    },
    {
      name: "Listeners",
      data: [1500, 1800, 1700, 3200, 2200, 2500, 3600, 4900, 2800, 2800, 2100, 3000],
    },
  ];

  return (
    <div id="chart" className="chart">
      <ReactApexChart options={options} series={series} type="line" height={500} />
    </div>
  );
};

export default Graph;
