import React from 'react'
import Ticket from '../../assets/WONO_images/img/backend-panel/ticket.jpg'

const DashboardTickets = () => {
  return (
    <div className='dashboard-ticket-container'>
    <div className='dashboard-ticket'>
        <h1>New title</h1>
      <img src={Ticket} alt='booking' />
    </div>
    </div>
  )
}

export default DashboardTickets
