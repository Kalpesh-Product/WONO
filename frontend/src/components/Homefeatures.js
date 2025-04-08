import React from 'react'
import Slider from "react-slick";
import "../styles/homefeatures.css";

const Homefeatures = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true
      };
  return (
    <>
    <div className='container-fluid'>
     
     <Slider {...settings}>
      <div>
        <div className='feature-container'>
            <div className='sidenav'>
            <h1>Booking Engine</h1>
            <p>Booking engine is one of the most amazing features that we have in this application</p>
            <ul>

            <li><a href="#">Services</a></li>
            <li><a href="#">Clients</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            </div>
            <div className='feature-main'>
                <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/15728638.jpg?k=ab76cb00e6abda0a6a676f737c03c061730833fe8704bcb85591c34c4d702942&o=&hp=1'
                alt='Booking engine'/>
            </div>
        </div>
      </div>
      <div>
      <div className='feature-container'>
            <div className='sidenav'>
            <a href="#">Visitor Information</a>
            <p>Booking engine is one of the most amazing features that we have in this application</p>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>
            <div className='feature-main'>
                <img src='https://www.lobbytrack.com/assets/images/register-visitor.jpg'
                alt='Booking engine'/>
            </div>
        </div>
      </div>
      <div>
      <div className='feature-container'>
            <div className='sidenav'>
            <a href="#">Reports</a>
            <p>Booking engine is one of the most amazing features that we have in this application</p>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>
            <div className='feature-main'>
                <img src='https://marketplace.atlassian.com/files/39d4e1d2-88ac-4bfe-8f54-91ee91d830dc?fileType=image&mode=full-fit'
                alt='Booking engine'/>
            </div>
        </div>
      </div>
      <div>
      <div className='feature-container'>
            <div className='sidenav'>
            <a href="#">Booking Engine</a>
            <p>Booking engine is one of the most amazing features that we have in this application</p>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
            </div>
            <div className='feature-main'>
                <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/15728638.jpg?k=ab76cb00e6abda0a6a676f737c03c061730833fe8704bcb85591c34c4d702942&o=&hp=1'
                alt='Booking engine'/>
            </div>
        </div>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
    </div>

    </>
  )
}

export default Homefeatures