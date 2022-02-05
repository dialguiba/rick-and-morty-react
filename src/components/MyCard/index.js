import React from "react";
import { Badge, Card } from "react-bootstrap";

const colors = {
  Alive: "success",
  Dead: "danger",
  unknown: "secondary",
};

export const MyCard = ({ name, image, status }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Badge bg={colors[status]}>{status}</Badge>
        <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
      </Card.Body>
    </Card>
  );
};
