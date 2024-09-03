import React from 'react'
import "../styles/4-cardsContainer.css"

const Four_cardsComponents = () => {
  return (
    <div className='4-cardsContainer ' style={{backgroundColor:"white"}}>
        <div className='four-cardsHeaderText'>
            <p>Explore the Worlds largest Commerce Community</p>
        </div>
        <div className='container my-5'>
            <div className='row '>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card six-cards shadow' style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>FRONTEND</h5>
                            <p className='card-text'><ol>
                                <li>Website with Booking Engine</li>
                                <li>Payment Gateway</li>
                                <li>Meeting Rooms</li>
                                <li>Customer Profile and More</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card shadow'  style={{backgroundColor:"white"}} > 
                        <div className='card-body'>
                            <h5 className='card-title'>FINANCE & ACCOUNTING</h5>
                            <p className='card-text'><ol>
                                <li>Automated Invoicing</li>
                                <li>Cashflow and Projection</li>
                                <li>Budget Management</li>
                                <li>Working Capital & more</li>
                                </ol>
                            </p>

                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card shadow'  style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>CUSTOMER MANAGEMENT SERVICES (CMS)</h5>
                            <p className='card-text'><ol>
                                <li>Ticket Raising</li>
                                <li>Internal Booking Engine</li>
                                <li>Internal Communication & Logs</li></ol></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card shadow'  style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>ANALYTICS</h5>
                            <p className='card-text'><ol>
                                <li>Key Bussiness Trends
                                    </li>
                                    <li>Full Data analysis</li>
                                    <li>Customer Reports</li>
                                    <li>Employee Reports & more</li></ol></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card shadow'  style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>HR SUPPORT</h5>
                            <p className='card-text'><ol>
                                <li>Attendance & Engagements</li>
                                <li>Task Allotment & Management</li>
                                <li>Performance Analysis</li>
                                <li>Employee Appraisals & more</li></ol></p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card shadow'  style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>MARKETING</h5>
                            <p className='card-text'><ol>
                                <li>Search Engine Optimisation</li>
                                <li>Search Engine Marketing</li>
                                <li>Ad Network</li>
                                <li>Lead Generation & more</li></ol></p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default Four_cardsComponents