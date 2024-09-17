import React from 'react'
import Footer from '../components/Footer'
import './footer.css'

const AppFooter = ({changeActiveTab}) => {
  return (
    <>
    <Footer  changeActiveTab={changeActiveTab} />
    </>
  )
}

export default AppFooter