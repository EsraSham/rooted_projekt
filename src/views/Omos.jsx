import React from 'react';
import styles from './OmOs.module.css';
import image1 from '../assets/jesse.webp';
import image2 from "../assets/ida.webp";
import image3 from "../assets/esra.webp";

const OmOs = () => {
  return (
    <div className={styles['om-os-container']}>
      <h1>Om os</h1>

      <div className={styles['team-container']}>
        <div className={styles['team-member']}>
          <img
            src={image1}
            alt="Team Member 1"
            className={styles['team-image']}
            loading="lazy"
          />
          <p>Jesse Andersen</p>
          <p>28 år</p>
          <p>Front-end udvikler</p>
        </div>
        <div className={styles['team-member']}>
          <img
            src={image2}
            alt="Team Member 2"
            className={styles['team-image']}
            loading="lazy"
          />
          <p>Ida Ulsøe</p>
          <p>27 år</p>
          <p>Front-end udvikler</p>
        </div>
        <div className={styles['team-member']}>
          <img
            src={image3}
            alt="Team Member 3"
            className={styles['team-image']}
            loading="lazy"
          />
          <p>Esra Shamasneh</p>
          <p>21 år</p>
          <p>Front-end udvikler</p>
        </div>
      </div>

      <h2 className={styles['h2-container']}>Vores Mission</h2>
      <div className={styles['mission-container']}>
        <div className={styles['mission-text']}>
          <p>
            Vi skaber digitale løsninger, der forener design, teknologi og ansvarlighed.
            Vores mission er at udvikle energieffektive, brugervenlige og æstetiske hjemmesider,
            der minimerer CO₂-aftryk uden at gå på kompromis med funktionalitet og oplevelse.
            Vi tror på, at webudvikling kan være både innovativt og ressourcebevidst – og vi hjælper
            virksomheder med at tage skridtet ind i den digitale verden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OmOs;
