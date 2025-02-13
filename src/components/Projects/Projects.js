import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const flyerImages = [
  "1.webp", "2.webp", "3.webp", "4.webp", "5.webp", "6.webp",
  "7.webp", "8.webp", "9.webp", "10.webp", "11.webp", "12.webp",
  "13.webp", "14.webp"
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Flyers</strong>
        </h1>
        <p style={{ color: "white" }}>
          Découvrez quelques unes de mes réalisations graphiques à travers une sélection de flyers que j'ai créés.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {flyerImages.map((image, index) => (
            <Col md={4} sm={6} xs={12} className="project-card" key={index}>
              <ProjectCard
                imgPath={require(`../../Assets/Projects/${image}`)}
                isBlog={false}
                title={`Flyer ${index + 1}`}
                description=""
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
