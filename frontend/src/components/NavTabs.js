import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function NavTabs() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nesciunt, voluptatem temporibus repellat ea laborum dicta expedita est illum animi fuga voluptatibus nulla dolores unde? Facilis quam error placeat enim.
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ut quibusdam reiciendis, vel quas aliquam dolor voluptates, nihil cum magni quaerat doloribus. Autem quasi modi voluptas, maiores aspernatur temporibus sequi.
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Contact no: 1234567890
      </Tab>
    </Tabs>
  );
}

export default NavTabs;