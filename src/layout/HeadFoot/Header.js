import React from 'react'
import { Navbar,Nav } from 'react-bootstrap';
import crm from "../../assets/crm.jpeg";
export const Header = () => {
  return (
    
    <Navbar 
        collapseOnSelect
        bg="info"
        variant='dark'
        expand="md"   
    >
            <Navbar.Brand>
                <img src={crm} alt= 'logo' width="50px"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id='basic-navbar-nav'>
              
                <Nav className='ml-auto'>
                    <Nav.Link href='/dashboard'>dashboard</Nav.Link>
                    <Nav.Link href='/dashboard'>Projects</Nav.Link>
                    <Nav.Link href='/dashboard'>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    
  )
}
//rafc