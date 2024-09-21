import React, { useEffect } from "react";
import "../layout/jobdetails.css";
import { useParams } from "react-router-dom";
import Jobapply from "../components/jobroles/Jobapply.js";
import ExecutiveAssistanceToCEO from "../components/jobroles/Human_Resource&EA/ExecutiveAssistanceToCEO.js";
import HrGeneralist from "../components/jobroles/Human_Resource&EA/HrGeneralist.js";
import FinanceIntern from "../components/jobroles/Finance/FinanceIntern.js";
import PHPdeveloper from "../components/jobroles/TechDevelopment/PHPdeveloper.js";
import WebdeveloperIntern from "../components/jobroles/TechDevelopment/WebdeveloperIntern.js";
import MarketingAnalytics from "../components/jobroles/ProductManagement/MarketingAnalytics.js";
import UiDesignerComp from "../components/jobroles/ProductManagement/UiDesignerComp.js";
import Jobdescription from "../components/jobroles/Jobdescription.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  });

  return (
    <>
      <main id="main">
        <section
          id="get-started"
          className="get-started section features section"
          style={{ padding: "40px 0" }}>
          <div className="container-jobDetails">
            <h1 style={{ fontWeight: "500", textAlign: "center" }}>
              {decodedTitle}
            </h1>

            <ul className="nav nav-tabs row g-2 d-flex" role="tablist">
              <li className="nav-item col-6" role="presentation">
                <Link
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                  aria-selected="true"
                  role="tab">
                  <h4 className="mobileFont">JOB DESCRIPTION</h4>
                </Link>
              </li>
              <li className="nav-iem col-6" role="presentation">
                <Link
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab">
                  <h4 className="mobileFont">APPLY NOW</h4>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel">
                <div className="row">
                  {/* NEED TO Enter below function */}

                  <div
                    className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay="100">
                    {/* {decodedTitle === 'Marketing Analytics' ? (<MarketingAnalytics/>) : decodedTitle === 'PHP Developer' ? (<PHPdeveloper/>):
                  decodedTitle === 'Web Developer Intern' ? (<WebdeveloperIntern/>) : decodedTitle === 'Finance Intern' ? (<FinanceIntern/>):
                  decodedTitle === 'HR Generalist' ? (<HrGeneralist/>): decodedTitle === 'Executive Assistant to CEO'? (<ExecutiveAssistanceToCEO/>):
                  decodedTitle === 'UI Designer' ? (<UiDesignerComp/>): decodedTitle === 'Jr.UI/UX Developer' ? (<developer/>):(<PHPdeveloper/>)}  */}
                    <Jobdescription decodedTitle={decodedTitle} />
                  </div>
                </div>
              </div>
              {/* Apply Form */}
              <div className="tab-pane" id="tab-2" role="tabpanel">
                <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-8 d-flex flex-column justify-content-center">
                    <Jobapply jobTitle={title}></Jobapply>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default JobDetails;
