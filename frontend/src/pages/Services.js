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
                    <h1>The #1 & <span className='services-animation-container'>
                        only
                        <svg className='services-blue-underline' xmlns="http://www.w3.org/2000/svg" width="75" height="50" viewBox="0 0 200 100">
                            <path
                                d="m1.78,98.974c-2.734-3.693-2.319-7.014,1.247-9.961,3.566-2.948,9.479-4.841,17.739-5.681,1.828-.062,3.597-.086,5.306-.074,1.828-.062,3.201-.289,4.118-.682.973-.068,3.509-.212,7.608-.432,4.305-.169,9.421-.394,15.347-.676,6.014-.156,12.25-.361,18.707-.614,6.544-.127,12.661-.258,18.351-.391,5.808-.208,10.643-.347,14.505-.419,3.861-.072,5.998-.056,6.41.047.23.576.875.893,1.936.951,1.265.109,2.358-.033,3.275-.426,1.124-.342,2.437-.532,3.941-.571,1.59.087,2.679.307,3.265.661.767-.119,1.638-.213,2.611-.281,1.061.058,1.871.001,2.433-.17.562-.171,1.152-.179,1.769-.025.736.08,1.386.035,1.947-.136,1.765.338,4.342.619,7.728.843,3.506.15,7.44.304,11.8.461,4.448.282,8.912.465,13.391.547,4.566.208,8.823.339,12.772.393,3.949.054,7.265.053,9.948-.003,2.682-.055,4.304-.169,4.865-.339,2.041-.735,3.625.076,4.752,2.433.91.331,1.725,1.262,2.448,2.792,0,0-.209.311-.628.933-.213.673-.608,1.82-1.184,3.44-.457,1.546-1.262,2.59-2.417,3.131-1.067.667-2.385,1.22-3.951,1.658-1.716.712-3.386,1.125-5.008,1.238-1.504.039-3.83-.128-6.98-.501-3.031-.447-7.8-1.069-14.305-1.866-1.592-.087-3.225-.236-4.903-.448-1.473-.161-2.885-.358-4.238-.593-1.149-.183-2.149-.278-3.004-.284-.737-.08-1.223-.046-1.461.102-.562.171-1.578.176-3.05.015-1.266-.109-2.814-.133-4.641-.071-1.354-.235-3.297-.461-5.829-.68-2.533-.218-5.168-.462-7.906-.732-2.651-.144-5.038-.274-7.158-.389-2.003-.19-3.124-.21-3.36-.062-.443.097-.989.168-1.638.213-.562.171-1.239.053-2.029-.352-.232-.576-.789-.768-1.675-.574-.679.245-1.02.367-1.02.367-.949.593-4.989.776-12.12.549-3.331.101-8.328.252-14.991.453-6.576.327-13.903.674-21.982,1.04-7.873.418-15.644.861-23.312,1.33-7.549.395-14.081.785-19.596,1.169-5.428.51-8.882,1.047-10.361,1.611-3.077,1.202-5.161,1.874-6.253,2.016-1.211.216-2.283-.104-3.218-.96Z"
                                fill="#1bb6f9" />
                        </svg>
                    </span> Nomad Businesses SaaS Platform</h1>
                    <h4>
                        No Code Website <span className="plus-sign">+</span> Native Apps <span className="plus-sign">+</span> Booking Engine <span className="plus-sign">+</span> Payment Gateway <span className="plus-sign">+</span> Accounting <span className="plus-sign">+</span> Reports <span className="plus-sign">+</span> Analytics <span className="plus-sign">+</span> HR Support <span className="plus-sign">+</span> Customer & Client Management <span className="plus-sign">+</span> Marketing and more.
                    </h4>
                    <span>Everything that your business needs in one single platform which is seamless and easy to use.</span>
                    <div className="services-header-button-space">
                        <button className='get-started-main-button'>
                            Get Started
                        </button>
                    </div>
                </div>
                <hr className="hrStyling zeroHeight" style={{ width: '100%' }} />

                <div className="SaaS-featured-master">

                    <h1>
                        <span className='SaaS-featured-heading-container'>
                            Real-time operations
                            <svg className='SaaS-blue-underline' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <path
                                    d="m1.78,98.974c-2.734-3.693-2.319-7.014,1.247-9.961,3.566-2.948,9.479-4.841,17.739-5.681,1.828-.062,3.597-.086,5.306-.074,1.828-.062,3.201-.289,4.118-.682.973-.068,3.509-.212,7.608-.432,4.305-.169,9.421-.394,15.347-.676,6.014-.156,12.25-.361,18.707-.614,6.544-.127,12.661-.258,18.351-.391,5.808-.208,10.643-.347,14.505-.419,3.861-.072,5.998-.056,6.41.047.23.576.875.893,1.936.951,1.265.109,2.358-.033,3.275-.426,1.124-.342,2.437-.532,3.941-.571,1.59.087,2.679.307,3.265.661.767-.119,1.638-.213,2.611-.281,1.061.058,1.871.001,2.433-.17.562-.171,1.152-.179,1.769-.025.736.08,1.386.035,1.947-.136,1.765.338,4.342.619,7.728.843,3.506.15,7.44.304,11.8.461,4.448.282,8.912.465,13.391.547,4.566.208,8.823.339,12.772.393,3.949.054,7.265.053,9.948-.003,2.682-.055,4.304-.169,4.865-.339,2.041-.735,3.625.076,4.752,2.433.91.331,1.725,1.262,2.448,2.792,0,0-.209.311-.628.933-.213.673-.608,1.82-1.184,3.44-.457,1.546-1.262,2.59-2.417,3.131-1.067.667-2.385,1.22-3.951,1.658-1.716.712-3.386,1.125-5.008,1.238-1.504.039-3.83-.128-6.98-.501-3.031-.447-7.8-1.069-14.305-1.866-1.592-.087-3.225-.236-4.903-.448-1.473-.161-2.885-.358-4.238-.593-1.149-.183-2.149-.278-3.004-.284-.737-.08-1.223-.046-1.461.102-.562.171-1.578.176-3.05.015-1.266-.109-2.814-.133-4.641-.071-1.354-.235-3.297-.461-5.829-.68-2.533-.218-5.168-.462-7.906-.732-2.651-.144-5.038-.274-7.158-.389-2.003-.19-3.124-.21-3.36-.062-.443.097-.989.168-1.638.213-.562.171-1.239.053-2.029-.352-.232-.576-.789-.768-1.675-.574-.679.245-1.02.367-1.02.367-.949.593-4.989.776-12.12.549-3.331.101-8.328.252-14.991.453-6.576.327-13.903.674-21.982,1.04-7.873.418-15.644.861-23.312,1.33-7.549.395-14.081.785-19.596,1.169-5.428.51-8.882,1.047-10.361,1.611-3.077,1.202-5.161,1.874-6.253,2.016-1.211.216-2.283-.104-3.218-.96Z"
                                    fill="#1bb6f9" />
                            </svg>
                        </span>
                    </h1>
                    <div className="SaaS-featured-grid">
                        <div className="SaaS-featured-grid-left">
                            <span>
                                Manage your business in real-time across
                                all business verticals.
                            </span><br /><br />
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
                        <h2>Available <span className='SaaS-grid-underline-container'>
                            SaaS & Automation
                            <svg className='SaaS-grid-blue-underline' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <path
                                    d="m1.78,98.974c-2.734-3.693-2.319-7.014,1.247-9.961,3.566-2.948,9.479-4.841,17.739-5.681,1.828-.062,3.597-.086,5.306-.074,1.828-.062,3.201-.289,4.118-.682.973-.068,3.509-.212,7.608-.432,4.305-.169,9.421-.394,15.347-.676,6.014-.156,12.25-.361,18.707-.614,6.544-.127,12.661-.258,18.351-.391,5.808-.208,10.643-.347,14.505-.419,3.861-.072,5.998-.056,6.41.047.23.576.875.893,1.936.951,1.265.109,2.358-.033,3.275-.426,1.124-.342,2.437-.532,3.941-.571,1.59.087,2.679.307,3.265.661.767-.119,1.638-.213,2.611-.281,1.061.058,1.871.001,2.433-.17.562-.171,1.152-.179,1.769-.025.736.08,1.386.035,1.947-.136,1.765.338,4.342.619,7.728.843,3.506.15,7.44.304,11.8.461,4.448.282,8.912.465,13.391.547,4.566.208,8.823.339,12.772.393,3.949.054,7.265.053,9.948-.003,2.682-.055,4.304-.169,4.865-.339,2.041-.735,3.625.076,4.752,2.433.91.331,1.725,1.262,2.448,2.792,0,0-.209.311-.628.933-.213.673-.608,1.82-1.184,3.44-.457,1.546-1.262,2.59-2.417,3.131-1.067.667-2.385,1.22-3.951,1.658-1.716.712-3.386,1.125-5.008,1.238-1.504.039-3.83-.128-6.98-.501-3.031-.447-7.8-1.069-14.305-1.866-1.592-.087-3.225-.236-4.903-.448-1.473-.161-2.885-.358-4.238-.593-1.149-.183-2.149-.278-3.004-.284-.737-.08-1.223-.046-1.461.102-.562.171-1.578.176-3.05.015-1.266-.109-2.814-.133-4.641-.071-1.354-.235-3.297-.461-5.829-.68-2.533-.218-5.168-.462-7.906-.732-2.651-.144-5.038-.274-7.158-.389-2.003-.19-3.124-.21-3.36-.062-.443.097-.989.168-1.638.213-.562.171-1.239.053-2.029-.352-.232-.576-.789-.768-1.675-.574-.679.245-1.02.367-1.02.367-.949.593-4.989.776-12.12.549-3.331.101-8.328.252-14.991.453-6.576.327-13.903.674-21.982,1.04-7.873.418-15.644.861-23.312,1.33-7.549.395-14.081.785-19.596,1.169-5.428.51-8.882,1.047-10.361,1.611-3.077,1.202-5.161,1.874-6.253,2.016-1.211.216-2.283-.104-3.218-.96Z"
                                     />
                            </svg>
                      
                        </span> Solutions</h2>
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
                        <h2>Unleash your growth potential</h2>
                        <div className="services-header-button-space">
                            <button onClick={() => {
                                navigate('/register')
                                window.scrollTo({ top: 0, behavior: 'smooth' })
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
