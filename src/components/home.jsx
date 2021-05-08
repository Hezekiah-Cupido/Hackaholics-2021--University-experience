import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tabs, Tab, Row, Col, Nav, Card } from "react-bootstrap";
//import { ImageBackground } from "react-native";
import Challenges from "./challenges.jsx";
import SignUp from "./SignUp.jsx";
import SignIn from "./SignIn.jsx";
import Profile from "./profile.jsx";
import { totpoints } from "./challenges.jsx";
//import points from "./profile.jsx";

class Home extends Component {
  state = {
    points: 0,
  };

  //   styles = (theme: Theme) => createStyles({
  //     card: {
  //       height: "50vh"
  //     }
  //   });

  style = {
    display: "flex",
    justifyContent: "center",
    align: "center",
  };

  pointsCallBack = (points) => {
    this.setState({ points: points });
  };

  render() {
    return (
      <div>
        <Row>
          <Col>
            <img
              width="1710rem"
              height="150rem"
              src="https://coolbackgrounds.io/images/backgrounds/index/sea-edge-79ab30e2.png"
              alt=""
            ></img>
          </Col>
          <Col>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Card style={{ width: "10rem", height: "10rem" }}>
                <Card.Img
                  variant="top"
                  width="70rem"
                  height="80rem"
                  src={
                    "http://img3.wikia.nocookie.net/__cb20140618003853/simpsonstappedout/images/c/cd/Spiderpig-the-simpsons-movie-1343495-473-306.jpg"
                  }
                />
                <Card.Body>
                  <Card.Title style={{ size: "10" }}>
                    <h6>Harry Trotter</h6>
                  </Card.Title>
                  <Card.Subtitle style={{ size: "10" }}>
                    Points:120
                  </Card.Subtitle>
                  <Card.Text style={{ size: "10" }}>UCT</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
        <Tabs defaultActiveKey="tasks">
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
            <Challenges parentCallback={this.pointsCallBack} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Home;
