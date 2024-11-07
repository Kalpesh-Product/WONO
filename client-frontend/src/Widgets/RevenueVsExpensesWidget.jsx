import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const RevenueVsExpensesWidget = () => {
  // Sample data for revenue and expenses
  const revenue = 120000;
  const expenses = 80000;
  const balance = revenue - expenses;

  // Bar chart data
  const data = {
    labels: ['Revenue', 'Expenses'],
    datasets: [
      {
        label: 'Amount ($)',
        data: [revenue, expenses],
        backgroundColor: ['#4CAF50', '#FF6347'], // Green for revenue, red for expenses
        borderColor: ['#388E3C', '#D32F2F'],
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `$${tooltipItem.raw.toLocaleString()}`; // Format tooltips with commas
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `$${value.toLocaleString()}`; // Format y-axis labels with commas
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg flex flex-col h-full">
      <h3 className="text-xl font-semibold mb-4">Revenue vs Expenses</h3>
      <div className="space-y-4 flex-grow">
        <div className="flex justify-between">
          <span className="text-sm">Total Revenue</span>
          <span className="text-sm font-semibold">${revenue.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Total Expenses</span>
          <span className="text-sm font-semibold">${expenses.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm">Balance</span>
          <span className={`text-sm font-semibold ${balance >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            ${balance.toLocaleString()}
          </span>
        </div>
        <div className="mt-6 flex-grow">
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default RevenueVsExpensesWidget;
