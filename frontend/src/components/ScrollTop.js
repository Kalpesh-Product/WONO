// used prime react 
import React from 'react'
import { ScrollTop } from 'primereact/scrolltop';
 

const ScrollTops = () => {
  return (
    <>
    <div style={{height: '100px', overflow: 'auto'}}>
    The properties of CSSTransition can be customized, except for "nodeRef" and "in" properties.
    Defines the scrolling behavi, "smooth" adds an animation and "auto" scrolls with a jump.
    Defines the threshold value of the vertical scroll position of the target to toggle the visibility.
    <ScrollTop />
    </div>
    </>
  )
}

export default ScrollTops