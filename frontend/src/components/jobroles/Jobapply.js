import React, { useState } from 'react'
import Toasts from "../../components/Toasts"
import Modals from '../Modals';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'


const Jobapply = ({jobTitle}) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false) //for generic modals
  const [showMessage,setShowMessage] = useState("");
  const handleModal = () => setShowModal(true)

    const [formvalues,setFormValues] = useState({
        jobTitle:`${jobTitle}`,
        name:'',
        email:'',
        date:'',
        number:'',
        location:'',
        experience:'',
        linkedInProfile:'',
        resume:'',
        monthlySalary:'',
        expectedSalary:'',
        daysToJoin:'',
        relocateGoa:false,
        personality:'',
        skills:'',
        specialexperience:'',
        willing:'',
        message:''

  });

  const [show, setShow] = useState(false); //toast
  const handleShow = () => setShow(true);



    const handleInputChange=(event)=>{
        const {name,value,type} = event.target;
        setFormValues({
            ...formvalues,
            [name]:value === 'Yes' ? true : 
            value === 'No' ? false:
            type === 'number' ? parseFloat(value) : 
               value,
        });
    };

    const valideEmail=(email)=>{
      const emailRegrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegrex.test(email);

    }
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        

        console.log("Printing form data");
        console.log('Form Data',formvalues);
        
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(formvalues.name ===""|| formvalues.email === ""|| formvalues.date === "" || formvalues.daysToJoin === ""
        || formvalues.expectedSalary === ""|| formvalues.experience === "" || formvalues.linkedInProfile ==="" || 
         formvalues.monthlySalary === "" || formvalues.number === "" || formvalues.personality === "" || 
         formvalues.relocateGoa === "" || formvalues.location === "" || formvalues.resume === "" || formvalues.resume === ""
         || formvalues.skills === "" || formvalues.specialexperience === "" || formvalues.willing === ""
      )
      {
        setShowMessage("All Feilds are required");
           setShowModal(true);
           return;

      }
      else{
        if(!formvalues.email.match(validRegex))
        {
          setShowModal(true);
            setShowMessage("Please enter a valid email address");
            return;
        }
        else{
          axios.post('http://localhost:5000/send-email',formvalues)
          .then(response => {
           alert('Email sent successfully');
          })
          .catch(error=>
          {
           console.error('There was an error sending email',error);
          }
          );
       };
      }

       axios.post('http://localhost:5000/submit-form',formvalues)
      .then(response => {
        alert('Form submitted successfully');
      }).catch(error =>
      {
        console.error('Form could not be submitted',error)
      }
      );

    //   try {
    //     const response = await axios.post('http://localhost:5000/submit-form', formvalues);
    //     console.log('Form submitted successfully:', response.data);
    // } catch (error) {
    //     console.error('Error submitting the form:', error);
    // }
  }

  return (
    <div>
      <form name="form-p" className="apply-form" encType="multipart/form-data" onSubmit={handleSubmit}>
        <h6 style={{ fontSize: "25px", margin: "0 0 20px 0", textAlign: "center", fontWeight: "700" }}>APPLICATION FORM
        </h6>
        <div className="row gy-3">

          <div className="col-md-6">
            <input type="text" name="name" class="form-control" placeholder="Name" required="" value={formvalues.name} onChange={handleInputChange}></input>
          </div>

    <div className="col-md-6">
      <input type="text" className="form-control" name="email" placeholder="Email" required="" value={formvalues.email} onChange={handleInputChange}></input>
    </div>

          <div className="col-md-6">
            <div className="date-picker" tabindex="0">
              <input className='form-control' type="date" name="date" id="datePicker" required="" max="2024-08-15" value={formvalues.date} onChange={handleInputChange}></input>
              <div className="placeholder"></div>
            </div>
          </div>

          <div className="col-md-6">
            <input type="text" class="form-control" name="number" pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile Number" required="" value={formvalues.number} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">

            <select class="form-select select-f" aria-label="Default select example" name="location" value={formvalues.location} onChange={handleInputChange}>
              <option value="" disabled="" selected="">State</option>
              <option value="Andhra Pradesh	">Andhra Pradesh </option>
              <option value="Arunachal Pradesh	">Arunachal Pradesh </option>
              <option value="Assam	">Assam </option>
              <option value="Bihar	">Bihar </option>
              <option value="Chhattisgarh	">Chhattisgarh </option>
              <option value="Goa	">Goa </option>
              <option value="Gujarat	">Gujarat </option>
              <option value="Haryana	">Haryana </option>
              <option value="Himachal 	">Himachal </option>
              <option value="Jharkhand	">Jharkhand </option>
              <option value="Karnataka	">Karnataka </option>
              <option value="Kerala	">Kerala </option>
              <option value="Madhya Pradesh	">Madhya Pradesh </option>
              <option value="Maharashtra	">Maharashtra </option>
              <option value="Manipur	">Manipur </option>
              <option value="Meghalaya	">Meghalaya </option>
              <option value="Mizoram	">Mizoram </option>
              <option value="Nagaland	">Nagaland </option>
              <option value="Odisha	">Odisha </option>
              <option value="Punjab	">Punjab </option>
              <option value="Rajasthan	">Rajasthan </option>
              <option value="Sikkim	">Sikkim </option>
              <option value="Tamil Nadu	">Tamil Nadu </option>
              <option value="Telangana	">Telangana </option>
              <option value="Tripura	">Tripura </option>
              <option value="Uttar Pradesh	">Uttar Pradesh </option>
              <option value="Uttarakhand	">Uttarakhand </option>
              <option value="West Bengal	">West Bengal </option>
              <option value="Other	">Other </option>
            </select>
          </div>

          <div className="col-md-6">
            <input type="number" min="0" name="experience" className="form-control" placeholder="Experience (in years)" required="" value={formvalues.experience} onChange={handleInputChange}></input>
          </div>

    <div className="col-md-6">
      <input type="text" name="linkedInProfile" className="form-control" placeholder="Linkedin Profile URl" required="" value={formvalues.linkedInProfile} onChange={handleInputChange}></input>
    </div>

    <div className="col-md-6">
      <input type="file" className="form-control" name="resume" placeholder="Upload a Resume  / CV"  title=" " required="" value={formvalues.resume} onChange={handleInputChange}></input>
    </div>

          <div className="col-md-6">
            <input type="number" min="0" name="monthlySalary" className="form-control" placeholder="Current Monthly Salary" required="" value={formvalues.monthlySalary} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">
            <input type="number" min="0" name="expectedSalary" className="form-control" placeholder="Expected Monthly Salary" required="" value={formvalues.expectedSalary} onChange={handleInputChange}></input>
          </div>

          <div className="col-md-6">

            <select className="form-select select-f" aria-label="Default select example" name="daysToJoin" value={formvalues.daysToJoin} onChange={handleInputChange}>
              <option value="" disabled="" selected="" >How Soon You Can Join ?</option>
              <option value="15 Days">15 Days</option>
              <option value="30 Days">30 Days</option>
              <option value="45 Days">45 Days</option>
              <option value="60 Days">60 Days</option>
              <option value="60 Days and above">60 Days and above</option>
            </select>
          </div>

    <div className="col-md-6">
     
      <select className="form-select select-f" aria-label="Default select example" name="relocateGoa" value={formvalues.relocateGoa ? 'Yes' : 'No' } onChange={handleInputChange}  >
        <option value="" disabled="" selected="">Will You Relocate to Goa ?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>

          <div className="col-md-12">
            <textarea className="form-control" name="personality" rows="4" placeholder="Who are you as a person? 
Write something that defines your personality " required="" value={formvalues.personality} onChange={handleInputChange}></textarea>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="skills" rows="4" placeholder="What skill sets do you have for the job that you have applied? 
Write about the skill sets that you have based on your experience " required="" value={formvalues.skills} onChange={handleInputChange}></textarea>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="specialexperience" rows="4" placeholder="Why should we consider you for joining our company? 
What’s special about you or your experience that differentiates you from others" required="" value={formvalues.specialexperience} onChange={handleInputChange}></textarea>
          </div>

          <div className="col-md-12">
            <textarea className="form-control" name="willing" rows="4" placeholder="Are you willing to bootstrap to join a growing startup? 
Which means are you ok to join at same salary or at a minimum realistic pay increment " required="" value={formvalues.willing} onChange={handleInputChange}></textarea>
          </div>


          <div className="col-md-12">

            <textarea className="form-control" name="message" rows="4" placeholder="Personal Message 
Anything additional that you want us to know besides all above shared information" required="" value={formvalues.message} onChange={handleInputChange}></textarea>
          </div>

    <div className="col-md-12 text-center">
      
      
      <div className='RealToast'>
      {/* <Toasts toastMessage={'Form submitted'} position={'top-end'} show={show} onClose={() => { setShow(false) }} /> */}
      <button name="submit" type="submit" className='submit-button'>SUBMIT</button>
      </div>
    </div>

  </div>
      </form>
        <div style={{height:'300px'}}>
          <Modal show={showModal} onHide={handleCloseModal} >
        {/* <Modal.Header closeButton>
          <Modal.Title>Form Submission Error</Modal.Title>
        </Modal.Header> */}
        <h1 style={{display:'flex',alignContent:'center',justifyContent:'center',color:'red'}}>Error</h1>
        <Modal.Body>{showMessage}</Modal.Body>
          <button className="btn btn-secondary" onClick={handleCloseModal} style={{display:'flex',alignItems:'center',justifyContent:'center',
            width:'100px', marginLeft:'40%', marginBottom:'10px'
          }}>
            Close
          </button>
      </Modal>
    </div>
    </div>
  )
}

export default Jobapply