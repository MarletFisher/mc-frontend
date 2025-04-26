import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function Account(props) {
  return (
    <>
      <Form>
        <Row className="justify-content-md-center mb-2" md="auto">
          <Col>
            <Form.Switch type="switch" label="sign-up" />
          </Col>
        </Row>

        <Row
          className="align-items-center justify-content-md-center mb-3"
          md="auto"
        >
          <Form.Label>username:</Form.Label>
          <Col>
            <Form.Group controlId="username">
              <Form.Control type="text" placeholder="username" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="align-items-center justify-content-md-center" md="auto">
          <Form.Label>password:</Form.Label>
          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
        </Row>
      </Form>
    </>
  );
}
