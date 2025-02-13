import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiSnapchat } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BIENVENUE CHEZ <span className="purple"> SAMY </span>
            </h1>
            <p className="home-about-body">
              Avec <b className="purple">plus de 5 ans d'expérience</b> dans le graphisme et <b className="purple">plus de 100 clients satisfaits</b>, Samy met son savoir-faire au service de vos projets.
              <br />
              <br />
              Que ce soit pour un <i><b className="purple">logo percutant</b></i>, un <i><b className="purple">flyer impactant</b></i> ou un <i><b className="purple">filtre unique</b></i>, il vous propose des visuels professionnels et modernes adaptés à vos besoins.
              <br />
              <br />
              ✨ Faites confiance à un designer passionné pour donner une identité forte à votre marque ! 🚀
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ MOI SUR</h1>
            <p>
              Sentez-vous libre d'entrer en <span className="purple">contact</span> avec moi
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://www.snapchat.com/add/samyyy783?sender_web_id=1c5cb8da-8da4-407e-8a7b-d99599cca05f&device_type=desktop&is_copy_url=true" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <SiSnapchat />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://wa.me/33683738897" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/samy-zeroual-282540342/" target="_blank" rel="noreferrer" className="icon-colour  home-social-icons">
                  <FaLinkedinIn />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;