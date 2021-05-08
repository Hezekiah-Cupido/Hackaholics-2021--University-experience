import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Row, Nav, Tab } from "react-bootstrap";
import AddChallenge from "./addChallenge.jsx";
import { state } from "./profile.jsx";
import { updatePoints } from "./profile.jsx";

class Challenges extends Component {
  // const Challenges = () => {
  state = {
    cards: [
      {
        title: "Get a little too Tipsy",
        image:
          "https://cdn-images-1.medium.com/max/1600/1*ly56ik-i3wu_NEB9NJgFQg.jpeg",
        points: 50,
        text: "Alone in your room with your textbooks",
        listed: "Hamish Babbage-Taylor",
        doneBy: [
          "Hamish Babbage-Taylor",
          "Gee Thub",
          "Sam Densor",
          "Ruth Ginssplerg",
        ],
      },
      {
        title: "Feed a pigeon at Upper Campus",
        image:
          "https://i.pinimg.com/originals/ab/8d/a1/ab8da12cac4ab343e17422593f1308f7.jpg",
        points: 70,
        text: "If a pigeon shits on you, you are the chosen one of UCT",
        listed: "Tiffany Fliffany",
        doneBy: ["Tiffany Fliffany", "Special Edward", "Duncan Rusk"],
      },
      {
        title: "Take the wrong Jammie",
        image:
          "https://www.news.uct.ac.za/images/archive/emp/2009/vol28_14/JammieShuttle.jpg",
        points: 50,
        text: "Hiddingh is on upper",
        listed: "Grace Magashule",
        doneBy: [
          "Grace Magashule",
          "Tom Denton",
          "Mitch McDonellr",
          "Sally De MeThaayeusg",
        ],
      },
      {
        title: "Visit the Waterfront",
        image:
          "http://media0.trover.com/T/577e013fd090012d750a1710/fixedw_large_4x.jpg",
        points: 50,
        text: "Start planning for your retirement today",
        listed: "Maximum Price",
        doneBy: ["Maximum Price", "DeLully Esperenza"],
      },
      {
        title: "Drop out of Act Sci",
        image:
          "https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg",
        points: 100,
        text: "Act Sci is for people who find accounting too exciting",
        listed: "Daniel Daniels",
        doneBy: [
          "Daniel Daniels",
          "Grace Magashule",
          "Tom Denton",
          "Mitch McDonell",
          "Sally De MeThaayeus",
        ],
      },
      {
        title: "Feel the touch of another human being(Comp Sci students only)",
        image:
          "https://www.mcfloogle.com/wp-content/uploads/2019/06/ackshually-bitcoin.jpg",
        points: 100,
        text: "There is a first for everything",
        listed: "Bill Gate",
        doneBy: ["Bill Gate", "Steve Bob"],
      },
      {
        title:
          "Attend a virtual recital with the South African College of Music",
        image: "http://www.uu.edu/photos/23028-raw.jpg",
        points: 100,
        text: "Very talented people",
        listed: "Steve Boon",
        doneBy: ["Steve Boon", "Maximum Price", "DeLully Esperenza"],
      },
      {
        title: "Climb lions Head",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/6e/Lion's_Head_at_Cape_Town.jpg",
        points: 100,
        text: "Adventure awaits",
        listed: "Senzo Ngidi",
        doneBy: [
          "Senzo Ngidi",
          "Grace Magashule",
          "Tom Denton",
          "Mitch McDonell",
          "Sally De MeThaayeus",
        ],
      },
    ],

    removedCards: [],
    show: false,
    points: 50,
  };

  removeChallenge = (title) => {
    this.sendPoints(title);

    for (let i = 0; i < this.state.cards.length; i++) {
      if (this.state.cards[i].title === title.title) {
        //updatePoints(this.state.cards.points);
        this.points += this.state.cards[i].points;
        console.log(this.points);
        this.state.removedCards.push(this.state.cards.splice(i, 1));
        this.setState({ cards: this.state.cards });
      }
    }

    //this.render();
  };

  sendPoints = (title) => {
    for (let i = 0; i < this.state.cards.length; i++) {
      if (this.state.cards[i].title === title.title) {
        this.props.parentCallback(this.state.cards[i].points);
      }
    }
  };

  renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Tab.Container defaultActiveKey="challenge">
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="challenge" style={this.style}>
                Challenge
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="experiencedBy" style={this.style}>
                Experienced By
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="challenge">
              <Card.Img
                variant="top"
                width="100rem"
                height="200rem"
                src={card.image}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {card.listed}
                </Card.Subtitle>
                <Card.Header></Card.Header>
                <Card.Text>{card.text}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => this.removeChallenge({ title: card.title })}
                >
                  Mark as completed[{card.points} points]
                </Button>
              </Card.Body>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="experiencedBy">
              <ul>
                {card.doneBy.map((person) => (
                  <li key={person}>{person}</li>
                ))}
              </ul>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Card>
    );
  };

  render() {
    return (
      <div className="home">
        <Row> {this.state.cards.map(this.renderCard)} </Row>
        <AddChallenge />
      </div>
    );
  }
}
//export { this.state.totpoints };
export default Challenges;
