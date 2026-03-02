import React from 'react';
import styles from './TestimonialsSection.module.css';
import { Star, TrendingUp, TrendingDown, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection = () => {
    return (
        <section className={`section ${styles.testimonials}`}>
            <div className={styles.container}>

                {/* Header Area */}
                <div className={styles.headerArea}>
                    <div>
                        <div className={styles.subtitleWrapper}>
                            <div className={styles.subtitleLine}></div>
                            <span className={styles.subtitle}>CLIENT STORIES</span>
                        </div>

                        <h2 className={styles.title}>
                            Real People,<br />
                            <span className="text-italic">Real Transformations</span>
                        </h2>
                    </div>

                    <div className={styles.navConfig}>
                        <span className={styles.paginationText}>4 / 5</span>
                        <div className={styles.navButtons}>
                            <button className={styles.navBtn}><ChevronLeft size={20} /></button>
                            <button className={styles.navBtn}><ChevronRight size={20} /></button>
                        </div>
                    </div>
                </div>

                {/* Carousel Grid */}
                <div className={styles.carouselGrid}>

                    {/* Testimonial 1 */}
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <span className={styles.tagPill}>GUT HEALTH RESTORATION</span>
                            <div className={styles.stars}>
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#b59c73" color="#b59c73" />)}
                            </div>
                        </div>

                        <div className={styles.outcomeBar}>
                            <TrendingUp size={16} />
                            <span>IBS resolved, bloating gone</span>
                        </div>

                        <div className={styles.beforeAfter}>
                            <div className={styles.beforeBox}>
                                <span className={styles.boxLabelBefore}>BEFORE</span>
                                <span className={styles.boxValueBefore}>Daily IBS</span>
                            </div>
                            <ArrowRight size={16} className={styles.arrowBetween} />
                            <div className={styles.afterBox}>
                                <span className={styles.boxLabelAfter}>AFTER</span>
                                <span className={styles.boxValueAfter}>Symptom-free</span>
                            </div>
                        </div>

                        <blockquote className={styles.quote}>
                            "I had been bloated every single day for 6 years. Three gastroenterologists, dozens of tests — and nothing helped. Priya's gut protocol changed everything. By week 4, I had my first bloat-free week in years. By week 8, my IBS was completely under control."
                        </blockquote>

                        <div className={styles.clientInfo}>
                            <img src="/hero-image.png" alt="Preethi Nair" className={styles.clientAvatar} />
                            <div>
                                <strong>Preethi Nair</strong>
                                <span>Hyderabad</span>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className={styles.card}>
                        <div className={styles.cardTop}>
                            <span className={styles.tagPill}>METABOLIC WEIGHT LOSS</span>
                            <div className={styles.stars}>
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#b59c73" color="#b59c73" />)}
                            </div>
                        </div>

                        <div className={styles.outcomeBar}>
                            <TrendingDown size={16} />
                            <span>Lost 22 kg, reversed pre-diabetes</span>
                        </div>

                        <div className={styles.beforeAfter}>
                            <div className={styles.beforeBox}>
                                <span className={styles.boxLabelBefore}>BEFORE</span>
                                <span className={styles.boxValueBefore}>108 kg</span>
                            </div>
                            <ArrowRight size={16} className={styles.arrowBetween} />
                            <div className={styles.afterBox}>
                                <span className={styles.boxLabelAfter}>AFTER</span>
                                <span className={styles.boxValueAfter}>86 kg</span>
                            </div>
                        </div>

                        <blockquote className={styles.quote}>
                            "I came to Priya for weight loss but got so much more. My pre-diabetes reversed, my sleep apnea improved, and my cholesterol normalized — all in 14 weeks. This wasn't a weight loss program, it was a life transformation."
                        </blockquote>

                        <div className={styles.clientInfo}>
                            <img src="/hero-image.png" alt="Vikram Sharma" className={styles.clientAvatar} />
                            <div>
                                <strong>Vikram Sharma</strong>
                                <span>Delhi</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Carousel Indicators */}
                <div className={styles.carouselIndicators}>
                    <div className={styles.indicatorEmpty}></div>
                    <div className={styles.indicatorEmpty}></div>
                    <div className={styles.indicatorFull}></div>
                    <div className={styles.indicatorEmpty}></div>
                </div>

            </div>
        </section>
    );
};
