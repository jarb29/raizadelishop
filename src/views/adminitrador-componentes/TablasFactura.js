import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';

// reactstrap components
import {
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";



function TablasFactura() {
  const { store} = useContext(Context);


  return (
          <div >
              <Row >
                <Col md="12">
                    <CardBody>
                      <Table striped>
                      <thead>
                          <tr>
                            <th>
                              Fecha
                            </th>
                            <th>
                              Factura
                            </th>
                            <th>
                              Apellido
                            </th>
                            <th >
                               Nombre
                            </th>
                            <th >
                              Email
                            </th>
                            <th >
                                Telefono
                            </th>
                            <th >
                              Total/Factura
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
                            {a}
                          </td>
                          <td className="text-center">
                            {producto.factura_id}
                          </td>
                          <td className="text-center">
                          {producto.usuario_apellido}
                          </td>
                          <td className="text-center">
                          {producto.usuario_nombre}
                          </td>
                          <td className="text-center">
                          {producto.usuario_email}
                          </td>
                          <td className="text-center">
                          {producto.usuario_telefono}
                          </td>
                          <td className="text-center">
                          {producto.total}
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
