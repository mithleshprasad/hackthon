import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
// import logo from '../assets/logo.png'; // Import your logo
import Vector from '../assets/icons/Vector.svg';

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand href="/" className='text-dark'>
          <img
            src={Vector}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          DPhi
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
