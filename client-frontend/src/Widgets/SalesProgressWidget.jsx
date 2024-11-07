const SalesProgressWidget = () => {
    // Sample data for sales progress
  
    const salesData = [
      {
        region: "North America",
        progress: 85, // Percentage
      },
      {
        region: "Europe",
        progress: 60,
      },
      {
        region: "Asia Pacific",
        progress: 75,
      },
      {
        region: "South America",
        progress: 80,
      },
    ];
    return (
      <div className="bg-white p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Sales Progress</h3>
        <div className="space-y-4">
          {salesData.map((data, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="text-sm font-medium">{data.region}</div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-2 bg-blue-500 rounded-full"
                    style={{ width: `${data.progress}%` }}
                  ></div>
                </div>
                <div className="text-sm font-semibold">{data.progress}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default SalesProgressWidget;