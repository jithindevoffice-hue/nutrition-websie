import styles from './ProcessSection.module.css';
import { FileText, MessageSquare, CreditCard, Phone } from 'lucide-react';

export const ProcessSection = () => {
    return (
        <section id="process" className={`section ${styles.process}`}>
            <div className={styles.container}>

                {/* Header Area */}
                <div className={styles.headerArea}>
                    <div className={styles.subtitleWrapper}>
                        <div className={styles.subtitleLine}></div>
                        <span className={styles.subtitle}>HOW IT WORKS</span>
                        <div className={styles.subtitleLine}></div>
                    </div>

                    <h2 className={styles.title}>
                        Your Path to Healing,<br />
                        <span className={styles.titleItalic}>Step by Step</span>
                    </h2>

                    <p className={styles.description}>
                        From your first click to your first breakthrough — here's exactly what to expect when you work with me.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className={styles.grid}>

                    {/* Step 1 */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <a 
                                href="https://calendly.com/sonika66866/book_a_pre-consultation?utm_source=ig&amp;utm_medium=social&amp;utm_content=link_in_bio&amp;fbclid=PAb21jcARqI5BleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac0E5KnPm6_a6u6dsjzvxJbnPt5RfKLEs6twPL30w_YVkBUtwsG3Mw9Td3M7Q_aem_tNHioKP2oT107obWPVacLQ&amp;utm_id=97760_v0_s00_e0_tv3_a1dennh6z5rntm&amp;month=2026-05" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className={styles.iconCircle}
                                style={{ cursor: 'pointer', textDecoration: 'none', display: 'flex' }}
                            >
                                <Phone size={24} color="#b59c73" />
                            </a>
                            <span className={styles.stepNumber}>01</span>
                        </div>

                        <h3 className={styles.cardTitle}>Crafted For You. Precisely</h3>
                        <p className={styles.cardDescription}>
                            Before we build your transformation, I need to know you — your health history, lifestyle, nutrition, sleep, stress, and goals.<br />
                            One confidential call. Your entire protocol, built from it.
                        </p>

                        <div className={styles.cardFooter}>
                            <span className={styles.tagDot}></span>
                            <a 
                                href="https://calendly.com/sonika66866/book_a_pre-consultation?utm_source=ig&amp;utm_medium=social&amp;utm_content=link_in_bio&amp;fbclid=PAb21jcARqI5BleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAac0E5KnPm6_a6u6dsjzvxJbnPt5RfKLEs6twPL30w_YVkBUtwsG3Mw9Td3M7Q_aem_tNHioKP2oT107obWPVacLQ&amp;utm_id=97760_v0_s00_e0_tv3_a1dennh6z5rntm&amp;month=2026-05" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                            >
                                Book Your Pre-Consultation Call
                            </a>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconCircle}>
                                <FileText size={24} color="#b59c73" />
                            </div>
                            <span className={styles.stepNumber}>02</span>
                        </div>

                        <h3 className={styles.cardTitle}>Complete Your Wellness Profile</h3>
                        <p className={styles.cardDescription}>
                            Fill out a comprehensive health intake form covering your symptoms, medical history, lifestyle, food habits, sleep patterns, and wellness goals. This takes 10–15 minutes and is completely confidential.
                        </p>

                        <div className={styles.cardFooter}>
                            <span className={styles.tagDot}></span>
                            Takes 15 min
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconCircle}>
                                <MessageSquare size={24} color="#b59c73" />
                            </div>
                            <span className={styles.stepNumber}>03</span>
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

                    {/* Step 4 */}
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconCircle}>
                                <CreditCard size={24} color="#b59c73" />
                            </div>
                            <span className={styles.stepNumber}>04</span>
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
    );
};
