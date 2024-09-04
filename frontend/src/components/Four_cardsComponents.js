import React from 'react'
import "../styles/4-cardsContainer.css"
import TickmarkImg from "../assets/check.png"


const Four_cardsComponents = () => {
  return (
    <div className='four-cardsContainer' style={{backgroundColor:"white"}}>
        <div className='four-cardsHeaderText'>
            <p>Explore the Worlds largest Commerce Community</p>
        </div>
        <div className='container my-5'>
            <div className='row '>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card-wrapper'>
                    <div className='card_1 shadow'>
                        <div className='card-body'>
                            <h5 className='card-title'>FRONTEND</h5>
                            <p className='card-text'>
                                <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Website with Booking Engine
                                </div>
                                <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>  
                                Payment Gateway
                                </div>
                                <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Meeting Rooms
                                </div>
                                <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                               Customer Profile and More
                               </div>
                                
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card_1 shadow'  style={{backgroundColor:"white"}} > 
                        <div className='card-body'>
                            <h5 className='card-title'>FINANCE & ACCOUNTING</h5>
                            <p className='card-text'>
                            <div className='Tickmark-text'>
                            <img src={TickmarkImg} alt='tick-mark'></img>
                                Automated Invoicing
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Cashflow and Projection
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Budget Management
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Working Capital & more
                            </div>    
                            </p>

                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card_1 shadow'  style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>CUSTOMER MANAGEMENT SERVICES (CMS)</h5>
                            <p className='card-text'>
                            <div className='Tickmark-text'>
                            <img src={TickmarkImg} alt='tick-mark'></img>
                                Ticket Raising
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Internal Booking Engine
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Internal Communication & Logs
                            </div>
                                </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card_1 shadow'  style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>ANALYTICS</h5>
                            <p className='card-text'>
                            <div className='Tickmark-text'>
                            <img src={TickmarkImg} alt='tick-mark'></img>
                                Key Bussiness Trends 
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img> 
                                    Full Data analysis
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                    Customer Reports
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                    Employee Reports & more
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card_1 shadow'  style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>HR SUPPORT</h5>
                            <p className='card-text'>
                            <div className='Tickmark-text'>
                            <img src={TickmarkImg} alt='tick-mark'></img>
                                Attendance & Engagements
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Task Allotment & Management
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Performance Analysis
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Employee Appraisals & more
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-2 col-md-4 col-sm-6'>
                    <div className='card_1 shadow'  style={{backgroundColor:"white"}}>
                        <div className='card-body'>
                            <h5 className='card-title'>MARKETING</h5>
                            <p className='card-text'>
                            <div className='Tickmark-text'>
                            <img src={TickmarkImg} alt='tick-mark'></img>
                                Search Engine Optimisation
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                               Search Engine Marketing
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Ad Network
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img>
                                Lead Generation & more
                            </div>
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>

    </div>
  )
}

export default Four_cardsComponents