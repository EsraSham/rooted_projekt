import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
  return (
    <div className={styles['services-container']}>
      <h1>Services</h1>
      <div className={styles['services-columns']}>
        <div className={styles['service-item']}>
        <span style={{ fontSize: '120px', color: '#2f3a56', fill:'0', display: 'flex', justifyContent:'center' }} className="material-icons">looks_one</span>
          <h2>Optimering</h2>
          <p>• Gennemgang af din nuværende hjemmeside med fokus på hastighed og CO₂-aftryk.</p>
          <p>• Optimering af kode, billeder og hosting</p>
          <p>• Implementering af grønne løsninger som lazy loading og lettere fonts.</p>
          <p>• Rapport med konkrete forbedringer og en før/efter-måling af din hjemmesides klimaaftryk.</p>
        </div>
        <div className={styles['service-item']}>
        <span style={{ fontSize: '120px', color: '#2f3a56', fill:'0', display: 'flex', justifyContent:'center' }} className="material-icons">looks_two</span>
          <h2>Webdesign fra Bunden</h2>
          <p>• Unikt design med et minimalistisk og energieffektivt fokus.</p>
          <p>• Udvikling af en hurtig og letvægts-hjemmeside med lavt CO₂-aftryk.</p>
          <p>• Grøn hosting og klimavenlige teknologier.</p>
          <p>• SEO-optimering for bedre synlighed og mindre dataforbrug.</p>
        </div>
        <div className={styles['service-item']}>
        <span style={{ fontSize: '120px', color: '#2f3a56', fill:'0', display: 'flex', justifyContent:'center' }} className="material-icons">looks_3</span>
          <h2>Vedligeholdelse og Support</h2>
          <p>• Regelmæssig opdatering og optimering af hjemmesiden.</p>
          <p>• Løbende performance-tests for at holde CO₂-aftrykket lavt.</p>
          <p>• Backup og sikkerhedstjek med minimal serverbelastning.</p>
          <p>• Månedlig rapport om bæredygtighedsforbedringer.</p>
        </div>
        <div className={styles['service-item']}>
        <span style={{ fontSize: '120px', color: '#2f3a56', fill:'0', display: 'flex', justifyContent:'center' }} className="material-icons">looks_4</span>
          <h2>Branding og Digital Strategi</h2>
          <p>• Udvikling af en visuel identitet (logo, farver, typografi).</p>
          <p>• Bæredygtig UX/UI-design for bedre brugeroplevelse og lavere strømforbrug.</p>
          <p>• SoMe-strategi med fokus på minimal databelastning.</p>
          <p>• CO₂-bevidst content marketing-plan.</p>
        </div>
      </div>

      <div className={styles['cta-button-wrapper']}>
        <Link to="/kontakt" className={styles['cta-button']}>
          Få et tilbud
        </Link>
      </div>
    </div>
  );
};

export default Services;
