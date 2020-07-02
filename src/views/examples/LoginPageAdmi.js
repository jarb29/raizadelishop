import React, { useContext }  from "react";
import { Context } from '../../AppContext';
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

// core components

import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";

function LoginPageAdmi(props) {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerConfirmPasswordState, setregisterConfirmPasswordState] = React.useState(
    ""
  ); 
  const { actions} = useContext(Context);

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
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
      <FixedTransparentNavbar />
      <div className="page-header header-filter" >
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="logo-container">
                        <img
                          alt="..."
                          src={require("assets/img/logo.jpg")}
                        ></img>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (firstFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
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
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (lastFocus ? " input-group-focus" : "")
                        }
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
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
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      {
                         (registerEmailState === "success" && 
                         registerConfirmPasswordState ==="success")?
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => actions.logingAdministrador(e, props.history)}
                        size="lg"
                      >
                        Ingresar
                      </Button>:null}
                    </CardFooter>
                    <div className="pull-left">
                      <h6>
                        <Link
                          className="link footer-link"
                           tag={Link} to="/admi/registrate">
                        <i className="now-ui-icons tech_mobile"></i>
                          Crear Cuenta
                        </Link>
                      </h6>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default withRouter(LoginPageAdmi);
