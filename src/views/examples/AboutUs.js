import React from "react";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import Footer from "components/Footers/Footer.js";
import FixedTransparentNavbar from "components/Navbars/FixedTransparentNavbar";

function AboutUs() {
  const [specialitySelect, setSpecialitySelect] = React.useState(null);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("about-us");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("about-us");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <FixedTransparentNavbar />
      <div className="wrapper">
        <AboutUsHeader />
        <div className="section">
          <div className="about-description text-center">
            <div className="features-3">
              <Container>
                <Row>
                  <Col className="mr-auto ml-auto" md="8">
                    <h2 className="title">Simpler. Smarter. Faster.</h2>
                    <h4 className="description">
                      The CloudCheckr Cloud Management Platform (CMP) provides
                      full visibility and control to reduce costs, improve
                      cybersecurity posture, and automate critical tasks.
                    </h4>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-success icon-circle">
                        <i className="now-ui-icons objects_globe"></i>
                      </div>
                      <h4 className="info-title">Asset Management</h4>
                      <p className="description">
                        Cross-account dashboards provide sophisticated reporting
                        for enterprise.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-info icon-circle">
                        <i className="now-ui-icons education_atom"></i>
                      </div>
                      <h4 className="info-title">Resource Utilization</h4>
                      <p className="description">
                        CloudCheckr provides summary and detailed usage
                        statistics for resources.
                      </p>
                    </div>
                  </Col>
                  <Col md="4">
                    <div className="info info-hover">
                      <div className="icon icon-primary icon-circle">
                        <i className="now-ui-icons tech_watch-time"></i>
                      </div>
                      <h4 className="info-title">Self-Healing</h4>
                      <p className="description">
                        CloudCheckr enables users to save money, time, and
                        effort.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="separator-line bg-info"></div>
          <div className="projects-5">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title">We have many advantages</h2>
                  <h4 className="description">
                    This is the paragraph where you can write more details about
                    your projects. Keep you user engaged by providing meaningful
                    information.
                  </h4>
                  <div className="section-space"></div>
                </Col>
              </Row>
              <Row>
                <Col className="ml-auto" md="5">
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
                        Interactions, and Intent. Discover emerging topics and
                        influencers to reach new audiences.
                      </p>
                      <Badge className="badge-neutral">Analytics</Badge>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="mr-auto" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons ui-2_chat-round"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">
                        Listen to Social Conversations
                      </h4>
                      <p className="description">
                        Gain access to the demographics, psychographics, and
                        location of unique people who talk about your brand.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons business_chart-pie-36"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Performance Analyze</h4>
                      <p className="description">
                        Unify data from Facebook, Instagram, Twitter, LinkedIn,
                        and Youtube to gain rich insights from easy-to-use
                        reports.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-danger">
                      <i className="now-ui-icons design-2_ruler-pencil"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Social Conversions</h4>
                      <p className="description">
                        Track actions taken on your website that originated from
                        social, and understand the impact on your bottom line.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              <hr></hr>
              <Row>
                <Col className="ml-auto mt-5" md="5">
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons users_single-02"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Work With Any Team</h4>
                      <p className="description">
                        Whether it’s for work or even the next family vacation,
                        Trello helps your team.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons business_chart-bar-32"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">A Productivity Platform</h4>
                      <p className="description">
                        Integrate the apps your team already uses directly into
                        your workflow.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal">
                    <div className="icon icon-warning">
                      <i className="now-ui-icons arrows-1_refresh-69"></i>
                    </div>
                    <div className="description">
                      <h4 className="info-title">Always In Sync</h4>
                      <p className="description">
                        No matter where you are, Trello stays in sync across all
                        of your devices.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col className="mr-auto" md="5">
                  <Card
                    className="card-background card-background-product card-raised"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/project9.jpg") + ")"
                    }}
                  >
                    <CardBody>
                      <CardTitle tag="h2">Trello lets you work.</CardTitle>
                      <p className="card-description text-white">
                        Trello’s boards, lists, and cards enable you to organize
                        and prioritize your projects in a fun, flexible and
                        rewarding way.
                      </p>
                      <Badge className="badge-neutral">Trello</Badge>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>



      




          <div className="about-office">
            <Container>
              <Row className="text-center">
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Our office is our second home</h2>
                  <h4 className="description">
                    Here are some pictures from our office. You can see the
                    place looks like a palace and is fully equiped with
                    everything you need to get the job done.
                  </h4>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg27.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg24.jpg")}
                  ></img>
                </Col>
                <Col md="4">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/bg28.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project6.jpg")}
                  ></img>
                </Col>
                <Col md="6">
                  <img
                    alt="..."
                    className="rounded img-raised"
                    src={require("assets/img/project14.jpg")}
                  ></img>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
