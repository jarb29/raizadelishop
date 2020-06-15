import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
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
  const { store, actions } = useContext(Context);
  // focus for inputs
  const [emailFocus, setEmailFocus] = React.useState(false);


  React.useEffect(() => {
   

    document.body.classList.add("ecommerce-page");
   
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
     
    };
  });

  useEffect(() => {
    actions.salsas();
  }, []);
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <EcommerceHeader />
        <div className="main">
          <div className="section">
            <Container>
              <h2 className="section-title">Encuentar las salsas que te gusten</h2>
              <Row>
                <Col md="12">
                  <Row>

                  {   
                            store.tiendaSalsa.map((producto, i) => {
                              let img = store.baseURL + `/api/tienda/` + producto.avatar
                                return (
                          
                        <Col lg="4" md="6" key ={i}>
                        <Card className="card-product card-plain">
                          <div className="card-image">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img
                              alt="..."
                              src={img}
                            ></img>
                          </a>
                        </div>
                        
                        <CardBody>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                                <CardTitle tag="h4">{producto.nombre}</CardTitle>
                          </a>
                          <p className="card-description">
                            {producto.descripcion}
                          </p>
                          <CardFooter>
                            <div className="price-container">
                                <span className="price">$ {producto.precio}</span>
                            </div>
                            <Button
                              className="btn-neutral btn-icon btn-round pull-right"
                              color="success"
                              data-placement="left"
                              id={`tooltip${i}`}
                              onClick={() => actions.addToCart(producto)}
                            >
                            <i className="now-ui-icons shopping_cart-simple"></i>
                            </Button>
                            <UncontrolledTooltip
                              delay={i}
                              placement="left"
                              target={`tooltip${i}`}
                            >
                              Agregar al Carrito
                            </UncontrolledTooltip>
                          </CardFooter>
                        </CardBody>
                      </Card>
                    </Col>
                        )
                        })
                    }   
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
