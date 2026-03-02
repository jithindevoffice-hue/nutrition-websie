import styles from './AboutSection.module.css';
import { Award, CheckCircle2 } from 'lucide-react';

export const AboutSection = () => {
    return (
        <section className={`section ${styles.about}`}>
            <div className={styles.container}>
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img src="/hero-image.png" alt="Priya Sharma" className={styles.image} />
                        <div className={styles.badge}>
                            <div className={styles.badgeIcon}>
                                <Award size={20} color="#b59c73" />
                            </div>
                            <div className={styles.badgeText}>
                                <strong>4x Certified Specialist</strong>
                                <span>Internationally accredited nutrition & wellness expert</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.contentColumn}>
                    <div className={styles.subtitleWrapper}>
                        <div className={styles.subtitleLine}></div>
                        <span className={styles.subtitle}>MEET YOUR COACH</span>
                    </div>

                    <h2 className={styles.title}>
                        Hi, I'm Priya Sharma — <br />
                        <span className="text-italic">your guide to lasting wellness.</span>
                    </h2>

                    <div className={styles.description}>
                        <p>
                            For over 12 years, I've helped 500+ women and men reverse chronic conditions that conventional medicine often dismisses as "just manage it." My approach combines functional nutrition, gut microbiome science, and lifestyle medicine — addressing the root cause, not the symptom.
                        </p>
                        <br />
                        <p>
                            Whether you've been told your thyroid numbers are "borderline," struggled with unexplained weight gain, or lived with bloating and fatigue for years — there is a path forward. I've walked it with hundreds of clients, and I'll walk it with you.
                        </p>
                    </div>

                    <div className={styles.credentialsGrid}>
                        <div className={styles.credentialCard}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <div>
                                <strong>MSc Clinical Nutrition</strong>
                                <span>Symbiosis International University</span>
                            </div>
                        </div>
                        <div className={styles.credentialCard}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <div>
                                <strong>Certified Functional Medicine Coach</strong>
                                <span>IFM — USA</span>
                            </div>
                        </div>
                        <div className={styles.credentialCard}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <div>
                                <strong>Gut Health Specialist</strong>
                                <span>British Society of Gut Health</span>
                            </div>
                        </div>
                        <div className={styles.credentialCard}>
                            <CheckCircle2 size={16} className={styles.checkIcon} />
                            <div>
                                <strong>Diabetes Educator</strong>
                                <span>International Diabetes Federation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
