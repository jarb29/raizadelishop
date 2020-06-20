import React, { useContext, useEffect }  from "react";
import { Context } from '../../AppContext';
import { withRouter } from "react-router";

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import FooterDefault from "components/Footers/FooterDefault.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";
import TablaProfile from "./TablaProfile";

function ProfilePage(props) {
  const { store, actions} = useContext(Context);
  const [pills, setPills] = React.useState("1");
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("profile-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });


  useEffect(() => {
    actions.store();
    actions.profilePage()
    if(store.isAuthenticated && store.currentUser.hasOwnProperty('administrador')) props.history.push('/administrador');
  }, []);

 


  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <ProfilePageHeader />
        <div className="section">
          <Container>
            <Row>
              <Col md="12">
                <TabContent className="gallery" activeTab={"pills" + pills}>
                  <TabPane tabId="pills1">
                    <Row>
                      <Col className="ml-auto mr-auto" md="12">
                        <Card>
                          <CardBody>
                            <CardTitle tag="h2">Historial de Pedidos</CardTitle>
                            <TablaProfile />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills2">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/project8.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Social Analytics</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Analytics</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons ui-2_chat-round"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">
                              Listen to Social Conversations
                            </h5>
                            <p className="description">
                              Gain access to the demographics, psychographics,
                              and location of unique people who talk about your
                              brand.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="now-ui-icons design-2_ruler-pencil"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Social Conversions</h5>
                            <p className="description">
                              Track actions taken on your website that
                              originated from social, and understand the impact
                              on your bottom line.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="pills3">
                    <Row>
                      <Col className="ml-auto mr-auto" md="5">
                        <Card
                          className="card-background card-background-product card-raised"
                          style={{
                            backgroundImage:
                              "url(" + require("assets/img/bg25.jpg") + ")"
                          }}
                        >
                          <CardBody>
                            <CardTitle tag="h2">Interior Redesign</CardTitle>
                            <p className="card-description">
                              Insight to help you create, connect, and convert.
                              Understand Your Audience's Interests, Influence,
                              Interactions, and Intent. Discover emerging topics
                              and influencers to reach new audiences.
                            </p>
                            <Badge className="badge-neutral">Interior</Badge>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col md="5">
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="now-ui-icons design_palette"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Colors adjustments</h5>
                            <p className="description">
                              Gain access to the demographics, psychographics,
                              and location of unique people who talk about your
                              brand.
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="now-ui-icons design_scissors"></i>
                          </div>
                          <div className="description">
                            <h5 className="info-title">Performance Clothing</h5>
                            <p className="description">
                              Unify data from Facebook, Instagram, Twitter,
                              LinkedIn, and Youtube to gain rich insights from
                              easy-to-use reports.
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </Col>
            </Row>
          </Container>
        </div>
        <FooterDefault />
      </div>
    </>
  );
}

export default withRouter(ProfilePage);
