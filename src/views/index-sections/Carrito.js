import React from "react";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Table,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components

function Carrito() {
  return (
    <div >
    
              <Row >
                <Col md="12">
                  <h4>
                    <small>Compras</small>
                  </h4>
                </Col>
                <Col md="12">
                  <Card className="card-plain">
                    <CardBody>
                      <Table className="table">
                        <thead>
                          <tr>
                            <th className="text-center"></th>
                            <th>Product</th>
                       
                            <th className="text-right">Price</th>
                            <th className="text-right">Qty</th>
                            <th className="text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={require("assets/img/saint-laurent.jpg")}
                                ></img>
                              </div>
                            </td>
                            <td className="td-name">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Suede Biker Jacket
                              </a>
                              <br></br>
                              <small>by Saint Laurent</small>
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
                            <td className="td-actions">
                              <Button
                                color="neutral"
                                data-placement="left"
                                id="tooltip109218971"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                placement="left"
                                target="tooltip109218971"
                              >
                                Remove item
                              </UncontrolledTooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={require("assets/img/balmain.jpg")}
                                ></img>
                              </div>
                            </td>
                            <td className="td-name">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Jersey T-Shirt
                              </a>
                              <br></br>
                              <small>by Balmain</small>
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
                            <td className="td-actions">
                              <Button
                                color="neutral"
                                data-placement="left"
                                id="tooltip230976474"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                placement="left"
                                target="tooltip230976474"
                              >
                                Remove item
                              </UncontrolledTooltip>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="img-container">
                                <img
                                  alt="..."
                                  src={require("assets/img/prada.jpg")}
                                ></img>
                              </div>
                            </td>
                            <td className="td-name">
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Slim-Fit Swim Short
                              </a>
                              <br></br>
                              <small>by Prada</small>
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
                            <td className="td-actions">
                              <Button
                                color="neutral"
                                data-placement="left"
                                id="tooltip11104356"
                                type="button"
                              >
                                <i className="now-ui-icons ui-1_simple-remove"></i>
                              </Button>
                              <UncontrolledTooltip
                                delay={0}
                                placement="left"
                                target="tooltip11104356"
                              >
                                Remove item
                              </UncontrolledTooltip>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="3"></td>
                            <td className="td-total">Total</td>
                            <td className="td-price">
                              <small>€</small>
                              2,346
                            </td>
                            <td className="text-right" colSpan="3">
                              <Button
                                className="btn-round"
                                color="info"
                                type="button"
                              >
                                Comprar{" "}
                                <i className="now-ui-icons arrows-1_minimal-right"></i>
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
        </div>
  );
}

export default Carrito;
