import styles from './AboutSection.module.css';
import { Award, CheckCircle2 } from 'lucide-react';
import sonikaImg from '../assets/sonika.png';

export const AboutSection = () => {
    return (
        <section className={`section ${styles.about}`}>
            <div className={styles.container}>
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img src={sonikaImg} alt="Sonika" className={styles.image} />
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
                        Hi, I'm Sonika Babu. <br />
                        <span className="text-italic">Your partner to true balance.</span>
                    </h2>

                    <div className={styles.description}>
                        <p>
                            For more than 20 years, I’ve been a partner to people just like you—helping them shed what holds them back to discover a life of true balance and confidence.
                        </p>
                        <br />
                        <p>
                            As a Certified Wellness Coach and Functional Medicine expert, I believe that health isn't "one size fits all." Whether you're looking to manage stress, gain strength, or finally get the sleep you need, I’m here to empower you with a plan designed for your specific life. You have the power to feel your best—I'm just here to help you unlock it.
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
