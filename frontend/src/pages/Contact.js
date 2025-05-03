import React, { useState } from "react";
import axios from "axios";
import "../layout/contact.css";
import "../styles/bodyContact.css";
import { Modal } from 'react-bootstrap';
import Spinners from "../components/Spinner";
import {
  TextField,
  Button,
  Grid,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
} from '@mui/material';
import { useNavigate } from "react-router-dom";

const Contact = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    partnerstype: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true)
      const response = await axios.post('/api/enquiries', formData);
      console.log('Enquiry submitted successfully:', response.data);
      // Show success modal
      setShowModal(true);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        partnerstype: '',
        message:''
      })
      // Reset form or show success message
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      // Handle error (show error message)
    } finally { 
      setLoading(false)
    }
  };


  return (
    <>
      <section id="contact" className="contact contact-about-us">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6">
              <h3
                style={{
                  color: "#000",
                  fontSize: "30px",
                  textAlign: "left",
                  textTransform: "uppercase",
                  margin: "2rem 0 2rem 0",
                  fontWeight: "bold",
                }}>
                About Us
              </h3>
              {/* <p style={{ fontSize: "17px", color: "#000", textAlign: "left" }}> */}
              <p style={{ fontSize: "1rem", color: "#000", textAlign: "left" }}>
                WoNo's B2B Software As A Service (SaaS) Licensing tools are
                being developed post in depth discussions with 100's of
                businesses who are trying to develop and evolve the Nomads &amp;
                Remote Working Ecosystem via their own niche concepts in the
                most aspiring destinations of the world. We are currently in our
                BETA stage and are partnering and listening to everyone who
                wants to partner with us and we are providing them with our SaaS
                Tools FREE of Cost in our Testing Phase.
              </p>
              {/* <p style={{ fontSize: "17px", color: "#000", textAlign: "left" }}> */}
              <p style={{ fontSize: "1rem", color: "#000", textAlign: "left" }}>
                WoNo's eventual B2B2C is the largest Nomad Community which is
                being developed and designed exclusively for individuals and
                companies who intend to work remotely from the various aspiring
                destinations of the world. We are developing the World's 1st
                such Platform &amp; Community which will enable you to discover,
                help in making decisions, provide assistance, provide logistics
                and let you do everything centrally for single, multiple or year
                long working from destinations as a true sorted Global Nomad.
              </p>
            </div>
            <div className="col-lg-6">
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
                <h2 className="text-3xl" style={{ marginBottom: '30px', color: '#000', fontWeight: 'bold' }}>
                  CONNECT WITH US
                </h2>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Mobile Number"
                      name="mobile"
                      type="tel"
                      inputProps={{ pattern: '[1-9]{1}[0-9]{9}' }}
                      value={formData.mobile}
                      onChange={handleChange}
                      variant="standard"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth required variant="standard">
                      <InputLabel id="partnerstype-label">Type of Partnership</InputLabel>
                      <Select
                        labelId="partnerstype-label"
                        name="partnerstype"
                        value={formData.partnerstype}
                        onChange={handleChange}
                        label="Type of Partnership" // Make sure to include the label prop
                        variant="standard" // Ensure variant is set
                      >
                        <MenuItem value="" disabled>
                          Type of Partnership
                        </MenuItem>
                        <MenuItem value="B2B SaaS Technology Licensing">B2B SaaS Technology Licensing</MenuItem>
                        <MenuItem value="Landlord Partnerships">Landlord Partnerships</MenuItem>
                        <MenuItem value="Investment Related">Investment Related</MenuItem>
                        <MenuItem value="Coffee Meeting to know us better">Coffee Meeting to know us better</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="Message" // Floating label
                      name="message"
                      multiline 
                      minRows={4} // Sets the minimum number of rows
                      variant="standard" // Optional: "outlined", "filled", or "standard"
                      fullWidth // Expands the input to take the full width
                      value={formData.message}
                      onChange={handleChange}
                      InputProps={{
                        style: { padding: '10px' }, // Padding for the input area
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} textAlign="center">
                    <button type="submit" className="submit-button">
                      CONNECT
                    </button>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div>
      </section>

      <div className="map-container contact-about-us">
        <div className="map-grid">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8288436496055!2d103.8432645747905!3d1.2760650987118065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191343eb5b27%3A0x1781b571e2363017!2s10%20Anson%20Rd%2C%20Singapore%20079903!5e0!3m2!1sen!2sin!4v1723629468618!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="map"></iframe>
          </div>
          <div className="address">
            <span className="contact-address">
              SINGAPORE OFFICE - WONOCO PRIVATE LIMITED, 10 ANSON ROAD, #33-10,
              INTERNATIONAL PLAZA, SINGAPORE - 079903
            </span>
          </div>
        </div>
        <div className="map-grid">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7765664747362!2d73.83261987495516!3d15.496445985103028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1d2e05cbef3%3A0xa643703ebcc4db43!2sBIZ%20Nest%20-%20Co-Working%20Space%2C%20Workations%20%26%20Meeting%20Zone%20in%20Goa!5e0!3m2!1sen!2sin!4v1723627911486!5m2!1sen!2sin"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"></iframe>
          </div>
          <div className="address">
            <span className="contact-address">
              INDIA OFFICE - WONOCO PRIVATE LIMITED, BIZ NEST CO-WORKING,
              SUNTECK KANAKA CORPORATE PARK, 701 - B, PATTO CENTRE, PANJIM, GOA
              - 403001
            </span>
          </div>
        </div>
      </div>


      {loading && <Spinners animation={'border'} variant={'dark'}/>} 
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your enquiry has been submitted successfully!</Modal.Body>
        <Modal.Footer>
          <button className="submit-button"  onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Contact;
