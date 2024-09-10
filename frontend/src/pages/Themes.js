import React from 'react'
import '../styles/bodyThemes.css'
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.png";
import CoWorkingImage from "../assets/WONO_images/img/website-builder/new-layout/co-working.png";
import CoLivingImage from "../assets/WONO_images/img/website-builder/new-layout/co-living.png";
import Boutique from "../assets/WONO_images/img/website-builder/new-layout/boutique.png";

const Themes = () => {

    const themeImages = [
        { src: CafeImage, alt: "Cafe Image" },
        { src: CoWorkingImage, alt: "Co-Working Image" },
        { src: CoLivingImage, alt: "Co-Living Image" },
        { src: Boutique, alt: "Boutique Image" },
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
                </div>
            </div>
        </div>
    )
}

export default Themes
