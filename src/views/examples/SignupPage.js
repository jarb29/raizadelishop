import React, { useContext }  from "react";
import { Context } from '../../AppContext';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";


// core components
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar.js";
import Footer from "components/Footers/Footer.js";


function SignupPage() {

  const { actions} = useContext(Context);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerTelefonoState, setregisterTelefonoState] = React.useState("");
  const [registerNombreState, setregisterNombreState] = React.useState("");
  const [registerApellido, setregisterApellidoState] = React.useState("");
  const [registerClave, setregisterClaveState] = React.useState("");
  const [registerPassword, setregisterPassword] = React.useState("");
  const [registerConfirmPasswordState, setregisterConfirmPasswordState] = React.useState(
    ""
  ); 
  

  React.useEffect(() => {
    document.body.classList.add("signup-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("signup-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };

  console.log(registerEmailState === "success")
  console.log(registerTelefonoState==="success")
  console.log(registerNombreState==="success")
  console.log(registerApellido==="success")
  console.log(registerConfirmPasswordState ==="success")


  return (
    <>
      <FixedTransparentNavbar/>
      <div className="page-header header-filter" filter-color="black">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg18.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="6" lg="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                  <i className="now-ui-icons media-2_sound-wave"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Para ofrecer un mejor servicio</h5>
                    <p className="description">
                      Por favor introduzca sus datos correctamente.

                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                  <i className="now-ui-icons media-1_button-pause"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Registro</h5>
                    <p className="description">
                      El Boton de registro aparecera una vez validado los datos.
                      
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons users_single-02"></i>
                  </div>
                  <div className="description">
                    <h5 className="info-title">Numero de Telefono</h5>
                    <p className="description">
                      El numero de telefono debe tener el formato +56957987634.
                    </p>
                  </div>
                </div>
              </Col>
             
              <Col className="mr-auto" md="6" lg="4">
                <Card className="card-signup">
                  <CardBody>
                      <div className="author" >
                       <img
                        alt = "nothing"
                         className="btn-icon btn-round mr-2"
                          color="twitter"
                           src={require("assets/img/logo.jpg")}
                       ></img>
                        </div>


                        
                    <Form action="" className="form" method="">
                      <InputGroup
                        className={firstFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="nombre"
                          placeholder="Nombre..."
                          type="text"
                          name="nombre"
                          onChange= {event => { 
                            if (verifyLength(event.target.value, 4)) {
                              setregisterNombreState("success");
                            } else {
                              setregisterNombreState("error");
                            };
                            actions.handlingInputs(event)
                          }
                        }
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={lastFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="apellido"
                          placeholder="Apellido..."
                          type="text"
                          name="apellido"
                          onChange={ event => {
                              if (verifyLength(event.target.value, 4)) {
                                setregisterApellidoState("success");
                              } else {
                                setregisterApellidoState("error");
                              };
                              actions.handlingInputs(event)
                          }
                        }
                        ></Input>
                      </InputGroup>
                      
                      <InputGroup
                        className={emailFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons ui-1_email-85"></i>
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
                        className={lastFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="telefono"
                          placeholder="Telefono..."
                          type="telefono"
                          name="telefono"
                          onChange={ event => {
                              if (verifyLength(event.target.value, 12)) {
                                setregisterTelefonoState("success");
                              } else {
                                setregisterTelefonoState("error");
                              };
                              actions.handlingInputs(event)
                          }
                        }
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={lastFocus ? "input-group-focus" : ""}
                      >
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          autoComplete="clave"
                          placeholder="Clave..."
                          type="text"
                         
                            onChange={ event => {
                              if (verifyNumber(event.target.value)) {
                                setregisterClaveState("success");
                              } else {
                                setregisterClaveState("error");
                              }
                              setregisterPassword(event.target.value);
                          }}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={lastFocus ? "input-group-focus" : ""}
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
                              if (registerPassword === event.target.value) {
                                setregisterConfirmPasswordState("success");
                              } else {
                                setregisterConfirmPasswordState("error");
                              }
                              actions.handlingInputs(event)
                          }
                        }
                        ></Input>
                      </InputGroup>
                      <CardFooter className="text-center">
                      {
                      (registerEmailState === "success" && 
                      registerTelefonoState==="success"&& 
                      registerNombreState==="success"&& 
                      registerApellido==="success"&& 
                      registerConfirmPasswordState ==="success")?
                        <Button
                          className="btn-round"
                          color="info"
                          href="#pablo"
                          size="lg"
                          onClick = {e => {actions.registroUsuario(e)}}
                        >
                          Registrate
                        </Button>:null }
                      </CardFooter>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default SignupPage;
