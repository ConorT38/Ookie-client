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
import { useSearchApi } from "../hooks";

const testSearchResults = [
  {
    title: "YouTube | Home page",
    url: "https://www.youtube.com/",
    description: "youtube something",
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/",
    description: "youtube something",
  },
  {
    title: "Gmail",
    url: "https://www.mail.google.com/",
    description: "youtube something",
  },
  {
    title: "Reddit, Inc.",
    url: "https://www.reddit.com/",
    description: "youtube something",
  },
];
const SearchRoute = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [searchResults, loading] = useSearchApi(
    "https://gorest.co.in/public/v1/users"
  );

  const search = (e) => {
    const query = encodeURIComponent(searchTerm);
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate({
        pathname: "/search",
        search: `?q=${query}`,
      });
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
                <Form
                  name="s"
                  onSubmit={search}
                  onChange={(e) => setSearchTerm(e.target.value)}
                >
                  <Form.Group className="mb-3">
                    <InputGroup className="mb-3">
                      <FormControl placeholder="Search" aria-label="Search" />
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
                  <Nav variant="tabs" defaultActiveKey="all-link">
                    <Nav.Item>
                      <Nav.Link eventKey="all-link">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="images-link">Images</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="videos-link">Videos</Nav.Link>
                    </Nav.Item>
                  </Nav>
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
