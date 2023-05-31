import React, { useEffect } from "react";
import data from "../../data/data.json";
import { Chart, registerables } from "chart.js";

const LineChart = () => {
  const createChart = () => {
    const ctx = document.getElementById("myChart");

    Chart.register(...registerables);
    new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Week1", "Week2", "Week3", "Week4"],
        datasets: data.chartData,
      },
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
        },
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: true,
          },
        },
      },
    });
  };

  useEffect(() => {
    createChart();
  }, []);
  return (
    <div style={{ padding: "0px 21px", height: "35vh", margin: "11px 25px 0px 25px",  backgroundColor: "white", borderRadius: "20px"}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{fontWeight: "bold", fontSize: "18px"}}>Activities</p>
          <select style={{border: "0px solid", backgroundColor: "transparent"}}>
            <option value="May-June 2021">May-June 2021</option>
          </select>
        </div>
        <div style={{display: "flex", gap: "11px", alignItems: "center"}}>
          <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
            <div
              style={{
                width: "10px",
                borderRadius: "50%",
                backgroundColor: "rgba(233, 160, 160, 1)",
                height: "10px",
              }}
            ></div>
            <div>Guest</div>
          </div>
          <div style={{display: "flex", gap: "5px", alignItems: "center"}}>
            <div
              style={{
                width: "10px",
                borderRadius: "50%",
                backgroundColor: "rgba(155, 221, 124, 1)",
                height: "10px",
              }}
            ></div>
            <div>User</div>
          </div>
        </div>
      </div>
      <div style={{height: "21vh"}}>
      <canvas id="myChart"></canvas>
      </div>
    </div>
  );
};

export default LineChart;
