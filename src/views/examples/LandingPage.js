import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';
import { withRouter } from "react-router";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import FooterDefault from "components/Footers/FooterDefault.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";

function LandingPage(props) {
  const { store, actions } = useContext(Context);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  useEffect(() => {
    if(store.isAuthenticated && store.currentUser.hasOwnProperty('tienda')) props.history.push('/landing-page');
    if(store.isAuthenticated && store.currentUser.hasOwnProperty('admi')) props.history.push('/administrador');
  }, []);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Quienes Somos?</h2>
                <h5 className="description">
                 Tienda dedicada a la venta de productos hechos artesanalamente que se puede disfrutar
                 con la compañia de una taza de tea, cafe o como acompañamiento de otros platos.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-info"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg38.jpg") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "Aperitivos para todos los gustos" <br></br>
                      <br></br>
                      <small>Raiza</small>
                    </p>
                  </div>
                  <div
                    className="image-container image-left-bottom"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg24.jpg") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg39.jpg") + ")"
                    }}
                  ></div>
                  <h3>
                  Aperitivos para todos los gustos!
                  </h3>
                  <p>
                  Amamos los postres, el disfruté de una rica salsa; eso es más que obvio. Por muchos años, una taza de café junto a un postre, una salsa para acompañar con nuestras carnes, pollo, papas fritas o empanadas ha sido un deleite a nuestro paladar que nos relaja llenando de energía a nuestra alma, cuerpo y mente.
                  </p>
                  <p>
                  ¿Quieres recrear nuestro premiun deli experiencia en tu casa? Nuestra online deli tienda te ofrece una variedad de aperitivos, salsas (regalos de alerta) y todo lo esencial para esas tardes o desayunos de relajación que necesitas.
                  </p>
                  <p>
                  Cuatros de nuestros principales productos.
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg19.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Raiza's?</h2>
                <h4 className="description text-white">
                  No te arrepentiras de nuestra esquisita seleccion. 
                </h4>
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/michael.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className="card-description">
                      The networking at Web Summit is like no other European
                      tech conference.
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">Michael Elijah</CardTitle>
                    <p className="category">@michaelelijah</p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/olivia.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className="card-description">
                      The connections you make at Web Summit are unparalleled,
                      we met users all over the world.
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">Olivia Harper</CardTitle>
                    <p className="category">@oliviaharper</p>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/james.jpg")}
                      ></img>
                    </a>
                  </div>
                  <CardBody>
                    <p className="card-description">
                      Web Summit will increase your appetite, your inspiration,
                      and your network.
                    </p>
                  </CardBody>
                  <div className="icon icon-info">
                    <i className="fa fa-quote-right"></i>
                  </div>
                  <CardFooter>
                    <CardTitle tag="h4">James Logan</CardTitle>
                    <p className="category">@jameslogan</p>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>

        <FooterDefault />
      </div>
    </>
  );
}

export default withRouter(LandingPage);
