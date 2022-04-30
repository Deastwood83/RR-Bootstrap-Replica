import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const TopBar = () => {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">
            <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link style={{ fontSize: "18px" }} href="#LogIn">
                Log In
              </Nav.Link>
              <Button variant="success" style={{ fontSize: "18px" }}>
                Sign Up
              </Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  };

export default TopBar