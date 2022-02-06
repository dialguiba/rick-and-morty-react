import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Provider } from "react-redux";
import { ResultsPage } from "./components/ResultsPage";
import { SearchBar } from "./components/SearchBar";
import { store } from "./store/store";

export const RickAndMortyApp = () => {
  console.log(process.env.REACT_APP_API_URL);
  return (
    <Provider store={store}>
      <Container>
        <Row>
          <Col className="text-center">Rick Morty</Col>
        </Row>
        <Row>
          <Col>
            <SearchBar />
          </Col>
        </Row>
        <Row>
          <Col>
            <ResultsPage />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
};
