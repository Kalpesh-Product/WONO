import React from "react";

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
} from "../assets/WONO_images/img/icon_service_color";
import { useNavigate } from "react-router-dom";
import TicketsImage from "../assets/WONO_images/img/images-service/services-apps.jpeg";
import HrImage from "../assets/WONO_images/img/images-service/hr-img-2.jpeg";
import FinanceImage from "../assets/WONO_images/img/images-service/Finance-img.jpeg";
import SalesImage from "../assets/WONO_images/img/images-service/Sales-img.jpeg";
import FrontendImage from "../assets/WONO_images/img/images-service/frontend-2.png";
import greenUnderLine from "../assets/underline-bg/blue-line.png";

import "../styles/bodyServices.css";
import SaaSFeatureBlock from "../components/Cards/SaaSFeatured";
const Services = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="services flex flex-col gap-8 py-4">
        <div className="SaaS-main-heading">
          <h1 className="p-0">The ONLY Nomad Ecosystem SaaS Platform!</h1>
        </div>

        <div>
          <h4 className="text-lg lg:text-[1.8rem] lg:leading-[2.75rem] text-start md:text-center lg:text-center font-[Popins-Regular]">
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

        <div className="SaaS-featured-master flex flex-col gap-4 py-4">
          <div className="SaaS-featured-grid ">
            <div className="SaaS-featured-grid-left flex flex-col gap-4 ">
              <div className="SaaS-features-heading flex text-3xl md:text-3xl font-bold">
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
            <div className="SaaS-featured-grid-right h-[50vh] md:h-[35vh] lg:h-[50vh] overflow-hidden border-gray-100 border-[1px] p-2 rounded-lg">
              <img
                className="h-full w-full object-cover"
                src={FinanceImage}
                alt="ServiceGridImage"
              />
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
              { title: "Templates", image: templates },
              { title: "SEO", image: seo },
            ]}
            image={FrontendImage}
            width={"100%"}
            imageFit={"cover"}
            imagePosition={"left top"}
            rowReverse={false}
          />
          <hr/>
          <SaaSFeatureBlock
            title="Apps"
            description1={[
              { title: "Tickets", image: ticketRaisingCM },
              { title: "Meetings", image: meetingRoomsCM },
              { title: "Assets", image: eSignHR },
              { title: "Visitors", image: visitorCM },
              { title: "Calendar", image: calendar },
              { title: "Tasks", image: customerProfile },
            ]}
            image={TicketsImage}
            rowReverse={true}
          />
          <hr/>
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
          <hr/>
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
          <hr/>
          <SaaSFeatureBlock
            title="Human Resources"
            description1={[
              { title: "Attendance", image: attendanceHR },
              { title: "Payroll", image: payrollHR },
              { title: "Payslips", image: payslipsHR },
              { title: "Templates", image: templates },
              { title: "Performance", image: performanceHR },
              { title: "Budget", image: budgetFA },
            ]}
            image={HrImage}
            rowReverse={false}
          />

        </div>

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
