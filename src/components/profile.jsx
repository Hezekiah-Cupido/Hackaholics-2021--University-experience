import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class Profile extends Component {
  state = {
    email: "harrytrotter@geethub.com",
    password: "piggy",
    points: 120,
  };

  updatePoints(points) {
    console.log(points);
    this.setState({
      points: this.state.points + points,
    });
  }

  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item id="email">
              Email: {this.state.email}
            </ListGroup.Item>
            <ListGroup.Item id="password">
              Password: {this.state.password}
            </ListGroup.Item>
            <ListGroup.Item id="points">
              Points: {this.state.points}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export function updatePoints() {}
export default Profile;

//module.exports = {};
