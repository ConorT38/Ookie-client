import React from "react";
import { Card } from "react-bootstrap";

function SearchResult(props) {
  const { searchResult } = props;
  return (
    <>
      <Card>
        <Card.Body>
          <a href={searchResult.url}>{searchResult.title}</a>
          <br />
          <small colour="grey">{searchResult.url}</small>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default SearchResult;
