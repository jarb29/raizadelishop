import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';

import {
  CardTitle,
  Container,
  Row,
  Table,
  Col,
} from "reactstrap";


function TablaTorta() {
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
      <div className="wrapper">
        <div className="main">
          <div className="section">
            <Container>
              <Row>
                <Col md="12">
                  <Row>

                  {   
                            store.tiendaSeleccionada.map((producto, i) => {
                              let img = store.baseURL + `/api/tienda/` + producto.avatar
                                return (

                          
                        
                        <Table responsive striped>
                        <tbody >
                        <tr colSpan="12">
                        <td colSpan="3">
                          <p>
                            {producto.nombre}
                          </p>
                        </td>
                        <td colSpan="3">
                              <img
                              alt="..."
                              src={img}
                            ></img>
                        </td>
                        <td colSpan="3">
                          <p >
                            {producto.descripcion}
                          </p>
                        </td>
                        <td colSpan="3">
                            <p>
                                {producto.precio}
                            </p>
                        </td>
                       </tr>
                      </tbody>
                    </Table >
                        )
                        })
                    }   

                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default TablaTorta;
