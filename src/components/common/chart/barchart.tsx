import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import Box from "@mui/material/Box";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  plugins: {
    legend: {
      position: "top" as const,
    },
  },
};

export function BarChart() {
  const data = {
    datasets: [
      {
        label: "Total Check-In",
        data: [
          { x: "Feb 7", y: 10 },
          { x: "Feb 8", y: 20 },
          { x: "Feb 9", y: 30 },
          { x: "Feb 10", y: 40 },
          { x: "Feb 11", y: 50 },
          { x: "Feb 12", y: 20 },
          { x: "Feb 13", y: 25 },
        ],
        backgroundColor: "rgba(0, 124, 194, 1)",
        barPercentage: 0.9,
        categoryPercentage: 0.3,
        borderRadius: 10,
      },
      {
        label: "Total Check-Out",
        data: [
          { x: "Feb 7", y: 5 },
          { x: "Feb 8", y: 10 },
          { x: "Feb 9", y: 15 },
          { x: "Feb 10", y: 20 },
          { x: "Feb 11", y: 25 },
          { x: "Feb 12", y: 20 },
          { x: "Feb 13", y: 25 },
        ],

        backgroundColor: "rgba(237, 97, 144, 1)",
        barPercentage: 0.9,
        categoryPercentage: 0.3,
        borderRadius: 10,
      },
    ],
  };

  return (
    <Box pt={3}>
      <Bar options={options} data={data} />
    </Box>
  );
}
