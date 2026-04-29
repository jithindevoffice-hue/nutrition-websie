import styles from './AboutSection.module.css';
import { Award } from 'lucide-react';
import profilePic from '../assets/sonikaprofile.jpeg';

const programsList = [
    "Weight management",
    "Hormonal imbalances",
    "Polycystic Ovary Syndrome (PCOS)",
    "Thyroid imbalances",
    "Gut health issues",
    "Irritable Bowel Syndrome (IBS) support",
    "Blood sugar regulation / insulin resistance",
    "Type 2 Diabetes (lifestyle support)",
    "Chronic inflammation",
    "Low energy and fatigue",
    "Sleep issues and poor recovery",
    "Stress management and burnout",
    "Emotional eating and food cravings",
    "Nutritional deficiencies",
    "Skin health concerns",
    "Women's health",
    "Men's metabolic health",
    "Digestive detox and metabolic reset",
    "Lifestyle habit building",
    "General wellness & preventive health"
];

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
                                <strong>4x Specialist</strong>
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

            <div className={styles.programsWrapper}>
                <div className={styles.programsGrid}>
                    {programsList.map((program, index) => (
                        <button key={index} type="button" className={`btn btn-outline ${styles.programBtn}`}>
                            {program}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};
