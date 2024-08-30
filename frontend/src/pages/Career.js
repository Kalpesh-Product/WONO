import React from 'react'
import '../styles/bodyCareer.css'
import Accordion from 'react-bootstrap/Accordion'
import { Link } from 'react-router-dom'
import Jobrole from '../components/Jobrole'

const Career = () => {
    return (
        <div className='career-container'>
            <div className="career-section">
                <h3 style={{ marginBottom: "50px" }}>JOIN OUR TEAM</h3>
                <div className='accrodion'>
                    <h2 style={{ fontSize: "30px", fontWeight: "bold", marginBottom:'2rem' }}>OPEN POSITIONS</h2>
                    <Jobrole/>
                </div>
            </div>
        </div>
    )
}

export default Career