import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaSnapchat } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Design & Developpement pour Samy Zeroual</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Samy</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">

            </li>
            <li className="social-icons">
              <a
                href="https://www.snapchat.com/add/samyyy783?sender_web_id=1c5cb8da-8da4-407e-8a7b-d99599cca05f&device_type=desktop&is_copy_url=true"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaSnapchat />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/samy-zeroual-282540342/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">

            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
