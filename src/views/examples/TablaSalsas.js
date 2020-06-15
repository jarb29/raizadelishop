import React, { useContext,  useEffect }  from "react";
import { Context } from '../../AppContext';

import {
  Container,
  Row,
  Table,
  Col,
} from "reactstrap";


function TablaSalsas() {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.salsas();
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
                            store.tiendaSalsa.map((producto, i) => {
                              let img = store.baseURL + `/api/tienda/` + producto.avatar
                                return (

                          
                        
                        <Table responsive striped colSpan="3">
                        
                        <tbody >
                        <tr >
                        <td >
                        <small>{producto.nombre}</small>
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
                        <small>
                            {producto.descripcion}
                        </small>
                        </td>
                        <td >
                        <small>
                                {producto.precio}
                        </small>
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

export default TablaSalsas;
