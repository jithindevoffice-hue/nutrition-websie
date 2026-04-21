import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import styles from './ProfileFormPage.module.css';
import { ChevronRight } from 'lucide-react';

export const ProfileFormPage = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;
    const progressPercent = (step / totalSteps) * 100;

    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>
                <div className={styles.container}>

                    <div className={styles.header}>
                        <h1 className={styles.title}>Your Wellness Profile</h1>
                        <p className={styles.description}>
                            This confidential form helps Sonika understand your health history and goals before your free discovery call. Takes about 10–15 minutes.
                        </p>
                    </div>

                    <div className={styles.progressContainer}>
                        <div className={styles.progressHeader}>
                            <span className={styles.stepText}>STEP {step} OF {totalSteps}</span>
                            <span className={styles.percentText}>{progressPercent}% COMPLETE</span>
                        </div>

                        <div className={styles.progressBarBg}>
                            <div
                                className={styles.progressBarFill}
                                style={{ width: `${progressPercent}%` }}
                            ></div>
                        </div>

                        <div className={styles.stepLabels}>
                            <span className={step >= 1 ? styles.activeLabel : ''}>Personal Info</span>
                            <span className={step >= 2 ? styles.activeLabel : ''}>Health Concerns</span>
                            <span className={step >= 3 ? styles.activeLabel : ''}>Lifestyle</span>
                            <span className={step >= 4 ? styles.activeLabel : ''}>Goals & Enroll</span>
                        </div>
                    </div>

                    <div className={styles.formCard}>
                        <h2 className={styles.formTitle}>Tell us about yourself</h2>
                        <p className={styles.formDesc}>
                            Your information is completely confidential and used only to personalize your wellness plan.
                        </p>

                        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); setStep(Math.min(step + 1, 4)); }}>

                            <div className={styles.inputGroup2}>
                                <div className={styles.inputWrapper}>
                                    <label>FIRST NAME *</label>
                                    <input type="text" placeholder="Ananya" required />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label>LAST NAME *</label>
                                    <input type="text" placeholder="Krishnan" required />
                                </div>
                            </div>

                            <div className={styles.inputGroup2}>
                                <div className={styles.inputWrapper}>
                                    <label>EMAIL ADDRESS *</label>
                                    <input type="email" placeholder="you@email.com" required />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label>PHONE NUMBER *</label>
                                    <input type="tel" placeholder="+91 98765 43210" required />
                                </div>
                            </div>

                            <div className={styles.inputGroup3}>
                                <div className={styles.inputWrapper}>
                                    <label>AGE *</label>
                                    <input type="number" placeholder="35" required />
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label>GENDER</label>
                                    <select defaultValue="">
                                        <option value="" disabled>Select</option>
                                        <option value="female">Female</option>
                                        <option value="male">Male</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className={styles.inputWrapper}>
                                    <label>CITY</label>
                                    <input type="text" placeholder="Mumbai" />
                                </div>
                            </div>

                            <div className={styles.formFooter}>
                                <button type="submit" className={styles.continueBtn}>
                                    Continue <ChevronRight size={18} />
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};
