import React from "react";
import { Card } from "react-bootstrap";

function SearchResult(props) {
  const { searchResult } = props;
  return (
    <>
      <Card>
        <Card.Body>
          <a href={searchResult.status}>{searchResult.name}</a>
          <br />
          <small colour="grey">{searchResult.gender}</small>
        </Card.Body>
      </Card>
      <br />
    </>
  );
}

export default SearchResult;
