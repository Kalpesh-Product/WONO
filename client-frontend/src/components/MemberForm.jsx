import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import { closeModal } from "../redux/features/modalSlice";
import { Country, State, City } from "country-state-city";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

export default function MemberForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      mobile: "",
      email: "",
      country: "",
      state: "",
      city: "",
      dob: "",
      gender: "", // Added gender field
    },
    role: "",
    department: "",
  });

  const { isLoading, data, error } = useQuery({
    queryKey: ["department"],
    queryFn: async function () {
      const response = await axios.get(
        "http://localhost:5000/departments/all-departments"
      );
      console.log(response);
      return response.data;
    },
  });

  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleInputChange = (section, field) => (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  const handleGenderChange = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        gender: event.target.value,
      },
    }));
  };

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        country: selectedCountry,
        state: "",
        city: "",
      },
    }));

    const countryCode = countries.find(
      (country) => country.name === selectedCountry
    )?.isoCode;
    if (countryCode) {
      setStates(State.getStatesOfCountry(countryCode));
      setCities([]);
    }
  };

  const handleStateChange = (event) => {
    const selectedState = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...prevData.personalInfo,
        state: selectedState,
        city: "",
      },
    }));

    const countryCode = countries.find(
      (country) => country.name === formData.personalInfo.country
    )?.isoCode;
    const stateCode = states.find(
      (state) => state.name === selectedState
    )?.isoCode;
    if (countryCode && stateCode) {
      setCities(City.getCitiesOfState(countryCode, stateCode));
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.personalInfo.name) newErrors.name = "Name is required";
    if (!formData.personalInfo.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(formData.personalInfo.mobile)) {
      newErrors.mobile = "Mobile number must be 10 digits";
    }
    if (!formData.personalInfo.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.personalInfo.email)
    ) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.personalInfo.country)
      newErrors.country = "Country is required";
    if (!formData.personalInfo.state) newErrors.state = "State is required";
    if (!formData.personalInfo.city) newErrors.city = "City is required";
    if (!formData.personalInfo.gender) newErrors.gender = "Gender is required";

    // Add validation for DOB
    if (!formData.personalInfo.dob) newErrors.dob = "Date of birth is required";

    // Add validation for role
    if (!formData.role) newErrors.role = "Role is required";

    // Add validation for department
    if (!formData.department) newErrors.department = "Department is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) {
      dispatch(closeModal());
      toast.success("Successfully created user");
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        padding: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
      }}
      className="bg-white p-6 rounded-lg shadow-md mx-auto"
    >
      {/* Personal Information */}
      <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name, Mobile, Email, DOB fields */}
        <TextField
          label="Name"
          value={formData.personalInfo.name}
          onChange={handleInputChange("personalInfo", "name")}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
        />
        <TextField
          label="Mobile"
          type="tel"
          value={formData.personalInfo.mobile}
          onChange={handleInputChange("personalInfo", "mobile")}
          error={!!errors.mobile}
          helperText={errors.mobile}
          fullWidth
        />
        <TextField
          label="Email"
          value={formData.personalInfo.email}
          onChange={handleInputChange("personalInfo", "email")}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />
        <TextField
          type="text"
          placeholder="Enter your birthday"
          value={formData.personalInfo.dob}
          onFocus={(e) => (e.target.type = "date")}
          onBlur={(e) =>
            (e.target.type = formData.personalInfo.dob ? "date" : "text")
          }
          onChange={handleInputChange("personalInfo", "dob")}
          error={!!errors.dob}
          helperText={errors.dob}
          className="date w-full border border-gray-300 rounded-md px-3 py-4 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />

        {/* Gender Radio Buttons */}
        <div>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            row
            value={formData.personalInfo.gender}
            onChange={handleGenderChange}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
          </RadioGroup>
          {errors.gender && <p className="text-red-600">{errors.gender}</p>}
        </div>

        {/* Country, State, and City dropdowns */}
        <div>
          <select
            id="country"
            value={formData.personalInfo.country}
            onChange={handleCountryChange}
            className="w-full border border-gray-300 rounded-md px-3 py-4 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && <p className="text-red-600">{errors.country}</p>}
        </div>
        <div>
          <select
            id="state"
            value={formData.personalInfo.state}
            onChange={handleStateChange}
            className="w-full border border-gray-300 rounded-md px-3 py-4 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            disabled={!states.length}
          >
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.isoCode} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && <p className="text-red-600">{errors.state}</p>}
        </div>
        <div>
          <select
            id="city"
            value={formData.personalInfo.city}
            onChange={handleInputChange("personalInfo", "city")}
            className="w-full border border-gray-300 rounded-md px-3 py-4 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            disabled={!cities.length}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.name} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
          {errors.city && <p className="text-red-600">{errors.city}</p>}
        </div>
      </div>

      {/* Role & Department fields */}
      <h2 className="mt-8 text-lg font-semibold">Role & Department</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="flex flex-col">
          <select
            id="role"
            value={formData.role}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                role: e.target.value,
              }))
            }
            className="w-full border border-gray-300 rounded-md px-3 py-4 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="staff">Staff</option>
          </select>
          {errors.role && <p className="text-red-600">{errors.role}</p>}
        </div>

        <div className="flex flex-col">
          <select
            id="department"
            value={formData.department}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                department: e.target.value,
              }))
            }
            className="w-full border border-gray-300 rounded-md px-3 py-4 bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select Department</option>
            {isLoading ? (
              <option>Loading...</option>
            ) : error ? (
              <option>Error loading departments</option>
            ) : (
              data &&
              data.map((department, index) => (
                <option key={index} value={department.name}>
                  {department.name}
                </option>
              ))
            )}
          </select>
          {errors.department && (
            <p className="text-red-600">{errors.department}</p>
          )}
        </div>
      </div>
      <div className="col-span-2 flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded mt-4"
          onClick={handleSubmit}
        >
          Submit
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="w-full py-2 px-4 bg-red-600 text-white rounded mt-4"
          onClick={() => dispatch(closeModal())}
        >
          Cancel
        </motion.button>
      </div>
    </Box>
  );
}
