import styles from './Footer.module.css';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topSection}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <div className={styles.logoIcon} style={{ background: 'transparent' }}>
                                <img src="/lotus-logo.png" alt="Lotus" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                            </div>
                            <span className={styles.logoText}>Sonica Holistic Health</span>
                        </div>
                        <p className={styles.brandDesc}>
                            Root-cause nutrition protocols for lasting vitality and health.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
                            <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
                            <a href="#" className={styles.socialIcon}><Youtube size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4>Navigate</h4>
                        <ul>
                            <li><a href="#">About Sonika</a></li>
                            <li><a href="#">Signature Programs</a></li>
                            <li><a href="#">How it Works</a></li>
                            <li><a href="#">Client Stories</a></li>
                        </ul>
                    </div>

                    <div className={styles.linksColumn}>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Medical Disclaimer</a></li>
                        </ul>
                    </div>

                    <div className={styles.ctaColumn}>
                        <h4>Ready to transform?</h4>
                        <p>Join the waitlist for our next intake or book a discovery call today.</p>
                        <Link to="/apply" className="btn btn-primary" style={{ marginTop: '1rem' }}>Begin Journey</Link>
                    </div>
                </div>

                <div className={styles.bottomSection}>
                    <p>&copy; {new Date().getFullYear()} WellnessCoach. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
