import React from 'react'
import HR from '../../assets/WONO_images/img/backend-panel/hr-management.jpg'

const DashboardHR = () => {
  return (
    <div className='dashboard-hr-container'>
    <div className='dashboard-hr'>
        <h2 style={{color:'black' , padding:'1rem'}}>HR management</h2>
      <img src={HR} alt='booking' />
    </div>
    </div>
  )
}

export default DashboardHR
