import styles from './HeroSection.module.css';
import { Dna, Sunrise } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
    return (
        <section className={`section ${styles.hero}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        NUTRITION & WELLNESS COACH
                    </div>

                    <h1 className={styles.title}>
                        Reclaim Your <span className="text-italic">Health & Vitality</span> Naturally.
                    </h1>

                    <p className={styles.description}>
                        Struggling with weight gain, sluggish thyroid, gut issues, or blood sugar spikes? I help you reverse these conditions through personalized nutrition — no crash diets, no guesswork.
                    </p>

                    <div className={styles.buttonGroup}>
                        <Link to="/apply" className="btn btn-accent">Begin Your Wellness Journey</Link>
                        <Link to="/programs" className="btn btn-outline">Explore Programs</Link>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <h3>900+</h3>
                            <p>LIVES TRANSFORMED</p>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <h3>20+</h3>
                            <p>YEARS EXPERIENCE</p>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <h3>4.9★</h3>
                            <p>CLIENT RATING</p>
                        </div>
                    </div>
                </div>

                <div className={styles.imageGallery}>
                    <div className={styles.imageContainer}>
                        <img src="/hero-image.png" alt="Nutrition Coach with Client" className={styles.mainImage} />

                        {/* Floating Badges */}
                        <div className={`${styles.floatingBadge} ${styles.badgeTopLeft}`}>
                            <Dna size={18} className={styles.shieldIcon} />
                            <div>
                                <strong>THE VITALITY RESET</strong>
                                <span>Sustainably balance thyroid & blood sugar.</span>
                            </div>
                        </div>

                        <div className={`${styles.floatingBadge} ${styles.badgeBottomRight}`}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className={styles.slotsDot}></span>
                                <strong>SUMMER INTAKE OPEN</strong>
                            </div>
                            <span>Only 5 final spots remaining</span>
                        </div>

                        <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft} ${styles.darkBadge}`}>
                            <div className={styles.iconCircleDark}>
                                <Sunrise size={16} color="#b59c73" />
                            </div>
                            <div>
                                <strong>+3 HOURS DAILY ENERGY</strong>
                                <span>in 4 months - Rekha M.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
