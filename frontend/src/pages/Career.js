import React from 'react'
import '../styles/bodyCareer.css'
import Jobrole from '../pages/Jobrole'

const Career = () => {
    return (
        <div className='career-container'>
            <div className="career-section">
                <h3 style={{ marginBottom: "15px" }}>JOIN OUR TEAM</h3>
                <div className='accrodion'>
                    <h2 style={{ fontSize: "30px", fontWeight: "bold", marginBottom:'1rem' }}>OPEN POSITION</h2>
                    <Jobrole/>
                </div>
            </div>
        </div>
    )
}

export default Career