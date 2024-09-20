import React, { useState } from "react";
import Toasts from "../../components/Toasts";
import Modals from "../Modals";
import { Modal } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    TextField,
    Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Typography,
    Grid,
} from '@mui/material';
import { format, parse } from 'date-fns';

import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const Jobapply = ({ jobTitle }) => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false); //for generic modals
    const [showMessage, setShowMessage] = useState("");
    const handleModal = () => setShowModal(true);

    const [formvalues, setFormValues] = useState({
        jobTitle: `${jobTitle}`,
        name: "",
        email: "",
        date: "",
        number: "",
        location: "",
        experience: "",
        linkedInProfile: "",
        resume: "",
        monthlySalary: "",
        expectedSalary: "",
        daysToJoin: "",
        relocateGoa: false,
        personality: "",
        skills: "",
        specialexperience: "",
        willing: "",
        message: "",
    });

    const [show, setShow] = useState(false); //toast
    const handleShow = () => setShow(true);

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        setFormValues({
            ...formvalues,
            [name]:
                value === "Yes"
                    ? true
                    : value === "No"
                        ? false
                        : type === "number"
                            ? parseFloat(value)
                            : value,
        });
    };

    const handleChange = (name) => (newValue) => {
        
        if (newValue) {
            const formattedDate = format(newValue, 'dd-MM-yyyy');
            setFormValues((prev) => ({
                ...prev,
                [name]: formattedDate
            }));
        } else {
            setFormValues((prev) => ({
                ...prev,
                [name]: ''
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
        if (
            formvalues.name === "" ||
            formvalues.email === "" ||
           
            formvalues.daysToJoin === "" ||
            formvalues.expectedSalary === "" ||
            formvalues.experience === "" ||
            formvalues.linkedInProfile === "" ||
            formvalues.monthlySalary === "" ||
            formvalues.number === "" ||
            formvalues.personality === "" ||
            formvalues.relocateGoa === "" ||
            formvalues.location === "" ||
            formvalues.resume === "" ||
            formvalues.resume === "" ||
            formvalues.skills === "" ||
            formvalues.specialexperience === "" ||
            formvalues.willing === ""
        ) {
            setShowMessage("All Feilds are required");
            setShowModal(true);
            return;
        } else {
            if (!formvalues.email.match(validRegex)) {
                setShowModal(true);
                setShowMessage("Please enter a valid email address");
                return;
            } else {
                axios
                    .post("http://localhost:5000/send-email", formvalues)
                    .then((response) => {
                        alert("Email sent successfully");
                    })
                    .catch((error) => {
                        console.error("There was an error sending email", error);
                    });
            }
        }

        axios
            .post("http://localhost:5000/submit-form", formvalues)
            .then((response) => {
                alert("Form submitted successfully");
            })
            .catch((error) => {
                console.error("Form could not be submitted", error);
            });

        //   try {
        //     const response = await axios.post('http://localhost:5000/submit-form', formvalues);
        //     console.log('Form submitted successfully:', response.data);
        // } catch (error) {
        //     console.error('Error submitting the form:', error);
        // }
    };

    return (
        <div>
            <form name="form-p" onSubmit={handleSubmit}>
                <h6>
                    APPLICATION FORM
                </h6>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <TextField
                            type="text"
                            name="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            required
                            value={formvalues.name}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            type="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            fullWidth
                            required
                            value={formvalues.email}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                label="Date of Birth"
                                value={formvalues.date ? parse(formvalues.date, 'dd-MM-yyyy', new Date()) : null}
                                // onChange={handleChange('date')} 
                                slotProps={{ textField: { fullWidth: true } }}
                                
                                
                            />
                        </LocalizationProvider>
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            type="tel"
                            name="number"
                            label="Mobile Number"
                            variant="outlined"
                            fullWidth
                            required
                            value={formvalues.number}
                            onChange={handleInputChange}
                            inputProps={{ pattern: "[1-9]{1}[0-9]{9}" }}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <FormControl fullWidth required>
                            <InputLabel>State</InputLabel>
                            <Select
                                name="location"
                                value={formvalues.location}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="" disabled>Select State</MenuItem>
                                <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                                <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
                                {/* Add other states here */}
                                <MenuItem value="Other">Other</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            type="number"
                            name="experience"
                            label="Experience (in years)"
                            variant="outlined"
                            fullWidth
                            required
                            value={formvalues.experience}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            type="url"
                            name="linkedInProfile"
                            label="LinkedIn Profile URL"
                            variant="outlined"
                            fullWidth
                            required
                            value={formvalues.linkedInProfile}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            type="file"
                            name="resume"
                            inputProps={{ title: "Upload a Resume / CV" }}
                            variant="outlined"
                            fullWidth
                            required
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            type="number"
                            name="monthlySalary"
                            label="Current Monthly Salary"
                            variant="outlined"
                            fullWidth
                            required
                            value={formvalues.monthlySalary}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <TextField
                            type="number"
                            name="expectedSalary"
                            label="Expected Monthly Salary"
                            variant="outlined"
                            fullWidth
                            required
                            value={formvalues.expectedSalary}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={6}>
                        <FormControl fullWidth required>
                            <InputLabel>How Soon You Can Join?</InputLabel>
                            <Select
                                name="daysToJoin"
                                value={formvalues.daysToJoin}
                                onChange={handleInputChange}
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

                    <Grid item md={6}>
                        <FormControl fullWidth required>
                            <InputLabel>Will You Relocate to Goa?</InputLabel>
                            <Select
                                name="relocateGoa"
                                value={formvalues.relocateGoa ? "Yes" : "No"}
                                onChange={handleInputChange}
                            >
                                <MenuItem value="Yes">Yes</MenuItem>
                                <MenuItem value="No">No</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item md={12}>
                        <TextField
                            name="personality"
                            minRows={4}
                            placeholder="Who are you as a person?"
                            required
                            style={{ width: '100%' }}
                            value={formvalues.personality}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={12}>
                        <TextField
                            name="skills"
                            minRows={4}
                            placeholder="What skill sets do you have for the job that you have applied?"
                            required
                            style={{ width: '100%' }}
                            value={formvalues.skills}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={12}>
                        <TextField
                            name="specialexperience"
                            minRows={4}
                            placeholder="Why should we consider you for joining our company?"
                            required
                            style={{ width: '100%' }}
                            value={formvalues.specialexperience}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={12}>
                        <TextField
                            name="willing"
                            minRows={4}
                            placeholder="Are you willing to bootstrap to join a growing startup?"
                            required
                            style={{ width: '100%' }}
                            value={formvalues.willing}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={12}>
                        <TextField
                            name="message"
                            minRows={4}
                            placeholder="Personal Message"
                            required
                            style={{ width: '100%' }}
                            value={formvalues.message}
                            onChange={handleInputChange}
                        />
                    </Grid>

                    <Grid item md={12} textAlign="center">
                        <Button variant="contained" color="primary" type="submit">
                            SUBMIT
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div>
                <Modal show={showModal} onHide={handleCloseModal}>
                    {/* <Modal.Header closeButton>
          <Modal.Title>Form Submission Error</Modal.Title>
        </Modal.Header> */}
                    <h1
                        style={{
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            color: "red",
                        }}>
                        Error
                    </h1>
                    <Modal.Body>{showMessage}</Modal.Body>
                    <button
                        className="btn btn-secondary"
                        onClick={handleCloseModal}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100px",
                            marginLeft: "40%",
                            marginBottom: "10px",
                        }}>
                        Close
                    </button>
                </Modal>
            </div>
        </div>
    );
};

export default Jobapply;