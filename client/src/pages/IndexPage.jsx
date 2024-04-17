import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import "bootstrap-icons/font/bootstrap-icons.css";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

export default function IndexPage() {
  return (
    <Container fluid id="index-page">
      <Row>
        <Col xs={12} style={{ height: "700px" }}></Col>
      </Row>
    </Container>
  );
}
