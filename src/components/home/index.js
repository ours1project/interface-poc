import React from 'react';
import {
  Form,
  Col,
  Row,
  Button,
  Container,
  Alert,
  Image
} from 'react-bootstrap';

import { user, reco } from './data/';
import Profil from './profil';

const Home = () => (
  <Container>
    <Row>
      <Col sm={1}>
        <Image width="80" src="https://cache.marieclaire.fr/data/photo/w1000_c17/138/jon-snow-game-of-thrones.jpg" roundedCircle />
      </Col>
    </Row>
    <Row>
      <Col>
        <FormSearch />
      </Col>
    </Row>
    <Row>
      <Col className="mt-2">
        <Alert variant="primary">
          Results founds recommended (1) :
        </Alert>
      </Col>
    </Row>
    <Row>
      <Col>
        <Profil data={user[0]} />
      </Col>
    </Row>
    <Row>
      <Lists data={user} />
      <Lists data={reco} />
    </Row>
  </Container>
);

const FormSearch = () => (
  <Form>
    <Form.Row className="align-items-center mt-2">
      <Col>
        <Form.Control id="search" placeholder="my search"/>
      </Col>
      <Col xs="auto">
        <Button type="submit">Search</Button>
      </Col>
    </Form.Row>
  </Form>
)

const Lists = ({data}) => (
  <ul>
    {data.map((item) => <Item key={item.user_id || item.user_id_x} item={item} /> )}
  </ul>
);

const Item = ({item}) => (
  <li>
    <span>{item.user_id || item.user_id_x} | {item.business_id} | {item.prediction || null} | {item.categories || null} | {item.business_name_y || null}</span>
  </li>
);

export default Home;
