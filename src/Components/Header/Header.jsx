/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import "./Header.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
import { Outlet } from 'react-router-dom';
import searchControl from '../../extra';



const Header = () => {

    const [value, setValue] = useState("Please search...")
    const handleSearch = () => {
        setValue('Please search....');
    }
    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <LinkContainer to="/">
                        <Navbar.Brand>MealDB</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>Login</Nav.Link>
                            </LinkContainer>

                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                onChange={handleChange}
                                type="search"
                                value={value}
                                className="me-2"
                                aria-label="Search"
                            />
                            <LinkContainer to={`/search/${value}`}>
                                <Button variant="outline-success" onClick={handleSearch}>Search</Button>
                            </LinkContainer>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </>
    );
};

export default Header;