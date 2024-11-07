import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressDoughnutWidget = () => {
  const targetCompletion = 70; // 55% completion
  const remaining = 100 - targetCompletion;

  const data = {
    labels: ['Completed', 'Remaining'],
    datasets: [
      {
        data: [targetCompletion, remaining],
        backgroundColor: ['#4CAF50', '#E0E0E0'], // Green for completed, grey for remaining
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `${tooltipItem.raw}%`; // Format tooltip as percentage
          },
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg text-center">
      <h3 className="text-xl font-semibold mb-4">Progress Towards Goal</h3>
      <div className="mb-4">
        <Pie data={data} options={options} />
      </div>
      <div className="text-sm font-semibold">
        <p>Completion: {targetCompletion}%</p>
      </div>
    </div>
  );
};

export default ProgressDoughnutWidget;
