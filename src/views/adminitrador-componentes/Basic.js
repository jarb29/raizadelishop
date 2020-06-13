import React from "react";
// react plugin that creates an input with badges
import TagsInput from "react-tagsinput";
// react plugin used to create DropdownMenu for selecting items
import Select from "react-select";
// react plugin used to create switch buttons
import Switch from "react-bootstrap-switch";



// reactstrap components
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Basic() {
  const [awesomeFocus, setAwesomeFocus] = React.useState(false);
  const [nucleoFocus, setNucleoFocus] = React.useState(false);
  const [singleSelect, setSingleSelect] = React.useState(null);
  const [chooseCity, setChooseCity] = React.useState(null);
  const [tagsValue, setTagsValue] = React.useState([
    "Amsterdam",
    "Washington",
    "Sydney",
    "Beijing"
  ]);
  
  return (
    <>
      <div className="section section-basic" id="basic-elements">
        <Container>   
          <div className="space-70"></div>
          <div id="inputs">
            <h4>Inputs</h4>
            <p className="category">Form Controls</p>
            <Row>
              <Col lg="3" sm="6">
                <FormGroup>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <FormGroup className="has-success">
                  <Input
                    className="form-control-success"
                    defaultValue="Success"
                    type="text"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <FormGroup className="has-danger">
                  <Input
                    className="form-control-danger"
                    defaultValue="Error Input"
                    type="email"
                  ></Input>
                </FormGroup>
              </Col>
              <Col lg="3" sm="6">
                <InputGroup className={awesomeFocus ? "input-group-focus" : ""}>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="fa fa-user-circle"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Left Font Awesome Icon"
                    type="text"
                    onFocus={() => setAwesomeFocus(true)}
                    onBlur={() => setAwesomeFocus(false)}
                  ></Input>
                </InputGroup>
              </Col>
              <Col lg="3" sm="6">
                <InputGroup className={nucleoFocus ? "input-group-focus" : ""}>
                  <Input
                    placeholder="Right Nucleo Icon"
                    type="text"
                    onFocus={() => setNucleoFocus(true)}
                    onBlur={() => setNucleoFocus(false)}
                  ></Input>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="now-ui-icons users_single-02"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </div>
          <div className="space-70"></div>
          <div className="select">
            <Row>
              <Col md="6">
                <div className="title">
                  <h4>Customizable Select</h4>
                </div>
                <Row>
                  <Col lg="6" md="8" sm="5">
                    <Select
                      className="react-select react-select-info mt-2"
                      onChange={value => setSingleSelect(value)}
                      classNamePrefix="react-select"
                      placeholder="Single Select"
                      value={singleSelect}
                      name=""
                      options={[
                        {
                          value: "",
                          label: "Single Option",
                          isDisabled: true
                        },
                        { value: "2", label: "Foobar" },
                        { value: "3", label: "Is great" }
                      ]}
                    ></Select>
                  </Col>
                  <Col lg="6" md="8" sm="5">
                    <Select
                      className="react-select react-select-info mt-2"
                      onChange={value => setChooseCity(value)}
                      classNamePrefix="react-select"
                      closeMenuOnSelect={false}
                      placeholder="Choose City"
                      value={chooseCity}
                      isMulti
                      name=""
                      options={[
                        {
                          value: "",
                          label: " Multiple Options",
                          isDisabled: true
                        },
                        { value: "2", label: "Paris " },
                        { value: "3", label: "Bucharest" },
                        { value: "4", label: "Rome" },
                        { value: "5", label: "New York" },
                        { value: "6", label: "Miami " },
                        { value: "7", label: "Piatra Neamt" },
                        { value: "8", label: "Paris " },
                        { value: "9", label: "Bucharest" },
                        { value: "10", label: "Rome" },
                        { value: "11", label: "New York" },
                        { value: "12", label: "Miami " },
                        { value: "13", label: "Piatra Neamt" },
                        { value: "14", label: "Paris " },
                        { value: "15", label: "Bucharest" },
                        { value: "16", label: "Rome" },
                        { value: "17", label: "New York" },
                        { value: "18", label: "Miami " },
                        { value: "19", label: "Piatra Neamt" }
                      ]}
                    ></Select>
                  </Col>
                </Row>
              </Col>
              <Col md="4">
                <div className="title">
                  <h4>Dropdown &amp; Dropup</h4>
                </div>
                <Row>
                  <Col lg="5" md="8">
                    <UncontrolledDropdown>
                      <DropdownToggle
                        caret
                        className="btn-round btn-block mt-2"
                        color="info"
                      >
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                  <Col lg="5" md="8">
                    <UncontrolledDropdown direction="up">
                      <DropdownToggle
                        caret
                        className="btn-round btn-block mt-2"
                        color="info"
                      >
                        Dropup
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="space-70"></div>
          <div id="textareaTags">
            <Row>
              <Col md="6">
                <div className="title">
                  <h4>Textarea</h4>
                </div>
                <Input
                  rows="4"
                  cols="80"
                  name="name"
                  type="textarea"
                  placeholder="You can write your text here..."
                ></Input>
              </Col>
            </Row>
          </div>


          <div className="space-70"></div>
          <Row id="checkRadios">
            <Col lg="3" sm="6">
              <p className="category">Toggle Buttons</p>
              <Switch offColor="" offText="" onColor="" onText=""></Switch>
              <br></br>
              <Switch defaultValue={false} offColor="" onColor=""></Switch>
            </Col>
        
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Basic;
