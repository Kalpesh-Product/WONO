import React from 'react'
import { Link } from 'react-router-dom';
import description from "../../structure/Jobdescription.json"

const Jobdescription = ({ decodedTitle }) => {

    const jobs = description[decodedTitle];

    return (
        <div>
            {
                jobs ? (
                    <div>
                        {jobs.content.map((job, index) => (
                            <div key={index}>
                                <br></br>
                                <h1 style={{fontWeight:"bold",fontSize:"30px"}}>{job.subtitle}</h1>
                                <br />
                                <br></br>
                                {typeof job.description === "string" ? (
                                    <>
                                        <p>{job.description}</p>
                                        <br></br>

                                    </>
                                ) : (<ul>
                                    {job.description?.list.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item || ""}</li>

                                    ))}
                                    <br></br>
                                </ul>)}
                            </div>
                        ))}
                    </div>

                ) : (
                    <ul>
                        { }
                    </ul>
                )
            }
            <hr style={{ marginTop: "20px" }}></hr>
            <p style={{ marginBottom: "50px" }}>Please send in your Resume to <strong>Email: <Link to="mailto :response@wono.co"> response@wono.co </Link></strong>
                if unable to apply now</p>
        </div>
    )
}

export default Jobdescription