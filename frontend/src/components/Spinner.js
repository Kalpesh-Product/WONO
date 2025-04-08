import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import '../styles/componentStyle.css'

const Spinners = ({animation, variant}) => {
  return (
    <div className="spinner-container">
    <Spinner animation={animation} variant={variant} />
  </div>
  )
}

export default Spinners
