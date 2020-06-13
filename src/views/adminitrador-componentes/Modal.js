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
        <Container>
          <Row id="modals">
            <Col md="12">
              <Button
                color="info"
                className="mr-1"
                onClick={() => setModalClassic(true)}
              >
                <i className="now-ui-icons files_single-copy-04"></i> Classic
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
                    <i className="now-ui-icons ui-1_simple-remove"></i>
                  </button>
                  <h4 className="title title-up">Modal title</h4>
                </div>
                <div className="modal-body">
                  <p>
                    <Carrito />
                  </p>
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
            <br></br>
            <br></br>
          </Row>
        </Container>
      </div>
  );
}

export default Javascript;
