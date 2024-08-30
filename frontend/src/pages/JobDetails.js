import React, { useEffect } from 'react'
import "../layout/jobdetails.css"
import { useParams } from 'react-router-dom'
import Jobapply from '../components/jobroles/Jobapply.js'
import Aos from 'aos'
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom'


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
  })

  return (
    <>
      <main id='main'>
        <section id="get-started" className="get-started section features section" style={{ padding: "40px 0" }}>
          <div className="container">
            <h1 style={{ fontWeight: "500", textAlign: "center" }}>{decodedTitle}</h1>


            <ul className="nav nav-tabs row g-2 d-flex" role="tablist">
              <li className="nav-item col-6" role="presentation">
                <Link className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1" aria-selected="true" role="tab">
                  <h4>JOB DESCRIPTION</h4>
                </Link>
              </li>
              <li className="nav-iem col-6" role="presentation">
                <Link className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2" aria-selected="false" tabIndex="-1" role="tab">
                  <h4>APPLY NOW</h4>
                </Link>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                <div className="row">
                  <div className="col-lg-12 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                    data-aos="fade-up" data-aos-delay="100">
                    <h3 className="m-b-2">About the Job</h3>
                    <p>We are searching for a talented social media Assistant to represent our company by building a social media presence for our brands. The social media Assistant will be required to run advertising campaigns and drive engagement by creating high-quality original content. You should also engage influencers, manage our community by responding to comments, and oversee our customer service across all platforms</p>
                    <br>
                    </br>
                    <h3 class="m-b-2">Responsibilities</h3>
                    <p>
                      ● UI Design for Web and Mobile
                      <br></br>
                      Create and update UI designs using Figma, ensuring they meet the latest standards and deliver exceptional user experiences on both web and mobile platforms.
                      <br></br><br></br>

                      ● Mobile App Design
                      <br></br>
                      Focus on designing intuitive, user-friendly mobile applications that align with best practices and enhance user engagement.
                      <br></br><br></br>

                      ● Responsive Design
                      <br></br>
                      Ensure optimal functionality and aesthetics across all devices and screen sizes.
                      <br></br><br></br>

                      ● SEO Optimization
                      <br></br>
                      Enhance website discoverability and reach through effective SEO practices.
                      <br></br><br></br>

                      ● Website Maintenance
                      <br></br>
                      Conduct regular updates, implement new features, and troubleshoot technical issues.
                      <br></br><br></br>

                      ● Multimedia Integration
                      <br></br>
                      Collaborate with the marketing team to integrate social media feeds and other multimedia elements.
                      <br></br><br></br>

                      ● Innovation
                      <br></br>
                      Stay up-to-date with the latest design trends and technologies to propose innovative ideas for continuous improvement.
                      <br></br><br></br>

                      ● User Research
                      <br></br>
                      Conduct user research, usability testing, and analysis to inform design decisions and validate design solutions.
                      <br></br><br></br>

                      ● Wireframing And Prototyping
                      <br></br>
                      Create wireframes, interactive prototypes, and design mockups, ensuring usability and alignment with user-centered design principles.
                      <br></br><br></br>

                      ● Visual Design
                      <br></br>
                      Design visually appealing interfaces, applying principles of visual hierarchy, typography, and color to create intuitive and engaging user experiences.
                      <br></br><br></br>

                      ● Collaboration
                      <br></br>
                      Collaborate closely with product managers, developers, and other stakeholders to ensure design solutions meet project requirements and technical constraints.
                      <br></br><br></br>

                      ● User Experience Strategy
                      <br></br>
                      Contribute to the user experience strategy, ensuring that design solutions align with business goals and user needs.
                      <br></br><br></br>
                      
                    </p>
                    <br></br>
                    <br></br>
                    <h3 className="m-b-2">Qualifications</h3>
                    <p>
                      ●	Experience: Minimum 1 years of experience in UI design, with a strong focus on Destop &amp; mobile app design.<br></br>
                      ●	Design Tools Expertise: Proficient in Figma, Sketch, Adobe Suite.<br></br>
                      ●	Prototyping: Skilled in ProtoPie, Framer, Principle.<br></br>
                      ●	Web Development: Basic knowledge of HTML/CSS, Javascript etc.<br></br>
                      ●	Responsive Design: Strong understanding of responsive design principles.<br></br>
                      ●	Aesthetic Sense: Keen eye for design, with the ability to align UI aesthetics with brand identity and user expectations.<br></br>
                      ●	Communication: Excellent collaboration skills with a diverse team.<br></br>
                      ●	Self-Motivated: Detail-oriented and efficient time management.<br></br>
                      ●	Creative Passion: Enthusiasm for promoting creativity within the community.<br></br>
                      ●	Desirable Experience: Experience working with top consulting firms is highly desirable, demonstrating your ability to deliver high-quality design solutions in demanding environments. <br></br>

                    </p>
                    <hr style={{ marginTop: "20px" }}></hr>
                    <p style={{ marginBottom: "50px" }}>Please send in your Resume to <strong>Email:<Link to="mailto:response@wono.co">response@wono.co</Link></strong>
                      if unable to apply now</p>
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
  )
}

export default JobDetails