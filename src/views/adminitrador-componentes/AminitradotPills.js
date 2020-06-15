import React from "react";

// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";
import Carrito from "views/index-sections/Carrito";
import Ecommerce from "views/examples/Ecommerce";
import TablaTorta from "views/examples/TablaTorta";

// core components

function AdministradorPills() {

  const [iconVerticalTabs, setIconVerticalTabs] = React.useState("1");

  return (

      <div className="section section-pills">
        <Container>
                <Row>
                  <Col lg="3" md="6">
                    <Nav
                      className="nav-pills-info nav-pills-icons flex-column"
                      pills
                      role="tablist"
                    >
                      <NavItem>
                        <NavLink
                          className={iconVerticalTabs === "1" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setIconVerticalTabs("1");
                          }}
                        >
                          <i className="now-ui-icons objects_umbrella-13"></i>
                          Tortas
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={iconVerticalTabs === "2" ? "active" : ""}
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault();
                            setIconVerticalTabs("2");
                          }}
                        >
                          <i className="now-ui-icons ui-2_settings-90"></i>
                          Salsas
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col md="8">
                    <TabContent
                      activeTab={"iconVerticalTabs" + iconVerticalTabs}
                    >
                      <TabPane tabId="iconVerticalTabs1">
                      <TablaTorta />
                      </TabPane>
                      <TabPane tabId="iconVerticalTabs2">
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas. <br></br>
                        <br></br>
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </TabPane>
                    </TabContent>
                  </Col>
                </Row>
        </Container>
      </div>

  );
}

export default AdministradorPills;
