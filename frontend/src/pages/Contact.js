import React from 'react'
import "../layout/contact.css"
import "../styles/bodyContact.css"

const Contact = () => {
  return (<>
    <section id='contact' className='contact'>
        <div className='container'>
            <div className='row gy-4' >
                <div className='col-lg-6'>
                    <h3 style={{color:"#000",fontSize:"30px",textAlign:"left",textTransform:"uppercase",margin:"3rem 0 2rem 0", fontWeight:"bold"}}>
                        About Us
                    </h3>
                    <p style={{fontSize: "17px",color:"#000", textAlign:"left"}}>WoNo's B2B Software As A Service (SaaS) Licensing tools are being developed post in depth discussions with 100's of businesses who are trying to develop and evolve the Nomads &amp; Remote Working Ecosystem via their own niche concepts in the most aspiring destinations of the world. We are currently in our BETA stage and are partnering and listening to everyone who wants to partner with us and we are providing them with our SaaS Tools FREE of Cost in our Testing Phase.</p>
                    <p style={{fontSize: "17px",color:"#000",textAlign:"left"}}>WoNo's eventual B2B2C is the largest Nomad Community which is being developed and designed exclusively for individuals and companies who intend to work remotely from the various aspiring destinations of the world. We are developing the World's 1st such Platform &amp; Community which will enable you to discover, help in making decisions, provide assistance, provide logistics and let you do everything centrally for single, multiple or year long working from destinations as a true sorted Global Nomad.</p>
                </div>
                <div className='col-lg-6'>
                    <form name='form-p' className='contact-form'>
                        <h3 style={{marginBottom:"30px",color:"#000",fontWeight:"bold"}}>CONNECT WITH US</h3>
                        <div className="row gy-3">
                           <div className="col-md-6">
                           <input type="text" name="name" class="form-control" placeholder="Name" required=""></input>
                        </div>
          
                          <div className="col-md-6 ">
                            <input type="email" class="form-control" name="email" placeholder="Email" required=""></input>
                          </div>
          
                          <div className="col-md-6 mt-4">
                            <input type="text" class="form-control" name="mobile" pattern="[1-9]{1}[0-9]{9}" placeholder="Mobile Number" required=""></input>
                          </div>

                          <div className="col-md-6 mt-4">
                            {/* <input type="text" name="name" className="form-control" placeholder="Type of Company" required></input> */}
                            <select className="form-select select-f" aria-label="Default select example" name="partnerstype">
                              <option value="" disabled="" selected="">Type of Partnership</option>
                              <option value="B2B SaaS Technology Licensing ">B2B SaaS Technology Licensing </option>
                              <option value="B2C Workation/Co-Working Booking ">B2C Workation/Co-Working Booking </option>
                              <option value="Landlord Partnerships ">Landlord Partnerships </option>
                              <option value="Investment Related ">Investment Related </option>
                              <option value="Coffee Meeting to know us better">Coffee Meeting to know us better</option>
                            </select>
                          </div>
          
                          <div className="col-md-12 mt-4">
                            <textarea className="form-control" name="message" rows="4" placeholder="Message" required=""></textarea>
                          </div>
          
                          <div className="col-md-12 text-center mt-5">
          
                            <input type="hidden" name="pagename" value="Contact"></input>
                            
          
                            <button name="submit" type="submit" className="btn-lg btn-block submit-button">CONNECT</button>
                          </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <div className='map-container'>
            <div className="map-grid">
                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8288436496055!2d103.8432645747905!3d1.2760650987118065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da191343eb5b27%3A0x1781b571e2363017!2s10%20Anson%20Rd%2C%20Singapore%20079903!5e0!3m2!1sen!2sin!4v1723629468618!5m2!1sen!2sin" width="100%" height="400"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
                    </div>
                    <div className='address'>
                        <span className='contact-address'>SINGAPORE OFFICE - WONOCO PRIVATE LIMITED, 10 ANSON ROAD,
                        #33-10, INTERNATIONAL PLAZA, SINGAPORE - 079903</span>
                    </div>
                </div>
                <div className="map-grid">
                    <div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.7765664747362!2d73.83261987495516!3d15.496445985103028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1d2e05cbef3%3A0xa643703ebcc4db43!2sBIZ%20Nest%20-%20Co-Working%20Space%2C%20Workations%20%26%20Meeting%20Zone%20in%20Goa!5e0!3m2!1sen!2sin!4v1723627911486!5m2!1sen!2sin" width='100%' height='400' loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='map'></iframe>
                    </div>
                    <div className='address'>
                      
                        <span className='contact-address'>INDIA OFFICE - WONOCO PRIVATE LIMITED, BIZ NEST CO-WORKING, SUNTECK
                            KANAKA CORPORATE PARK, 701 - B, PATTO CENTRE, PANJIM, GOA - 403001</span>
                    </div>
                </div>
            </div>
    </>

  )
}

export default Contact;
