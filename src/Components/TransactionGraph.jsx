import { Line } from "react-chartjs-2";
import "chart.js/auto";

const TransactionGraph = ({ transactions }) => {
  const data = transactions.reduce((acc, transaction) => {
    const date = transaction.date;
    if (!acc[date]) {
      acc[date] = 0;
    }
    acc[date] += transaction.amount;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Transaction Amount",
        data: Object.values(data),
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  return <Line data={chartData} />;
};

export default TransactionGraph;
