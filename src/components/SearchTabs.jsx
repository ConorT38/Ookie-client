import React from "react";
import { Nav } from "react-bootstrap";

const SearchTabs = () => {
  return (
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
  );
};

export default SearchTabs;
