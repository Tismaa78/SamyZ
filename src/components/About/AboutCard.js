import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Salut à tous, je m'appelle <span className="purple">Samy</span>.
            <br />
            Je suis graphiste spécialisé dans la création de visuels impactants pour vos projets.
            <br />
            Mon objectif est de proposer des designs professionnels et modernes adaptés à vos besoins.
            <br />
            <br />
            🎨 Voici mes offres :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> <strong>Flyer personnalisé - 30€</strong>
              <ul>
                <li>✅ Un flyer unique et percutant</li>
                <li>⏳ Livraison en 72 à 96 heures</li>
                <li>⚡ Option express : +10€ pour une livraison en 24 heures</li>
              </ul>
            </li>
            <li className="about-activity">
              <ImPointRight /> <strong>PACK VISION - 60€</strong>
              <ul>
                <li>✅ 1 Logo personnalisé</li>
                <li>✅ 1 Filtre unique</li>
                <li>✅ 1 Flyer attractif</li>
                <li>⏳ Livraison en 72 à 96 heures</li>
              </ul>
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Le design est l'ambassadeur silencieux de votre marque."
          </p>
          <footer className="blockquote-footer">Paul Rand</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;