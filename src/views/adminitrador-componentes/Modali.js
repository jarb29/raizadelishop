import React, { useContext }  from "react";
import { Context } from '../../AppContext';

import {
  Button,
  Container,
  Col,
  Modal,
  ModalFooter
} from "reactstrap";
import Carrito from "views/index-sections/Carrito";
import ModalCompra from "./ModalCompra";


// core components

function Modali(props) {
  const { store} = useContext(Context);

  const [modalClassic, setModalClassic] = React.useState(false);



  return (

      <div >
        
        <Container >
            <Col md="12">
              <Button
                color="info"
                className="mr-1"
                style ={{marginTop: 0, marginBottom:'0px', paddingBottom:"10px"}}
                onClick={() => setModalClassic(true)}
              >
                <i className="now-ui-icons shopping_cart-simple"></i> Carrito
              </Button>
              <Modal
                isOpen={modalClassic}
                toggle={() => setModalClassic(false)}
 
              >
                <div className="modal-header justify-content-center">
                  <button
                    aria-hidden={true}
                    className="close"
                    onClick={() => setModalClassic(false)}
                    type="button"
                  >
                   <i className="now-ui-icons shopping_cart-simple"></i>
                  </button>
                </div>
                <div className="modal-body">
               <div >
                    <Carrito />
                </div>
          
                </div>
                <ModalFooter style ={{margin:0}}>
                  <Button color="danger" onClick={() => setModalClassic(false)}>
                    Cerrar
                  </Button>
   
                  <ModalCompra  />
                </ModalFooter>
              </Modal>
            </Col>
        </Container>
      </div>
  );
}

export default Modali;
