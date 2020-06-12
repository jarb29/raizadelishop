import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
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
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);

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
  const [registerNombre, setregisterNombre] = React.useState("");
  const [registerApellido, setregisterApellido] = React.useState("");

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
                          success={registerNombre === "success"}
                          error={registerNombre === "error"}
                          autoComplete="nombre"
                          placeholder="Nombre..."
                          type="text"
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: event => {
                              if (verifyNumber(event.target.value)) {
                                setregisterNombre("success");
                              } else {
                                setregisterNombre("error");
                              }
                    
                            },
                            name: "nombre",
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
                          autoComplete="apellido"
                          placeholder="Apellido..."
                          type="text"
                          success={registerNombre === "success"}
                          error={registerNombre === "error"}
                          formControlProps={{
                            fullWidth: true
                          }}
                          inputProps={{
                            onChange: event => {
                              if (verifyNumber(event.target.value)) {
                                setregisterNombre("success");
                              } else {
                                setregisterNombre("error");
                              }
                    
                            },
                            name: "nombre",
                          }}
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
                          onFocus={() => setEmailFocus(true)}
                          onBlur={() => setEmailFocus(false)}
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
                          autoComplete="name"
                          placeholder="Telefono..."
                          type="text"
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
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
                          autoComplete="name"
                          placeholder="Clave..."
                          type="text"
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
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
                          autoComplete="name"
                          placeholder="Confirmar clave..."
                          type="text"
                          onFocus={() => setLastFocus(true)}
                          onBlur={() => setLastFocus(false)}
                        ></Input>
                      </InputGroup>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox"></Input>
                          <span className="form-check-sign"></span>Acepto los terminos{" "}
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            condiciones
                          </a>
                          .
                        </Label>
                      </FormGroup>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-round"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          size="lg"
                        >
                          Registrate
                        </Button>
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
