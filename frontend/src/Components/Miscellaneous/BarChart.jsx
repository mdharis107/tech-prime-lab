import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

Chart.register(ChartDataLabels);

const BarChart = ({ data }) => {
  // console.log(data.total.length)
  var per = [];
  for (var i = 0; i < data?.total?.length; i++) {
    const value = (data.closed[i] / data.total[i]) * 100;
    per.push(Math.round(value) + "%");
  }

  const labelData = ["STR", "FIN", "QLT", "MAN", "STO", "HR"];

  // console.log(per);

  const chartData = {
    labels: per.map(
      (value, index) => `${value}` + "\n" + `${labelData[index]}`
    ),

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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold",
          },
          autoSkip: false, // Prevent automatic skipping of labels
          maxRotation: 0, // Disable label rotation
          padding: 0,
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
