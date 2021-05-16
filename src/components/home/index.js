import React from 'react';
import {
  Form,
  Col,
  Row,
  Button,
  Container,
  Alert,
  Image,
  Table
} from 'react-bootstrap';

import { user, reco } from './data/';
import Profil from './profil';
import logo from './static/oursin-logo.gif';

const Home = () => (
  <Container>
    <Row>
      <Col sm={1}>
        <Image width="100" src={logo} />
      </Col>
      <Col>
        <h2 className="mt-4">Oursin Project</h2>
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
    <Row className="mt-3">
      <List data={reco} />
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
);

const List = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>User ID</th>
        <th>Business ID</th>
        <th>Prediction</th>
        <th>Categories</th>
        <th>Business name</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => <Item key={item.user_id || item.user_id_x} item={item} /> )}
    </tbody>
  </Table>
);

const Item = ({ item }) => (
  <tr>
    <td>{item.user_id_x}</td>
    <td>{item.business_id}</td>
    <td>{item.prediction || 'N/A'}</td>
    <td>{item.categories || 'N/A'}</td>
    <td>{item.business_name_y || 'N/A'}</td>
  </tr>
);

export default Home;
