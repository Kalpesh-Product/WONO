import React from 'react'
import CafeImage from "../assets/WONO_images/img/website-builder/new-layout/cafe.png";
import BiznestImage from "../assets/WONO_images/img/products-images/biznestImage.png";
import Cafe_2 from "../assets/WONO_images/img/website-builder/new-layout/cafe-2.png";
import Cafe_3 from "../assets/WONO_images/img/website-builder/new-layout/cafe-3.png";
import CoWorkingImage from "../assets/WONO_images/img/website-builder/new-layout/co-working.png";
import TickmarkImg from "../assets/check.png"
import '../styles/bodyProduct.css'
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='product-page-master'>
        <div className="product-page-section">
          <div className="product-page">
            <div className="product-page-header">
              {/* <h1>Product Page</h1> */}
            </div>
            <div className="product-page-content">

              <div className="product-page-grid">

                <div className="product-page-left-container">
                  <div className="product-page-grid-item">
                    <h1>Inclusions</h1>
                    <div className="product-page-feature">
                      <div className="product-page-features">
                        <img src={TickmarkImg} alt="tick-mark" />
                        <span>Website/ Native Apps</span>
                      </div>
                      <div className="product-page-features">
                        <img src={TickmarkImg} alt="tick-mark" />
                        <span>Payment Gateway</span>
                      </div>
                      <div className="product-page-features">
                        <img src={TickmarkImg} alt="tick-mark" />
                        <span>Booking Engine</span>
                      </div>
                      <div className="product-page-features">
                        <img src={TickmarkImg} alt="tick-mark" />
                        <span>Customer Profile</span>
                      </div>
                      <div className="product-page-features">
                        <img src={TickmarkImg} alt="tick-mark" />
                        <span>No code & Self-serve</span>
                      </div>
                      <hr style={{ width: '35%' }} />
                    </div>
                    <div className="product-page-button-space">
                      <button style={{backgroundColor:'white', color:'black', marginBottom:'16px', marginLeft:'0'}} onClick={() => navigate('/login')} className='product-page-button'>Try theme</button>
                    </div>
                    <div className="product-page-update-text">
                      <span>Last updated on Sep 11, 2024</span>
                      <span>Version 1.0</span>
                    </div>
                  </div>
                </div>


                <div className="product-page-image-container">
                  <img src={BiznestImage} alt="Product Image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-page-perks-section">
          <div className="product-page-perks">
            <div className="product-page-perks-grid">
              <div className="product-page-perks-grid-1">
                <span>Build with confidence &#x2014; the Theme Store promise </span>

              </div>
              <div className="product-page-perks-grid-2">
                <div className="product-page-perks-grid-2-item">
                  <div className="product-page-perks-grid-2-item-layout">
                    <i class="fa-regular fa-circle-check"></i>
                    <div className="product-page-perks-description">
                      <h4>Works with latest wono changes</h4>
                      <span>Themes on the Wono Theme Store are
                        guaranteed to stay up to date and work
                        with Wono's ever-growing feature set. </span>
                    </div>
                  </div>
                </div>
                <div className="product-page-perks-grid-2-item">
                  <div className="product-page-perks-grid-2-item-layout">
                    <i class="fa-solid fa-gauge-simple-high"></i>
                    <div className="product-page-perks-description">
                      <h4>Speed tested and approved</h4>
                      <span>Every theme in the Theme Store meets
                        Wono's performance standards,
                        ensuring a faster shopping experience
                        for your buyers.</span>
                    </div>
                  </div>
                </div>
                <div className="product-page-perks-grid-2-item">
                  <div className="product-page-perks-grid-2-item-layout">
                    <i class="fa-regular fa-clock"></i>
                    <div className="product-page-perks-description">
                      <h4>Unlimited free trial</h4>
                      <span>Try the theme for free with your own products, brand colors, and customizations. One-time payment of
                        $300 if you publish the theme to your
                        store.</span>
                    </div>
                  </div>
                </div>
                <div className="product-page-perks-grid-2-item">
                  <div className="product-page-perks-grid-2-item-layout">
                    <i class="fa-solid fa-images"></i>
                    <div className="product-page-perks-description">
                      <h4>Free high resolution photos</h4>
                      <span>Demo stores aren't included, but you
                        can get free stock photos from Wono
                        Burst.</span>
                    </div>
                  </div>
                </div>
                <div className="product-page-perks-grid-2-item">
                  <div className="product-page-perks-grid-2-item-layout">
                    <i class="fa-solid fa-window-maximize"></i>
                    <div className="product-page-perks-description">
                      <h4>Free theme updates</h4>
                      <span>Get the latest theme features and fixes
                        from the Theme Store. You can
                        redownload your purchase at any time.</span>
                    </div>
                  </div>
                </div>
                <div className="product-page-perks-grid-2-item">
                  <div className="product-page-perks-grid-2-item-layout">
                    <i class="fa-regular fa-id-card"></i>
                    <div className="product-page-perks-description">
                      <h4>Non-expiring license for one store</h4>
                      <span>Your payment entitles you to use the
                        theme on a single store, and keep it as
                        long as you like.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-page-reccomendations-section">
          <div className="product-page-reccomendations">
            <div className="product-page-reccomendations-header">
              <h2>Few more suggestions for you</h2>
            </div>
            <div className="product-page-reccomendations-grid">
              <div className="product-page-reccomendations-grid-image">
                <img src={CafeImage} alt='CafeImage' />
              </div>
              <div className="product-page-reccomendations-grid-image">
                <img src={Cafe_2} alt='CafeImage' />
              </div>
              <div className="product-page-reccomendations-grid-image">
                <img src={Cafe_3} alt='CafeImage' />
              </div>
              <div className="product-page-reccomendations-grid-image">
                <img src={CoWorkingImage} alt='CafeImage' />
              </div>
            </div>
          </div>
        </div>

        <div className="product-page-build-section">
          <div className="product-page-build">
            <span>Build fast, sell more and  grow more revenues immediately with WoNo</span>
            <div className="product-page-build-button-space">
              <button className='product-page-button'>It's FREE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
