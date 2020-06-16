import React, { useContext }  from "react";
import { Context } from '../../AppContext';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withRouter } from "react-router";


// reactstrap components
import {
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Button,
} from "reactstrap";
import FileUploader from "./FileUploader"

// core components

function BasicForm(props) {
  const { actions} = useContext(Context);
  const [nombreProductoState, setregisterNombreProductoState] = React.useState(false);
  const [registerPrecioState, setregisterPrecioState] = React.useState(false);



  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };

  return (
    <>
    <div className="space-50" style = {{backgroundColor:"#B2BABB"}}></div>
      <div className="section section-basic" style = {{backgroundColor:"#B2BABB"}}>
        <Container > 
          <div id="inputs">
            <br></br>
            <h4>Area de cargar el Producto</h4>
            <p className="category">Tortas o Salsas</p>
            <Row>
              <Col lg="6" sm="6">
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Nombre Producto"
                    type="text"
                    name= "nombreProducto"
                    onChange= { event => {
                      event.preventDefault();
                      if (verifyLength(event.target.value), 10) {
                        setregisterNombreProductoState("success");
                      } else {
                        setregisterNombreProductoState("error");
                      };
                      actions.handlingInputs(event)
                    }
                  }
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="6" sm="6">
                <FormGroup >
                  <Input
                    className="Precio"
                    type="text"
                    placeholder="Precio"
                    name= "precio"
                    onChange= { event => {
                      event.preventDefault();
                      if (verifyLength(event.target.value), 10) {
                        setregisterPrecioState("success");
                      } else {
                        setregisterPrecioState("error");
                      };
                      actions.handlingInputs(event)
                    }
                  }
                  ></Input>
                </FormGroup>
              </Col>

            </Row>
            <Row>
              <Col lg="6" sm="6">
                <FormControl >
                  <InputLabel htmlFor="grouped-native-select" >Categoria</InputLabel>
                    <Select 
                    native defaultValue="" 
                    id="grouped-native-select"
                    name = 'categoria'
                    
                    onChange={e => {
                      e.preventDefault();
                      actions.handlingInputs(e);
                      
                    }}
                    style ={{width: '400px'}}
                    >
                      <option aria-label="None" value="" />
                        <option value="torta">Tortas</option>
                        <option value='salsas'>Salsas</option>
                    </Select>
                  </FormControl>
                </Col>
                <div id="textareaTags">
            <Row>
              <Col md="12">
                <div className="title">
                  <h4>Descripcion del Producto</h4>
                </div>
                <Input
                  rows="4"
                  cols="80"
                  name="name"
                  type="textarea"
                  placeholder="Agregue la descripcion..."
                  name = "descripcion"
                    onChange= { event => {
                      event.preventDefault();
                      if (verifyLength(event.target.value), 10) {
                        setregisterPrecioState("success");
                      } else {
                        setregisterPrecioState("error");
                      };
                      actions.handlingInputs(event)
                    }
                  }
                ></Input>
              </Col>
              
            </Row>
           </div>
                <Col md="3">
                   <FileUploader />
                </Col>
              </Row>
          </div>
                <Button
                className="btn-round"
                color="info"
                href="#pablo"
                size="lg"
                onClick = {e => {actions.handleSubmitProducto(e, props.history)}}
                >
                Ingresar Producto
              </Button>
        </Container>
      </div>
    </>
  );
}

export default withRouter(BasicForm);
