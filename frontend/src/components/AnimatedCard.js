import React, { useState } from 'react'
import { Card ,Button } from 'react-bootstrap'
import '../layout/animatedCard.css'

const AnimatedCard = () => {
    const [hover,setHover] = useState(false);
  return (
    <>
    <Card className={`my-3 ${hover ? 'hover' :''}`}
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}>
        <Card.Img variant='top' src="https://images.app.goo.gl/HVouN9DrmBqMZPTi6"></Card.Img>
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>This is the card with the animated hover effect.</Card.Text>
            <Button variant='primary'>Go Somewhere</Button>
        </Card.Body>
    </Card>
    </>
  )
}

export default AnimatedCard