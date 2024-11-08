// Recurring Clients Widget Component
const RecurringClientsWidget = ({widgetTitle}) => {

    const recurringClients = [
        {
          id: 1,
          name: "John Doe",
          totalBookings: 12,
          lastVisit: "2024-10-15",
          totalSpent: "$1,200",
          profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
        },
        {
          id: 2,
          name: "Jane Smith",
          totalBookings: 8,
          lastVisit: "2024-11-01",
          totalSpent: "$850",
          profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
        },
        {
          id: 3,
          name: "David Brown",
          totalBookings: 15,
          lastVisit: "2024-09-20",
          totalSpent: "$1,450",
          profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
        },
        // {
        //   id: 4,
        //   name: "Emily White",
        //   totalBookings: 10,
        //   lastVisit: "2024-10-10",
        //   totalSpent: "$1,050",
        //   profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
        // },
        // {
        //   id: 5,
        //   name: "Michael Green",
        //   totalBookings: 5,
        //   lastVisit: "2024-11-03",
        //   totalSpent: "$600",
        //   profileImage: "https://randomuser.me/api/portraits/men/5.jpg",
        // },
      ];
  return (
    <div className="bg-white p-6  rounded-lg">
      <h3 className="text-xl font-semibold mb-4 sticky bg-white top-0">{widgetTitle}</h3>
      <ul>
        {recurringClients.map((client) => (
          <li key={client.id} className="flex items-center mb-4">
            <img
              src={client.profileImage}
              alt={client.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-sm font-medium">{client.name}</p>
              <p className="text-xs text-gray-500">
                Bookings: {client.totalBookings}, Last Visit: {client.lastVisit}
              </p>
              <p className="text-sm font-semibold">{client.totalSpent}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringClientsWidget;