import React from 'react';
import styles from './Content.module.css';
import contentVideo from '../assets/contentvideo.webm';

const Content = () => {
  return (
    <div className={styles.contentContainer}>
      <h1>Content</h1>
      <video
        className={styles.video}
        controls
        preload="none"
      >
        <source src={contentVideo} type="video/mp4" />
        Din browser understøtter ikke video-tagget.
      </video>
    </div>
  );
};

export default Content;
