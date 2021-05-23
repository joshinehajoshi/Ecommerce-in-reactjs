import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap';
import './style.css';


function Header() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/Shop'>Shop</Nav.Link>
                <Nav.Link href='/About'>About Us</Nav.Link>
                <Nav.Link href='/Contact'>Contact Us</Nav.Link>
                <Nav>
                </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" style={{width:'65rem', marginLeft:'3rem'}} />
                        <Button variant="outline-info">Search</Button>
                    </Form>
            
            </Nav>
            <Nav className="ml-auto">
            <NavDropdown title="Log Out" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
            </NavDropdown>
                <Nav.Link href='./Account'>Account</Nav.Link>
                <Nav.Link href='./Cart'>Cart <i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
</Nav.Link>
            </Nav>

        </Navbar>
    )
}

export default Header;