import { useState } from 'react';
import styles from './TestimonialsSection.module.css';
import { Star, TrendingUp, TrendingDown, ArrowRight, ChevronLeft, ChevronRight, Activity, Moon, Heart } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        tag: "GUT HEALTH RESTORATION",
        outcome: "IBS resolved, bloating gone",
        Icon: TrendingUp,
        beforeValue: "Daily IBS",
        afterValue: "Symptom-free",
        quote: "\"I had been bloated every single day for 6 years. Three gastroenterologists, dozens of tests — and nothing helped. Sonika's gut protocol changed everything. By week 4, I had my first bloat-free week in years. By week 8, my IBS was completely under control.\"",
        name: "Preethi Nair",
        location: "Hyderabad",
        avatar: "/hero-image.png"
    },
    {
        id: 2,
        tag: "METABOLIC WEIGHT LOSS",
        outcome: "Lost 22 kg, reversed pre-diabetes",
        Icon: TrendingDown,
        beforeValue: "108 kg",
        afterValue: "86 kg",
        quote: "\"I came to Sonika for weight loss but got so much more. My pre-diabetes reversed, my sleep apnea improved, and my cholesterol normalized — all in 14 weeks. This wasn't a weight loss program, it was a life transformation.\"",
        name: "Vikram Sharma",
        location: "Delhi",
        avatar: "/hero-image.png"
    },
    {
        id: 3,
        tag: "THYROID BALANCED",
        outcome: "Energy restored, meds reduced",
        Icon: Activity,
        beforeValue: "Severe fatigue",
        afterValue: "Vibrant energy",
        quote: "\"I used to wake up exhausted no matter how long I slept. After 3 months on the thyroid protocol, my TSH normalized naturally. I have my life and my energy back again, and my doctor was amazed.\"",
        name: "Aisha Khan",
        location: "Mumbai",
        avatar: "/hero-image.png"
    },
    {
        id: 4,
        tag: "PCOS REVERSAL",
        outcome: "Regular cycles, clear skin",
        Icon: Heart,
        beforeValue: "Irregular cycles",
        afterValue: "28-day cycle",
        quote: "\"Dealing with PCOS was so frustrating. The generic advice never worked. Sonika helped me understand my cycle and root causes. For the first time in 5 years, my cycle is completely regular and my acne is gone.\"",
        name: "Meera Reddy",
        location: "Bangalore",
        avatar: "/hero-image.png"
    },
    {
        id: 5,
        tag: "BURNOUT RECOVERY",
        outcome: "Deep sleep, sharp focus",
        Icon: Moon,
        beforeValue: "4 hours sleep",
        afterValue: "8 hours deep",
        quote: "\"I was running on empty for years as a busy executive. I thought feeling exhausted was just part of the job. Healing my adrenals and fixing my sleep changed not just my health, but my career trajectory.\"",
        name: "Rohan Patel",
        location: "Pune",
        avatar: "/hero-image.png"
    }
];

export const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    // Calculate which cards to show
    // We show 2 cards in the UI grid. To wrap around smoothly:
    const visibleCards = [
        testimonials[currentIndex],
        testimonials[(currentIndex + 1) % testimonials.length]
    ];

    return (
        <section id="stories" className={`section ${styles.testimonials}`}>
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
                        <span className={styles.paginationText}>{currentIndex + 1} / {testimonials.length}</span>
                        <div className={styles.navButtons}>
                            <button className={styles.navBtn} onClick={handlePrev}><ChevronLeft size={20} /></button>
                            <button className={styles.navBtn} onClick={handleNext}><ChevronRight size={20} /></button>
                        </div>
                    </div>
                </div>

                {/* Carousel Grid */}
                <div className={styles.carouselGrid}>
                    {visibleCards.map((testimonial, idx) => (
                        <div className={styles.card} key={`${testimonial.id}-${idx}`}>
                            <div className={styles.cardTop}>
                                <span className={styles.tagPill}>{testimonial.tag}</span>
                                <div className={styles.stars}>
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={14} fill="#b59c73" color="#b59c73" />)}
                                </div>
                            </div>

                            <div className={styles.outcomeBar}>
                                <testimonial.Icon size={16} />
                                <span>{testimonial.outcome}</span>
                            </div>

                            <div className={styles.beforeAfter}>
                                <div className={styles.beforeBox}>
                                    <span className={styles.boxLabelBefore}>BEFORE</span>
                                    <span className={styles.boxValueBefore}>{testimonial.beforeValue}</span>
                                </div>
                                <ArrowRight size={16} className={styles.arrowBetween} />
                                <div className={styles.afterBox}>
                                    <span className={styles.boxLabelAfter}>AFTER</span>
                                    <span className={styles.boxValueAfter}>{testimonial.afterValue}</span>
                                </div>
                            </div>

                            <blockquote className={styles.quote}>
                                {testimonial.quote}
                            </blockquote>

                            <div className={styles.clientInfo}>
                                <img src={testimonial.avatar} alt={testimonial.name} className={styles.clientAvatar} />
                                <div>
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Indicators */}
                <div className={styles.carouselIndicators}>
                    {testimonials.map((_, idx) => (
                        <div 
                            key={idx} 
                            className={idx === currentIndex ? styles.indicatorFull : styles.indicatorEmpty}
                            onClick={() => setCurrentIndex(idx)}
                            style={{ cursor: 'pointer' }}
                        ></div>
                    ))}
                </div>

            </div>
        </section>
    );
};
