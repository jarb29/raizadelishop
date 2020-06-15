/*eslint-disable*/
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  ModalFooter
} from "reactstrap";

// core components

function ModalCompra() {
  // focus states and functions for login modal
  const [nameFocus, setNameFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  // modals states and functions
  const [modalClassic, setModalClassic] = React.useState(false);
  const [modalMini, setModalMini] = React.useState(false);
  const [modalNotice, setModalNotice] = React.useState(false);
  const [modalLogin, setModalLogin] = React.useState(false);
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
    <>
        <Container>
              <Button
                onClick={() => setModalMini(true)}
                className="btn-round"
                color="info"
                type="button"
              >
                Comprar{" "}
                <i className="now-ui-icons arrows-1_minimal-right"></i>
              </Button>
              <Modal
                modalClassName="modal-mini modal-info"
                isOpen={modalMini}
                toggle={() => setModalMini(false)}
              >
                <div className="modal-header justify-content-center">
                  
                  <div  style ={{width:"110px", opacity: '0.7', borderImage: '50 round'}}>
                        <img
                        alt="..."
                        className="avatar img-raised"
                        src={require("assets/img/logo.jpg")}
                        ></img>
                    </div>
         
                </div>
                <div className="modal-body">
                  <p>Esta seguro de realizar su compra?</p>
                </div>
                <ModalFooter>
               <Button
                    className="btn-link"
                    color="neutral"
                    onClick={() => setModalMini(false)}
                  >
                    Cerrar
                  </Button>
                  <Button className="btn-neutral" color="link" type="button">
                    Comprar
                  </Button>
                
                </ModalFooter>
              </Modal>
        </Container>
    </>
  );
}

export default ModalCompra;
