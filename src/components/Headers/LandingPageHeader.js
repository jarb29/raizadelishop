import React, { useContext }  from "react";
import { Context } from '../../AppContext';
import { withRouter } from "react-router";

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


function LandingPageHeader(props) {
  let pageHeader = React.createRef();
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerConfirmPasswordState, setregisterConfirmPasswordState] = React.useState(
    ""
  ); 
  const { store, actions} = useContext(Context);
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
  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
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
            { !store.isAuthenticated ?
              <Row>
                <Col className="ml-auto mr-auto" md="12" >
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
                                autoComplete="nombre"
                                placeholder=" Nombre"
                                type="nombre"
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                 autoComplete="email"
                                 placeholder="Email..."
                                 type="text"
                                 name="email"
                                 onChange= { event => {
                                     if (verifyEmail(event.target.value)) {
                                       setregisterEmailState("success");
                                     } else {
                                       setregisterEmailState("error");
                                     };
                                     actions.handlingInputs(event)
                                   }
                                 }
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <FormGroup>
                              <Input
                                 autoComplete="clave"
                                 placeholder="Confirmar clave..."
                                 type="clave"
                                 name="clave"
                                   onChange={ event => {
                                     if (event.target.value) {
                                       setregisterConfirmPasswordState("success");
                                     } else {
                                       setregisterConfirmPasswordState("error");
                                     }
                                     actions.handlingInputs(event)
                                 }
                               }
                              ></Input>
                            </FormGroup>
                          </Col>
                          <Col md="3">
                            <Button
                              block
                              className="btn-round"
                              color="info"
                              type="button"
                              onClick={e => actions.logingUsuario(e, props.history)}
                            >
                              Ingresa
                            </Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>: null}
          </Container>
        </div>
      </div>
    </>
  );
}

export default withRouter(LandingPageHeader);
