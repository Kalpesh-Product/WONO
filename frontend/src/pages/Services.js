import React from 'react'
import {  TransactionalWebsite, BookingEngine, MeetingRoomEngine, PaymentGateway, Blog, Hiring, LeadGeneration, EmailMarketing, DataMarketing, SearchEngineMarketing, SearchEngineOptimisation, GoogleMyBusiness, EmployeeTaskManagement, EmployeeAttendance, CompanyCompliances, CustomerAgreements, VendorAgreements, EmployeeAgreements, CustomerInvoicing, AccountingTools, BusinessProjections, BudgetManagement, CashflowManagement, AnnualFiling, EmployeePerformance, EmployeeAppraisals, ReadyProcesses, ReadyPolicies, MeetingRoomManagement, BirthdayManagement, CustomerService, Chat, Trainings, CustomisedSupport, BusinessAnalytics, CustomerReports, EmployeeReports, FinancialReports, CustomerAnalytics, EmployeeAnalytics, HRSupport, GlobalNomadship, CentralNomadAccount, RemoteWorkingJobs, PrivateLivingSpace, CoWorkingSpace, FurnishedSpaces, Internet, MeetingRooms, BoardRooms, TrainingRooms, Community, Events, Ticketing, Visa, PersonalisedAssist, BestPricing, MultiLocationOptions, PassionProjects, VentureCapital, VentureDebt, WorkingCapital } from '../assets/WONO_images/img/icon_service';


import '../styles/bodyServices.css'
const Services = () => {
    return (
        <>
            <div className="services">
                <div className="businesses">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <h1>FOR BUSINESSES</h1>
                        <hr></hr>
                    </div>
                    <div className="business-grid">
                        <div className="business-service" key={1}>
                            <img src={TransactionalWebsite} alt="TransactionalWebsite" />
                            <span>Transactional Website</span>
                        </div>
                        <div className="business-service" key={2}>
                            <img src={BookingEngine} alt="BookingEngine" />
                            <span>Booking Engine</span>
                        </div>
                        <div className="business-service" key={3}>
                            <img src={MeetingRoomEngine} alt="MeetingRoomEngine" />
                            <span>Meeting Room Engine</span>
                        </div>
                        <div className="business-service" key={4}>
                            <img src={PaymentGateway} alt="PaymentGateway" />
                            <span>Payment Gateway</span>
                        </div>
                        <div className="business-service" key={5}>
                            <img src={Blog} alt="Blog" />
                            <span>Blog</span>
                        </div>
                        <div className="business-service" key={6}>
                            <img src={Hiring} alt="Hiring" />
                            <span>Career/Hiring</span>
                        </div>
                        {/* End of first 6 divs */}

                        <div className="business-service" key={7}>
                            <img src={GoogleMyBusiness} alt="GoogleMyBusiness" />
                            <span>Google My Business</span>
                        </div>
                        <div className="business-service" key={8}>
                            <img src={SearchEngineOptimisation} alt="SearchEngineOptimisation" />
                            <span>Search Engine Optimisation</span>
                        </div>
                        <div className="business-service" key={9}>
                            <img src={SearchEngineMarketing} alt="SearchEngineMarketing" />
                            <span>Search Engine Marketing</span>
                        </div>
                        <div className="business-service" key={10}>
                            <img src={DataMarketing} alt="DataMarketing" />
                            <span>Data Marketing</span>
                        </div>
                        <div className="business-service" key={11}>
                            <img src={EmailMarketing} alt="EmailMarketing" />
                            <span>Email Marketing</span>
                        </div>
                        <div className="business-service" key={12}>
                            <img src={LeadGeneration} alt="LeadGeneration" />
                            <span>Lead Generation</span>
                        </div>
                        {/* End of last 6 divs */}
                        {/* 1st to 6th divs */}
                        <div className="business-service" key={13}>
                            <img src={EmployeeTaskManagement} alt="EmployeeTaskManagement" />
                            <span>Employee Task Management</span>
                        </div>
                        <div className="business-service" key={14}>
                            <img src={EmployeeAttendance} alt="EmployeeAttendance" />
                            <span>Employee Attendance</span>
                        </div>
                        <div className="business-service" key={15}>
                            <img src={CompanyCompliances} alt="CompanyCompliances" />
                            <span>Company Compliances</span>
                        </div>
                        <div className="business-service" key={16}>
                            <img src={CustomerAgreements} alt="CustomerAgreements" />
                            <span>Customer Agreements</span>
                        </div>
                        <div className="business-service" key={17}>
                            <img src={VendorAgreements} alt="VendorAgreements" />
                            <span>Vendor Agreements</span>
                        </div>
                        <div className="business-service" key={18}>
                            <img src={EmployeeAgreements} alt="EmployeeAgreements" />
                            <span>Employee Agreements</span>
                        </div>
                        {/* End of 1st 6 divs */}

                        {/* 7th to 12th divs */}
                        <div className="business-service" key={19}>
                            <img src={CustomerInvoicing} alt="CustomerInvoicing" />
                            <span>Customer Invoicing</span>
                        </div>
                        <div className="business-service" key={20}>
                            <img src={AccountingTools} alt="AccountingTools" />
                            <span>Accounting Tools</span>
                        </div>
                        <div className="business-service" key={21}>
                            <img src={BusinessProjections} alt="BusinessProjections" />
                            <span>Business Projections</span>
                        </div>
                        <div className="business-service" key={22}>
                            <img src={BudgetManagement} alt="BudgetManagement" />
                            <span>Budget Management</span>
                        </div>
                        <div className="business-service" key={23}>
                            <img src={CashflowManagement} alt="CashflowManagement" />
                            <span>Cashflow Management</span>
                        </div>
                        <div className="business-service" key={24}>
                            <img src={AnnualFiling} alt="AnnualFiling" />
                            <span>Annual Filing</span>
                        </div>
                        {/* End of 7th 6 divs */}

                        <div className="business-service" key={25}>
                            <img src={HRSupport} alt="HRSupport" />
                            <span>HR Support</span>
                        </div>
                        <div className="business-service" key={26}>
                            <img src={EmployeePerformance} alt="EmployeePerformance" />
                            <span>Employee Performance</span>
                        </div>
                        <div className="business-service" key={27}>
                            <img src={EmployeeAppraisals} alt="EmployeeAppraisals" />
                            <span>Employee Appraisals</span>
                        </div>
                        <div className="business-service" key={28}>
                            <img src={ReadyProcesses} alt="ReadyProcesses" />
                            <span>Ready Processes</span>
                        </div>
                        <div className="business-service" key={29}>
                            <img src={ReadyPolicies} alt="ReadyPolicies" />
                            <span>Ready Policies</span>
                        </div>
                        <div className="business-service" key={30}>
                            <img src={MeetingRoomManagement} alt="MeetingRoomManagement" />
                            <span>Meeting Room Management</span>
                        </div>

                        {/* End of 8th 6 divs */}

                        <div className="business-service" key={31}>
                            <img src={BirthdayManagement} alt="BirthdayManagement" />
                            <span>Birthday Management</span>
                        </div>
                        <div className="business-service" key={32}>
                            <img src={CustomerService} alt="CustomerService" />
                            <span>Customer Service</span>
                        </div>
                        <div className="business-service" key={33}>
                            <img src={Chat} alt="Chat" />
                            <span>Chat</span>
                        </div>
                        <div className="business-service" key={34}>
                            <img src={Trainings} alt="Trainings" />
                            <span>Trainings</span>
                        </div>
                        <div className="business-service" key={35}>
                            <img src={CustomisedSupport} alt="CustomisedSupport" />
                            <span>Customised Support</span>
                        </div>
                        <div className="business-service" key={36}>
                            <img src={BusinessAnalytics} alt="BusinessAnalytics" />
                            <span>Business Analytics</span>
                        </div>

                        {/* End of 9th 6 divs */}

                        <div className="business-service" key={37}>
                            <img src={CustomerAnalytics} alt="CustomerAnalytics" />
                            <span>Customer Analytics</span>
                        </div>
                        <div className="business-service" key={38}>
                            <img src={EmployeeAnalytics} alt="EmployeeAnalytics" />
                            <span>Employee Analytics</span>
                        </div>
                        <div className="business-service" key={39}>
                            <img src={CustomerReports} alt="CustomerReports" />
                            <span>Customer Reports</span>
                        </div>
                        <div className="business-service" key={40}>
                            <img src={EmployeeReports} alt="EmployeeReports" />
                            <span>Employee Reports</span>
                        </div>
                        <div className="business-service" key={41}>
                            <img src={FinancialReports} alt="FinancialReports" />
                            <span>Financial Reports</span>
                        </div>
                    </div>
                </div>
                <div className="direct-customers">
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <h1>FOR DIRECT CUSTOMERS</h1>
                        <hr></hr>

                    </div>
                    <div className="direct-customers-grid">
                        <div className="direct-customers-service" key={42}>
                            <img src={GlobalNomadship} alt="GlobalNomadship" />
                            <span>Global Nomadship</span>
                        </div>
                        <div className="direct-customers-service" key={43}>
                            <img src={CentralNomadAccount} alt="CentralNomadAccount" />
                            <span>Central Nomad Account</span>
                        </div>
                        <div className="direct-customers-service" key={44}>
                            <img src={RemoteWorkingJobs} alt="RemoteWorkingJobs" />
                            <span>Remote Working Jobs</span>
                        </div>
                        <div className="direct-customers-service" key={45}>
                            <img src={PrivateLivingSpace} alt="PrivateLivingSpace" />
                            <span>Private Living Space</span>
                        </div>
                        <div className="direct-customers-service" key={46}>
                            <img src={CoWorkingSpace} alt="CoWorkingSpace" />
                            <span>Co-Working Space</span>
                        </div>
                        <div className="direct-customers-service" key={47}>
                            <img src={FurnishedSpaces} alt="FurnishedSpaces" />
                            <span>Furnished Spaces</span>
                        </div>
                        {/* End of first 6 divs */}

                        <div className="direct-customers-service" key={48}>
                            <img src={Internet} alt="Internet" />
                            <span>Internet</span>
                        </div>
                        <div className="direct-customers-service" key={49}>
                            <img src={MeetingRooms} alt="MeetingRooms" />
                            <span>Meeting Rooms</span>
                        </div>
                        <div className="direct-customers-service" key={50}>
                            <img src={BoardRooms} alt="BoardRooms" />
                            <span>Board Rooms</span>
                        </div>
                        <div className="direct-customers-service" key={51}>
                            <img src={TrainingRooms} alt="TrainingRooms" />
                            <span>Training Rooms</span>
                        </div>
                        <div className="direct-customers-service" key={52}>
                            <img src={Community} alt="Community" />
                            <span>Community</span>
                        </div>
                        <div className="direct-customers-service" key={53}>
                            <img src={Events} alt="Events" />
                            <span>Events</span>
                        </div>
                        {/* End of second 6 divs */}

                        <div className="direct-customers-service" key={54}>
                            <img src={Ticketing} alt="Ticketing" />
                            <span>Ticketing</span>
                        </div>
                        <div className="direct-customers-service" key={55}>
                            <img src={Visa} alt="Visa" />
                            <span>Visa</span>
                        </div>
                        <div className="direct-customers-service" key={56}>
                            <img src={PersonalisedAssist} alt="PersonalisedAssist" />
                            <span>Personalised Assist</span>
                        </div>
                        <div className="direct-customers-service" key={57}>
                            <img src={BestPricing} alt="BestPricing" />
                            <span>Best Pricing</span>
                        </div>
                        <div className="direct-customers-service" key={58}>
                            <img src={MultiLocationOptions} alt="MultiLocationOptions" />
                            <span>Multi Location Options</span>
                        </div>
                        <div className="direct-customers-service" key={59}>
                            <img src={PassionProjects} alt="PassionProjects" />
                            <span>Passion Projects</span>
                        </div>
                    </div>

                </div>
                <div className="financing">
                    <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <h1>FOR FINANCING</h1>
                        <hr></hr>

                    </div>
                    <div className="financing-grid">
                       <div className="financing-service" key={60}>
                        <img src={VentureCapital} alt="VentureCapital" />
                        <span>Venture Capital</span> 
                       </div>
                       <div className="financing-service" key={61}>
                       <img src={VentureDebt} alt="VentureDebt" />
                       <span>Venture Debt</span> 
                       </div>
                       <div className="financing-service" key={62}>
                       <img src={WorkingCapital} alt="WorkingCapital" />
                       <span>Working Capital</span> 
                       </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Services
