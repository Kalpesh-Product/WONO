import React, { useState, useEffect } from "react";

import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { State } from 'country-state-city';
import axios from "axios";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Box,
} from '@mui/material';
import erroricon from "../../assets/delete-button.png"
import successIcon from "../../assets/greenTickIcon.png"
import { format, parse, isValid } from 'date-fns';
import Spinners from "../Spinner";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Jobapply = ({ jobTitle, changeActiveTab }) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false); //for generic modals
  const [modalType, setModalType] = useState("error"); // 'error' or 'success'
  const [showMessage, setShowMessage] = useState("");
  const [states, setStates] = useState([]);
  const handleModal = () => setShowModal(true);
  const [loading, setLoading] = useState(false)


  const [formvalues, setFormValues] = useState({
    jobTitle: `${jobTitle}`,
    name: "",
    email: "",
    date: "",
    number: "",
    location: "",
    experience: "",
    linkedInProfile: "",
    resume: null,
    monthlySalary: "",
    expectedSalary: "",
    daysToJoin: "",
    relocateGoa: "",
    personality: "",
    skills: "",
    specialexperience: "",
    willing: "",
    message: "",
  });

  const [show, setShow] = useState(false); //toast
  const handleShow = () => setShow(true);

  // const handleGlobalChange = (event) => {
  //   const { name, value, type } = event.target;
  //   setFormValues({
  //     ...formvalues,
  //     [name]:
  //       value === "Yes"
  //         ? true
  //         : value === "No"
  //           ? false
  //           : type === "number"
  //             ? parseFloat(value)
  //             : value,
  //   });
  // };

  useEffect(() => {
    // Assuming 'IN' is the country code for India, you can replace this with any country code.
    const countryStates = State.getStatesOfCountry('IN');
    setStates(countryStates);
  }, []);



  const handleGlobalChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      // Handle file input
      setFormValues((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      // Handle text input
      setFormValues((prevData) => ({ ...prevData, [name]: value }));
    }
  };


  const handleChange = (name) => (newValue) => {
    if (newValue && isValid(newValue)) {
      const formattedDate = format(newValue, "dd-MM-yyyy");
      setFormValues((prev) => ({
        ...prev,
        [name]: formattedDate,
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const valideEmail = (email) => {
    const emailRegrex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegrex.test(email);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Printing form data");
    console.log("Form Data", formvalues);

    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (formvalues.name === "") {
      setShowMessage("Name is required");
      setShowModal(true);
      return;
    }
    if (formvalues.email === "") {
      setShowMessage("Email is required");
      setShowModal(true);
      return;
    }
    if (formvalues.date === "") {
      setShowMessage("Date  of Birth is required");
      setShowModal(true);
      return;
    }
    if (formvalues.number === "")
    {
      setShowMessage("Mobile number is required");
      setShowModal(true);
      return;
    }
   
    if (formvalues.location === ""){
      setShowMessage("State is required");
      setShowModal(true);
      return;
    }
    if (formvalues.experience === "") {
      setShowMessage("Experience is required");
      setShowModal(true);
      return;
    }
    if(formvalues.linkedInProfile === ""){
      setShowMessage("Linkedin Profile is required");
      setShowModal(true);
      return;
    }

    
    if (formvalues.monthlySalary === "") {
      setShowMessage("Monthly salary is required");
      setShowModal(true);
      return;
    }
    if (formvalues.expectedSalary === "") {
      setShowMessage(" Expected Monthly salary is required");
      setShowModal(true);
      return;
    }
    if (formvalues.daysToJoin === ""){
      setShowMessage("Number of days to join is required");
      setShowModal(true);
      return;
    }
    
    
    if (formvalues.relocateGoa === "") {
      setShowMessage("Relocation preference is required");
      setShowModal(true);
      return;
    }
    if (formvalues.personality === "") {
      setShowMessage("Personality description is required");
      setShowModal(true);
      return;
    }
   
   
    if (formvalues.skills === "") {
      setShowMessage("Skills are required");
      setShowModal(true);
      return;
    }
    if (formvalues.specialexperience === "") {
      setShowMessage("Special experience is required");
      setShowModal(true);
      return;
    }
    if (formvalues.willing === "") {
      setShowMessage("Willingness to relocate is required");
      setShowModal(true);
      return;
    }
    if (formvalues.message === "") {
      setShowMessage("Willingness to relocate is required");
      setShowModal(true);
      return;
    }
    if (!formvalues.resume || typeof formvalues.resume === "string") {  // Check if file input is missing or not properly formatted
      setShowMessage("Resume file is required");
      setShowModal(true);
      return;
    }
    else {
      if (!formvalues.email.match(validRegex)) {
        setShowModal(true);
        setShowMessage("Please enter a valid email address");
        return;
      } else {
        const data = new FormData();
        data.append('jobTitle', formvalues.jobTitle);
        data.append('name', formvalues.name);
        data.append('email', formvalues.email);
        data.append('date', formvalues.date);
        data.append('daysToJoin', formvalues.daysToJoin);
        data.append('expectedSalary', formvalues.expectedSalary);
        data.append('experience', formvalues.experience);
        data.append('monthlySalary', formvalues.monthlySalary);
        data.append('number', formvalues.number);
        data.append('personality', formvalues.personality);
        data.append('relocateGoa', formvalues.relocateGoa);
        data.append('location', formvalues.location);
        data.append('resume', formvalues.resume);
        data.append('skills', formvalues.skills);
        data.append('specialexperience', formvalues.specialexperience);
        data.append('willing', formvalues.willing);
        data.append('message', formvalues.message);

        try {
          setLoading(true)
          await axios.post('/jobapply', data, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          
          // Reset the form fields
          setFormValues({
            jobTitle: `${jobTitle}`,
            name: "",
            email: "",
            date: "",
            number: "",
            location: "",
            experience: "",
            linkedInProfile: "",
            resume: null,
            monthlySalary: "",
            expectedSalary: "",
            daysToJoin: "",
            relocateGoa: "",
            personality: "",
            skills: "",
            specialexperience: "",
            willing: "",
            message: "",
          });
         

        } catch (error) {
          console.error('Error submitting form:', error.response ? error.response.data.message : error.message);
        } finally{
          setLoading(false)
          setShowModal(true);
          setModalType("success")
          setShowMessage("Application submitted successfully");
        }
        

      }
      
    }
  };
  const handleHideModal=(e)=>{
    e.preventDefault();
    setShowModal(false);
    navigate('/career')
    window.scrollTo({top:0, behavior:'instant'})
    changeActiveTab('Career')
  }

  return (
    <div>
      <Box component="form" name="form-p" onSubmit={handleSubmit}>
        <h2>
          APPLICATION FORM
        </h2>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <TextField
              type="text"
              name="name"
              label="Name"
              variant="outlined"
              fullWidth

              value={formvalues.name}
              onChange={handleGlobalChange}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              type="email"
              name="email"
              label="Email"
              variant="outlined"
              fullWidth

              value={formvalues.email}
              onChange={handleGlobalChange}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Date of Birth"
                value={
                  formvalues.date
                    ? parse(formvalues.date, "dd-MM-yyyy", new Date())
                    : null
                }
                onChange={(newValue) => {

                  if (newValue && isValid(new Date(newValue))) {
                    handleChange("date")(newValue);
                  }
                }}
                slotProps={{ textField: { fullWidth: true } }}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              type="tel"
              name="number"
              label="Mobile Number"
              variant="outlined"
              fullWidth

              value={formvalues.number}
              onChange={handleGlobalChange}
              inputProps={{ pattern: "[1-9]{1}[0-9]{9}" }}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select
                name="location"
                value={formvalues.location}
                onChange={handleGlobalChange}
              >
                {states.map((state) => (
                  <MenuItem key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>


          <Grid item md={6} xs={12}>
            <TextField
              type="number"
              name="experience"
              label="Experience (in years)"
              variant="outlined"
              fullWidth

              value={formvalues.experience}
              onChange={handleGlobalChange}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              type="text"
              name="linkedInProfile"
              label="LinkedIn Profile URL"
              variant="outlined"
              fullWidth
              value={formvalues.linkedInProfile}
              onChange={handleGlobalChange}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <input
              type="file"
              name="resume"
              style={{display:"none"}}
              id="resume-upload"
              

              onChange={handleGlobalChange}
            />
             <label htmlFor="resume-upload">
    <Button
      variant="outlined"
      component="span"
      fullWidth
      style={{ textAlign: 'left',color:"black" }} // Align text to the left
    >
      {formvalues.resume ? formvalues.resume.name : 'Upload a Resume / CV'}
    </Button>
  </label>
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              type="number"
              name="monthlySalary"
              label="Current Monthly Salary"
              variant="outlined"
              fullWidth
              multiline
              minirows={4}
              value={formvalues.monthlySalary}
              onChange={handleGlobalChange}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <TextField
              type="number"
              name="expectedSalary"
              label="Expected Monthly Salary"
              variant="outlined"
              fullWidth

              value={formvalues.expectedSalary}
              onChange={handleGlobalChange}
            />
          </Grid>

          <Grid item md={6} xs={12}>
            <FormControl fullWidth >
              <InputLabel
                slotProps={{ textField: { fullWidth: true } }}>How Soon You Can Join?</InputLabel>
              <Select
                name="daysToJoin"
                value={formvalues.daysToJoin}
                onChange={handleGlobalChange}
                fullWidth
              >
                <MenuItem value="" disabled>Select</MenuItem>
                <MenuItem value="15 Days">15 Days</MenuItem>
                <MenuItem value="30 Days">30 Days</MenuItem>
                <MenuItem value="45 Days">45 Days</MenuItem>
                <MenuItem value="60 Days">60 Days</MenuItem>
                <MenuItem value="60 Days and above">60 Days and above</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Relocate to Goa"
              variant="outlined"
              name="relocateGoa"
              value={formvalues.relocateGoa}
              onChange={handleGlobalChange}
              select

              fullWidth
            >
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </TextField>
          </Grid>



          <Grid item md={12} xs={12}>
            <TextField
              multiline
              name="personality"
              minRows={4}
              variant="outlined"
              label="Personality"
              fullWidth

              InputProps={{ style: { width: '100%' } }}
              value={formvalues.personality}
              onChange={handleGlobalChange}
            />
            {/* <textarea name="personality" rows="3" cols="10" style={{ width: '100%',padding:"10px" ,borderColor:"#9E9E9E"}}
            placeholder="Who are you as a person?"
            value={formvalues.personality}
            onChange={handleInputChange}
            >  */}

            {/* </textarea> */}

            {/* </Grid> */}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              multiline
              name="skills"
              minRows={4}
              label="What skill set you have for the job you have applied?"
              style={{ width: '100%' }}
              value={formvalues.skills}
              onChange={handleGlobalChange}
            />
            {/* <textarea name="skills" rows="3" cols="10" style={{ width: '100%',padding:"10px",borderColor:"#BDBDBD" }}
            placeholder="What skill sets do you have for the job that you have applied?"
            value={formvalues.skills}
            onChange={handleGlobalChange}
            
            ></textarea> */}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              multiline
              name="specialexperience"
              minRows={4}
              label="Why should we consider you for joining our company?"

              style={{ width: '100%' }}
              value={formvalues.specialexperience}
              onChange={handleGlobalChange}
            />
            {/* <textarea name="specialexperience" rows="3" cols="10" style={{ width: '100%',padding:"10px",borderColor:"#BDBDBD" }}
            placeholder="Why should we consider you for joining our company?"
            value={formvalues.specialexperience}
            onChange={handleGlobalChange}
            ></textarea> */}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              multiline
              name="willing"
              minRows={4}
              label="Are you willing to bootstrap to join a growing startup?"

              style={{ width: '100%' }}
              value={formvalues.willing}
              onChange={handleGlobalChange}
            />
            {/* <textarea name="willing" rows="3" cols="10" style={{ width: '100%',padding:"10px" ,borderColor:"#BDBDBD"}}
            placeholder="Are you willing to bootstrap to join a growing startup?"
            value={formvalues.willing}
            onChange={handleGlobalChange}
            ></textarea> */}
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              multiline
              name="message"
              minRows={4}
              label="Personal Message"

              style={{ width: '100%' }}
              value={formvalues.message}
              onChange={handleGlobalChange}
            />
            {/* <textarea name="message" rows="3" cols="10" style={{ width: '100%',padding:"10px",borderColor:"#BDBDBD" }}
            placeholder="Personal Message"
            value={formvalues.message}
            onChange={handleGlobalChange}
            
            ></textarea> */}
          </Grid>
          <Grid item md={12} xs={12} textAlign="center">
            <Button variant="contained" color="primary" type="submit" style={{ backgroundColor: "black", }} className="apply-form-btn">
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </Box>

      {loading && <Spinners animation={'border'} variant={'dark'}/>} 
      <div className="modal-container">
        <Modal show={showModal} onHide={handleCloseModal} 
  aria-labelledby="contained-modal-title-vcenter"
  centered>
          <Modal.Header closeButton>
            <Modal.Title>
              {modalType === "error" ? "Form Submission Error" : "Form Submitted Successfully"}
            </Modal.Title>
          </Modal.Header>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10%", marginBottom: "20px" }}>
            <img
              src={modalType === "error" ? erroricon : successIcon} // Error icon for error, check mark for success
              alt={modalType === "error" ? "erroricon" : "successicon"}
              style={{ width: "40px", height: "40px" }}
            />
          </div>

          <h1
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              color: modalType === "error" ? "red" : "green",
            }}>
            {modalType === "error" ? "ERROR" : "SUCCESS"}
          </h1>

          <Modal.Body><b>{showMessage}</b></Modal.Body>

          {modalType === "error" ?  <>
             <button
            className="btn btn-secondary"
            onClick={handleCloseModal}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              marginLeft: "40%",
              marginBottom: "20%",
              backgroundColor: "black",
            }}>
            Close
          </button>
            </> : (
            <>
             <button
            className="btn btn-secondary"
            onClick={handleHideModal}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100px",
              marginLeft: "40%",
              marginBottom: "20%",
              backgroundColor: "black",
            }}>
            Close
          </button>
            </>
          )}

        </Modal>
      </div>
    </div>
  );
};

export default Jobapply;
