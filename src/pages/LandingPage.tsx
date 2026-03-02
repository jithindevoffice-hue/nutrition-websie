import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import styles from './LandingPage.module.css';

export const LandingPage = () => {
    return (
        <div className={styles.page}>
            <Navbar />
            <HeroSection />
            <AboutSection />
        </div>
    );
};
