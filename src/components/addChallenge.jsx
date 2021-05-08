import React, { useState, useRef } from "react";
import { Button, Modal, Tab, Card, Nav, Row } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";

function AddChallenge() {
  const [show, setShow] = useState(false);
  const cards = [];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const textChallenge = useRef("");
  const textPoints = useRef("");
  const textText = useRef("");
  const textImage = useRef("");

  const setChallenge = (title, points, text, listed, image) => {
    cards.push({
      title: title,
      image: image,
      points: points,
      text: text,
      listed: listed,
      doneBy: [listed],
    });

    console.log(cards);
  };

  // const dislayChallenge = () => {
  //   return(
  //   if (cards.length > 0) {
  //     cards.map(renderCard);
  //   }
  //   )
  // };

  const removeChallenge = (title) => {
    sendPoints(title);

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].title === title.title) {
        cards.splice(i, 1);
      }
    }
    if (cards.length > 0) {
      cards.map(renderCard);
    }
  };

  const sendPoints = (title) => {
    for (let i = 0; i < cards.length; i++) {
      if (cards[i].title === title.title) {
        this.props.parentCallback(cards[i].points);
      }
    }
  };

  const renderCard = (card, index) => {
    return (
      <div>
        <Card style={{ width: "18rem" }} key={index}>
          <Tab.Container defaultActiveKey="challenge">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="challenge">Challenge</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="experiencedBy">Experienced By</Nav.Link>
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
                    onClick={() => removeChallenge({ title: card.title })}
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
      </div>
    );
  };

  // const renderRows = () => {
  //   return (
  //     <div>
  //       <Row> {cards.map(renderCard)} </Row>
  //     </div>
  //   );
  // };

  return (
    <div>
      <Row> {cards.map(renderCard)} </Row>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <Button color="primary" size="large" onClick={handleShow}>
          <AddIcon />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Challenge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Challenge:</h2>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="challenge"
            label="Enter Challenge"
            name="challenge"
            autoComplete="challenge"
            autoFocus
            inputRef={textChallenge}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="points"
            label="Enter Points"
            name="points"
            autoComplete="points"
            inputRef={textPoints}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="text"
            label="Enter text"
            name="text"
            autoComplete="text"
            inputRef={textText}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="image"
            label="Enter image url"
            name="image"
            autoComplete="image"
            inputRef={textImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={
              (handleClose,
              () =>
                setChallenge(
                  textChallenge.current.value,
                  parseInt(textPoints.current.value, 10),
                  textText.current.value,
                  "Harry Trotter",
                  textImage.current.value
                ))
            }
          >
            Submit Challenge
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddChallenge;
