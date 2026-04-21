import styles from './HeroSection.module.css';
import { ShieldCheck, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
    return (
        <section className={`section ${styles.hero}`}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        CERTIFIED NUTRITION & WELLNESS COACH
                    </div>

                    <h1 className={styles.title}>
                        Reclaim Your <span className="text-italic">Health & Vitality</span> Naturally.
                    </h1>

                    <p className={styles.description}>
                        Struggling with weight gain, sluggish thyroid, gut issues, or blood sugar spikes? I help you reverse these conditions through personalized nutrition — no crash diets, no guesswork.
                    </p>

                    <div className={styles.buttonGroup}>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdCHMxNLZeuxf6f0pcRhrda9p-7Pvxs1yWZ62fLYTc6pwWIBQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" className="btn btn-accent">Begin Your Wellness Journey</a>
                        <Link to="/programs" className="btn btn-outline">Explore Programs</Link>
                    </div>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <h3>500+</h3>
                            <p>LIVES TRANSFORMED</p>
                        </div>
                        <div className={styles.statDivider}></div>
                        <div className={styles.statItem}>
                            <h3>12+</h3>
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
                            <ShieldCheck size={18} className={styles.shieldIcon} />
                            <div>
                                <strong>THYROID REVERSAL</strong>
                                <span>Root-cause nutrition protocol</span>
                            </div>
                        </div>

                        <div className={`${styles.floatingBadge} ${styles.badgeTopRight}`}>
                            <div>
                                <span className={styles.slotsDot}></span>
                                <span className={styles.slotsText}>LIMITED SLOTS</span>
                            </div>
                            <strong>March intake open</strong>
                            <span>Only 8 spots remaining</span>
                        </div>

                        <div className={`${styles.floatingBadge} ${styles.badgeBottomLeft} ${styles.darkBadge}`}>
                            <div className={styles.iconCircleDark}>
                                <TrendingUp size={16} color="#b59c73" />
                            </div>
                            <div>
                                <strong>-18 kg</strong>
                                <span>in 4 months · Rekha M.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
