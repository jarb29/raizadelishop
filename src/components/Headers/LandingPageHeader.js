import React from "react";

import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";


function LandingPageHeader() {
  let pageHeader = React.createRef();
  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg26.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center">
          <Container>
            <h1 className="title">Raiza's Deli Shop.</h1>
              <Row>
                <Col className="ml-auto mr-auto" md="12">
                  <Card
                    className="card-raised card-form-horizontal card-plain"
                    data-background-color=""
                  >
                    <CardBody>
                      <Form action="" method="">
                        <Row>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="family-name"
                                defaultValue=""
                                placeholder="Full Name"
                                type="text"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="email"
                                placeholder="Your Email"
                                type="email"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                autoComplete="current-password"
                                placeholder="Password"
                                type="password"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                            >
                              Join Us
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
    </>
  );
}

export default LandingPageHeader;
