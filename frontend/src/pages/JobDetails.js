import React, { useEffect } from "react";
import "../layout/jobdetails.css";
import { useParams } from "react-router-dom";
import Jobapply from "../components/jobroles/Jobapply.js";
import Jobdescription from "../components/jobroles/Jobdescription.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const JobDetails = ({ changeActiveTab }) => {
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
          className="get-started section features section job-details-main"
        >
          <div className="container-jobDetails">
            <h1 className="text-3xl" style={{ fontWeight: "500", textAlign: "center" }}>
              {decodedTitle}
            </h1>

            <ul className="nav nav-tabs row g-2 d-flex" role="tablist">
              <li className="nav-item col-6" role="presentation">
                <Link
                  className="nav-link active show"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                  aria-selected="true"
                  role="tab"
                >
                  <h4 className="mobileFont text-2xl">JOB DESCRIPTION</h4>
                </Link>
              </li>
              <li className="nav-iem col-6" role="presentation">
                <Link
                  className="nav-link"
                  data-bs-toggle="tab"
                  data-bs-target="#tab-2"
                  aria-selected="false"
                  tabIndex="-1"
                  role="tab"
                >
                  <h4 className="mobileFont  text-2xl">APPLY NOW</h4>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="tab-1"
                role="tabpanel"
              >
                <div className="row">
                  {/* NEED TO Enter below function */}

                  <div
                    className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Jobdescription decodedTitle={decodedTitle} />
                  </div>
                </div>
              </div>
              {/* Apply Form */}
              <div className="tab-pane" id="tab-2" role="tabpanel">
                <div className="row">
                  <div className="col-lg-12 d-flex flex-column justify-content-center">
                    <Jobapply
                      jobTitle={title}
                      changeActiveTab={changeActiveTab}
                    ></Jobapply>
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
