import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Card, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";
import SearchResult from "./components/SearchResult";
import { useSearchApi } from "./hooks";

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

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const [searchResults, loading] = useSearchApi(
    "https://gorest.co.in/public/v1/users"
  );

  console.log("searchResults: ", searchResults);

  const search = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/",
      search: `?s=${searchTerm}`,
    });
  };

  return (
    <>
      <Container>
        <Form
          name="s"
          onSubmit={search}
          onChange={(e) => setSearchTerm(e.target.value)}
        >
          <Form.Group className="mb-3">
            <Form.Control placeholder="input" />
          </Form.Group>
        </Form>
      </Container>
      <Container className="p-3">
        {loading ? (
          <p>loading...</p>
        ) : (
          <>
            {!searchResults ? (
              <p>No search results found.</p>
            ) : (
              <>
                {searchResults.map((result) => (
                 <SearchResult searchResult={result}/>
                ))}
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default App;
