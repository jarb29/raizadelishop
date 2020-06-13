import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import {
  Button,
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
import ContactUsHeader from "components/Headers/ContactUsHeader.js";
import Footer from "components/Footers/Footer.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";



function ContactUs() {
  const [nameFocus, setNameFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [numberFocus, setNumberFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("contact-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <ContactUsHeader />
        <div className="main">
          <div className="contact-content">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="5">
                  <h2 className="title">Envianos tus dudas</h2>
                  <p className="description">
                    Nos puedes contactar por cualquier cosa relacionada con nuestros productos.
                    Nosotros responderemos tan pronto como podamos. <br></br>
                    <br></br>
                  </p>
                  <Form id="contact-form" method="post" role="form">
                    <label>Nombre</label>
                    <InputGroup
                      className={nameFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Your Name..."
                        autoComplete="name"
                        placeholder="Tu nombre Aqui..."
                        type="text"
                        onFocus={() => setNameFocus(true)}
                        onBlur={() => setNameFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Email</label>
                    <InputGroup
                      className={emailFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        aria-label="Email Here..."
                        autoComplete="email"
                        placeholder="Email aqui..."
                        type="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <label>Telefono</label>
                    <InputGroup
                      className={numberFocus ? "input-group-focus" : ""}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons tech_mobile"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        autoComplete="number"
                        placeholder="Tu Numero..."
                        type="text"
                        onFocus={() => setNumberFocus(true)}
                        onBlur={() => setNumberFocus(false)}
                      ></Input>
                    </InputGroup>
                    <FormGroup>
                      <label>Mensaje</label>
                      <Input
                        id="message"
                        name="message"
                        rows="6"
                        type="textarea"
                      ></Input>
                    </FormGroup>
                    <div className="submit text-center">
                      <Button
                        className="btn-raised btn-round"
                        color="info"
                        defaultValue="Contact Us"
                        type="submit"
                      >
                        Contactanos
                      </Button>
                    </div>
                  </Form>
                </Col>
                <Col className="ml-auto mr-auto" md="5">
                  <div className="info info-horizontal mt-5">
                    <div className="icon icon-info">
                      <i className="now-ui-icons location_pin"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Find us at the office</h4>
                      <p>
                        Bld Mihail Kogalniceanu, nr. 8, <br></br>
                        7652 Bucharest, <br></br>
                        Romania
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="now-ui-icons tech_mobile"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Give us a ring</h4>
                      <p>
                        Michael Jordan <br></br>
                        +40 762 321 762 <br></br>
                        Mon - Fri, 8:00-22:00
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-info">
                      <i className="business_briefcase-24 now-ui-icons"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Legal Information</h4>
                      <p>
                        Creative Tim Ltd. <br></br>
                        VAT · EN2341241 <br></br>
                        IBAN · EN8732ENGB2300099123 <br></br>
                        Bank · Great Britain Bank
                      </p>
                    </div>
                  </div>
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

export default ContactUs;
