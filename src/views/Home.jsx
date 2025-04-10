import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import backgroundImage from "../assets/hero.webp";
import content from "../assets/content.webp"
import kode from "../assets/kode.webp"
import animationGif from "../assets/animation.gif";
import lastPic from "../assets/lastPic.webp";


export default function Home() {
  return (
    <div>
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Link to="/kontakt" className={styles.button}>
          Få tilbud
        </Link>
      </section>

      <section className={styles.videoSection}>

        <hr className={styles.sectionSeparator} />

        <img 
          src={animationGif} 
          alt="Animeret illustration" 
          className={styles.animation} 
          loading="lazy" 
        />

        <hr className={styles.sectionSeparator} />

        <h2 className={styles.subtitle}>
          Vi specialiserer i webdesign samt udvikling af professionelt content til din hjemmeside
        </h2>
        <div className={styles.columnSection}>
          <Link to="/services#optimeret-hjemmeside" className={styles.column}>
            <h3 className={styles.miniOverskrift}>Optimeret Hjemmeside</h3>
            <img 
              src={kode} 
              alt="Optimeret Hjemmeside" 
              className={styles.columnImage} 
              loading="lazy" 
            />
          </Link>
          <Link to="/services#visuelt-materiale" className={styles.column}>
            <h3 className={styles.miniOverskrift}>Visuelt Materiale</h3>
            <img 
              src={content} 
              alt="Visuelt Materiale" 
              className={styles.columnImage} 
              loading="lazy" 
            />
          </Link>
        </div>
        
        <hr className={styles.sectionSeparator} />
        <div className={styles.finalImageSection}>
          <img 
            src={lastPic} 
            alt="Placeholder" 
            className={styles.finalImage} 
            loading="lazy" 
          />
        </div>
      </section>
    </div>
  );
}
