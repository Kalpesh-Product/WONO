import React from 'react'
import Image from 'react-bootstrap/Image';
import "../styles/bodyHome.css";

const Carousels = ({image1, image2, image3}) => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide"  data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-indicators" >
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" style={{ backgroundColor: 'black', borderRadius: '1rem' }}>
                    <div className="carousel-item active" >
                        <Image src={image1} alt='carousel-image'  fluid />
                    </div>
                    <div className="carousel-item">
                        <Image src={image2} alt='carousel-image' fluid />
                    </div>
                    <div className="carousel-item">
                        <Image src={image3} alt='carousel-image' fluid />
                    </div>
                </div>
                {/* Arrow for carousel */}

                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" style={{zIndex:'3',position:'absolute',top:'90%',height:'50px',width:'50px'}}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" style={{zIndex:'3',position:'absolute',top:'90%',height:'50px',width:'50px'}}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    )
}

export default Carousels
