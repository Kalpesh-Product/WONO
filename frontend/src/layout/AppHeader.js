import React from 'react'
import NavBar from '../components/Nav'
import Breadcrumbs from '../components/BreadCrumbs'
const AppHeader = ({activeTab ,changeActiveTab}) => {
  return (
      <>
      <NavBar activeTab={activeTab} changeActiveTab={changeActiveTab}  />
      {/* <Breadcrumbs /> */}
    </>
  )
}

export default AppHeader