/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function FixedTransparentNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
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
                  <DropdownItem tag={Link} to="/about-us">
                    <i className="now-ui-icons business_bulb-63"></i>
                    About-us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contact-us">
                    <i className="now-ui-icons location_pin"></i>
                    Contact Us
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/landing-page">
                    <i className="now-ui-icons education_paper"></i>
                    Landing Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/login-page">
                    <i className="now-ui-icons users_circle-08"></i>
                    Login Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/e-commerce">
                    <i className="now-ui-icons shopping_shop"></i>
                    Ecommerce Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/e-commerce">
                    <i className="now-ui-icons shopping_shop"></i>
                    Ecommerce Page 2
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/profile-page">
                    <i className="now-ui-icons users_single-02"></i>
                    Profile Page
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sign-up">
                    <i className="now-ui-icons tech_mobile"></i>
                    Signup Page
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default FixedTransparentNavbar;
