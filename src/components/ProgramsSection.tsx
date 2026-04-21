import styles from './ProgramsSection.module.css';
import { ArrowUpRight } from 'lucide-react';

export const ProgramsSection = () => {
    return (
        <section className={`section ${styles.programs}`}>
            <div className={styles.container}>

                {/* Header Area */}
                <div className={styles.headerArea}>
                    <div>
                        <div className={styles.subtitleWrapper}>
                            <div className={styles.subtitleLine}></div>
                            <span className={styles.subtitle}>SIGNATURE PROGRAMS</span>
                        </div>

                        <h2 className={styles.title}>
                            Healing Pathways <br />
                            <span className="text-italic">Designed for You</span>
                        </h2>
                    </div>

                    <div className={styles.headerText}>
                        <p>Each program is built around your unique biology, lifestyle, and health history — not a one-size-fits-all plan.</p>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className={styles.grid}>

                    {/* Card 1 - Full Width */}
                    <div className={`${styles.card} ${styles.cardFull}`}>
                        <div className={styles.cardContentDark}>
                            <div className={styles.cardTop}>
                                <span className={styles.cardNumberDark}>01</span>
                                <span className={styles.badgeDark}>MOST POPULAR</span>
                            </div>

                            <div className={styles.cardInfo}>
                                <h3 className={styles.cardTitleWhite}>Metabolic Weight Loss</h3>
                                <p className={styles.cardDescWhite}>Sustainable fat loss without starvation</p>
                            </div>

                            <div className={styles.cardFooter}>
                                <button className={styles.iconBtnDark}>
                                    <ArrowUpRight size={20} color="white" />
                                </button>
                            </div>
                        </div>
                        <div className={styles.cardImageWrapper}>
                            <img src="/weight-loss.png" alt="Metabolic Weight Loss" className={styles.cardImage} />
                        </div>
                    </div>

                    {/* Card 2 - Half Width */}
                    <div className={`${styles.card} ${styles.cardHalf}`}>
                        <div className={styles.cardImageWrapperHalf}>
                            <span className={styles.badgeLightFloat}>GUT RESET</span>
                            <img src="/gut-health.png" alt="Gut Health Foods" className={styles.cardImageHalf} />
                        </div>
                        <div className={styles.cardContentLight}>
                            <span className={styles.cardNumberLight}>02</span>
                            <h3 className={styles.cardTitleDark}>Gut Health & Microbiome Restoration</h3>
                            <p className={styles.cardDescDark}>Heal your second brain</p>

                            <div className={styles.cardFooterLight}>
                                <div>
                                    <div className={styles.durationDark}>8 Weeks</div>
                                </div>
                                <button className={styles.iconBtnLight}>
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 - Half Width */}
                    <div className={`${styles.card} ${styles.cardHalf}`}>
                        <div className={styles.cardImageWrapperHalf}>
                            <span className={styles.badgeLightFloat}>HORMONAL BALANCE</span>
                            <img src="/thyroid.png" alt="Thyroid Reversal" className={styles.cardImageHalf} />
                        </div>
                        <div className={styles.cardContentLight}>
                            <span className={styles.cardNumberLight}>03</span>
                            <h3 className={styles.cardTitleDark}>Thyroid Reversal Protocol</h3>
                            <p className={styles.cardDescDark}>Recalibrate your thyroid naturally</p>

                            <div className={styles.cardFooterLight}>
                                <div>
                                    <div className={styles.durationDark}>16 Weeks</div>
                                </div>
                                <button className={styles.iconBtnLight}>
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card 4 - Full Width */}
                    <div className={`${styles.card} ${styles.cardFullVertical}`}>
                        <div className={styles.cardImageWrapperWide}>
                            <span className={styles.badgeDarkFloat}>BLOOD SUGAR</span>
                            <img src="/diabetes.png" alt="Diabetes Reversal" className={styles.cardImageWide} />
                        </div>
                        <div className={styles.cardContentLight}>
                            <span className={styles.cardNumberLight}>04</span>
                            <h3 className={styles.cardTitleDark}>Diabetes Reversal Program</h3>
                            <p className={styles.cardDescDark}>Take back control of your blood sugar</p>

                            <div className={styles.cardFooterLight}>
                                <button className={styles.iconBtnLight}>
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
