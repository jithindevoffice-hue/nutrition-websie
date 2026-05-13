import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Utensils, Flower2, Brain } from 'lucide-react';
import styles from './AboutPage.module.css';

import aboutHeroImg from '../assets/about-hero.jpg';
import profilePic from '../assets/sonikaprofile.jpeg';

export const AboutPage = () => {
    return (
        <div className={styles.page}>
            <Navbar />

            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroImageWrapper}>
                        <div
                            className={styles.heroImage}
                            role="img"
                            aria-label="A woman sitting from behind in an outdoor setting"
                            style={{ backgroundImage: `url(${aboutHeroImg})` }}
                        />
                    </div>
                    <div className={styles.heroContent}>
                        <h1 className={styles.heroTitle}>Empowering you to live your healthiest life</h1>
                        <div className={styles.heroAccentLine}></div>
                    </div>
                </section>

                {/* Philosophy Section */}
                <section className={styles.philosophy}>
                    <div className={styles.philosophyContainer}>
                        <h4 className={styles.philosophySubtitle}>Our Philosophy</h4>

                        <div className={styles.philosophyCards}>
                            {/* Card 1 */}
                            <div className={styles.philosophyCard}>
                                <div className={styles.cardHeader}>
                                    <Utensils className={styles.cardIcon} size={32} strokeWidth={1.5} />
                                    <h3 className={styles.cardTitle}>Mindful Nutrition</h3>
                                </div>
                                <p className={styles.cardText}>
                                    We believe in nourishing the body with whole, seasonal foods that fuel your unique lifestyle and energy needs.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className={styles.philosophyCard}>
                                <div className={styles.cardHeader}>
                                    <Flower2 className={styles.cardIcon} size={32} strokeWidth={1.5} />
                                    <h3 className={styles.cardTitle}>Holistic Balance</h3>
                                </div>
                                <p className={styles.cardText}>
                                    Wellness isn't just physical. We integrate mental clarity, emotional health, and restorative sleep into every plan.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className={styles.philosophyCard}>
                                <div className={styles.cardHeader}>
                                    <Brain className={styles.cardIcon} size={32} strokeWidth={1.5} />
                                    <h3 className={styles.cardTitle}>Sustainable Habits</h3>
                                </div>
                                <p className={styles.cardText}>
                                    Small, consistent changes lead to lifelong transformations. We focus on building routines that actually stick.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet the Coach Section */}
                <section className={styles.story}>
                    <div className={styles.storyContainer}>
                        <h2 className={styles.storyTitle}>The Story Behind the Mission</h2>
                        <p className={styles.storyQuote}>
                            "I discovered that true wellness starts when you stop fighting your body and start listening to it."
                        </p>

                        <div className={styles.storyTextContent}>
                            <p>
                                With over a decade of experience in clinical nutrition and lifestyle coaching, I've helped hundreds of individuals reclaim their vitality. My journey began with my own struggle to balance a high-pressure career with personal health.
                            </p>
                            <p>
                                Today, I combine science-based protocols with intuitive living practices to help you find your own version of "perfect health."
                            </p>
                        </div>

                        <div className={styles.coachProfile}>
                            <div className={styles.coachImageWrapper}>
                                <img
                                    src={profilePic}
                                    alt="Close up portrait of Sonika, professional wellness coach smiling"
                                    className={styles.coachImage}
                                />
                            </div>
                            <p className={styles.coachName}>Sonika Saraswathi Babu</p>
                            <p className={styles.coachTitle}>Founder & Lead Coach</p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className={styles.ctaContainer}>
                        <div className={styles.ctaCard}>
                            <h2 className={styles.ctaTitle}>Ready to start your journey?</h2>
                            <p className={styles.ctaText}>
                                Take the first step towards a more vibrant you with a personalized wellness assessment.
                            </p>
                            <a 
                                href="https://calendly.com/sonika66866/book_a_pre-consultation?utm_source=ig&amp;utm_medium=social&amp;utm_content=link_in_bio&amp;fbclid=PAb21jcARqI5BleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac0E5KnPm6_a6u6dsjzvxJbnPt5RfKLEs6twPL30w_YVkBUtwsG3Mw9Td3M7Q_aem_tNHioKP2oT107obWPVacLQ&amp;utm_id=97760_v0_s00_e0_tv3_a1dennh6z5rntm&amp;month=2026-05" 
                                className={styles.ctaButton}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Book Your Pre-Consultation Call Now
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
