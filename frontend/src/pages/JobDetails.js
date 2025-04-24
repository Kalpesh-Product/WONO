import React, { useEffect } from "react";
import "../layout/jobdetails.css";
import { useParams } from "react-router-dom";
import Jobapply from "../components/jobroles/Jobapply.js";
import Jobdescription from "../components/jobroles/Jobdescription.js";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const JobDetails = ({ changeActiveTab }) => {
  const { title, id } = useParams();
  const decodedTitle = decodeURIComponent(title);
  const showDescriptionTab = id !== "11";

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    Aos.refresh();
  });

  return (
    <main id="main">
      <section id="get-started" className="get-started section features section job-details-main">
        <div className="container-jobDetails">
          <h1 className="text-3xl font-medium text-center">{decodedTitle}</h1>

          <ul className="nav nav-tabs row g-2 d-flex mt-4" role="tablist">
            {showDescriptionTab && (
              <li className="nav-item col-6" role="presentation">
                <Link
                  className={`nav-link ${showDescriptionTab ? "active show" : ""}`}
                  data-bs-toggle="tab"
                  data-bs-target="#tab-1"
                  aria-selected={showDescriptionTab ? "true" : "false"}
                  role="tab"
                >
                  <h4 className="mobileFont text-2xl">JOB DESCRIPTION</h4>
                </Link>
              </li>
            )}
            <li className={`nav-item ${showDescriptionTab ? "col-6" : "col-12"}`} role="presentation">
              <Link
                className={`nav-link ${!showDescriptionTab ? "active show" : ""}`}
                data-bs-toggle="tab"
                data-bs-target="#tab-2"
                aria-selected={!showDescriptionTab ? "true" : "false"}
                role="tab"
              >
                <h4 className="mobileFont text-2xl">APPLY NOW</h4>
              </Link>
            </li>
          </ul>

          <div className="tab-content">
            {showDescriptionTab && (
              <div className={`tab-pane fade ${showDescriptionTab ? "show active" : ""}`} id="tab-1" role="tabpanel">
                <div className="row">
                  <div
                    className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <Jobdescription decodedTitle={decodedTitle} />
                  </div>
                </div>
              </div>
            )}

            <div
              className={`tab-pane fade ${!showDescriptionTab ? "show active" : ""}`}
              id="tab-2"
              role="tabpanel"
            >
              <div className="row">
                <div className="col-lg-12 d-flex flex-column justify-content-center">
                  <Jobapply jobTitle={title} changeActiveTab={changeActiveTab} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetails;
