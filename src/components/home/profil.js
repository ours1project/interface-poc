import React from 'react';
import {
  Col,
  Row,
  Container,
  Image,
  ListGroup
} from 'react-bootstrap';

const Profil = ({ data }) => (
  <Container className="mt-2">
    <Row>
      <Col sm={3}>
        <Image width="200" src="https://cache.marieclaire.fr/data/photo/w1000_c17/138/jon-snow-game-of-thrones.jpg" roundedCircle />
      </Col>
      <Col sm={9}>
        <ListGroup>
          <ListGroup.Item>First Name: {data.firstName}</ListGroup.Item>
          <ListGroup.Item>Last Name : {data.lastName}</ListGroup.Item>
          <ListGroup.Item>Age : {data.age}</ListGroup.Item>
          <ListGroup.Item>Sexe : {data.gender}</ListGroup.Item>
          {/*<ListGroup.Item>Location : {data.location[0]} | {data.location[1]}</ListGroup.Item>*/}
        </ListGroup>
      </Col>
    </Row>
  </Container>
);

export default Profil;
