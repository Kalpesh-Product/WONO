import React from 'react'
import '../styles/bodyThemes.css'
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.png";
import Cafe_2 from "../assets/WONO_images/img/website-builder/new-layout/cafe-2.png";
import Cafe_3 from "../assets/WONO_images/img/website-builder/new-layout/cafe-3.png";
import CoWorkingImage from "../assets/WONO_images/img/website-builder/new-layout/co-working.png";
import CoLivingImage from "../assets/WONO_images/img/website-builder/new-layout/co-living.png";
import CoWorkingImage_2 from "../assets/WONO_images/img/website-builder/new-layout/co-working-2.png";
import CoWorkingImage_3 from "../assets/WONO_images/img/website-builder/new-layout/co-working-3.png";
import Featured from "../assets/WONO_images/img/website-builder/new-layout/featured/featured-1.png";
import Boutique from "../assets/WONO_images/img/website-builder/new-layout/boutique.png";

const Themes = () => {

    const themeImages = [
        { src: CafeImage, alt: "Cafe Image" },
        { src: CoWorkingImage, alt: "Co-Working Image" },
        { src: CoLivingImage, alt: "Co-Living Image" },
        { src: Boutique, alt: "Boutique Image" },
        { src: CoWorkingImage_2, alt: "CoLivingImage_2" },
        { src: CoWorkingImage_3, alt: "CoLivingImage_3" },
        { src: Cafe_2, alt: "Cafe_2" },
        { src: Cafe_3, alt: "Cafe_3" },
    ];

    const themeWebsiteGridData = [
        {
            title: "Faster Loading",
            description: "Wono is designed for performance",
        },
        {
            title: "Responsive Design",
            description: "Wono ensures a seamless experience across devices",
        },
        {
            title: "SEO Friendly",
            description: "Built with best practices for search engine optimization",
        },
        {
            title: "Customizable",
            description: "Highly flexible and customizable layouts",
        },
        {
            title: "Security",
            description: "Wono offers top-notch security for your business",
        },
    ];

    return (
        <div>
            <div className="themePage-master">
                <div className="themePage-header">
                    <h2>Choose the best business Website & Native Apps
                        theme for your business  </h2>
                    <p>Cherry pick the features you want or ask us to customize anything for you for your business growth.
                    </p>
                </div>

                <div className="themePage-content">
                    <div className="themePage-content-header">
                        <h3>Top Theme Recommendations</h3>
                        <span className='mt-2'>Fully tech ready, integrated and responsive updated and latest WoNo themes</span>
                    </div>

                    <div className="themePage-content-grid mt-3">
                        {themeImages.map((image, index) => (
                            <div className="theme-grid" key={index}>
                                <img src={image.src} alt={image.alt} />
                            </div>
                        ))}
                    </div>

                    <div className='themePage-featured'>
                        <div className="themePage-featured-grid">
                            <div className="themePage-featured-grid-1">
                                <div className="themePage-featured-header">
                                    <h1>Customize it your way</h1>
                                </div>
                                <div className="themePage-featured-content">
                                    <ul>
                                        <li>
                                            Intuitive drag and drop website editor
                                        </li>
                                        <li>
                                            1000's advanced web capabilities
                                        </li>
                                        <li>
                                            Powerful AI features for smart customization
                                        </li>
                                        <li>
                                            Full-stack web dev tools for custom functionality
                                        </li>
                                    </ul>
                                </div>
                                <div className="themePage-featured-button">
                                    <button className='get-started-submit-button'>Get started</button>
                                </div>

                            </div>

                            <div className="themePage-featured-grid-2">
                                <img src={Featured} alt='coWorking' />
                            </div>
                        </div>
                    </div>

                    <div className="themePage-website-features-section">
                        <div className="themePage-website-features">
                            <div className="themePage-website-header">
                                <h1>A website builder engineered for growth</h1>
                            </div>
                            <div className="themePage-website-features-grid">
                                {themeWebsiteGridData.map((item, index) => (
                                    <div key={index} className={`themePage-website-features-grid-${index + 1}`}>
                                        <h4><b>{item.title}</b></h4>
                                        <p>{item.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="themePage-website-butt">
                                <button className='get-started-submit-button'>Get started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Themes
