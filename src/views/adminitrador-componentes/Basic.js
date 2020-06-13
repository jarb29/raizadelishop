import React from "react";




// reactstrap components
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import FileUploader from "../adminitrador-componentes/FileUploader"

// core components

function Basic() {
  const [awesomeFocus, setAwesomeFocus] = React.useState(false);
  const [nucleoFocus, setNucleoFocus] = React.useState(false);

  return (
    <>
      <div className="section section-basic" id="basic-elements" style = {{backgroundColor:"info"}}>
        <Container >    
          <div id="inputs">
            <h4>Area de cargar el Producto Productos</h4>
            <p className="category">Tortas o Salsas</p>
            <Row>
              <Col lg="3" sm="6">
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Nombre Producto"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <FormGroup >
                  <Input
                    className="Precio"
                    defaultValue="Precio"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
               <Col lg="3" sm="6">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className="btn-round btn-block mt-2"
                        color="info"
                      >
                        Seleccione
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Torta
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Salsa
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
              </Col>
            </Row>
          </div>
          <div id="textareaTags">
            <Row>
              <Col md="6">
                <div className="title">
                  <h4>Descripcion del Producto</h4>
                </div>
                <Input
                  rows="4"
                  cols="80"
                  name="name"
                  type="textarea"
                  placeholder="Agregue la descripcion..."
                ></Input>
              </Col>
              <Col md="6">
              <FileUploader />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Basic;
