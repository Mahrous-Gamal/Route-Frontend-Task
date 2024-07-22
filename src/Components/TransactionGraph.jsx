import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useEffect, useState } from "react";

const TransactionGraph = ({ transactions }) => {
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    if (!Array.isArray(transactions)) return;

    const data = transactions.reduce((acc, transaction) => {
      const date = new Date(transaction.date).toLocaleDateString();
      if (!acc[date]) {
        acc[date] = 0;
      }
      acc[date] += transaction.amount;

      return acc;
    }, {});

    const newChartData = {
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

    setChartData(newChartData);
  }, [transactions]);

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default TransactionGraph;