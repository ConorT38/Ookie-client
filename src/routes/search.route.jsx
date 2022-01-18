import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Card,
  Button,
  Nav,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";
import SearchResult from "../components/SearchResult";
import SearchTabs from "../components/SearchTabs";
import { useSearchApi } from "../hooks";

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const searchQuery = params["q"];

const SearchRoute = () => {
  const navigate = useNavigate();

  const [searchResults, loading] = useSearchApi(
    "http://192.168.0.136:8080/search/" + searchQuery
  );

  const search = (e) => {
    const query = encodeURIComponent(e.target.q.value);
    e.preventDefault();
    if (query.length > 0) {
      navigate({
        pathname: "/search",
        search: `?q=${query}`,
      });
      window.location.reload();
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>Search anything on the internet.</Card.Title>
                <Form onSubmit={search}>
                  <Form.Group className="mb-3">
                    <InputGroup className="mb-3">
                      <FormControl
                        name="q"
                        placeholder="Search"
                        aria-label="Search"
                        
                      />
                      <Button
                        type="submit"
                        variant="outline-primary"
                        id="button-addon2"
                      >
                        Search
                      </Button>
                    </InputGroup>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Row>
                <Col lg={6}>
                  <SearchTabs />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <br></br>
      </Container>
      <Container>
        <Row>
          <Col lg={6}>
            {loading ? (
              <p>loading...</p>
            ) : (
              <>
                {!searchResults ? (
                  <p>No search results found.</p>
                ) : (
                  <>
                    {searchResults.map((result) => (
                      <SearchResult searchResult={result} />
                    ))}
                  </>
                )}
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchRoute;
