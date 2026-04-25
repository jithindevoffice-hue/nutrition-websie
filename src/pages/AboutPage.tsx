import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Utensils, Flower2, Brain } from 'lucide-react';
import styles from './AboutPage.module.css';
import { Link } from 'react-router-dom';
import sonikaImg from '../assets/sonika.png';
import aboutHeroImg from '../assets/about-hero.jpg';

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
                                    src={sonikaImg}
                                    alt="Close up portrait of Sonika, professional wellness coach smiling"
                                    className={styles.coachImage}
                                />
                            </div>
                            <p className={styles.coachName}>Sonika</p>
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
                            <Link to="/profile" className={styles.ctaButton}>
                                Start Your Profile
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};
