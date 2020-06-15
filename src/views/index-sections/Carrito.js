import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';

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
  const { store, actions } = useContext(Context);
 // const [carrito, setCarrito] = React.useState([]);
 console.log(store.totalCarrito, "dentro del componente")



  return (
          <div >
            <Container >
              <Row >
                <Col md="12">
                  <Card className="card-plain">
                    <CardBody>
                      <Table striped>
                      <thead>
                          <tr>
                            <th>
                              <small>Nombre</small>
                            </th>
                            <th>
                              <small>foto</small>
                            </th>
                              <th className="text-center">
                             <small>descripcion</small>
                            </th>
                            <th className="text-right">
                              <small> Precio</small>
                            </th>
                            <th className="text-right">
                              <small> Cantidad</small>
                            </th>
                          </tr>
                        </thead>

                        <tbody >
                        {   
                            store.carrito.map((producto, i) => {
                              let img = store.baseURL + `/api/tienda/` + producto.producto.avatar
                              console.log(producto, "dentro del map del carrito")
                             
                                return (  
                        
                        <tr key ={i} >
                          <td >
                            <small>{producto.producto.nombre}</small>
                          </td>
                          <td>
                              <div className="img-container">
                                  <img
                                    alt="..."
                                    src={img}
                                    style ={{width:"50px"}}
                                  ></img>
                              </div>
                          </td>
                          <td >
                            <small>
                                {producto.producto.descripcion}
                            </small>
                          </td>
                          <td >
                            <small>
                                {producto.producto.precio}
                            </small>
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
                          </tr>
                           );}
                           )} 
                         
                        </tbody>
                      </Table>
                      <Table>
                          <tr className="td-number">
                             <td >
                             <small>Total a pagar:  </small>{" "}{store.totalCarrito} CLP
                            </td>
                          </tr>
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
