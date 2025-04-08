import React from 'react'
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from 'react-bootstrap/Form';

const FloatingLabels = () => {
  return (
    <FloatingLabel controlId="floatingSelect" label="Select a job role">
    <Form.Select aria-label="Select one job role">
      <option>Open this select menu</option>
      <option value="1">React Developer</option>
      <option value="2">Php Developer</option>
      <option value="3">Java Developer</option>
    </Form.Select>
  </FloatingLabel>
  )
}

export default FloatingLabels