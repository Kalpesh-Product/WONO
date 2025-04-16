import React from "react";

import {
  androidAppSaas,
  bookingsSaas,
  chatSaas,
  customerProfile,
  customerService,
  events,
  iosApp,
  mobileSite,
  notifications,
  paymentGateway,
  tickets,
  website,
  analyticsFA,
  compliancesFA,
  taxesFA,
  followUpsFA,
  notificationsFA,
  collectionsFA,
  financialReportsFA,
  workingCapitalFA,
  budgetFA,
  projectionsFA,
  cashflowFA,
  invoicingFA,
  vlogsSM,
  blogsSM,
  referralsSM,
  livechatSM,
  whatsAppIntegrationSM,
  smsMarketingSM,
  emailMarketingSM,
  socialMediaSM,
  leadGenerationSM,
  adNetworksSM,
  personalisedSemSM,
  automatedSeoSM,
  eSignHR,
  templatesHR,
  appraisalsHR,
  performanceHR,
  taskManagementHR,
  policiesHR,
  sopsHR,
  holidaysHR,
  leavesHR,
  payslipsHR,
  payrollHR,
  attendanceHR,
  analyticsCM,
  reportsCM,
  autoresponseCM,
  customerServiceCM,
  customerRatingCM,
  feedbackCM,
  announcementsCM,
  visitorCM,
  cafeOrdersCM,
  meetingRoomsCM,
  complaintLogsCM,
  ticketRaisingCM,
  customisedReportsRA,
  taxesReportsRA,
  milestoneReportsRA,
  employeeReportsRA,
  customerReportsRA,
  fullDataAnalysisRA,
  keyNotificationsRA,
  cashflowRA,
  vendorPayoutsRA,
  businessTrendsRA,
  customerTrends,
  companyDashboard,
  income,
  expense,
  reports,
  calendar,
} from "../assets/WONO_images/img/icon_service_color";
import { useNavigate } from "react-router-dom";
import TicketsImage from "../assets/WONO_images/img/images-service/services-apps.jpeg";
import HrImage from "../assets/WONO_images/img/images-service/hr-img-2.jpeg";
import FinanceImage from "../assets/WONO_images/img/images-service/Finance-img.jpeg";
import SalesImage from "../assets/WONO_images/img/images-service/Sales-img.jpeg";
import FrontendImage from "../assets/WONO_images/img/images-service/frontend-2.png";
import Accordion from "react-bootstrap/Accordion";
import greenUnderLine from "../assets/underline-bg/blue-line.png";

import "../styles/bodyServices.css";
import SaaSFeatureBlock from "../components/Cards/SaaSFeatured";
const Services = () => {
  const services_frontend = [
    {
      id: 1,
      // image: TransactionalWebsite,
      image: website,
      alt: "TransactionalWebsite",
      title: "Website",
      description: "Full stack web-apps",
    },
    {
      id: 2,
      // image: BookingEngine,
      image: bookingsSaas,
      alt: "BookingEngine",
      title: "Bookings",
      description: "Manage bookings",
    },
    {
      id: 3,
      // image: MeetingRoomEngine,
      image: mobileSite,
      alt: "MeetingRoomEngine",
      title: "Mobile Site",
      description: "Mobile-friendly websites",
    },
    {
      id: 4,
      // image: PaymentGateway,
      image: iosApp,
      alt: "PaymentGateway",
      title: "iOS App",
      description: "iOS application development",
    },
    {
      id: 5,
      // image: Blog,
      image: androidAppSaas,
      alt: "Blog",
      title: "Android App",
      description: "Android application development",
    },
    {
      id: 6,
      // image: Hiring,
      image: paymentGateway,
      alt: "Hiring",
      title: "Payment Gateway",
      description: "Secure payment solutions",
    },
    {
      id: 7,
      // image: GoogleMyBusiness,
      image: customerProfile,
      alt: "GoogleMyBusiness",
      title: "Customer Profile",
      description: "Profile management",
    },
    {
      id: 8,
      // image: SearchEngineOptimisation,
      image: notifications,
      alt: "SearchEngineOptimisation",
      title: "Notifications",
      description: "Real-time alerts",
    },
    {
      id: 9,
      // image: SearchEngineMarketing,
      image: chatSaas,
      alt: "SearchEngineMarketing",
      title: "Chat",
      description: "Live chat solutions",
    },
    {
      id: 10,
      // image: DataMarketing,
      image: tickets,
      alt: "DataMarketing",
      title: "Tickets",
      description: "Ticket management",
    },
    {
      id: 11,
      // image: EmailMarketing,
      image: events,
      alt: "EmailMarketing",
      title: "Events",
      description: "Event scheduling",
    },
    {
      id: 12,
      // image: LeadGeneration,
      image: customerService,
      alt: "LeadGeneration",
      title: "Customer Service",
      description: "24/7 support",
    },
  ];

  const services_financeAccounting = [
    {
      id: 1,
      // image: TransactionalWebsite,
      image: invoicingFA,
      alt: "TransactionalWebsite",
      title: "Invoicing",
      description: "Manage invoices and billing",
    },
    {
      id: 2,
      // image: BookingEngine,
      image: cashflowFA,
      alt: "BookingEngine",
      title: "Cashflow",
      description: "Track and optimize cash flow",
    },
    {
      id: 3,
      // image: MeetingRoomEngine,
      image: projectionsFA,
      alt: "MeetingRoomEngine",
      title: "Projections",
      description: "Financial forecasting and projections",
    },
    {
      id: 4,
      // image: PaymentGateway,
      image: budgetFA,
      alt: "PaymentGateway",
      title: "Budget",
      description: "Create and manage budgets",
    },
    {
      id: 5,
      // image: Blog,
      image: workingCapitalFA,
      alt: "Blog",
      title: "Working Capital",
      description: "Manage working capital effectively",
    },
    {
      id: 6,
      // image: Hiring,
      image: financialReportsFA,
      alt: "Hiring",
      title: "Financial Reports",
      description: "Generate financial reports",
    },
    {
      id: 7,
      // image: GoogleMyBusiness,
      image: collectionsFA,
      alt: "GoogleMyBusiness",
      title: "Collections",
      description: "Manage collections efficiently",
    },
    {
      id: 8,
      // image: SearchEngineOptimisation,
      image: notificationsFA,
      alt: "SearchEngineOptimisation",
      title: "Notifications",
      description: "Real-time financial notifications",
    },
    {
      id: 9,
      // image: SearchEngineMarketing,
      image: followUpsFA,
      alt: "SearchEngineMarketing",
      title: "Follow ups",
      description: "Automate follow-ups on payments",
    },
    {
      id: 10,
      // image: DataMarketing,
      image: taxesFA,
      alt: "DataMarketing",
      title: "Taxes",
      description: "Manage and file taxes",
    },
    {
      id: 11,
      // image: EmailMarketing,
      image: compliancesFA,
      alt: "EmailMarketing",
      title: "Compliances",
      description: "Ensure financial compliances",
    },
    {
      id: 12,
      // image: LeadGeneration,
      image: analyticsFA,
      alt: "LeadGeneration",
      title: "Analytics",
      description: "Financial analytics and insights",
    },
  ];
  const services_salesMarketing = [
    {
      id: 1,
      // image: TransactionalWebsite,
      image: automatedSeoSM,
      alt: "TransactionalWebsite",
      title: "Automated SEO",
      description: "Boost search engine rankings",
    },
    {
      id: 2,
      // image: BookingEngine,
      image: personalisedSemSM,
      alt: "BookingEngine",
      title: "Personalised SEM",
      description: "Targeted search engine marketing",
    },
    {
      id: 3,
      // image: MeetingRoomEngine,
      image: adNetworksSM,
      alt: "MeetingRoomEngine",
      title: "Ad Networks",
      description: "Advertise across multiple networks",
    },
    {
      id: 4,
      // image: PaymentGateway,
      image: leadGenerationSM,
      alt: "PaymentGateway",
      title: "Lead Generation",
      description: "Generate quality leads",
    },
    {
      id: 5,
      // image: Blog,
      image: socialMediaSM,
      alt: "Blog",
      title: "Social Media",
      description: "Manage social media campaigns",
    },
    {
      id: 6,
      // image: Hiring,
      image: emailMarketingSM,
      alt: "Hiring",
      title: "Email Marketing",
      description: "Personalized email campaigns",
    },
    {
      id: 7,
      // image: GoogleMyBusiness,
      image: smsMarketingSM,
      alt: "GoogleMyBusiness",
      title: "SMS Marketing",
      description: "Direct SMS marketing",
    },
    {
      id: 8,
      // image: SearchEngineOptimisation,
      image: whatsAppIntegrationSM,
      alt: "SearchEngineOptimisation",
      title: "WhatsApp Integration",
      description: "Integrate with WhatsApp",
    },
    {
      id: 9,
      // image: SearchEngineMarketing,
      image: livechatSM,
      alt: "SearchEngineMarketing",
      title: "Live Chat",
      description: "Live chat support",
    },
    {
      id: 10,
      // image: DataMarketing,
      image: referralsSM,
      alt: "DataMarketing",
      title: "Referrals",
      description: "Referral marketing program",
    },
    {
      id: 11,
      // image: EmailMarketing,
      image: blogsSM,
      alt: "EmailMarketing",
      title: "Blogs",
      description: "Content marketing through blogs",
    },
    {
      id: 12,
      // image: LeadGeneration,
      image: vlogsSM,
      alt: "LeadGeneration",
      title: "Vlogs",
      description: "Video marketing via vlogs",
    },
  ];
  const services_hrSupport = [
    {
      id: 1,
      // image: TransactionalWebsite,
      image: attendanceHR,
      alt: "TransactionalWebsite",
      title: "Attendance",
      description: "Track employee attendance",
    },
    {
      id: 2,
      // image: BookingEngine,
      image: payrollHR,
      alt: "BookingEngine",
      title: "Payroll",
      description: "Manage payrolls efficiently",
    },
    {
      id: 3,
      // image: MeetingRoomEngine,
      image: payslipsHR,
      alt: "MeetingRoomEngine",
      title: "Payslips",
      description: "Generate and distribute payslips",
    },
    {
      id: 4,
      // image: PaymentGateway,
      image: leavesHR,
      alt: "PaymentGateway",
      title: "Leaves",
      description: "Leave management system",
    },
    {
      id: 5,
      // image: Blog,
      image: holidaysHR,
      alt: "Blog",
      title: "Holidays",
      description: "Track company holidays",
    },
    {
      id: 6,
      // image: Hiring,
      image: sopsHR,
      alt: "Hiring",
      title: "SOPs",
      description: "Standard operating procedures",
    },
    {
      id: 7,
      // image: GoogleMyBusiness,
      image: policiesHR,
      alt: "GoogleMyBusiness",
      title: "Policies",
      description: "HR policies and documentation",
    },
    {
      id: 8,
      // image: SearchEngineOptimisation,
      image: taskManagementHR,
      alt: "SearchEngineOptimisation",
      title: "Task Management",
      description: "Manage HR tasks and projects",
    },
    {
      id: 9,
      // image: SearchEngineMarketing,
      image: performanceHR,
      alt: "SearchEngineMarketing",
      title: "Performance",
      description: "Employee performance tracking",
    },
    {
      id: 10,
      // image: DataMarketing,
      image: appraisalsHR,
      alt: "DataMarketing",
      title: "Appraisals",
      description: "Manage employee appraisals",
    },
    {
      id: 11,
      // image: EmailMarketing,
      image: templatesHR,
      alt: "EmailMarketing",
      title: "Templates",
      description: "HR templates and forms",
    },
    {
      id: 12,
      // image: EmailMarketing,
      image: eSignHR,
      alt: "EmailMarketing",
      title: "e-Sign",
      description: "Electronic signature integration",
    },
  ];
  const services_customerManagement = [
    {
      id: 1,
      // image: TransactionalWebsite,
      image: ticketRaisingCM,
      alt: "TransactionalWebsite",
      title: "Ticket Raising",
      description: "Efficient ticket management system",
    },
    {
      id: 2,
      // image: BookingEngine,
      image: complaintLogsCM,
      alt: "BookingEngine",
      title: "Complaint Logs",
      description: "Log and track customer complaints",
    },
    {
      id: 3,
      // image: MeetingRoomEngine,
      image: meetingRoomsCM,
      alt: "MeetingRoomEngine",
      title: "Meetings Rooms",
      description: "Manage meeting room bookings",
    },
    {
      id: 4,
      // image: PaymentGateway,
      image: cafeOrdersCM,
      alt: "PaymentGateway",
      title: "Café Orders",
      description: "Manage in-house café orders",
    },
    {
      id: 5,
      // image: Blog,
      image: visitorCM,
      alt: "Blog",
      title: "Visitors",
      description: "Track and manage visitors",
    },
    {
      id: 6,
      // image: Hiring,
      image: announcementsCM,
      alt: "Hiring",
      title: "Announcements",
      description: "Broadcast company announcements",
    },
    {
      id: 7,
      // image: GoogleMyBusiness,
      image: feedbackCM,
      alt: "GoogleMyBusiness",
      title: "Feedback",
      description: "Collect and analyze customer feedback",
    },
    {
      id: 8,
      // image: SearchEngineOptimisation,
      image: customerRatingCM,
      alt: "SearchEngineOptimisation",
      title: "Customer Rating",
      description: "Gather customer ratings and reviews",
    },
    {
      id: 9,
      // image: SearchEngineMarketing,
      image: customerServiceCM,
      alt: "SearchEngineMarketing",
      title: "Customer Service",
      description: "Enhance customer service experience",
    },
    {
      id: 10,
      // image: DataMarketing,
      image: autoresponseCM,
      alt: "DataMarketing",
      title: "Auto Responses",
      description: "Automate customer responses",
    },
    {
      id: 11,
      // image: EmailMarketing,
      image: reportsCM,
      alt: "EmailMarketing",
      title: "Reports",
      description: "Generate customer service reports",
    },
    {
      id: 12,
      // image: LeadGeneration,
      image: analyticsCM,
      alt: "LeadGeneration",
      title: "Analytics",
      description: "Customer analytics and insights",
    },
  ];
  const services_reportsAnalytics = [
    {
      id: 1,
      // image: TransactionalWebsite,
      image: companyDashboard,
      alt: "TransactionalWebsite",
      title: "Company Dashboard",
      description: "Overview of company metrics",
    },
    {
      id: 2,
      // image: BookingEngine,
      image: customerTrends,
      alt: "BookingEngine",
      title: "Customer Trends",
      description: "Insights on customer behavior",
    },
    {
      id: 3,
      // image: MeetingRoomEngine,
      image: businessTrendsRA,
      alt: "MeetingRoomEngine",
      title: "Business Trends",
      description: "Track and analyze business growth",
    },
    {
      id: 4,
      // image: PaymentGateway,
      image: vendorPayoutsRA,
      alt: "PaymentGateway",
      title: "Vendor Payouts",
      description: "Manage and report vendor payments",
    },
    {
      id: 5,
      // image: Blog,
      image: cashflowRA,
      alt: "Blog",
      title: "Cashflow",
      description: "Monitor cashflow status",
    },
    {
      id: 6,
      // image: Hiring,
      image: keyNotificationsRA,
      alt: "Hiring",
      title: "Key Notifications",
      description: "Receive important alerts",
    },
    {
      id: 7,
      // image: GoogleMyBusiness,
      image: fullDataAnalysisRA,
      alt: "GoogleMyBusiness",
      title: "Full Data Analysis",
      description: "Comprehensive data analytics",
    },
    {
      id: 8,
      // image: SearchEngineOptimisation,
      image: customerReportsRA,
      alt: "SearchEngineOptimisation",
      title: "Customer Reports",
      description: "Detailed customer reports",
    },
    {
      id: 9,
      // image: SearchEngineMarketing,
      image: employeeReportsRA,
      alt: "SearchEngineMarketing",
      title: "Employee Reports",
      description: "Performance reports of employees",
    },
    {
      id: 10,
      // image: DataMarketing,
      image: milestoneReportsRA,
      alt: "DataMarketing",
      title: "Milestone Reports",
      description: "Track important milestones",
    },
    {
      id: 11,
      // image: EmailMarketing,
      image: taxesReportsRA,
      alt: "EmailMarketing",
      title: "Taxes Reports",
      description: "Review tax-related reports",
    },
    {
      id: 12,
      // image: LeadGeneration,
      image: customisedReportsRA,
      alt: "LeadGeneration",
      title: "Customised Reports",
      description: "Generate custom reports",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <div className="services flex flex-col gap-8 py-4">
        <div className="SaaS-main-heading">
          <h1 className="p-0">The ONLY Nomad Ecosystem SaaS Platform!</h1>
        </div>

        <div>
          <h4 className="text-lg text-center font-[Popins-Regular]">
            No Code Website <span className="plus-sign"></span>
            <span className="plus-sign">+</span> Booking Engine{" "}
            <span className="plus-sign">+</span> Payment Gateway{" "}
            <span className="plus-sign">+</span> Accounting{" "}
            <span className="plus-sign">+</span> Reports{" "}
            <span className="plus-sign">+</span> Analytics{" "}
            <span className="plus-sign">+</span> HR Support{" "}
            <span className="plus-sign">+</span> Customer & Client Management{" "}
            <span className="plus-sign">+</span> Marketing and more.
          </h4>
        </div>
        <hr
          className="hrStyling zeroHeight"
          style={{ width: "100%", margin: 0 }}
        />
        {/* <div className="SaaS-grid-heading">
          <h2>
            Available{" "}
            <span className="SaaS-grid-underline-container">
              SaaS & Automation
              <img src={greenUnderLine} alt="greenUnderLine" />
            </span>{" "}
            Solutions
          </h2>
          <span>
            We'll keep adding as you discover gaps and issues in your business!
          </span>
        </div> */}

        <div className="SaaS-featured-master flex flex-col gap-4 py-4">
          <div className="SaaS-features-heading flex text-2xl md:text-3xl font-bold">
            Real-time operations
            <img
              src={greenUnderLine}
              alt="greenUnderLine"
            />
          </div>
          <div className="SaaS-featured-grid ">
            <div className="SaaS-featured-grid-left flex flex-col gap-4 ">
              <span className="text-3xl">
                Manage your business in real-time across all business verticals.
              </span>
              <span className="text-3xl">
                Operate your business in real-time with the micro most details
                of inventory, bookings, accounts, analytics, leads, sales,
                reports, tasks, logs, menu, complaints, requests etc.
              </span>
            </div>
            <div className="SaaS-featured-grid-right h-[50vh] md:h-[35vh] lg:h-[50vh] overflow-hidden">
              <img  src={FinanceImage} alt="ServiceGridImage" />
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------- */}
        <hr />
        {/* ---------------------------------------------------------------------------------------------------------- */}

        <div
          className="SaaS-featured-master"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4rem",
          }}
        >
          <SaaSFeatureBlock
            title="Frontend"
            description1={[
              { title: "Website", image: website },
              { title: "Mobile Site", image: mobileSite },
              { title: "Payment Gateway", image: paymentGateway },
              { title: "Notifications", image: notifications },
              { title: "Website", image: website },
              { title: "Mobile Site", image: mobileSite },
            ]}
            image={FrontendImage}
            imageFit={"cover"}
            rowReverse={false}
          />
         
          <hr />
          <SaaSFeatureBlock
            title="Finance"
            description1={[
              { title: "Invoicing", image: invoicingFA },
              { title: "Cashflow", image: cashflowFA },
              { title: "Projections", image: projectionsFA },
              { title: "Taxes", image: taxesFA },
              { title: "Income", image: income },
              { title: "Expense", image: expense },
            ]}
            image={FinanceImage}
            rowReverse={true}
          />
          <hr />
          <SaaSFeatureBlock
            title="Sales"
            description1={[
              { title: "Lead Generation", image: leadGenerationSM },
              { title: "Email Marketing", image: emailMarketingSM },
              { title: "Social Media", image: socialMediaSM },
              { title: "Projections", image: projectionsFA },
              { title: "Invoicing", image: invoicingFA },
              { title: "Reports", image: reports },
            ]}
            image={SalesImage}
            rowReverse={false}
          />
          <hr />
          <SaaSFeatureBlock
            title="Human Resources"
            description1={[
              { title: "Attendance", image: attendanceHR },
              { title: "Payroll", image: payrollHR },
              { title: "Payslips", image: payslipsHR },
              { title: "Templates", image: templatesHR },
              { title: "Performance", image: performanceHR },
              { title: "Budget", image: budgetFA },
            ]}
            image={HrImage}
            rowReverse={true}
          />
          <hr />
          <SaaSFeatureBlock
            title="Apps"
            description1={[
              { title: "Tickets", image: ticketRaisingCM },
              { title: "Meetings", image: meetingRoomsCM },
              { title: "Assets", image: eSignHR },
              { title: "Visitors", image: visitorCM },
              { title: "Calendar", image: calendar },
              { title: "Profile", image: customerProfile },
            ]}
            image={TicketsImage}
            rowReverse={false}
          />
          <hr />
        </div>


        <div className="SaaS-grid">
          <div className="SaaS-grid-accordion">
            <Accordion defaultActiveKey={["0"]} alwaysOpen>
              <Accordion.Item className="SaaS-accordion-item" eventKey="0">
                <Accordion.Header style={{ padding: 0 }}>
                  Frontend
                </Accordion.Header>
                <Accordion.Body className="SaaS-accordion-body">
                  <div className="SaaS-grid-mobile">
                    <div className="business-grid">
                      {services_frontend.map((service) => (
                        <div
                          className="business-service-card "
                          key={service.id}
                        >
                          <div className="business-service-card-image ">
                            <img src={service.image} alt={service.alt} />
                          </div>
                          <div className="business-service-card-content">
                            <h4>{service.title}</h4>
                            <span>{service.description}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="SaaS-accordion-item" eventKey="1">
                <Accordion.Header>Finance & Accounting</Accordion.Header>
                <Accordion.Body className="SaaS-accordion-body">
                  <div className="business-grid">
                    {services_financeAccounting.map((service) => (
                      <div className="business-service-card " key={service.id}>
                        <div className="business-service-card-image ">
                          <img src={service.image} alt={service.alt} />
                        </div>
                        <div className="business-service-card-content">
                          <h4>{service.title}</h4>
                          <span>{service.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="SaaS-accordion-item" eventKey="2">
                <Accordion.Header>Sales & Marketing</Accordion.Header>
                <Accordion.Body className="SaaS-accordion-body">
                  <div className="business-grid">
                    {services_salesMarketing.map((service) => (
                      <div className="business-service-card " key={service.id}>
                        <div className="business-service-card-image ">
                          <img src={service.image} alt={service.alt} />
                        </div>
                        <div className="business-service-card-content">
                          <h4>{service.title}</h4>
                          <span>{service.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="SaaS-accordion-item" eventKey="3">
                <Accordion.Header>HR support</Accordion.Header>
                <Accordion.Body className="SaaS-accordion-body">
                  <div className="business-grid">
                    {services_hrSupport.map((service) => (
                      <div className="business-service-card " key={service.id}>
                        <div className="business-service-card-image ">
                          <img src={service.image} alt={service.alt} />
                        </div>
                        <div className="business-service-card-content">
                          <h4>{service.title}</h4>
                          <span>{service.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="SaaS-accordion-item" eventKey="4">
                <Accordion.Header>
                  Customer Management Services
                </Accordion.Header>
                <Accordion.Body className="SaaS-accordion-body">
                  <div className="business-grid">
                    {services_customerManagement.map((service) => (
                      <div className="business-service-card " key={service.id}>
                        <div className="business-service-card-image ">
                          <img src={service.image} alt={service.alt} />
                        </div>
                        <div className="business-service-card-content">
                          <h4>{service.title}</h4>
                          <span>{service.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className="SaaS-accordion-item" eventKey="5">
                <Accordion.Header>Reports & Analytics</Accordion.Header>
                <Accordion.Body className="SaaS-accordion-body">
                  <div className="business-grid">
                    {services_reportsAnalytics.map((service) => (
                      <div className="business-service-card " key={service.id}>
                        <div className="business-service-card-image ">
                          <img src={service.image} alt={service.alt} />
                        </div>
                        <div className="business-service-card-content">
                          <h4>{service.title}</h4>
                          <span>{service.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
