import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ProgramsSection } from '../components/ProgramsSection';
import { ProcessSection } from '../components/ProcessSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Footer } from '../components/Footer';
import { HeroAnimationSection } from '../components/HeroAnimationSection';
import styles from './LandingPage.module.css';

export const LandingPage = () => {
    return (
        <div className={styles.page}>
            <Navbar />
            <HeroAnimationSection />
            <HeroSection />
            <AboutSection />
            <ProgramsSection />
            <ProcessSection />
            <TestimonialsSection />
            <Footer />
        </div>
    );
};
