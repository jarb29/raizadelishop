import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Input,
  Table,
  Container,
  Row
} from "reactstrap";

// core components

function ContentAreas() {
  return (
      <div className="section">
        <Container>
          <div className="space-70"></div>
          <div className="cd-section" id="contentAreas">
            <h3 className="title">Content Areas</h3>
            <div id="tables">
      
              <Row>
                  <h6>Striped With Checkboxes</h6>
                  <Card className="card-plain">
                    <CardHeader>
                      <CardTitle tag="h4"></CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table responsive striped>
                        <thead>
                          <tr>
                            <th className="text-center">#</th>
                            <th className="text-center"></th>
                            <th>Product Name</th>
                            <th>Type</th>
                            <th className="text-center">Qty</th>
                            <th className="text-right">Price</th>
                            <th className="text-right">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-center">1</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultChecked type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Moleskine Agenda</td>
                            <td>Office</td>
                            <td className="text-center">25</td>
                            <td className="text-right">€ 49</td>
                            <td className="text-right">€ 1,225</td>
                          </tr>
                          <tr>
                            <td className="text-center">2</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Stabilo Pen</td>
                            <td>Office</td>
                            <td className="text-center">30</td>
                            <td className="text-right">€ 10</td>
                            <td className="text-right">€ 300</td>
                          </tr>
                          <tr>
                            <td className="text-center">3</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultChecked type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>A4 Paper Pack</td>
                            <td>Office</td>
                            <td className="text-center">50</td>
                            <td className="text-right">€ 10.99</td>
                            <td className="text-right">€ 109</td>
                          </tr>
                          <tr>
                            <td className="text-center">4</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Apple iPad</td>
                            <td>Meeting</td>
                            <td className="text-center">10</td>
                            <td className="text-right">€ 499.00</td>
                            <td className="text-right">€ 4,990</td>
                          </tr>
                          <tr>
                            <td className="text-center">5</td>
                            <td className="text-center">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultChecked type="checkbox"></Input>
                                  <span className="form-check-sign"></span>
                                </Label>
                              </FormGroup>
                            </td>
                            <td>Apple iPhone</td>
                            <td>Communication</td>
                            <td className="text-center">10</td>
                            <td className="text-right">€ 599.00</td>
                            <td className="text-right">€ 5,999</td>
                          </tr>
                          <tr>
                            <td colSpan="5"></td>
                            <td className="td-total">Total</td>
                            <td className="td-price">€ 35,999</td>
                          </tr>
                        </tbody>
                      </Table>
                    </CardBody>
                  </Card>    
              </Row>
              
            </div>
            <div className="space-50"></div>
            <div id="comments">
              <div className="title">
                <h3>
                  <small>Comments</small>
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
  );
}

export default ContentAreas;
