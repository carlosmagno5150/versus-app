import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  const [auth, setAuth] = React.useState(true);  

  return (    
<Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">Versus App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/partidas"}>Partidas</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>Sobre</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    // <nav>      
    //   <div class="brand">
    //     <NavLink to="/">Versus-<span>App</span></NavLink>
    //   </div>
    //   <ul>
    //     <li><NavLink to="/">Home</NavLink></li>
    //     <li><NavLink to="/Partidas">Partidas</NavLink></li>
    //     <li><NavLink to="/about">About</NavLink></li>
    //   </ul>
    // </nav> 
  )
}

export default Menu