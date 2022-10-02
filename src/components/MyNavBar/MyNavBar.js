import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { GiAbstract023 } from "react-icons/gi";



const MyNavBar = () => {
    const menuList = ['Home', 'About', 'Academic', 'Exam', 'Result']
    return (
        <div>
          <Navbar className='bg-info rounded px-2' expand="lg">
            <Container fluid>
              <Navbar.Brand href="#" className='text-danger fw-bold'><GiAbstract023/> PC College</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                  {
                    menuList.map(menu=>(
                    <div>
                        <Nav.Link className='text-blue fw-semibold fs-5' href= {`/${menu}`}>{menu}</Nav.Link>
                        
                    </div>
                    ))
                  } 
                </Nav>
                <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    );
};

export default MyNavBar;