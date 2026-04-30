import styles from './AboutSection.module.css';
import { Award } from 'lucide-react';
import profilePic from '../assets/sonikaprofile.jpeg';

export const AboutSection = () => {
    return (
        <section className={`section ${styles.about}`}>
            <div className={styles.container}>
                <div className={styles.imageColumn}>
                    <div className={styles.imageWrapper}>
                        <img src={profilePic} alt="Sonika" className={styles.image} />
                        <div className={styles.badge}>
                            <div className={styles.badgeIcon}>
                                <Award size={20} color="#b59c73" />
                            </div>
                            <div className={styles.badgeText}>
                                <strong>Personalized Plan Architect</strong>
                                <span>Internationally accredited nutrition & lifestyle protocol designer</span>
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
                            As a Wellness Coach and Functional Medicine expert, I believe that health isn't "one size fits all." Whether you're looking to manage stress, gain strength, or finally get the sleep you need, I’m here to empower you with a plan designed for your specific life. You have the power to feel your best—I'm just here to help you unlock it.
                        </p>
                    </div>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoColumn}>
                            <h4 className={styles.infoTitle}>QUALIFICATIONS</h4>
                            <ul className={styles.infoList}>
                                <li>Nutrition & Wellness Coach, NHI California</li>
                                <li>Food & Nutrition — Stanford University</li>
                                <li>19+ Years Experience in Wellness</li>
                            </ul>
                        </div>
                        <div className={styles.infoColumn}>
                            <h4 className={styles.infoTitle}>SPECIALIZATIONS</h4>
                            <ul className={styles.infoList}>
                                <li>Wellness Consultation</li>
                                <li>Weightloss / Weightgain</li>
                                <li>Lifestyle Assessment</li>
                                <li>Fitness & Nutrition Advice</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
