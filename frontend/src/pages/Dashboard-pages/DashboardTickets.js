import React from 'react'
import Ticket from '../../assets/WONO_images/img/backend-panel/ticket.jpg'

const DashboardTickets = () => {
  return (
    <div className='dashboard-ticket-container'>
    <div className='dashboard-ticket'>
        <h2 style={{color:'black' , padding:'1rem'}}>Ticket management</h2>
      <img src={Ticket} alt='booking' />
    </div>
    </div>
  )
}

export default DashboardTickets
