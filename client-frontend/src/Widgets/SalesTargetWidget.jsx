const SalesTargetWidget = () => {
    // Sample data for sales target vs actual sales
    const salesData = [
      {
        category: 'Q1 Sales',
        target: 50000,
        actual: 45000,
      },
      {
        category: 'Q2 Sales',
        target: 60000,
        actual: 65000,
      },
      {
        category: 'Q3 Sales',
        target: 70000,
        actual: 55000,
      },
    ];
  
    return (
      <div className="bg-white p-6 h-20 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Sales Target vs Actual</h3>
        <div className="space-y-4">
          {salesData.map((data, index) => {
            const percentage = ((data.actual / data.target) * 100).toFixed(2);
            let progressBarColor = 'bg-gray-200'; // Default (no progress)
            if (percentage >= 100) progressBarColor = 'bg-green-500'; // Over target
            else if (percentage >= 80) progressBarColor = 'bg-yellow-500'; // On track
            else progressBarColor = 'bg-red-500'; // Underperforming
  
            return (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="text-sm font-medium">{data.category}</div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-32 h-2 bg-gray-200 rounded-full">
                    <div
                      className={`h-2 ${progressBarColor} rounded-full`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm font-semibold">{percentage}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };


  export default SalesTargetWidget;