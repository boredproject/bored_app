// HungryPage.tsx
import React from 'react';
import Link from 'next/link';
import IdeaButton from '@/app/selection/component/ButtonSelection/IdeaButtonSingle/IdeaButton';
import styles from './HungryPage.module.css';
import WaveFooter from "../../homepage/Footer/WaveFooter";
import Navigation from "../../homepage/Navigation/Navigation";

const HungryPage = () => {
  return (
    <div>
        <Navigation />
        <div className={styles.container}>
            <IdeaButton type="svg1" textspin="spinnersvg1" />
            <div className={styles.rightPanel}>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
                <div className={styles.innerPanel}>Berliner Kebab <span>22km</span></div>
            </div>
        </div>
        <WaveFooter />
    </div>
  );
};

export default HungryPage;
