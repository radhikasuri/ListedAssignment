import React, { useRef, useEffect } from "react";
import data from "../../data/data.json";
import { Chart } from "chart.js";
import "../../styles/Dashboard/pieChart.css";

const PieChartDash = () => {
  const canvas = useRef();

  useEffect(() => {
    const ctx = canvas.current;

    let chartStatus = Chart.getChart("chart");
    if (chartStatus !== undefined) {
      chartStatus.destroy();
    }

    new Chart(ctx, {
      type: "pie",
      data: {
        labels: data.pieChartData.labels,
        datasets: [
          {
            data: data.pieChartData.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            maxWidth: 180
          },
        },
        aspectRatio:1.8
      },

    });
  }, []);
  return (
    <>
      <div className="container">
        <div style={{ height: "100%", margin: 0, padding: 0, width:"100%"}}>
          <canvas style={{padding: 0, margin: 0}} id="myChart" ref={canvas}></canvas>
        </div>
      </div>
    </>
  );
};

export default PieChartDash;
