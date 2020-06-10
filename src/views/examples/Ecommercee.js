import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Collapse,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import EcommerceHeader from "components/Headers/EcommerceHeader.js";
import Footer from "components/Footers/Footer.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";

function Ecommercee() {
  // focus for inputs
  const [emailFocus, setEmailFocus] = React.useState(false);
  // collapse states and functions
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
  // slider states and functions

  React.useEffect(() => {
   

    document.body.classList.add("ecommerce-page");
   
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
     
    };
  });
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <EcommerceHeader />
        <div className="main">
          <div className="section">
            <Container>
              <h2 className="section-title">Encuentar los duclce que te guste</h2>
              <Row>
                <Col md="3">
                  <div className="collapse-panel">
                    <CardBody>
                      <Card className="card-refine card-plain">
                        <Collapse isOpen={collapses.includes(3)}>
                          <CardBody>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                All toodossssss
                                
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Polo Ralph Lauren
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Wooyoungmi
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Alexander McQueen
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Tom Ford
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                AMI
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Berena
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Thom Sweeney
                              </Label>
                            </FormGroup>
                            <FormGroup check>
                              <Label check>
                                <Input type="checkbox"></Input>
                                <span className="form-check-sign"></span>
                                Calvin Klein
                              </Label>
                            </FormGroup>
                          </CardBody>
                        </Collapse>
                      </Card>
                    </CardBody>
                  </div>
                </Col>
                <Col md="9">
                  <Row>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/polo.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h4">Polo Ralph Lauren</CardTitle>
                          </a>
                          <p className="card-description">
                            Impeccably tailored in Italy from lightweight navy
                            wool.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 300</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="danger"
                              data-placement="left"
                              id="tooltip719224088"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip719224088"
                            >
                              Remove from wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/tom-ford.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h4">Tom Ford</CardTitle>
                          </a>
                          <p className="card-description">
                            Immaculate tailoring is TOM FORD's forte.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 879</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip44332731"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip44332731"
                            >
                              Add to wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/wooyoungmi.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h4">Wooyoungmi</CardTitle>
                          </a>
                          <p className="card-description">
                            Dark-grey slub wool, pintucked notch lapels.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 555</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip601285753"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip601285753"
                            >
                              Add to wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/sweeney.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h4">Thom Sweeney</CardTitle>
                          </a>
                          <p className="card-description">
                            It's made from lightweight grey wool woven.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 680</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip931109693"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip931109693"
                            >
                              Add to wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/kingsman.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h4">Kingsman</CardTitle>
                          </a>
                          <p className="card-description">
                            Crafted from khaki cotton and fully canvassed.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 725</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip512086450"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip512086450"
                            >
                              Remove from wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4" md="6">
                      <Card className="card-product card-plain">
                        <div className="card-image">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <img
                              alt="..."
                              src={require("assets/img/boglioli.jpg")}
                            ></img>
                          </a>
                        </div>
                        <CardBody>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            <CardTitle tag="h4">Boglioli</CardTitle>
                          </a>
                          <p className="card-description">
                            Masterfully crafted in Northern Italy.
                          </p>
                          <CardFooter>
                            <div className="price-container">
                              <span className="price">€ 699</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="default"
                              data-placement="left"
                              id="tooltip867244968"
                            >
                              <i className="now-ui-icons ui-2_favourite-28"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={0}
                              placement="left"
                              target="tooltip867244968"
                            >
                              Add to wishlist
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <div
            className="subscribe-line subscribe-line-image"
            style={{
              backgroundImage: "url(" + require("assets/img/bg43.jpg") + ")"
            }}
          >
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <div className="text-center">
                    <h4 className="title">Subscribe to our Newsletter</h4>
                    <p className="description">
                      Join our newsletter and get news in your inbox every week!
                      We hate spam too, so no worries about this.
                    </p>
                  </div>
                  <Card className="card-raised card-form-horizontal">
                    <CardBody>
                      <Form action="" method="">
                        <Row>
                          <Col sm="8">
                            <InputGroup
                              className={emailFocus ? "input-group-focus" : ""}
                            >
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons ui-1_email-85"></i>
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                placeholder="Email Here..."
                                type="text"
                                onFocus={() => setEmailFocus(true)}
                                onBlur={() => setEmailFocus(false)}
                              ></Input>
                            </InputGroup>
                          </Col>
                          <Col sm="4">
                            <Button block color="info" type="button">
                              Subscribe
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Ecommercee;
