import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import AboutUsHeader from "components/Headers/AboutUsHeader.js";

import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";
import FooterDefault from "components/Footers/FooterDefault";

function AboutUs() {
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Las experiencias gastronómicas de 
                  calidad comienzan con ingredientes de calidad.</h2>
                    <h4 className="description">
                       Nuestros productos horneados se hornean en la 
                       forma tradicional de la década de 1950, con 
                       fermentación prolongada, lo que reduce la necesidad 
                       de usar grandes cantidades de levadura y permite que se 
                       desarrolle el gluten.
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success icon-circle">
                        <i className="now-ui-icons objects_globe"></i>
                      </div>
                      <h4 className="info-title">Hecho Artesanal</h4>
                      <p className="description">
                      Empleamos métodos tradicionales.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons education_atom"></i>
                      </div>
                      <h4 className="info-title">Ingredientes</h4>
                      <p className="description">
                        Utilizamos ingredientes cuidadosamente seleccionados.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons tech_watch-time"></i>
                      </div>
                      <h4 className="info-title">Equipo</h4>
                      <p className="description">
                      Equipos de última generación para crear nuestra 
                       gama de productos horneados. 
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">Nuestra filosofía.</h2>
                  <h4 className="description">
                  Cada ingrediente se selecciona a mano y 
                      nuestras recetas se ajustan y se prueban constantemente. 
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project8.jpg") + ")"
                    }}
                  >
                    <CardBody>
                      <p className="card-description">
 
                      Todo para que podamos ofrecer a nuestros clientes un producto 
                      y servicio superior.
                      </p>
                      <Badge className="badge-neutral">Amamos lo que hacemos.</Badge>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                      En Raiza's, nuestro objetivo es trabajar con socios que tengan 
                      la misma filosofía que nosotros.
                      </h4>
   
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons business_chart-pie-36"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Nuestro equipo tiene una 
                      actitud intransigente hacia la calidad.</h4>
                   
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons design-2_ruler-pencil"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Nos impulsa 
                      la mejora continua.</h4>
                   
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="about-office">
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Nuestra gama es innovadora y moderna para que pueda destacar entre la multitud.</h2>
                  <h4 className="description">
                  Con nuestro servicio creativo a la medida, trabajaremos juntos para desarrollar un producto que satisfaga sus necesidades. 
                  Es esta dedicación al servicio personalizado lo que nos ha
                   dado nuestra reputación sin igual en el sector de la 
                   panadería, tanto en Chile como en el extranjero.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg27.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg24.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg28.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project6.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project14.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <FooterDefault />
      </div>
    </>
  );
}

export default AboutUs;
