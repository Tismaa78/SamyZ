import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,

  SiAdobephotoshop,
  SiAdobelightroom,
  SiCanva,
  SiNotion,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCanva />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>

    </Row>
  );
}

export default Toolstack;
