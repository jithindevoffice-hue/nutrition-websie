import styles from './ClinicalPartnershipSection.module.css';
import { Microscope, ShieldCheck } from 'lucide-react';
import gutImage from '../assets/finger-prick-test.jpg';

export const ClinicalPartnershipSection = () => {
    return (
        <section id="clinical-partnership" className={`section ${styles.partnership}`}>
            <div className={styles.container}>
                <div className={styles.headerArea}>
                    <div className={styles.subtitleWrapper}>
                        <div className={styles.subtitleLine}></div>
                        <span className={styles.subtitle}>CLINICAL PARTNERSHIP</span>
                        <div className={styles.subtitleLine}></div>
                    </div>
                    <h2 className={styles.title}>
                        The Future of Wellness <br />
                        <span className="text-italic">Lives in Your Gut.</span>
                    </h2>
                    <p className={styles.headerDescription}>
                        75% of all gut science discoveries have emerged in just the last 5 years. The research is groundbreaking — and through our partnership with MicrobioTx, we're making it accessible to everyone. MicrobioTx delivers hyper-personalised, microbiome-based wellness solutions built on the latest clinical science that are simple, affordable, and designed for real life.
                    </p>
                </div>

                <div className={styles.contentGrid}>
                    <div className={styles.textContent}>
                        <div className={styles.block}>
                            <h3>Why MicrobioTx?</h3>
                            <p>We didn't follow the science. We built on it. Guided by leading Doctors, Data Scientists, and Biotechnologists, the team studied 1,000+ global publications to develop something the world hadn't seen before: A gut microbiome test from a single finger prick.</p>
                        </div>
                        
                        <div className={styles.block}>
                            <h3>The Gut Function Test</h3>
                            <p>This is the world's first finger-prick, blood-based gut microbiome profiling test. Based on the analysis of over 200 microbes, one small sample provides powerful insights into how your gut supports your immunity, digestion, energy levels, sleep quality, nutrient absorption, and mood. It also details your microbial diversity, toxin exposure (pesticides, antibiotics, steroids & forever chemicals), and your IBS risk score.</p>
                        </div>

                        <div className={styles.steps}>
                            <h4>No stool sample. No clinic visit. Just answers in 3 easy steps:</h4>
                            <ul>
                                <li>
                                    <div className={styles.stepNumber}>1</div>
                                    <div>
                                        <strong>Collect Sample:</strong> Prick your finger (similar to glucose testing) using the included lancet and collect drops on the test strip.
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.stepNumber}>2</div>
                                    <div>
                                        <strong>Schedule Pickup:</strong> Your sample is collected and safely delivered to the lab for our scientists to decode.
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.stepNumber}>3</div>
                                    <div>
                                        <strong>Receive Report:</strong> Explore your personalized health report within 2 weeks.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.imageContent}>
                        <img src={gutImage} alt="MicrobioTx Gut Science" className={styles.image} />
                        
                        <div className={styles.badgeGroup}>
                            <div className={styles.badge}>
                                <div className={styles.badgeIcon}>
                                    <Microscope size={24} color="#b59c73" />
                                </div>
                                <div className={styles.badgeContent}>
                                    <strong>Comprehensive Insights & Personalised Care</strong>
                                    <p>Recommended for ages 18+, your kit includes a full gut microbiome profile, a toxin report, and a FREE IBS risk indicator. Includes a 30-Min Consultation, Targeted Recommendations, and Personal ProbioTx.</p>
                                </div>
                            </div>

                            <div className={styles.badge}>
                                <div className={styles.badgeIcon}>
                                    <ShieldCheck size={24} color="#b59c73" />
                                </div>
                                <div className={styles.badgeContent}>
                                    <strong>Clinically Tested, Patented & Proven</strong>
                                    <p>Accessible and highly affordable, the Gut Function Test is clinically validated at premier research institutes, including AIIMS and NISER, fully patented and CDSCO approved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
