import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registering required components from Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraphWidget = () => {
  // Example data for the bar chart
  const data = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'], // Labels for the bars
    datasets: [
      {
        label: 'Quarterly Sales', // Label for the dataset
        data: [50, 75, 100, 40], // Data for each bar
        backgroundColor: [
          // Conditional colors based on the value of the data
          (context) => {
            const value = context.raw;
            return value < 50 ? '#f44336' : '#4CAF50'; // Red if below 50, green if 50 or more
          },
          (context) => {
            const value = context.raw;
            return value < 50 ? '#f44336' : '#4CAF50'; // Same logic for all bars
          },
          (context) => {
            const value = context.raw;
            return value < 50 ? '#f44336' : '#4CAF50'; // Same logic for all bars
          },
          (context) => {
            const value = context.raw;
            return value < 50 ? '#f44336' : '#4CAF50'; // Same logic for all bars
          },
        ],
        borderRadius: 8, // Rounded corners for the bars
        borderWidth: 0, // Border width of bars
        hoverBackgroundColor: [
          // Hover colors using the same conditional logic
          (context) => {
            const value = context.raw;
            return value < 50 ? '#e53935' : '#388E3C'; // Darker red if below 50, darker green if 50 or more
          },
          (context) => {
            const value = context.raw;
            return value < 50 ? '#e53935' : '#388E3C'; // Same logic for all bars
          },
          (context) => {
            const value = context.raw;
            return value < 50 ? '#e53935' : '#388E3C'; // Same logic for all bars
          },
          (context) => {
            const value = context.raw;
            return value < 50 ? '#e53935' : '#388E3C'; // Same logic for all bars
          },
        ],
      },
    ],
  };
  
  

  // Chart options for customization
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Adjusts the chart size
    scales: {
      x: {
        grid: {
          display: false, // Hides the grid lines on the x-axis
        },
      },
      y: {
        beginAtZero: true, // Start the y-axis from 0
        ticks: {
          stepSize: 25, // Set the step size for y-axis ticks
        },
      },
    },
    plugins: {
      legend: {
        position: 'top', // Legend position
        labels: {
          font: {
            size: 14, // Font size for legend labels
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `Sales: ${context.raw}`, // Custom tooltip content
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg text-center">
      <h3 className="text-xl font-semibold mb-4">Quarterly Sales</h3>
      <div style={{ height: '300px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraphWidget;
