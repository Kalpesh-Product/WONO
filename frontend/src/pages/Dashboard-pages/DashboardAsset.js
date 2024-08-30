import React from 'react'
import Asset from '../../assets/WONO_images/img/backend-panel/asset.jpg'

const DashboardAsset = () => {
  return (
    <div className='dashboard-asset-container'>
    <div className='dashboard-asset'>
        <h2 style={{color:'black' , padding:'1rem'}}>Asset management</h2>
      <img src={Asset} alt='booking' />
    </div>
    </div>
  )
}

export default DashboardAsset
