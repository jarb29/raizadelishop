/*eslint-disable*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components

function Pricing() {
  return (
    <>
      <div className="section section-pricing" id="sectionBuy">
        <Container>
          <div className="our-clients">
            <Container>
              <Row>
                <Col className="ml-auto" md="2">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/vodafone.jpg")}
                  ></img>
                </Col>
                <Col md="2">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/microsoft.jpg")}
                  ></img>
                </Col>
                <Col md="2">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/harvard.jpg")}
                  ></img>
                </Col>
                <Col className="mr-auto" md="2">
                  <img
                    alt="..."
                    src={require("assets/img/presentation-page/stanford.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">Ready to grab Now UI Kit PRO?</h2>
            </Col>
            <Col className="ml-auto mr-auto" md="8">
              <p className="description mb-5 text-center">
                You have <b>Free Unlimited Updates</b> and{" "}
                <b>Premium Support</b> on each package for 6 months. You also
                have <b>24 hours</b> to request a refund if you're not happy
                with your purchase. <br></br>
                Read more about{" "}
                <b>
                  <a
                    href="https://www.creative-tim.com/license?ref=nuk-pro-react-presentation"
                    target="_blank"
                  >
                    licenses here
                  </a>
                </b>
                .
              </p>
              <Row>
                <Col md="6">
                  <Card
                    className="card-pricing card-background card-raised card-margin"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg27.jpg") + ")"
                    }}
                  >
                    <CardBody>
                      <h6 className="category">Personal License</h6>
                      <CardTitle tag="h1">
                        <small>$</small>
                        79
                      </CardTitle>
                      <ul>
                        <li>
                          <b>HTML/CSS/JS/SASS</b> Files
                        </li>
                        <li>
                          <b>Fully Coded</b> Components
                        </li>
                        <li>
                          <b>Responsive</b> Design
                        </li>
                        <li>
                          Product <b>Documentation</b>
                        </li>
                      </ul>
                      <Button
                        className="btn-round"
                        color="info"
                        href="https://www.creative-tim.com/buy/now-ui-kit-pro-react?license=1&ref=nuk-pro-react-presentation"
                        target="_blank"
                      >
                        Buy Now!
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <Card
                    className="card-pricing card-background card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg37.jpg") + ")"
                    }}
                  >
                    <CardBody>
                      <h6 className="category">Developer License</h6>
                      <CardTitle tag="h1">
                        <small>$</small>
                        319
                      </CardTitle>
                      <ul>
                        <li>Everything in Personal</li>
                        <li>
                          <b>+</b> Create <b>Multiple Websites and</b> Sell to{" "}
                          <b>Multiple Clients</b>
                        </li>
                        <li>
                          <b>Or</b> Can <b>Charge Customers</b>
                        </li>
                        <li>
                          <b>Or</b> Use in <b>Commercial Projects</b>
                        </li>
                        <li>
                          <b>Or</b> Use in a <b>SaaS Project</b>
                        </li>
                      </ul>
                      <Button
                        className="btn-round"
                        color="info"
                        href="https://www.creative-tim.com/buy/now-ui-kit-pro-react?license=2&ref=nuk-pro-react-presentation"
                        target="_blank"
                      >
                        Buy Now!
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
            <Col className="text-center ml-auto mr-auto" md="8">
              <h3>Thank you for supporting us!</h3>
            </Col>
            <Col className="text-center ml-auto mr-auto" md="8">
              <Button
                className="btn-icon btn-round mr-1"
                color="twitter"
                id="tooltip477589936"
                size="lg"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip477589936">
                Tweet!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon mr-1"
                color="facebook"
                id="tooltip46748914"
                size="lg"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip46748914">
                Share!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon mr-1"
                color="linkedin"
                id="tooltip129912781"
                size="lg"
              >
                <i className="fab fa-linkedin"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip129912781">
                Share!
              </UncontrolledTooltip>
              <Button
                className="btn-round btn-icon"
                color="github"
                href="https://github.com/creativetimofficial/ct-now-ui-kit-pro-react?ref=creativetim"
                target="_blank"
                id="tooltip156844414"
                size="lg"
              >
                <i className="fab fa-github"></i>
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip156844414">
                Star on Github
              </UncontrolledTooltip>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Pricing;
