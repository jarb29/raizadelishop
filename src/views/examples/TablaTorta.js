import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';
import { withRouter } from "react-router";

import {
  Container,
  Row,
  Table,
  Col,
  Label,
  FormGroup,
  Input
} from "reactstrap";


function TablaTorta(props) {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.store();
  }, []);

  

  React.useEffect(() => {
   
    document.body.classList.add("ecommerce-page");
   
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("ecommerce-page");
     
    };
  });
  return (
    <>
            <Container>
              <Row>
                <Col md="12">
                  <Row colSpan="12">
                  <Table responsive striped colSpan="3">
                      <thead>
                          <tr>
                          <th>
                              Producto Id
                            </th>
                            <th className="text-center">
                              A / D
                            </th>
                            <th>
                              Nombre
                            </th>
                            <th>
                              Foto
                            </th>
                            <th>
                              descripcion
                            </th>
                            <th >
                                Precio
                            </th>
                            <th >
                                Estado
                            </th>
                          </tr>
                        </thead>
                        <tbody >
                           {store.tiendaSeleccionada.map((producto, i) => {
                            let img = store.baseURL + `/api/tienda/tienda/` + producto.avatar
                        return (
                              
                              <tr >
                                <td className="text-center">{producto.id}</td>
                                  <td className="text-center">
                                    <FormGroup check>
                                      <Label check>
                                        <Input type="checkbox"
                                        onClick = {e =>{actions.activarDesactivarProducto(e, producto.id, producto.status, props.history)}}
                                        ></Input>
                                        <span className="form-check-sign"></span>
                                      </Label>
                                    </FormGroup>
                                  </td>
                                  <td >
                                      {producto.nombre}
                                  </td>
                                  <td> 
                                  <div >         
                                  <div className="img-container">
                                      <img
                                        alt="..."
                                        src={img}
                                        style ={{width:"50px"}}
                                      ></img>
                                  </div>
                              </div>
                              </td>
                              <td >
                                  {producto.descripcion}
                              </td>
                              <td >
                                {producto.precio}
                              </td>
                              <td >
                                {producto.status}
                            </td>
                            </tr>
                            )}
                            )}  
                          </tbody> 
                    </Table >
                  </Row>
                </Col>
              </Row>
            </Container>
    </>
  );
}

export default withRouter(TablaTorta);
