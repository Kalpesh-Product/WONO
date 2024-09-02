import React from 'react'
import Booking from '../../assets/WONO_images/img/backend-panel/booking-engine.jpg'
import '../../styles/dashboard-items/dashboard-items.css'
import Template1_3 from '../../assets/WONO_images/img/website-builder/template-1-3.jpeg'

const DashboardBooking = () => {
  return (
    <div className='dashboard-booking-container'>
    <div className='dashboard-booking'>
      <img src={Template1_3} alt='booking' />
    </div>
    </div>
  )
}

export default DashboardBooking
