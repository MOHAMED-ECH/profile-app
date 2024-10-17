/* export default function  home() {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
}
 */

import React from "react";
import "./Home.css"; // Assurez-vous de créer ce fichier CSS pour le style

const Home = () => {
  return (
    <div className="home-container">
      {/* Section principale */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Bienvenue sur Mon Profil</h1>
          <p className="hero-subtitle">
            Je suis <span className="highlight">Mohamed ECHARFAOUY</span>, un
            développeur passionné avec une expertise en développement web, cloud
            et architecture logicielle.
          </p>
          <a href="#about" className="cta-button">
            En savoir plus
          </a>
        </div>
        <div className="hero-image">
          <img src="/src/assets/profile.jpg" alt="Profil" />
        </div>
      </header>

      {/* Section à propos de moi */}
      <section id="about" className="about-section">
        <h2>À propos de moi</h2>
        <p>
          Final-year engineering student at The Mohammedia School of Engineers,
          with strong expertise in full-stack development (Spring Boot,
          Angular), cybersecurity, and IT. Proven ability to analyze complex
          business requirements, provide innovative solutions, and enhance
          system security. Bilingual in English, French, and fluent in Arabic.
          Seeking an opportunity to contribute in software engineering,
          cybersecurity, or technical consulting, leveraging both technical
          acumen and advisory skills.
        </p>
      </section>

      {/* Section compétences */}
      <section className="skills-section">
        <h2>Compétences</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Développement Web</h3>
            <p>
              Création de sites et applications web dynamiques et performants
              avec React, Angular, et plus encore.
            </p>
          </div>
          <div className="skill-card">
            <h3>Cloud Computing</h3>
            <p>
              Expérience en déploiement d'applications dans des environnements
              cloud tels qu'AWS, GCP, et Azure.
            </p>
          </div>
          <div className="skill-card">
            <h3>Architecture Logicielle</h3>
            <p>
              Conception et implémentation de systèmes logiciels évolutifs et
              performants.
            </p>
          </div>
        </div>
      </section>

      {/* Section contact */}
      <section className="contact-section">
        <h2>Contact</h2>
        <p>
          Vous avez un projet ou une collaboration à proposer ? <br />
          N'hésitez pas à{" "}
          <a href="mailto:echarfaouy.mohamed@student.emi.ac.ma">me contacter</a>
          .
        </p>
      </section>

      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} ECHARFAOUY Med. Tous droits
          réservés.
        </p>
      </footer>
    </div>
  );
};

export default Home;
