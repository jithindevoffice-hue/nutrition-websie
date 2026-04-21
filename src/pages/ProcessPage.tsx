import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import styles from './ProcessPage.module.css';
import { FileText, MessageSquare, CreditCard } from 'lucide-react';
import aboutHeroImg from '../assets/about-hero.jpg';

export const ProcessPage = () => {
    return (
        <div className={styles.page}>
            <Navbar />

            <main>
                <section className={styles.hero}>
                    <div className={styles.subtitleWrapper}>
                        <div className={styles.subtitleLine}></div>
                        <span className={styles.subtitle}>HOW IT WORKS</span>
                        <div className={styles.subtitleLine}></div>
                    </div>
                    
                    <h1 className={styles.heroTitle}>
                        Your Path to Healing,<br/>
                        <span className="text-italic">Step by Step</span>
                    </h1>

                    <p className={styles.heroDesc}>
                        From your first click to your first breakthrough — here's exactly what to expect when you work with me to reclaim your health naturally.
                    </p>
                </section>

                <div className={styles.heroImageWrapper}>
                    {/* Using an existing gorgeous lifestyle wellness photo since generation is delayed */}
                    <img src={aboutHeroImg} alt="Wellness Consultation Planning" className={styles.heroImage} />
                </div>

                <section className={styles.processArea}>
                    <div className={styles.container}>
                        <div className={styles.grid}>

                            {/* Step 1 */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconCircle}>
                                        <FileText size={24} color="#b59c73" />
                                    </div>
                                    <span className={styles.stepNumber}>01</span>
                                </div>

                                <h3 className={styles.cardTitle}>Complete Your Wellness Profile</h3>
                                <p className={styles.cardDescription}>
                                    Fill out a comprehensive health intake form covering your symptoms, medical history, lifestyle, food habits, sleep patterns, and wellness goals. This takes 10–15 minutes and is completely confidential.
                                </p>

                                <div className={styles.cardFooter}>
                                    <span className={styles.tagDot}></span>
                                    Confidential · Takes 15 min
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconCircle}>
                                        <MessageSquare size={24} color="#b59c73" />
                                    </div>
                                    <span className={styles.stepNumber}>02</span>
                                </div>

                                <h3 className={styles.cardTitle}>Initial Discovery Consultation</h3>
                                <p className={styles.cardDescription}>
                                    A 45-minute video call with Sonika to review your profile, understand your health story, and determine which program is the right fit. This is your space to ask anything.
                                </p>

                                <div className={styles.cardFooter}>
                                    <span className={styles.tagDot}></span>
                                    45-min video call
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.iconCircle}>
                                        <CreditCard size={24} color="#b59c73" />
                                    </div>
                                    <span className={styles.stepNumber}>03</span>
                                </div>

                                <h3 className={styles.cardTitle}>Enroll & Begin Your Journey</h3>
                                <p className={styles.cardDescription}>
                                    Once you've chosen your program, you'll receive your personalized onboarding kit, meal framework, and first weekly check-in within 24 hours.
                                </p>

                                <div className={styles.cardFooter}>
                                    <span className={styles.tagDot}></span>
                                    Starts in 24hrs
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
