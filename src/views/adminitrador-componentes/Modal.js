/*eslint-disable*/
import React from "react";

import {
  Button,
  Container,
  Row,
  Col,
  Modal,
  ModalFooter
} from "reactstrap";
import Carrito from "views/index-sections/Carrito";
import SimpleTable from "../index-sections/SimpleTable"

// core components

function Javascript() {

  const [modalClassic, setModalClassic] = React.useState(false);

  // collapse states and functions
  const [collapses, setCollapses] = React.useState([1]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };
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
                <ModalFooter>
                  <Button color="default" type="button">
                    Nice Button
                  </Button>
                  <Button color="danger" onClick={() => setModalClassic(false)}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
            </Col>
        </Container>
      </div>
  );
}

export default Javascript;
