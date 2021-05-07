import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tabs, Tab, Row, Col, Nav } from "react-bootstrap";
//import { ImageBackground } from "react-native";
import Challenges from "./challenges.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import backImg from "./imgs/fire.jpg";

class Home extends Component {
  state = {};

  style = {
    display: "flex",
    justifyContent: "center",
    align: "center",
  };

  render() {
    return (
      <div>
        <Tabs defaultActiveKey="home">
          <Tab eventKey="home" title="Home">
            {/* ?<ImageBackground source={{ uri: backImg }}></ImageBackground> */}
          </Tab>
          {/* Displays the sign in and sign up */}
          <Tab eventKey="profile" title="Profile">
            <Tab.Container id="sign" defaultActiveKey="signIn">
              <Row>
                <Col>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="signIn" style={this.style}>
                        Sign In
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="signUp" style={this.style}>
                        Sign Up
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Tab.Content>
                    <Tab.Pane eventKey="signIn">
                      <SignIn />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
                <Col>
                  <Tab.Content>
                    <Tab.Pane eventKey="signUp">
                      <SignUp />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Tab>
          {/* Displays the tasks */}
          <Tab eventKey="tasks" title="Tasks">
            <Challenges />
          </Tab>
          {/*  */}
          <Tab eventKey="socials" title="Socials"></Tab>
        </Tabs>
      </div>
    );
  }
}

export default Home;
