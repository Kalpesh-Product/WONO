import React from 'react';
import '../../styles/dashboard-items/dashboard-items.css'

const DashboardHome = () => {
  return (
    <div className='dashboard-home-container'>
    <div style={{ color: 'black', padding: '20px' }}>
      <h1>This is Dashboard Home</h1>
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <div className='dashboard-home-card'>
          <h2>Total Sales</h2>
          <p>$12,345</p>
        </div>
        <div className='dashboard-home-card'>
          <h2>New Customers</h2>
          <p>123</p>
        </div>
        <div className='dashboard-home-card'>
          <h2>Products Sold</h2>
          <p>456</p>
        </div>
        <div className='dashboard-home-card'>
          <h2>Pending Orders</h2>
          <p>7</p>
        </div>
      </div>

      <div className="dashboard-home-image">
        <img src="https://picsum.photos/200/300" alt="Dashboard Home Image" />
      </div>
    </div>
    </div>
  );
};


export default DashboardHome;
