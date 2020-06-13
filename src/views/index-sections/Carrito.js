import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Table,
  Row,
  Container,
  Col
} from "reactstrap";


function Carrito() {
  return (
          <div >
            <Container >
              <Row >
                <Col md="12">
                  <Card className="card-plain">
                    <CardBody>
                      <Table responsive striped>
                        <thead colSpan="3">
                          <tr>
                            <th className="text-center"></th>
                            <td className="td-total">Compras</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>   
                            <td className="td-name" colSpan="3">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Suede Biker Jacket
                              </a>
                              <br></br>
                              <small>by Saint Laurent</small>
                            </td>
                            <td  >
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={require("assets/img/saint-laurent.jpg")}
                                ></img>
                              </div>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              3,390
                            </td>
                            <td className="td-number">
                              1{" "}
                              <ButtonGroup>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-delete"></i>
                                </Button>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-add"></i>
                                </Button>
                              </ButtonGroup>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              549
                            </td>
                          </tr>
                          <tr >
                            <td className="td-name"  colSpan="3" >
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Jersey T-Shirt
                              </a>
                              <br></br>
                              <small>by Balmain</small>
                            </td>
                            <td>
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={require("assets/img/balmain.jpg")}
                                ></img>
                              </div>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              499
                            </td>
                            <td className="td-number">
                              2{" "}
                              <ButtonGroup>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-delete"></i>
                                </Button>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-add"></i>
                                </Button>
                              </ButtonGroup>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              998
                            </td>
                          </tr>
                          <tr>
                            <td className="td-name"  colSpan="3">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Slim-Fit Swim Short
                              </a>
                              <br></br>
                              <small>by Prada</small>
                            </td>
                            <td>
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={require("assets/img/prada.jpg")}
                                ></img>
                              </div>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              200
                            </td>
                            <td className="td-number">
                              1{" "}
                              <ButtonGroup>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-delete"></i>
                                </Button>
                                <Button color="info" size="sm">
                                  <i className="now-ui-icons ui-1_simple-add"></i>
                                </Button>
                              </ButtonGroup>
                            </td>
                            <td className="td-number">
                              <small>€</small>
                              799
                            </td>
                         
                          </tr>
                          <tr>
                            <td colSpan="5"></td>
                            <td className="td-total">Total</td>
                            <td className="td-price">
                              <small>€</small>
                              2,346
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
        </div>
  );
}

export default Carrito;
