import React from 'react'
import { TransactionalWebsite, BookingEngine, MeetingRoomEngine, PaymentGateway, Blog, Hiring, LeadGeneration, EmailMarketing, DataMarketing, SearchEngineMarketing, SearchEngineOptimisation, GoogleMyBusiness, EmployeeTaskManagement, EmployeeAttendance, CompanyCompliances, CustomerAgreements, VendorAgreements, EmployeeAgreements, CustomerInvoicing, AccountingTools, BusinessProjections, BudgetManagement, CashflowManagement, AnnualFiling, EmployeePerformance, EmployeeAppraisals, ReadyProcesses, ReadyPolicies, MeetingRoomManagement, BirthdayManagement, CustomerService, Chat, Trainings, CustomisedSupport, BusinessAnalytics, CustomerReports, EmployeeReports, FinancialReports, CustomerAnalytics, EmployeeAnalytics, HRSupport, GlobalNomadship, CentralNomadAccount, RemoteWorkingJobs, PrivateLivingSpace, CoWorkingSpace, FurnishedSpaces, Internet, MeetingRooms, BoardRooms, TrainingRooms, Community, Events, Ticketing, Visa, PersonalisedAssist, BestPricing, MultiLocationOptions, PassionProjects, VentureCapital, VentureDebt, WorkingCapital } from '../assets/WONO_images/img/icon_service';
import { useNavigate } from 'react-router-dom';
import ServiceGridImage from '../assets/WONO_images/img/services/servicegrid.png'
import blueTickmarkImg from "../assets/blue-tick-no-bg-15.png";



import '../styles/bodyServices.css'
const Services = () => {

    const navigate = useNavigate()
    return (
        <>
            <div className="services">

                <div className="SaaS-main-heading">
                    <h1>The #1 & only Nomad Businesses SaaS Platform</h1>
                    <h4>No Code Website + Native Apps + Booking Engine + Payment Gateway + Accounting +
                        Reports + Analytics + HR Support + Customer & Client Management + Marketing and more. </h4>
                    <span>Everything that your business needs in one single platform which is seamless and easy to use.</span>
                    <div className="services-header-button-space">
                        <button className='get-started-main-button'>
                            Get Started
                        </button>
                    </div>
                </div>
                <hr className="hrStyling zeroHeight" style={{ width: '100%' }} />

                <div className="SaaS-featured-master">
                    <h1>Real-time operations</h1>
                    <div className="SaaS-featured-grid">
                        <div className="SaaS-featured-grid-left">
                            <span>
                                Manage your business in real-time across
                                all business verticals.
                            </span><br/><br/>
                            <span>
                                Operate your business in real-time with
                                the micro most details of inventory,
                                bookings, accounts, analytics, leads,
                                sales, reports, tasks, logs, menu,
                                complaints, requests etc.
                            </span>
                        </div>
                        <div className="SaaS-featured-grid-right">
                            <img src={ServiceGridImage} alt="ServiceGridImage" />
                        </div>
                    </div>
                </div>

                <hr className="hrStyling zeroHeight" style={{ width: '100%' }} />

                <div className="SaaS-grid">
                    <div className="SaaS-grid-heading">
                        <h2>Available SaaS & Automation Solutions</h2>
                        <span>We'll keep adding as you discover gaps and issues in your business!
                        </span>
                    </div>
                    <div className="businesses" style={{ paddingTop: '4rem' }}>
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>
                            <h1>Frontend</h1>
                        </div>
                        <div className="business-grid">
                            <div className="business-service" key={1}>
                                <img src={TransactionalWebsite} alt="TransactionalWebsite" />
                                <span>Website</span>
                            </div>
                            <div className="business-service" key={2}>
                                <img src={BookingEngine} alt="BookingEngine" />
                                <span>Bookings</span>
                            </div>
                            <div className="business-service" key={3}>
                                <img src={MeetingRoomEngine} alt="MeetingRoomEngine" />
                                <span>Mobile Site</span>
                            </div>
                            <div className="business-service" key={4}>
                                <img src={PaymentGateway} alt="PaymentGateway" />
                                <span>iOS App</span>
                            </div>
                            <div className="business-service" key={5}>
                                <img src={Blog} alt="Blog" />
                                <span>Android App</span>
                            </div>
                            <div className="business-service" key={6}>
                                <img src={Hiring} alt="Hiring" />
                                <span>Payment Gateway</span>
                            </div>
                            {/* End of first 6 divs */}

                            <div className="business-service" key={7}>
                                <img src={GoogleMyBusiness} alt="GoogleMyBusiness" />
                                <span>Customer Profile</span>
                            </div>
                            <div className="business-service" key={8}>
                                <img src={SearchEngineOptimisation} alt="SearchEngineOptimisation" />
                                <span>Notifications</span>
                            </div>
                            <div className="business-service" key={9}>
                                <img src={SearchEngineMarketing} alt="SearchEngineMarketing" />
                                <span>Chat</span>
                            </div>
                            <div className="business-service" key={10}>
                                <img src={DataMarketing} alt="DataMarketing" />
                                <span>Tickets</span>
                            </div>
                            <div className="business-service" key={11}>
                                <img src={EmailMarketing} alt="EmailMarketing" />
                                <span>Events</span>
                            </div>
                            <div className="business-service" key={12}>
                                <img src={LeadGeneration} alt="LeadGeneration" />
                                <span>Customer Service</span>
                            </div>
                            {/* End of last 6 divs */}

                            {/* Till here */}
                        </div>
                    </div>
                    <div className="businesses">
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>
                            <h1>FINANCE & ACCOUNTING</h1>
                        </div>
                        <div className="business-grid">
                            <div className="business-service" key={1}>
                                <img src={TransactionalWebsite} alt="TransactionalWebsite" />
                                <span>Invoicing</span>
                            </div>
                            <div className="business-service" key={2}>
                                <img src={BookingEngine} alt="BookingEngine" />
                                <span>Cashflow</span>
                            </div>
                            <div className="business-service" key={3}>
                                <img src={MeetingRoomEngine} alt="MeetingRoomEngine" />
                                <span>Projections</span>
                            </div>
                            <div className="business-service" key={4}>
                                <img src={PaymentGateway} alt="PaymentGateway" />
                                <span>Budget</span>
                            </div>
                            <div className="business-service" key={5}>
                                <img src={Blog} alt="Blog" />
                                <span>Working Capital</span>
                            </div>
                            <div className="business-service" key={6}>
                                <img src={Hiring} alt="Hiring" />
                                <span>Financial Reports</span>
                            </div>
                            {/* End of first 6 divs */}

                            <div className="business-service" key={7}>
                                <img src={GoogleMyBusiness} alt="GoogleMyBusiness" />
                                <span>Collections</span>
                            </div>
                            <div className="business-service" key={8}>
                                <img src={SearchEngineOptimisation} alt="SearchEngineOptimisation" />
                                <span>Notifications</span>
                            </div>
                            <div className="business-service" key={9}>
                                <img src={SearchEngineMarketing} alt="SearchEngineMarketing" />
                                <span>Follow ups</span>
                            </div>
                            <div className="business-service" key={10}>
                                <img src={DataMarketing} alt="DataMarketing" />
                                <span>Taxes</span>
                            </div>
                            <div className="business-service" key={11}>
                                <img src={EmailMarketing} alt="EmailMarketing" />
                                <span>Compliances</span>
                            </div>
                            <div className="business-service" key={12}>
                                <img src={LeadGeneration} alt="LeadGeneration" />
                                <span>Analytics</span>
                            </div>
                            {/* End of last 6 divs */}

                            {/* Till here */}
                        </div>
                    </div>

                    <div className="businesses">
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>
                            <h1>Sales & Marketing</h1>
                        </div>
                        <div className="business-grid">
                            <div className="business-service" key={1}>
                                <img src={TransactionalWebsite} alt="TransactionalWebsite" />
                                <span>Automated SEO</span>
                            </div>
                            <div className="business-service" key={2}>
                                <img src={BookingEngine} alt="BookingEngine" />
                                <span>Personalised SEM</span>
                            </div>
                            <div className="business-service" key={3}>
                                <img src={MeetingRoomEngine} alt="MeetingRoomEngine" />
                                <span>Ad Networks</span>
                            </div>
                            <div className="business-service" key={4}>
                                <img src={PaymentGateway} alt="PaymentGateway" />
                                <span>Lead Generation</span>
                            </div>
                            <div className="business-service" key={5}>
                                <img src={Blog} alt="Blog" />
                                <span>Social Media</span>
                            </div>
                            <div className="business-service" key={6}>
                                <img src={Hiring} alt="Hiring" />
                                <span>Email Marketing</span>
                            </div>
                            {/* End of first 6 divs */}

                            <div className="business-service" key={7}>
                                <img src={GoogleMyBusiness} alt="GoogleMyBusiness" />
                                <span>SMS Marketing</span>
                            </div>
                            <div className="business-service" key={8}>
                                <img src={SearchEngineOptimisation} alt="SearchEngineOptimisation" />
                                <span>What's App Integration</span>
                            </div>
                            <div className="business-service" key={9}>
                                <img src={SearchEngineMarketing} alt="SearchEngineMarketing" />
                                <span>Live Chat</span>
                            </div>
                            <div className="business-service" key={10}>
                                <img src={DataMarketing} alt="DataMarketing" />
                                <span>Referrals</span>
                            </div>
                            <div className="business-service" key={11}>
                                <img src={EmailMarketing} alt="EmailMarketing" />
                                <span>Blogs</span>
                            </div>
                            <div className="business-service" key={12}>
                                <img src={LeadGeneration} alt="LeadGeneration" />
                                <span>Vlogs</span>
                            </div>
                            {/* End of last 6 divs */}

                            {/* Till here */}
                        </div>
                    </div>


                    <div className="businesses">
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>
                            <h1>HR Support</h1>
                        </div>
                        <div className="business-grid">
                            <div className="business-service" key={1}>
                                <img src={TransactionalWebsite} alt="TransactionalWebsite" />
                                <span>Attendance</span>
                            </div>
                            <div className="business-service" key={2}>
                                <img src={BookingEngine} alt="BookingEngine" />
                                <span>Payroll</span>
                            </div>
                            <div className="business-service" key={3}>
                                <img src={MeetingRoomEngine} alt="MeetingRoomEngine" />
                                <span>Payslips</span>
                            </div>
                            <div className="business-service" key={4}>
                                <img src={PaymentGateway} alt="PaymentGateway" />
                                <span>Leaves</span>
                            </div>
                            <div className="business-service" key={5}>
                                <img src={Blog} alt="Blog" />
                                <span>Holidays</span>
                            </div>
                            <div className="business-service" key={6}>
                                <img src={Hiring} alt="Hiring" />
                                <span>SOP's</span>
                            </div>
                            {/* End of first 6 divs */}

                            <div className="business-service" key={7}>
                                <img src={GoogleMyBusiness} alt="GoogleMyBusiness" />
                                <span>Policies</span>
                            </div>
                            <div className="business-service" key={8}>
                                <img src={SearchEngineOptimisation} alt="SearchEngineOptimisation" />
                                <span>Task Management</span>
                            </div>
                            <div className="business-service" key={9}>
                                <img src={SearchEngineMarketing} alt="SearchEngineMarketing" />
                                <span>Performance</span>
                            </div>
                            <div className="business-service" key={10}>
                                <img src={DataMarketing} alt="DataMarketing" />
                                <span>Appraisals</span>
                            </div>
                            <div className="business-service" key={11}>
                                <img src={EmailMarketing} alt="EmailMarketing" />
                                <span>Templates</span>
                            </div>
                            <div className="business-service" key={11}>
                                <img src={EmailMarketing} alt="EmailMarketing" />
                                <span>e-Sign</span>
                            </div>
                            {/* End of last div */}

                            {/* Till here */}
                        </div>
                    </div>

                    <div className="businesses">
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>
                            <h1>Customer Management Services</h1>
                        </div>
                        <div className="business-grid">
                            <div className="business-service" key={1}>
                                <img src={TransactionalWebsite} alt="TransactionalWebsite" />
                                <span>Ticket Raising</span>
                            </div>
                            <div className="business-service" key={2}>
                                <img src={BookingEngine} alt="BookingEngine" />
                                <span>Complaint Logs</span>
                            </div>
                            <div className="business-service" key={3}>
                                <img src={MeetingRoomEngine} alt="MeetingRoomEngine" />
                                <span>Meetings Rooms</span>
                            </div>
                            <div className="business-service" key={4}>
                                <img src={PaymentGateway} alt="PaymentGateway" />
                                <span>Café Orders</span>
                            </div>
                            <div className="business-service" key={5}>
                                <img src={Blog} alt="Blog" />
                                <span>Visitors</span>
                            </div>
                            <div className="business-service" key={6}>
                                <img src={Hiring} alt="Hiring" />
                                <span>Announcements</span>
                            </div>
                            {/* End of first 6 divs */}

                            <div className="business-service" key={7}>
                                <img src={GoogleMyBusiness} alt="GoogleMyBusiness" />
                                <span>Feedback</span>
                            </div>
                            <div className="business-service" key={8}>
                                <img src={SearchEngineOptimisation} alt="SearchEngineOptimisation" />
                                <span>Customer Rating</span>
                            </div>
                            <div className="business-service" key={9}>
                                <img src={SearchEngineMarketing} alt="SearchEngineMarketing" />
                                <span>Customer Service</span>
                            </div>
                            <div className="business-service" key={10}>
                                <img src={DataMarketing} alt="DataMarketing" />
                                <span>Auto Responses</span>
                            </div>
                            <div className="business-service" key={11}>
                                <img src={EmailMarketing} alt="EmailMarketing" />
                                <span>Reports</span>
                            </div>
                            <div className="business-service" key={12}>
                                <img src={LeadGeneration} alt="LeadGeneration" />
                                <span>Analytics</span>
                            </div>
                            {/* End of last 6 divs */}

                            {/* Till here */}
                        </div>
                    </div>

                    <div className="businesses">
                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>
                            <h1>Reports & Analytics</h1>
                        </div>
                        <div className="business-grid">
                            <div className="business-service" key={1}>
                                <img src={TransactionalWebsite} alt="TransactionalWebsite" />
                                <span>Company Dashboard</span>
                            </div>
                            <div className="business-service" key={2}>
                                <img src={BookingEngine} alt="BookingEngine" />
                                <span>Customer Trends</span>
                            </div>
                            <div className="business-service" key={3}>
                                <img src={MeetingRoomEngine} alt="MeetingRoomEngine" />
                                <span>Business Trends</span>
                            </div>
                            <div className="business-service" key={4}>
                                <img src={PaymentGateway} alt="PaymentGateway" />
                                <span>Vendor Playouts</span>
                            </div>
                            <div className="business-service" key={5}>
                                <img src={Blog} alt="Blog" />
                                <span>Cashflow</span>
                            </div>
                            <div className="business-service" key={6}>
                                <img src={Hiring} alt="Hiring" />
                                <span>Key Notifications</span>
                            </div>
                            {/* End of first 6 divs */}

                            <div className="business-service" key={7}>
                                <img src={GoogleMyBusiness} alt="GoogleMyBusiness" />
                                <span>Full Data Analysis</span>
                            </div>
                            <div className="business-service" key={8}>
                                <img src={SearchEngineOptimisation} alt="SearchEngineOptimisation" />
                                <span>Customer Reports</span>
                            </div>
                            <div className="business-service" key={9}>
                                <img src={SearchEngineMarketing} alt="SearchEngineMarketing" />
                                <span>Employee Reports</span>
                            </div>
                            <div className="business-service" key={10}>
                                <img src={DataMarketing} alt="DataMarketing" />
                                <span>Milestone Reports</span>
                            </div>
                            <div className="business-service" key={11}>
                                <img src={EmailMarketing} alt="EmailMarketing" />
                                <span>Taxes Reports</span>
                            </div>
                            <div className="business-service" key={12}>
                                <img src={LeadGeneration} alt="LeadGeneration" />
                                <span>Customised Reports</span>
                            </div>
                            {/* End of last 6 divs */}

                            {/* Till here */}
                        </div>
                    </div>
                </div>

                <div className="SaaS-last-banner-section">
                    <div className="SaaS-last-banner">
                        <h2>Unleash<br /> your growth potential</h2>
                        <div className="services-header-button-space">
                            <button onClick={()=>{
                                navigate('/register')
                                window.scrollTo({top:0, behavior:'smooth'})
                            }} className='get-started-main-button'>
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Services
