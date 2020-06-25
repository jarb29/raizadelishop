import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';

// reactstrap components
import {
  CardBody,
  Table,
  Row,
  Col,
} from "reactstrap";



function TablaDetalleFactura() {
  const { store} = useContext(Context);

  console.log(store.detalleFactura, "para ver que es")

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
                              Producto
                            </th>
                            <th className="text-right">
                              Cantidad encargada
                            </th>
                            <th className="text-right">
                              Categoria
                            </th>
                            <th className="text-right">
                                Precio
                            </th>
                            <th className="text-right">
                              Total/Factura
                            </th>
                          </tr>
                        </thead>

                        <tbody >
                        {   
                            store.detalleFactura.map((producto, i) => {
                              const a = producto.date_created.split("2020")[0].split(",")[1]
                              
                                return (  
                        <tr key ={i} >
                          <td className="text-center">
                            {a}
                          </td>
                          <td className="text-center">
                            {producto.factura_id}
                          </td>
                          <td className="text-center">
                          {producto.producto_nombre}
                          </td>
                          <td className="text-center">
                          {producto.cantidad_producto_comprado}
                          </td>
                          <td className="text-center">
                          {producto.productos_categoria}
                          </td>
                          <td className="text-center">
                          {producto.productos_precio}
                          </td>
                          <td className="text-center">
                          {producto.total_factura}
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

export default TablaDetalleFactura;
