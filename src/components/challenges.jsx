import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card, Button, Row } from "react-bootstrap";

class Challenges extends Component {
  // const Challenges = () => {
  state = {
    cards: [
      {
        title: "Get drunk at College",
        image:
          "https://cdn-images-1.medium.com/max/1600/1*ly56ik-i3wu_NEB9NJgFQg.jpeg",
        points: "50",
        text: "Alone in your room with your textbooks",
        listed: "Hamish Cabbage-Downs",
      },
      {
        title: "Get shat on by a pigeon",
        image:
          "https://i.pinimg.com/originals/ab/8d/a1/ab8da12cac4ab343e17422593f1308f7.jpg",
        points: "1 000 000",
        text: "If a pigeon shits on you, you are the chosen one of UCT",
        listed: "Tiffany Flifffany",
      },
      {
        title: "Get hit by a Jammie",
        image:
          "https://thumbs.dreamstime.com/b/senior-woman-arm-blue-cast-10077020.jpg",
        points: "50",
        text: "Start planning for your retirement today",
        listed: "Grace Magashule",
      },
      {
        title: "Drop out of Act Sci",
        image:
          "https://i.kym-cdn.com/entries/icons/original/000/016/546/hidethepainharold.jpg",
        points: "100",
        text: "Act Sci is for people who find accounting too exciting",
        listed: "Daniel Daniels",
      },
      {
        title: "Touch another human being(Comp Sci students only)",
        image:
          "https://www.mcfloogle.com/wp-content/uploads/2019/06/ackshually-bitcoin.jpg",
        points: "100",
        text: "There is a first for everything",
        listed: "Gee Thub",
      },
    ],
  };

  removeChallenge = (title) => {
    for (let i = 0; i < this.state.cards.length; i++) {
      if (this.state.cards[i].title === title.title) {
        this.state.cards.splice(i, 1);

        this.setState({ cards: this.state.cards });
      }
    }

    console.log(this.state.cards);
    this.render();
  };

  renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button
            variant="primary"
            onClick={() => this.removeChallenge({ title: card.title })}
          >
            Mark as completed[{card.points} points]
          </Button>
        </Card.Body>
      </Card>
    );
  };

  render() {
    return (
      <div className="home">
        <Row> {this.state.cards.map(this.renderCard)} </Row>
      </div>
    );
  }
}

export default Challenges;
