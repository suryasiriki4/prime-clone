import React from 'react';
import { Nav, Navbar, Form, FormControl, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import SearchIcon from '../../node_modules/@material-ui/icons/Search';
import AccountCircleIcon from '../../node_modules/@material-ui/icons/AccountCircle';

const Styles = styled.div`
  .navbar { background-color: #0f171e; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: white;
    &:hover { color: white; }
  }
  .navbar {
      height: 80px;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: white;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    width: 250px;
    height: 40px;
    right: 10%;
  }
  .logo {
      font-size: 1.5rem;
      margin-left: 2rem;
      font-weight: bold;
  }
  .search-bar {
      background-color: #0f171e;
      border: "1px solid white";
      color: white;

  }

  .search-bar::placeholder {
      color: white;
  }
  #basic-addon1 {
      height: 38px;
      color: white;
      background-color: #0f171e;
  }
  .AccountIcon {
      color: white;
      height: 50px;
      width: 50px;
  }

`;
export const NavBar = () => (
  <Styles>
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="/" className="logo">prime video</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <InputGroup className="form-center">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">
                    <SearchIcon />
                </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            className="search-bar"
            placeholder="Search"
            aria-label="Username"
            aria-describedby="basic-addon1"
            />
    </InputGroup>  
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">TVShows</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">Movies</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/about">Kids</Nav.Link></Nav.Item>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/about"><AccountCircleIcon className="AccountIcon"/></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
      
    </Navbar>
  </Styles>
)