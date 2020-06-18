import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';

import {
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
            <Container>
              <Row>
                <Col md="12">
                  <Row colSpan="12">

                  {   
                            store.tiendaSeleccionada.map((producto, i) => {
                              let img = store.baseURL + `/api/tienda/tienda/` + producto.avatar
                                return (

                          
                        
                        <Table responsive striped colSpan="3">
                        
                        <tbody >
                        <tr >
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
    </>
  );
}

export default TablaTorta;
