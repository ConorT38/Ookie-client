import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import {
  Card,
  Button,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";

const HomeRoute = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

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
    <Container md="auto">
      <Card className="text-center">
        <Card.Header>Welcome to Ookie!</Card.Header>
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
      </Card>
    </Container>
  );
};

export default HomeRoute;
