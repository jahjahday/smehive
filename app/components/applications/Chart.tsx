import { useState, useEffect } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const data = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  })

  const [chartOptions, setChartOptions] = useState({

  })

  useEffect(() => {
    setChartData({
      labels: ["John", "Mike"],
      datasets: [
        {
          label: "Who did this",
          data: [12, 55],
          borderColor: "rgb(53, 1, 4"),
          backgroundColor: "rgba(53, 162)"
        }
      ]
    })
    setChartOptions({
      responsive: true,
      plugins{ 
        legend: {
          position: "top"
        },
        title: {
          display: true,
          text: "who did"
        }
      }
    })
  }, [])

  return (
    <div>
      <Bar options={chartOptions} data={chartData} />
    </div>
  )

};

