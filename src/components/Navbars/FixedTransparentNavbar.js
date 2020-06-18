import React, { useContext }  from "react";
import { Context } from '../../AppContext';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  Nav,
  Container,
} from "reactstrap";

import ButtonCarrito from "./ButtonCarrito";

function FixedTransparentNavbar(props) {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const { actions, store} = useContext(Context);



  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="navbar-absolute navbar-transparent" expand="lg">
        <Container>
          <div className="author" style ={{width:"110px", opacity: '0.7', borderImage: '50 round'}}>
            <img
            alt="..."
            className="avatar img-raised"
            src={require("assets/img/logo.jpg")}
            ></img>
          </div>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i
                    aria-hidden={true}
                    className="now-ui-icons design_image"
                  ></i>
                  <p>Categorias</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink" right>
                <DropdownItem tag={Link} to="/e-commerce">
                    <i className="now-ui-icons shopping_shop"></i>
                    Tortas
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/e-commercee">
                    <i className="now-ui-icons shopping_shop"></i>
                    Salsas
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/about-us">
                    <i className="now-ui-icons business_bulb-63"></i>
                    Sobre Nosotros
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contact-us">
                    <i className="now-ui-icons location_pin"></i>
                    Contactanos
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/landing-page">
                    <i className="now-ui-icons education_paper"></i>
                    Home
                  </DropdownItem>
                  { !store.isAuthenticated ?
                  <DropdownItem tag={Link} to="/login-page">
                    <i className="now-ui-icons users_circle-08"></i>
                    Login Page
                  </DropdownItem> : null}
                  { store.isAuthenticated ? 
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="now-ui-icons users_single-02"></i>
                    Profile Page
                  </DropdownItem>: null}
                  <DropdownItem tag={Link} to="/index">
                    <i className="now-ui-icons location_pin"></i>
                    Componentes
                  </DropdownItem>
                  { !store.isAuthenticated ? 
                  <DropdownItem tag={Link} to="/sign-up">
                    <i className="now-ui-icons tech_mobile"></i>
                    Registrate
                  </DropdownItem>: null}
                </DropdownMenu>
              </UncontrolledDropdown>
              { store.isAuthenticated ?
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={(e) => {
                    actions.logout(e, props.history)
                  }}
                >
                  <i className="now-ui-icons users_circle-08"></i>
                  <p>Cerrar sesion</p>
                </DropdownToggle>
              </UncontrolledDropdown> :null}
              {store.carrito.length !==0? <ButtonCarrito />: null}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(FixedTransparentNavbar);
