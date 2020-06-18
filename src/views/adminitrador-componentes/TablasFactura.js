import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';

// reactstrap components
import {
  Button,
  ButtonGroup,
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";



function TablasFactura() {
  const { store, actions } = useContext(Context);


  return (
          <div >
              <Row >
                <Col md="12">
                    <CardBody>
                      <Table striped>
                      <thead>
                          <tr>
                            <th>
                              <small>Fecha/Factura</small>
                            </th>
                            <th>
                              <small>Factura</small>
                            </th>
                            <th>
                              <small>Apellido</small>
                            </th>
                            <th className="text-right">
                              <small> Nombre</small>
                            </th>
                            <th className="text-right">
                              <small>Email</small>
                            </th>
                            <th className="text-right">
                                <small>Telefono</small>
                            </th>
                            <th className="text-right">
                              <small>Total/Factura</small>
                            </th>
                          </tr>
                        </thead>

                        <tbody >
                        {   
                            store.factura.map((producto, i) => {
                              const a = producto.factura_creada.split("2020")[0].split(",")[1]
                              
                                return (  
                        <tr key ={i} >
                          <td className="text-center">
                            <small>{a}</small>
                          </td>
                          <td className="text-center">
                            <small>{producto.factura_id}</small>
                          </td>
                          <td className="text-center">
                          <small>{producto.usuario_apellido}</small>
                          </td>
                          <td className="text-center">
                          <small>{producto.usuario_nombre}</small>
                          </td>
                          <td className="text-center">
                          <small>{producto.usuario_email}</small>
                          </td>
                          <td className="text-center">
                          <small>{producto.usuario_telefono}</small>
                          </td>
                          <td className="text-center">
                          <small>{producto.total}</small>
                          </td>
                          </tr>
                           );}
                           )} 
                         
                        </tbody>
                      </Table>
                    </CardBody>
                </Col>
              </Row>
        </div>
  );
}

export default TablasFactura;
