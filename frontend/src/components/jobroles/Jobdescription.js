import React from "react";
import { Link } from "react-router-dom";
import description from "../../structure/Jobdescription.json";

const Jobdescription = ({ decodedTitle }) => {
  const jobs = description[decodedTitle];

  return (
    <div>
      {jobs ? (
        <div>
          {jobs.content.map((job, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h1 className="m-b-2 text-3xl">{job.subtitle}</h1>

              {typeof job.description === "string" ? (
                <>
                  <p>{job.description}</p>
                  <br></br>
                </>
              ) : (
                <ul className="custom-list">
                  {job.description?.list.map((item, itemIndex) => (
                    <>
                      <li key={itemIndex}>{item || ""}</li>
                    </>
                  ))}
                  <br></br>
                </ul>
              )}
            </div>
          ))}
        </div>
      ) : (
        <ul>{}</ul>
      )}
      <hr style={{ marginTop: "20px" }}></hr>
      <p>
        Please send in your Resume to{" "}
        <strong>
          Email :{" "}
          <Link to="mailto:hr@wono.co" style={{ textDecoration: "none" }}>
            {" "}
            hr@wono.co{" "}
          </Link>
        </strong>
        if unable to apply now
      </p>
    </div>
  );
};

export default Jobdescription;
