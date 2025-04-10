import React from 'react';
import styles from './Kontakt.module.css';

const KontaktPage = () => {
  return (
    <div className={styles['contact-container']}>
      <h1>Kontakt</h1>
      <p className={styles['description']}> 
        Har du spørgsmål, eller vil du høre mere om, hvordan vi kan hjælpe dig?
        Send os en besked, så vender vi tilbage hurtigst muligt.
      </p>
      <div className={styles['contact-info']}>

        <div className={styles['left-column']}>
          <div className={styles['info-item']}>
            <span className="material-icons">phone</span>
            <p>+45 42 37 30 35</p>
          </div>
          <div className={styles['info-item']}>
            <span className="material-icons">mail</span>
            <p>rooted.contact@gmail.com</p>
          </div>
          <div className={styles['info-item']}>
            <span className="material-icons">location_on</span>
            <p>Møllevej 37b, Aarhus C 8000</p>
          </div>
        </div>


        <div className={styles['right-column']}>
          <h3>Telefontider</h3>
          <div className={styles['time-box']}>
            <p>Man-Ons: 11-14</p>
          </div>
          <div className={styles['time-box']}>
            <p>Tor-Fre: 12-14</p>
          </div>
          <div className={styles['time-box']}>
            <p>Lør-Søn: Lukket</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktPage;
