import React, {useEffect} from "react";

import {
  customerProfile,
  mobileSite,
  notifications,
  templates,
  paymentGateway,
  website,
  taxesFA,
  budgetFA,
  projectionsFA,
  cashflowFA,
  invoicingFA,
  emailMarketingSM,
  socialMediaSM,
  leadGenerationSM,
  eSignHR,
  templatesHR,
  performanceHR,
  payslipsHR,
  payrollHR,
  attendanceHR,
  visitorCM,
  meetingRoomsCM,
  ticketRaisingCM,
  income,
  expense,
  reports,
  calendar,
  seo,
  calendarLine,
  bookingEngineCM,
  aiSeoCM,
  inventory,
  occupancy,
  clientManagement,
  profitLoss,
  jobs,
  employeeManagement,
} from "../assets/WONO_images/img/icon_service_color";
import { useNavigate } from "react-router-dom";
import TicketsImage from "../assets/WONO_images/img/images-service/meetings-final.jpeg";
import HrImage from "../assets/WONO_images/img/images-service/hr-img-2.jpeg";
import FinanceImage from "../assets/WONO_images/img/images-service/finance-final.png";
import SalesImage from "../assets/WONO_images/img/images-service/sales-final.png";
import FrontendImage from "../assets/WONO_images/img/images-service/frontend-2.png";
import greenUnderLine from "../assets/underline-bg/blue-line.png";
import AOS from "aos";
import "../styles/bodyServices.css";
import SaaSFeatureBlock from "../components/Cards/SaaSFeatured";
import CallButton from "../components/CallButton";
const Services = () => {
  const navigate = useNavigate();
    useEffect(() => {
      AOS.init({
        duration: 1000, // animation duration in ms
        once: true, // animate only once
      });
    }, []);
  return (
    <>
      <div className="services flex flex-col gap-4 lg:gap-8 py-4">
        <div className="SaaS-main-heading">
          <h1 className="p-0">The ONLY Nomad Ecosystem SaaS Platform!</h1>
        </div>

        <div>
          <h4 className="plus-section text-lg lg:text-[1.8rem] lg:leading-[2.75rem] text-start md:text-center lg:text-center font-[Popins-Regular]">
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
        <div className="flex justify-end items-end">
          <CallButton falseMargin={true} />
        </div>
        <hr
          className="hrStyling zeroHeight border-t-4"
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

        <div data-aos="fade-up" className="SaaS-featured-master flex flex-col gap-4 py-0 lg:py-4">
          <div className="SaaS-featured-grid ">
            <div className="SaaS-featured-grid-left flex flex-col gap-4 ">
              <div className="SaaS-features-heading flex text-[1.5rem] md:text-3xl font-bold mb-3">
                Real-time operations
                <img src={greenUnderLine} alt="greenUnderLine" />
              </div>
              <span className="text-lg md:text-xl lg:text:2xl">
                Manage your business in real-time across all business verticals.
              </span>
              <span className="text-lg md:text-xl lg:text:2xl">
                Operate your business in real-time with the micro most details
                of inventory, bookings, accounts, analytics, leads, sales,
                reports, tasks, logs, menu, complaints, requests etc.
              </span>
            </div>
            <div className="SaaS-featured-grid-right h-[30vh] md:h-[35vh] lg:h-[50vh] overflow-hidden border-gray-100 border-[1px] p-2 rounded-lg">
              <img
                className="h-full w-full object-cover"
                src={FinanceImage}
                alt="ServiceGridImage"
              />
            </div>
          </div>
          <hr
          className="h-[1px] text-gray-500 bg-gray-500 mb-2
         lg:mt-10"
        />
        </div>

        {/* ---------------------------------------------------------------------------------------------------------- */}
      
        {/* ---------------------------------------------------------------------------------------------------------- */}

        <div
          data-aos="fade-up"
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
              { title: "No Code Website", image: website },
              { title: "Booking Engine", image: bookingEngineCM },
              { title: "Payment Gateway", image: paymentGateway },
              { title: "Lead Management", image: leadGenerationSM },
              { title: "AI SEO", image: aiSeoCM },
              { title: "Notifications", image: notifications },
            ]}
            image={FrontendImage}
            width={"100%"}
            imageFit={"fill"}
            mobileHeight={"11rem"}
            imagePosition={"left top"}
            rowReverse={false}
          />
          <hr />
          <SaaSFeatureBlock
            title="Apps"
            description1={[
              { title: "Tickets", image: ticketRaisingCM },
              { title: "Tasks", image: customerProfile },
              { title: "Meeting Rooms", image: meetingRoomsCM },
              { title: "Visitors", image: visitorCM },
              { title: "Assets", image: eSignHR },
              { title: "Calendar", image: calendar },
            ]}
            image={TicketsImage}
            rowReverse={true}
          />
          <hr />
          <SaaSFeatureBlock
            title="Sales"
            description1={[
              { title: "Revenue Reports", image: reports },
              { title: "Lead Generation", image: leadGenerationSM },
              { title: "Sales Inventory", image: inventory },
              { title: "Occupancy", image: occupancy },
              { title: "Manage Clients", image: clientManagement },
              { title: "Profiling", image: customerProfile },
            ]}
            image={SalesImage}
            rowReverse={false}
          />
          <hr />
          <SaaSFeatureBlock
            title="Finance"
            description1={[
              { title: "P&L Report", image: profitLoss },
              { title: "Cashflow", image: cashflowFA },
              { title: "Invoicing", image: invoicingFA },
              { title: "Collections", image: projectionsFA },
              { title: "Historical Data", image: taxesFA },
              { title: "Budgeting", image: expense },
            ]}
            image={FinanceImage}
            rowReverse={true}
          />
          <hr />
          <SaaSFeatureBlock
            title="Human Resources"
            description1={[
              { title: "Manage Employees", image: employeeManagement },
              { title: "Payroll", image: payrollHR },
              { title: "Attendance", image: attendanceHR },
              { title: "Budgeting", image: expense },
              { title: "Performance", image: performanceHR },
              { title: "Jobs", image: jobs },
            ]}
            image={HrImage}
            rowReverse={false}
          />

        </div>
        <hr />
        <div >
            <CallButton title={"Get Started"} falseMargin={true} />
          </div>
        <hr />

        {/* <div className="SaaS-grid">
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
        </div> */}
      </div>
    </>
  );
};

export default Services;
