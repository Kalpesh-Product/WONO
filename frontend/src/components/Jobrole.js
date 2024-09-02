import React from 'react'
import '../layout/jobrole.css'
import  Accordion  from 'react-bootstrap/Accordion'
import { Link} from 'react-router-dom'



const Jobrole = () => {
  

 
  return (
    <>

    <div className='border'>
    </div>
    <div className='JobRole'>
        <div className='testingContainer'>
            <h1></h1>
        </div>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>I. Product Management</Accordion.Header>
        <Accordion.Body>
          
          <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}>1.UI Designer</h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              
              <Link to={`/jobdetails/1/${encodeURIComponent('UI Designer')}`} ><i className='fa fa-cheveron-right'>Apply</i></Link>
            </p>
          </div>
          </div>
          
        </Accordion.Body>
        <Accordion.Body>
        <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 2. Marketing Analytics</h5>
            <span style={{fontSize:"1rem"}}>(SEO/Google Analytics) </span>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/2/${encodeURIComponent('Marketing Analytics')}`}><i className='fa fa-cheveron-right'  >Apply</i></Link>
            </p>
          </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>II. Tech Development</Accordion.Header>
        <Accordion.Body>
          <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 1. Jr. UI/UX Developer</h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/3/${encodeURIComponent('Jr. UI/UX Developer')}`}><i className='fa fa-cheveron-right' >Apply</i></Link>
            </p>
          </div>
          </div>  
        </Accordion.Body>
        <Accordion.Body>
          <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 2. PHP Developer</h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/4/${encodeURIComponent('PHP Developer')}`}><i className='fa fa-cheveron-right' >Apply</i></Link>
            </p>
          </div>
          </div>  
        </Accordion.Body>
        <Accordion.Body>
          <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 3. Web Developer Intern</h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/5/${encodeURIComponent('web Developer Intern')}`}><i className='fa fa-cheveron-right' >Apply</i></Link>
            </p>
          </div>
          </div>  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>III. Finance</Accordion.Header>
        <Accordion.Body>
        <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 1. Finance Intern</h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/6/${encodeURIComponent('Finance Intern')}`}><i className='fa fa-cheveron-right' >Apply</i></Link>
            </p>
          </div>
          </div>  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>IV. Human Resource & EA</Accordion.Header>
        
        <Accordion.Body>
        <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 1. HR Generalist</h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/7/${encodeURIComponent('HR Generalist')}`}><i className='fa fa-cheveron-right' >Apply</i></Link>
            </p>
          </div>
          </div>  
        </Accordion.Body>
        <Accordion.Body>
        <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 2. Executive Assistant to CEO</h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/8/${encodeURIComponent('Executive Assistant to CEO')}`}><i className='fa fa-cheveron-right' >Apply</i></Link>
            </p>
          </div>
          </div>  
        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>V. Sales & Bussiness Development</Accordion.Header>
        
        <Accordion.Body>
        <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 1. Sr.Manager Sales & Bussiness Development </h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/9/${encodeURIComponent('Sr.Manager Sales & Bussiness Development')}`}><i className='fa fa-cheveron-right' >Apply</i></Link>
            </p>
          </div>
          </div>  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>VI. Marketing</Accordion.Header>
        <Accordion.Body>
        <div className='mob-down' style={{display:"flex"}}>
          <div className='col-lg-6'>
            <h5 style={{fontSize:"1.5rem",margin:"10 0",color:"#000"}}> 1. Social Media Executive</h5>
          </div>
          <div className='col-lg-6' style={{textAlign:"right"}}>
            <p style={{fontWeight:"600",margin:"10px 0"}}>
              <span className='link-btn'>Full-Time | On-Site| Goa </span>
              <Link to={`/jobdetails/10/${encodeURIComponent('Social Media Executive')}`}><i className='fa fa-cheveron-right' >Apply</i></Link>
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