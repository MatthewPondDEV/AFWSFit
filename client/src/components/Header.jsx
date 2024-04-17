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
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Header() {
  return (
    <Navbar
      id="header-nav"
      variant="dark"
      expand="lg"
      sticky="top"
      className="justify-content-around"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} roundedCircle style={{ height: "75px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
          variant="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <Image src={logo} roundedCircle style={{ height: "120px" }} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="m-auto">
              <Nav.Link href="#link">Workouts</Nav.Link>
              <Nav.Link href="#link">Nutrition</Nav.Link>
              <Nav.Link href="#link">Shop</Nav.Link>
              <Nav.Link href="#link">Contact</Nav.Link>
              <Nav.Link href="#link">FAQs</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>Login</Nav.Link>
              <Nav.Link className="">
                <i class="bi bi-bag"></i> Cart
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
