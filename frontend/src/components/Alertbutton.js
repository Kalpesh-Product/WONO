import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const Alertbutton = () => {
    const [show , setShow] = useState(true);

    if (show) {
        return (
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Please check above job roles before proceding.
            </p>
          </Alert>
        );
      }
  return (
    <Button onClick={() => setShow(true)}>Submit</Button>
  )
}

export default Alertbutton