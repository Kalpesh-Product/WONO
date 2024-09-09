import React from 'react'
import "../styles/4-cardsContainer.css"
import TickmarkImg from "../assets/check.png"
import Frontend from '../assets/WONO_images/img/key-features/frontend.jpg'
import Finance from '../assets/WONO_images/img/key-features/finance.jpg'
import Customer from '../assets/WONO_images/img/key-features/customer-support.png'
import Analytics from '../assets/WONO_images/img/key-features/analytics.png'
import HR from '../assets/WONO_images/img/key-features/hr.png'
import Marketing from '../assets/WONO_images/img/key-features/marketing.png'
import { useNavigate } from 'react-router-dom'


const FourCardsComponents = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className='four-cardsHeaderText'>
                <p>Explore the Worlds largest Commerce Community</p>
            </div>
        <div className='key-features-master'>
            <div className='four-cardsContainer' style={{ backgroundColor: "white" }}>
                <div className="key-features-container">
                    <div className='card_1 shadow'>
                        <div className='card-body'>
                            <div className='card-icon'>
                                <img src={Frontend} alt="frontend" />
                            </div>
                            <h5 className='card-title'>FRONTEND</h5>
                            <p className='card-text'>
                                <div className='Tickmark-text'>
                                    <img src={TickmarkImg} alt='tick-mark'></img>
                                    Website/Booking Engine  
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
                                    Customer Profile & more  
                                </div>

                            </p>
                        </div>
                    </div>


                    <div className='card_1 shadow' >
                        <div className='card-body'>
                        <div className='card-icon' style={{width:'55px', marginBottom:'0', marginTop:'0'}}>
                                <img src={Finance} alt="frontend" />
                            </div>
                            <h5 className='card-title'>FINANCE & ACCOUNTING</h5>
                            <p className='card-text'>
                                <div className='Tickmark-text'>
                                    <img src={TickmarkImg} alt='tick-mark'></img>
                                    Automated Invoicing
                                </div>
                                <div className='Tickmark-text'>
                                    <img src={TickmarkImg} alt='tick-mark'></img>
                                    Cashflow & Projections  
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

                    <div className='card_1 shadow'>
                        <div className='card-body'>
                        <div className='card-icon' style={{width:'55px'}}>
                                <img src={Customer} alt="customer" />
                            </div>
                            <h5 className='card-title' style={{fontSize:'13px'}} >CUSTOMER MANAGEMENT SERVICES</h5>
                            <p className='card-text'>
                                <div className='Tickmark-text'>
                                    <img src={TickmarkImg} alt='tick-mark'></img>
                                    Ticket Raising & Logs
                                </div>
                                <div className='Tickmark-text'>
                                    <img src={TickmarkImg} alt='tick-mark'></img>
                                    Internal Booking Engine
                                </div>
                                <div className='Tickmark-text'>
                                    <img src={TickmarkImg} alt='tick-mark'></img>
                                    Internal Communication & Logs
                                </div>
                                <div className='Tickmark-text'>
                                    <img src={TickmarkImg} alt='tick-mark'></img>
                                    Customer Management & more 
                                </div>

                            </p>
                        </div>
                    </div>
                    <div className='card_1 shadow'>
                        <div className='card-body'>
                        <div className='card-icon' style={{width:'55px'}}>
                                <img src={Analytics} alt="analytics" />
                            </div>
                        <h5 className='card-title'>ANALYTICS</h5>
                            <p className='card-text'>
                            <div className='Tickmark-text'>
                            <img src={TickmarkImg} alt='tick-mark'></img>
                                Key Bussiness Trends 
                            </div>
                            <div className='Tickmark-text'>
                                <img src={TickmarkImg} alt='tick-mark'></img> 
                                Full Data Analysis  
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
                    <div className='card_1 shadow'>
                        <div className='card-body'>
                        <div className='card-icon' style={{width:'45px',marginBottom:'0'}}>
                                <img src={HR} alt="hr" />
                            </div>
                        <h5 className='card-title' style={{paddingTop:'5px'}}>HR SUPPORT</h5>
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
                    <div className='card_1 shadow'>
                        <div className='card-body'>
                        <div className='card-icon' style={{width:'45px',marginBottom:'0'}}>
                                <img src={Marketing} alt="marketing" />
                            </div>
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
            <div className="key-features-link-space">
                <span style={{cursor:'pointer'}} onClick={()=> {
                    navigate('/services')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    }} className="key-features-link">View All</span>
            </div>
        </>
    )
}

export default FourCardsComponents;
