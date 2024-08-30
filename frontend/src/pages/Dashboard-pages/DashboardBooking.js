import React from 'react'
import Booking from '../../assets/WONO_images/img/backend-panel/booking-engine.jpg'
import '../../styles/dashboard-items/dashboard-items.css'

const DashboardBooking = () => {
  return (
    <div className='dashboard-booking-container'>
    <div className='dashboard-booking'>
        
      <img src={Booking} alt='booking' />
    </div>
    </div>
  )
}

export default DashboardBooking
