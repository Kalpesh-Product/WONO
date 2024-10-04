import React, { useState } from 'react'
import '../layout/jobrole.css'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom'



const Jobrole = () => {



  return (
    <>

      <div className='border'>
      </div>
      <div className='JobRole'>
        <div className='testingContainer'>
          <h1></h1>
        </div>
        <Accordion style={{ border: "none" }}>
          <Accordion.Item eventKey='0' style={{ border: "none" }}>
            <Accordion.Header style={{

            }}>I. Product  Management</Accordion.Header>
            <hr></hr>
            <Accordion.Body style={{ border: "none" }}>

              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" >1.UI Designer</h5>

                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>

                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/1/${encodeURIComponent('UI Designer')}`} ><i className='fa fa-cheveron-right jobrole-arrow'>&gt;</i></Link>
                  </p>
                </div>
              </div>
              <hr></hr>
            </Accordion.Body>

            <Accordion.Body>
              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" > 2. Marketing Analytics</h5>
                  <span style={{ fontSize: "1rem" }}>(SEO/Google Analytics) </span>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('Marketing Analytics')}`}><i className='fa fa-cheveron-right jobrole-arrow' >&gt;</i></Link>
                  </p>
                </div>
              </div>
              <hr></hr>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" style={{ border: "none" }}>
            <Accordion.Header>II. Tech Development</Accordion.Header>
            <hr></hr>
            <Accordion.Body>
              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" > 1. Jr. UI/UX Developer</h5>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('Jr.UI/UX Developer')}`}><i className='fa fa-cheveron-right jobrole-arrow'>&gt;</i></Link>
                  </p>
                </div>
              </div>
              <hr></hr>
            </Accordion.Body>

            <Accordion.Body>

              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>

                  <h5 classname="career-job-title" > 2. PHP Developer</h5>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('PHP Developer')}`}><i className='fa fa-cheveron-right jobrole-arrow' >&gt;</i></Link>
                  </p>
                </div>
              </div>
              <hr></hr>
            </Accordion.Body>
            <Accordion.Body>
              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" > 3. Webs Developer Intern</h5>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('Web Developer Intern')}`}><i className='fa fa-cheveron-right jobrole-arrow' >&gt;</i></Link>
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" style={{ border: "none" }}>
            <Accordion.Header>III. Finance</Accordion.Header>
            <hr></hr>
            <Accordion.Body>
              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" > 1. Finance Intern</h5>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('Finance Intern')}`}><i className='fa fa-cheveron-right jobrole-arrow' >&gt;</i></Link>
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" style={{ border: "none" }}>
            <Accordion.Header>IV. Human Resource & EA</Accordion.Header>
            <hr></hr>

            <Accordion.Body>
              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" > 1. HR Generalist</h5>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('HR Generalist')}`}><i className='fa fa-cheveron-right jobrole-arrow' >&gt;</i></Link>
                  </p>
                </div>
              </div>
              <hr></hr>
            </Accordion.Body>

            <Accordion.Body>
              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" > 2. Executive Assistant to CEO</h5>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('Executive Assistant to CEO')}`}><i className='fa fa-cheveron-right jobrole-arrow' >&gt;</i></Link>
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" style={{ border: "none" }}>
            <Accordion.Header>V. Sales & Bussiness Development</Accordion.Header>
            <hr></hr>
            <Accordion.Body>
              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" > 1. Sr.Manager Sales & Bussiness Development </h5>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('Sr.Manager Sales & Bussiness Development')}`}><i className='fa fa-cheveron-right jobrole-arrow' >&gt;</i></Link>
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" style={{ border: "none" }}>
            <Accordion.Header>VI. Marketing</Accordion.Header>
            <hr></hr>
            <Accordion.Body>
              <div className='mob-down' >
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12'>
                  <h5 classname="career-job-title" > 1. Social Media Executive</h5>
                </div>
                <div className='col-12 col-lg-12 col-sm-12 col-xs-12' style={{ textAlign: "right" }}>
                   <p style={{ fontWeight: "600", margin : 0}}>
                    <span className='link-btn'>Full-Time | On-Site| Goa </span>
                    <Link onClick={() => {
                      window.scrollTo({
                        top: 0, behavior: 'instant'
                      })
                    }} to={`/jobdetails/2/${encodeURIComponent('Social Media Executive')}`}><i className='fa fa-cheveron-right jobrole-arrow' >&gt;</i></Link>
                  </p>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  )
}

export default Jobrole