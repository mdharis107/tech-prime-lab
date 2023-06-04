import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

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
      offset: -17,
      align: "start",
    },
  },
};

const BarChart = ({ data }) => {
  const chartData = {
    labels: ["STR", "FIN", "QLT", "MAN", "STO", "HR"],
    datasets: [
      {
        label: "Total",
        data: data.total,
        backgroundColor: "blue",
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5,
        barPercentage: 0.5,
        categoryPercentage: 0.4,
      },
      {
        label: "Closed",
        data: data.closed,
        backgroundColor: "green",
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 5,
        barPercentage: 0.5,
        categoryPercentage: 0.4,
      },
    ],
  };
  return (
    <>
      <Bar
        width={"355px"}
        height={"360px"}
        data={chartData}
        options={options}
      />
    </>
  );
};

export default BarChart;
