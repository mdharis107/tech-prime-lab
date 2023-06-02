import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

const chartData = {
  labels: ["a", "b", "c", "d", "e", "f"],
  datasets: [
    {
      label: "Temperature",
      data: [12, 15, 20, 20, 11, 18],
      backgroundColor: "blue",
      borderColor: "blue",
      borderWidth: 1,
      borderRadius: 5,
      barPercentage: 0.5,
      categoryPercentage: 0.4,
    },
    {
      label: "Temperature",
      data: [10, 10, 21, 20, 10, 15],
      backgroundColor: "green",
      borderColor: "green",
      borderWidth: 1,
      borderRadius: 5,
      barPercentage: 0.5,
      categoryPercentage: 0.4,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
      },
    },
    datalabels: {
      display: true,
      color: "black",
      anchor: "end",
      offset: -18,
      align: "start",
    },
  },
};

const BarChart = () => {
  return (
    <>
      <Bar
        width={"350px"}
        height={"350px"}
        data={chartData}
        options={options}
      />
    </>
  );
};

export default BarChart;
