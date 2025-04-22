import React, { useState } from "react";
import "../layout/jobrole.css";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Jobrole = () => {
  const jobRoles = [
    {
      title: "I. Product Management",
      jobs: [
        {
          id: 1,
          title: "UI Designer",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
        {
          id: 2,
          title: "Marketing Analytics",
          subtitle: "(SEO/Google Analytics)",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
      ],
    },
    {
      title: "II. Tech Development",
      jobs: [
        {
          id: 3,
          title: "Jr.UI/UX Developer",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
        {
          id: 4,
          title: "PHP Developer",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
        {
          id: 5,
          title: "Web Developer Intern",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
      ],
    },
    {
      title: "III. Finance",
      jobs: [
        {
          id: 6,
          title: "Finance Intern",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
      ],
    },
    {
      title: "IV. Human Resource & EA",
      jobs: [
        {
          id: 7,
          title: "HR Generalist",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
        {
          id: 8,
          title: "Executive Assistant to CEO",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
      ],
    },
    {
      title: "V. Sales & Business Development",
      jobs: [
        {
          id: 9,
          title: "Sr.Manager Sales & Bussiness Development",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
      ],
    },
    {
      title: "VI. Marketing",
      jobs: [
        {
          id: 10,
          title: "Social Media Executive",
          type: "Full-Time",
          mode: "On-Site",
          location: "Goa",
        },
      ],
    },
    {
      title: "VII. Internships Across Departments",
      jobs: [
        {
          id: 11,
          title: "Internships Across Departments",
          subtitle: "*Mention your applying department in message box",
          type: "Internships",
          mode: "On-Site",
          location: "Goa",
        },
      ],
    },
  ];

  return (
    <>
      <div className="border"></div>
      <div className="JobRole">
        {jobRoles.map((section, idx) => (
          <Accordion key={idx} elevation={0} >
            <AccordionSummary sx={{ py: 4 }} expandIcon={<FaChevronDown />}>
              <p className="text-3xl font-bold">{section.title}</p>
            </AccordionSummary>

            <AccordionDetails className="py-2">
              <div className="flex flex-col gap-4">
                {section.jobs.map((job, jobIdx) => (
                  <>
                    <div key={job.id} className="mb-4">
                      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <div>
                          <p className="career-job-title font-semibold text-lg">
                            {jobIdx + 1}. {job.title}
                          </p>
                          {job.subtitle && (
                            <span className="text-sm">{job.subtitle}</span>
                          )}
                        </div>
                        <div className="text-right">
                          <p className="career-jobtitle">
                            <span className="text-sm link-btn">
                              {job.type} | {job.mode} | {job.location}
                            </span>
                            <div className="flex justify-end mt-1">
                              <Link
                                to={`/jobdetails/${job.id}/${encodeURIComponent(job.title)}`}
                                onClick={() =>
                                  window.scrollTo({ top: 0, behavior: "instant" })
                                }
                              >
                                <i className="fa fa-chevron-right jobrole-arrow" />
                              </Link>
                            </div>
                          </p>
                        </div>
                      </div>
                      {section.jobs.length > 1 && jobIdx < section.jobs.length - 1 && <hr className="mt-4" />}
                    </div>


                  </>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default Jobrole;
