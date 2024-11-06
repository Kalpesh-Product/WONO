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
} from "../assets/WONO_images/img/icon_service_color";
import { useNavigate } from "react-router-dom";
import ServiceGridImage from "../assets/WONO_images/img/services/servicegrid.webp";
import blueTickmarkImg from "../assets/blue-tick-no-bg-15.png";
import greenUnderLine from "../assets/underline-bg/blue-line.png";
import Accordion from "react-bootstrap/Accordion";

import "../styles/bodyServices.css";
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
      <div className="services">
        <div className="SaaS-main-heading">
          <h1>
            The #1 &{" "}
            <span className="services-animation-container">
              only
              {/* <svg
                className="services-blue-underline"
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="50"
                viewBox="0 0 200 100">
                <path
                  d="m1.78,98.974c-2.734-3.693-2.319-7.014,1.247-9.961,3.566-2.948,9.479-4.841,17.739-5.681,1.828-.062,3.597-.086,5.306-.074,1.828-.062,3.201-.289,4.118-.682.973-.068,3.509-.212,7.608-.432,4.305-.169,9.421-.394,15.347-.676,6.014-.156,12.25-.361,18.707-.614,6.544-.127,12.661-.258,18.351-.391,5.808-.208,10.643-.347,14.505-.419,3.861-.072,5.998-.056,6.41.047.23.576.875.893,1.936.951,1.265.109,2.358-.033,3.275-.426,1.124-.342,2.437-.532,3.941-.571,1.59.087,2.679.307,3.265.661.767-.119,1.638-.213,2.611-.281,1.061.058,1.871.001,2.433-.17.562-.171,1.152-.179,1.769-.025.736.08,1.386.035,1.947-.136,1.765.338,4.342.619,7.728.843,3.506.15,7.44.304,11.8.461,4.448.282,8.912.465,13.391.547,4.566.208,8.823.339,12.772.393,3.949.054,7.265.053,9.948-.003,2.682-.055,4.304-.169,4.865-.339,2.041-.735,3.625.076,4.752,2.433.91.331,1.725,1.262,2.448,2.792,0,0-.209.311-.628.933-.213.673-.608,1.82-1.184,3.44-.457,1.546-1.262,2.59-2.417,3.131-1.067.667-2.385,1.22-3.951,1.658-1.716.712-3.386,1.125-5.008,1.238-1.504.039-3.83-.128-6.98-.501-3.031-.447-7.8-1.069-14.305-1.866-1.592-.087-3.225-.236-4.903-.448-1.473-.161-2.885-.358-4.238-.593-1.149-.183-2.149-.278-3.004-.284-.737-.08-1.223-.046-1.461.102-.562.171-1.578.176-3.05.015-1.266-.109-2.814-.133-4.641-.071-1.354-.235-3.297-.461-5.829-.68-2.533-.218-5.168-.462-7.906-.732-2.651-.144-5.038-.274-7.158-.389-2.003-.19-3.124-.21-3.36-.062-.443.097-.989.168-1.638.213-.562.171-1.239.053-2.029-.352-.232-.576-.789-.768-1.675-.574-.679.245-1.02.367-1.02.367-.949.593-4.989.776-12.12.549-3.331.101-8.328.252-14.991.453-6.576.327-13.903.674-21.982,1.04-7.873.418-15.644.861-23.312,1.33-7.549.395-14.081.785-19.596,1.169-5.428.51-8.882,1.047-10.361,1.611-3.077,1.202-5.161,1.874-6.253,2.016-1.211.216-2.283-.104-3.218-.96Z"
                  fill="#1bb6f9"
                />
              </svg> */}
              <img src={greenUnderLine} alt="greenUnderLine" />
            </span>{" "}
            Nomad Businesses SaaS Platform
          </h1>
          <h4>
            No Code Website <span className="plus-sign">+</span> Native Apps{" "}
            <span className="plus-sign">+</span> Booking Engine{" "}
            <span className="plus-sign">+</span> Payment Gateway{" "}
            <span className="plus-sign">+</span> Accounting{" "}
            <span className="plus-sign">+</span> Reports{" "}
            <span className="plus-sign">+</span> Analytics{" "}
            <span className="plus-sign">+</span> HR Support{" "}
            <span className="plus-sign">+</span> Customer & Client Management{" "}
            <span className="plus-sign">+</span> Marketing and more.
          </h4>
          <span className="SaaS-main-tagline">
            Everything that your business needs in one single platform which is
            seamless and easy to use.
          </span>
          <div className="services-header-button-space">
            <button
              onClick={() => {
                navigate("/login");
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="get-started-main-button">
              Get Started
            </button>
          </div>
        </div>
        <hr
          className="hrStyling zeroHeight"
          style={{ width: "100%", margin: 0 }}
        />

        <div className="SaaS-featured-master">
          <h1>
            <span className="SaaS-features-heading">
              Real-time operations
              <img src={greenUnderLine} alt="greenUnderLine" />
            </span>
          </h1>
          <div className="SaaS-featured-grid">
            <div className="SaaS-featured-grid-left">
              <span>
                Manage your business in real-time across all business verticals.
              </span>
              <br />
              <br />
              <span>
                Operate your business in real-time with the micro most details
                of inventory, bookings, accounts, analytics, leads, sales,
                reports, tasks, logs, menu, complaints, requests etc.
              </span>
            </div>
            <div className="SaaS-featured-grid-right">
              <img src={ServiceGridImage} alt="ServiceGridImage" />
            </div>
          </div>
        </div>

        <hr
          className="hrStyling zeroHeight"
          style={{ width: "100%", margin: 0 }}
        />

        <div className="SaaS-grid">
          <div className="SaaS-grid-heading">
            <h2>
              Available{" "}
              <span className="SaaS-grid-underline-container">
                SaaS & Automation
                <img src={greenUnderLine} alt="greenUnderLine" />
              </span>{" "}
              Solutions
            </h2>
            <span>
              We'll keep adding as you discover gaps and issues in your
              business!
            </span>
          </div>
          <div className="SaaS-grid-content">
            <div className="businesses">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  width: "100%",
                }}>
                <h1>
                  <span className="SaaS-features-frontend">
                    Frontend
                    <img src={greenUnderLine} alt="greenUnderLine" />
                  </span>
                </h1>
                {/* <h1>Frontend</h1> */}
              </div>
              <div className="business-grid">
                {services_frontend.map((service) => (
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
            </div>
            <div className="businesses">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  width: "100%",
                }}>
                <h1>
                  <span className="SaaS-features-finance">
                    FINANCE & ACCOUNTING
                    <img src={greenUnderLine} alt="greenUnderLine" />
                  </span>
                </h1>
                {/* <h1>FINANCE & ACCOUNTING</h1> */}
              </div>
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
            </div>

            <div className="businesses">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  width: "100%",
                }}>
                <h1>
                  <span className="SaaS-features-sales">
                    Sales & Marketing
                    <img src={greenUnderLine} alt="greenUnderLine" />
                  </span>
                </h1>
                {/* <h1>Sales & Marketing</h1> */}
              </div>
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
            </div>

            <div className="businesses">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  width: "100%",
                }}>
                <h1>
                  <span className="SaaS-features-hr">
                    HR Support
                    <img src={greenUnderLine} alt="greenUnderLine" />
                  </span>
                </h1>
                {/* <h1>HR Support</h1> */}
              </div>
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
            </div>

            <div className="businesses">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  width: "100%",
                }}>
                <h1>
                  <span className="SaaS-features-cms">
                    Customer Management Services
                    {/* <svg
                className="SaaS-blue-underline-customer-management-services"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100">
                <path
                  d="m1.78,98.974c-2.734-3.693-2.319-7.014,1.247-9.961,3.566-2.948,9.479-4.841,17.739-5.681,1.828-.062,3.597-.086,5.306-.074,1.828-.062,3.201-.289,4.118-.682.973-.068,3.509-.212,7.608-.432,4.305-.169,9.421-.394,15.347-.676,6.014-.156,12.25-.361,18.707-.614,6.544-.127,12.661-.258,18.351-.391,5.808-.208,10.643-.347,14.505-.419,3.861-.072,5.998-.056,6.41.047.23.576.875.893,1.936.951,1.265.109,2.358-.033,3.275-.426,1.124-.342,2.437-.532,3.941-.571,1.59.087,2.679.307,3.265.661.767-.119,1.638-.213,2.611-.281,1.061.058,1.871.001,2.433-.17.562-.171,1.152-.179,1.769-.025.736.08,1.386.035,1.947-.136,1.765.338,4.342.619,7.728.843,3.506.15,7.44.304,11.8.461,4.448.282,8.912.465,13.391.547,4.566.208,8.823.339,12.772.393,3.949.054,7.265.053,9.948-.003,2.682-.055,4.304-.169,4.865-.339,2.041-.735,3.625.076,4.752,2.433.91.331,1.725,1.262,2.448,2.792,0,0-.209.311-.628.933-.213.673-.608,1.82-1.184,3.44-.457,1.546-1.262,2.59-2.417,3.131-1.067.667-2.385,1.22-3.951,1.658-1.716.712-3.386,1.125-5.008,1.238-1.504.039-3.83-.128-6.98-.501-3.031-.447-7.8-1.069-14.305-1.866-1.592-.087-3.225-.236-4.903-.448-1.473-.161-2.885-.358-4.238-.593-1.149-.183-2.149-.278-3.004-.284-.737-.08-1.223-.046-1.461.102-.562.171-1.578.176-3.05.015-1.266-.109-2.814-.133-4.641-.071-1.354-.235-3.297-.461-5.829-.68-2.533-.218-5.168-.462-7.906-.732-2.651-.144-5.038-.274-7.158-.389-2.003-.19-3.124-.21-3.36-.062-.443.097-.989.168-1.638.213-.562.171-1.239.053-2.029-.352-.232-.576-.789-.768-1.675-.574-.679.245-1.02.367-1.02.367-.949.593-4.989.776-12.12.549-3.331.101-8.328.252-14.991.453-6.576.327-13.903.674-21.982,1.04-7.873.418-15.644.861-23.312,1.33-7.549.395-14.081.785-19.596,1.169-5.428.51-8.882,1.047-10.361,1.611-3.077,1.202-5.161,1.874-6.253,2.016-1.211.216-2.283-.104-3.218-.96Z"
                  fill="#1bb6f9"
                />
              </svg> */}
                    <img src={greenUnderLine} alt="greenUnderLine" />
                  </span>
                </h1>
                {/* <h1>Customer Management Services</h1> */}
              </div>
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
            </div>

            <div className="businesses">
              <div
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "start",
                  flexDirection: "column",
                  width: "100%",
                }}>
                <h1>
                  <span className="SaaS-features-reports">
                    Reports & Analytics
                    {/* <svg
                className="SaaS-blue-underline-reports-analytics"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100">
                <path
                  d="m1.78,98.974c-2.734-3.693-2.319-7.014,1.247-9.961,3.566-2.948,9.479-4.841,17.739-5.681,1.828-.062,3.597-.086,5.306-.074,1.828-.062,3.201-.289,4.118-.682.973-.068,3.509-.212,7.608-.432,4.305-.169,9.421-.394,15.347-.676,6.014-.156,12.25-.361,18.707-.614,6.544-.127,12.661-.258,18.351-.391,5.808-.208,10.643-.347,14.505-.419,3.861-.072,5.998-.056,6.41.047.23.576.875.893,1.936.951,1.265.109,2.358-.033,3.275-.426,1.124-.342,2.437-.532,3.941-.571,1.59.087,2.679.307,3.265.661.767-.119,1.638-.213,2.611-.281,1.061.058,1.871.001,2.433-.17.562-.171,1.152-.179,1.769-.025.736.08,1.386.035,1.947-.136,1.765.338,4.342.619,7.728.843,3.506.15,7.44.304,11.8.461,4.448.282,8.912.465,13.391.547,4.566.208,8.823.339,12.772.393,3.949.054,7.265.053,9.948-.003,2.682-.055,4.304-.169,4.865-.339,2.041-.735,3.625.076,4.752,2.433.91.331,1.725,1.262,2.448,2.792,0,0-.209.311-.628.933-.213.673-.608,1.82-1.184,3.44-.457,1.546-1.262,2.59-2.417,3.131-1.067.667-2.385,1.22-3.951,1.658-1.716.712-3.386,1.125-5.008,1.238-1.504.039-3.83-.128-6.98-.501-3.031-.447-7.8-1.069-14.305-1.866-1.592-.087-3.225-.236-4.903-.448-1.473-.161-2.885-.358-4.238-.593-1.149-.183-2.149-.278-3.004-.284-.737-.08-1.223-.046-1.461.102-.562.171-1.578.176-3.05.015-1.266-.109-2.814-.133-4.641-.071-1.354-.235-3.297-.461-5.829-.68-2.533-.218-5.168-.462-7.906-.732-2.651-.144-5.038-.274-7.158-.389-2.003-.19-3.124-.21-3.36-.062-.443.097-.989.168-1.638.213-.562.171-1.239.053-2.029-.352-.232-.576-.789-.768-1.675-.574-.679.245-1.02.367-1.02.367-.949.593-4.989.776-12.12.549-3.331.101-8.328.252-14.991.453-6.576.327-13.903.674-21.982,1.04-7.873.418-15.644.861-23.312,1.33-7.549.395-14.081.785-19.596,1.169-5.428.51-8.882,1.047-10.361,1.611-3.077,1.202-5.161,1.874-6.253,2.016-1.211.216-2.283-.104-3.218-.96Z"
                  fill="#1bb6f9"
                />
              </svg> */}
                    <img src={greenUnderLine} alt="greenUnderLine" />
                  </span>
                </h1>
                {/* <h1>Reports & Analytics</h1> */}
              </div>
              <div style={{ marginBottom: "4rem" }} className="business-grid">
                {services_reportsAnalytics.map((service) => (
                  <div className="business-service-card " key={service.id}>
                    <div className="business-service-card-image">
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
          </div>

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
                          key={service.id}>
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
          {/* <div className="SaaS-grid-mobile">
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "start",
                flexDirection: "column",
                width: "100%",
              }}>
              <h1>
                <span className="SaaS-features-frontend">
                  Frontend
                  <img src={greenUnderLine} alt="greenUnderLine" />
                </span>
              </h1>
            </div>
            <div className="business-grid">
              {services_frontend.map((service) => (
                <div
                  className="business-service-card "
                  key={service.id}>
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
          </div> */}
        </div>

        <div className="SaaS-last-banner-section">
          <div className="SaaS-last-banner">
            <h2>Unleash your growth potential</h2>
            <div className="services-footer-button-space">
              <button
                onClick={() => {
                  navigate("/register");
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
                className="get-started-main-button">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
