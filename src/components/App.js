import React from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";
import moment from "moment";

const App = () => {
  return (
    <>
      <Container fluid>
        <Row className="controls-container m-auto">
          <Col xs="4">
            <Button variant="light">Prev</Button>
          </Col>
          <Col xs="4">
            <p class="default-text">{moment().format("LL")}</p>
          </Col>
          <Col xs="4">
            <Button variant="light">Next</Button>
          </Col>
        </Row>
        <Row className="meal-container">
          <Accordion defaultActiveKey="0" style={{ width: "100%" }}>
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                Sandwhich -{" "}
                <span>
                  <b>2000</b>
                </span>
                {" - "}
                <span className="protein-text">
                  <b>2000</b>
                </span>
                {"/"}
                <span className="fat-text">
                  <b>2000</b>
                </span>
                {"/"}
                <span className="carbs-text">
                  <b>2000</b>
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Hello! I'm the body! I'm the body! I'm the body! I'm the body!
                  I'm the body! I'm the body! I'm the body! I'm the body
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Row>
        <Row className="add-meal-container">
          <Col>
            <Button variant="light">Add Meal</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="default-text">
              <b>2000</b>
            </h1>
          </Col>
        </Row>
        <Row className="macro-container m-auto">
          <Col>
            <p className="protein-text macro-text">
              <b>2000</b>
            </p>
          </Col>
          <Col>
            <p className="fat-text macro-text">
              <b>2000</b>
            </p>
          </Col>
          <Col>
            <p className="carbs-text macro-text">
              <b>2000</b>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default withAuthenticator(App);
