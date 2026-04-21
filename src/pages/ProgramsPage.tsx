import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import styles from './ProgramsPage.module.css';
import stressSleepImg from '../assets/stress-sleep.png';
import muscleBuildingImg from '../assets/muscle-building.png';

export const ProgramsPage = () => {
    return (
        <div className={styles.page}>
            <Navbar />

            <main>
                <section className={styles.hero}>
                    <div className={styles.subtitleWrapper}>
                        <div className={styles.subtitleLine}></div>
                        <span className={styles.subtitle}>MY PROGRAMS</span>
                        <div className={styles.subtitleLine}></div>
                    </div>
                    
                    <h1 className={styles.heroTitle}>
                        Real Results. Real People.<br/>
                        <span className="text-italic">Real Transformation.</span>
                    </h1>
                </section>

                <div className={styles.container}>
                    <div className={styles.grid}>

                        {/* Program 1 */}
                        <div className={`${styles.card} ${styles.cardFull}`}>
                            <div className={styles.cardContentDark}>
                                <div className={styles.cardNumberDark}>01</div>
                                <h2 className={styles.cardTitleWhite}>Weight Loss Mastery</h2>
                                <h3 className={styles.cardSubtitleWhite}>Shed the Weight. Keep It Off. Forever.</h3>
                                <p className={styles.cardDescWhite}>
                                    Stop the yo-yo dieting cycle. My science-backed, personalized weight loss program tackles the root cause of your weight — not just the symptoms. No starvation. No shortcuts. Just sustainable results that last.
                                </p>
                                <ul className={styles.listWhite}>
                                    <li>Customized meal & nutrition plan</li>
                                    <li>Metabolism reset strategy</li>
                                    <li>Weekly progress tracking</li>
                                    <li>Mindset coaching</li>
                                </ul>
                                <p className={styles.quoteWhite}>"Because the best weight loss plan is one you can actually live with."</p>
                            </div>
                            <div className={styles.cardImageWrapper}>
                                <img src="/weight-loss.png" alt="Weight Loss Mastery" className={styles.cardImage} />
                            </div>
                        </div>

                        {/* Program 2 */}
                        <div className={`${styles.card} ${styles.cardHalf}`}>
                            <div className={styles.cardImageWrapperHalf}>
                                <img src="/gut-health.png" alt="Gut Health Reset" className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContentLight}>
                                <div className={styles.cardNumberLight}>02</div>
                                <h2 className={styles.cardTitleDark}>Gut Health Reset</h2>
                                <h3 className={styles.cardSubtitleDark}>Heal Your Gut. Heal Your Life.</h3>
                                <p className={styles.cardDescDark}>
                                    Bloating. Fatigue. Brain fog. Poor digestion. It all starts in the gut. My Gut Health Reset Program is designed to restore your digestive system from the inside out.
                                </p>
                                <ul className={styles.listDark}>
                                    <li>Gut-healing nutrition protocol</li>
                                    <li>Anti-inflammatory food guide</li>
                                    <li>Probiotic & supplement guidance</li>
                                    <li>Personalized detox plan</li>
                                </ul>
                                <p className={styles.quoteDark}>"A healthy gut is the foundation of everything."</p>
                            </div>
                        </div>

                        {/* Program 3 */}
                        <div className={`${styles.card} ${styles.cardHalf}`}>
                            <div className={styles.cardImageWrapperHalf}>
                                <img src="/thyroid.png" alt="Thyroid Wellness Program" className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContentLight}>
                                <div className={styles.cardNumberLight}>03</div>
                                <h2 className={styles.cardTitleDark}>Thyroid Wellness</h2>
                                <h3 className={styles.cardSubtitleDark}>Balance Your Thyroid. Reclaim Your Energy.</h3>
                                <p className={styles.cardDescDark}>
                                    Struggling with unexplained weight gain or fatigue? I'll help you work with your body through targeted nutrition specifically for thyroid conditions.
                                </p>
                                <ul className={styles.listDark}>
                                    <li>Thyroid-friendly meal planning</li>
                                    <li>Hormone-balancing nutrition strategy</li>
                                    <li>Energy optimization protocol</li>
                                    <li>Stress & sleep management plan</li>
                                </ul>
                                <p className={styles.quoteDark}>"You deserve to feel like yourself again."</p>
                            </div>
                        </div>

                        {/* Program 4 */}
                        <div className={`${styles.card} ${styles.cardFullReverse}`}>
                            <div className={styles.cardContentLight}>
                                <div className={styles.cardNumberLight}>04</div>
                                <h2 className={styles.cardTitleDark}>Diabetes & Blood Sugar Balance</h2>
                                <h3 className={styles.cardSubtitleDark}>Take Control. Not Medication.</h3>
                                <p className={styles.cardDescDark}>
                                    Managing blood sugar doesn't have to mean giving up everything you love. My program helps you stabilize your glucose levels naturally through smart nutrition, movement, and lifestyle habits.
                                </p>
                                <ul className={styles.listDark}>
                                    <li>Low-glycemic meal planning</li>
                                    <li>Sugar craving elimination strategy</li>
                                    <li>Lifestyle & movement guidance</li>
                                    <li>Regular monitoring support</li>
                                </ul>
                                <p className={styles.quoteDark}>"Small daily choices create life-changing results."</p>
                            </div>
                            <div className={styles.cardImageWrapper}>
                                <img src="/diabetes.png" alt="Blood Sugar Balance" className={styles.cardImage} />
                            </div>
                        </div>

                        {/* Program 5 */}
                        <div className={`${styles.card} ${styles.cardHalf}`}>
                            <div className={styles.cardImageWrapperHalf}>
                                <img src={stressSleepImg} alt="Stress and Sleep Recovery" className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContentLight}>
                                <div className={styles.cardNumberLight}>05</div>
                                <h2 className={styles.cardTitleDark}>Stress, Sleep & Burnout Recovery</h2>
                                <h3 className={styles.cardSubtitleDark}>Rest is Not a Luxury. It's Medicine.</h3>
                                <p className={styles.cardDescDark}>
                                    Chronic stress and poor sleep are silently destroying your health. This program is your reset button to calm your nervous system and restore deep sleep.
                                </p>
                                <ul className={styles.listDark}>
                                    <li>Stress management techniques</li>
                                    <li>Sleep optimization protocol</li>
                                    <li>Mindfulness & breathing practices</li>
                                    <li>Resilience-building strategies</li>
                                </ul>
                                <p className={styles.quoteDark}>"You can't pour from an empty cup."</p>
                            </div>
                        </div>

                        {/* Program 6 */}
                        <div className={`${styles.card} ${styles.cardHalf}`}>
                            <div className={styles.cardImageWrapperHalf}>
                                <img src={muscleBuildingImg} alt="Weight Gain Program" className={styles.cardImage} />
                            </div>
                            <div className={styles.cardContentLight}>
                                <div className={styles.cardNumberLight}>06</div>
                                <h2 className={styles.cardTitleDark}>Weight Gain & Muscle Building</h2>
                                <h3 className={styles.cardSubtitleDark}>Build the Body You've Always Wanted.</h3>
                                <p className={styles.cardDescDark}>
                                    Being underweight is just as challenging as being overweight. My program helps you build lean muscle and fuel your body the right way.
                                </p>
                                <ul className={styles.listDark}>
                                    <li>High-nutrition meal planning</li>
                                    <li>Muscle-building food strategy</li>
                                    <li>Supplement & protein guidance</li>
                                    <li>Fitness & lifestyle integration</li>
                                </ul>
                                <p className={styles.quoteDark}>"Strong is the new healthy."</p>
                            </div>
                        </div>

                        {/* Program 7 */}
                        <div className={`${styles.card} ${styles.cardFull}`}>
                            <div className={styles.cardContentDark}>
                                <div className={styles.cardNumberDark}>07</div>
                                <h2 className={styles.cardTitleWhite}>Women's Hormonal Health</h2>
                                <h3 className={styles.cardSubtitleWhite}>Balance Your Hormones. Transform Your Life.</h3>
                                <p className={styles.cardDescWhite}>
                                    PCOS, menopause, irregular cycles, mood swings — hormonal imbalances affect everything. My women's wellness program is built to naturally restore hormonal harmony through food, lifestyle, and targeted wellness practices.
                                </p>
                                <ul className={styles.listWhite}>
                                    <li>Hormone-balancing nutrition plan</li>
                                    <li>Cycle-syncing food strategies</li>
                                    <li>PCOS/menopause-specific protocols</li>
                                    <li>Emotional wellness support</li>
                                </ul>
                                <p className={styles.quoteWhite}>"Your hormones don't control you — you do."</p>
                            </div>
                            <div className={styles.cardImageWrapper}>
                                { /* Placeholder for hormonal health */ }
                                <img src="/gut-health.png" alt="Women's Hormonal Health" className={styles.cardImage} style={{filter: 'hue-rotate(-45deg)'}} />
                            </div>
                        </div>

                    </div>
                </div>

                <section className={styles.cta}>
                    <h2 className={styles.ctaQuote}>"Every journey begins with a single step. Let me walk it with you."</h2>
                    <p className={styles.ctaAuthor}>— Sonika Babu, Wellness Coach</p>
                    <button className="btn btn-primary" onClick={() => window.location.href='/profile'}>
                        📞 Book Your Pre-Consultation @2499 Today
                    </button>
                </section>
            </main>

            <Footer />
        </div>
    );
};
