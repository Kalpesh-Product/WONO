import React from 'react'
import "../styles/capital.css"

const Capital = () => {
  return (
    <>
    <div className='headingContainer'>
        <h1 className='capital-heading'>We held the daring build legandary Companies.</h1>
        <button className='connect-with-us-btn'>CONNECT WITH US</button>
    </div>
    <div className='capital-cards-section'>
       <div className='cards-with-text'>
        <h3>Investor Management</h3>
        <div className='capital-img'>
            <img src='https://cdn.sanity.io/images/q8bht0jl/production/9d6463d6289e7fc2c3b2a276459c70c8e84a6134-864x1151.jpg?auto=format&fit=max&q=100&w=432' alt='capital-img-1'>
            </img>
        </div>
        <div className='plus-icon'>+</div>
        <p><b>Investor relations reimagined.</b><span>Leverage software to drive meaningful,actionable engagement.</span></p>
       </div>

       <div className='cards-with-text'>
        <h3>Financial Service</h3>
        <div className='capital-img'>
            <img src='https://cdn.sanity.io/images/q8bht0jl/production/231a71aafbef445f1f288a4af09ab3478ce36adf-864x1151.jpg?auto=format&fit=max&q=100&w=432' alt='capital-img-2'>
            </img>
        </div>
        <p><b>Consolidate Your Capital Management</b><span>with seamless, flexible and secure banking solutions</span></p>
       </div>
       <div className='cards-with-text'>
        <h3>Full Service Funds</h3>
        <div className='capital-img'>
            <img src='https://cdn.sanity.io/images/q8bht0jl/production/a3a1a5ef1c4d2a1d5b61cb69788ad0e44d60c21f-696x928.jpg?auto=format&fit=max&q=100&w=348' alt='capital-img-2'>
            </img>
        </div>
        <p><b>Access 50+ Services</b><span>that removes friction from fund management for venture funds, rolling funds and syndicates.</span></p>
       </div>
       <div className='cards-with-text'>
        <h3>Equity Management</h3>
        <div className='capital-img'>
            <img src='https://cdn.sanity.io/images/q8bht0jl/production/c7fea715cb9887d72855b536004d6a464f2a5b2c-864x1151.jpg?auto=format&fit=max&q=100&w=432' alt='capital-img-2'>
            </img>
        </div>
        <p><b>Modern cab tables for high-growth companies</b><span>Unmatched automations turn equity into an advantage.</span></p>
       </div>


    </div>
    </>

  )
}

export default Capital