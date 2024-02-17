import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import logo from "../assets/logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

export default function Header() {
  return (
    <Navbar expand="lg" sticky="top" className="bg-body-tertiary justify-content-around">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} roundedCircle style={{ height: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <Image src={logo} roundedCircle style={{ height: "100px" }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='m-auto'>
              <Nav.Link href="#link">Workouts</Nav.Link>
              <Nav.Link href="#link">Nutrition</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">FAQs</Nav.Link>
            </Nav>
            <NavDropdown
              title="Account"
              id={`offcanvasNavbarDropdown-expand-lg`}
              className='my-auto'
              role='menuItem'
              drop='down-centered'
            >
              <NavDropdown.Item href="#action3">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Register</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant='primary mx-2'>Cart</Button>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
