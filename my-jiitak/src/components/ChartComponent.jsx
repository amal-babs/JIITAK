import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = () => {
  const data = {
    labels: ["Under 10", "10s", "20s", "30s", "40s", "50s", "60s", "70s", "80s", "90+"],
    datasets: [
      {
        label: "Male",
        data: [100, 200, 400, 600, 800, 700, 500, 300, 200, 100],
        backgroundColor: "rgba(255, 159, 64, 0.8)",
      },
      {
        label: "Female",
        data: [150, 250, 300, 500, 700, 600, 400, 200, 100, 50],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
      },
      {
        label: "Other",
        data: [50, 100, 150, 200, 250, 300, 150, 50, 30, 10],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
      },
      {
        label: "No Response",
        data: [10, 20, 30, 40, 50, 60, 40, 20, 10, 5],
        backgroundColor: "rgba(201, 203, 207, 0.8)",
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Gender and Age Distribution (2024 January)",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
      legend: {
        position: "top",
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of People",
        },
      },
    },
  };

  return (
    <div className="stat-card" style={{ width: "80%", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
