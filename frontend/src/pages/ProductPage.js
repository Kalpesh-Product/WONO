import React from 'react'

const ProductPage = () => {
  return (
    <div>
      <div className='product-page-master'>
        <div className="product-page">
          <div className="product-page-header">
            <h1>Product Page</h1>
          </div>
          <div className="product-page-content">
            <div className="product-page-grid">
              <div className="product-page-left-container">
                <div className="product-page-grid-item">
                  <h1>Inclusions</h1>
                  <div className="card-text">
                      <div className="Tickmark-text" key={i}>
                        <img src={TickmarkImg} alt="tick-mark" />
                        {feature}
                      </div>
                  </div>
                </div>
              </div>
              <div className="product-page-image-container">
                <img src="https://via.placeholder.com/300" alt="Product Image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
