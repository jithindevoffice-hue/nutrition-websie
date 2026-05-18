import { useState } from 'react';
import styles from './ApplyPage.module.css';
import { Check, ArrowRight, ArrowLeft, Loader2, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdfIY-G6_aZaj6F2CO4jevkj2-1CAWKKTv3-SJvGXfLVHNMXg/formResponse';

const INITIAL_DATA = {
  // Step 1: Personal Details
  'entry.723816947': '', // Full Name
  'entry.1319396545': '', // Date of Birth
  'entry.1647685996': '', // Gender
  'entry.875399376': '', // City
  'entry.105729209': '', // Country
  'entry.274299474': '', // Contact number
  'entry.681254784': '', // Email address
  'entry.179663427': '', // Marital status
  
  // Step 2: Health Snapshot
  'entry.1016282283': '', // Height(cm)
  'entry.2029650734': '', // Weight
  'entry.42301960': [], // Do you have any of the following?
  'entry.630036857': [], // Which of these are difficult for you to quit?
  'entry.2134496881': '', // Are you on any medication?
  'entry.2134496881_other': '', // Medication Other
  
  // Step 3: Lifestyle
  'entry.407393299': '', // How active are you daily
  'entry.1713086454': '', // Hours of sleep per night?
  'entry.26597109': '', // Stress Level
  
  // Step 4: Nutrition
  'entry.2103927452': '', // Meals per day?
  'entry.106715924': '', // Water Intake per day?
  'entry.775345826': '', // Do you experience any cravings?
  'entry.1666848940': '', // What do you crave the most?
  'entry.857416721': '', // Diet preference?
  
  // Step 5: Struggles
  'entry.1393131544': [], // What are your current struggles?
  'entry.989294290': '', // Do you suffer from any allergies?
  'entry.989294290_other': '', // Allergy Other
  'entry.465322430': [], // Tick all that apply to you
  'entry.1053807885': '', // Have you tried weight loss before?
  'entry.921980163': [], // What all have you tried?
  
  // Step 6: Goals
  'entry.371637433': '', // Why do you want to lose wight?
  'entry.691766073': '', // What is your biggest challenge right now?
  'entry.2112990163': '', // Are you ready to follow guidance seriously?
  'entry.1822505866': '', // Are you willing to invest in your health?
  'entry.1871346809': '', // How soon do you want to start?
  agreed: false,
};

export const ApplyPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, any>>(INITIAL_DATA);
  const [dob, setDob] = useState({d: '', m: '', y: ''});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const totalSteps = 7;

  const handleInputChange = (key: string, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxToggle = (key: string, value: string) => {
    setFormData((prev) => {
      const current = (prev[key] as string[]) || [];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v) => v !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const validateStep = () => {
    // Check HTML5 validity for native inputs (text, number, tel, email)
    const form = document.querySelector('form');
    if (form && !form.checkValidity()) {
      form.reportValidity();
      return false;
    }

    // Validate custom radio and checkbox groups for the current step
    if (step === 1) {
      if (!formData['entry.1647685996']) { alert('Please select your Gender'); return false; }
      if (!formData['entry.179663427']) { alert('Please select your Marital Status'); return false; }
    }
    if (step === 2) {
      if (formData['entry.42301960'].length === 0) { alert('Please select any conditions you have (or None)'); return false; }
      if (formData['entry.630036857'].length === 0) { alert('Please select what is difficult to quit (or None)'); return false; }
      if (!formData['entry.2134496881']) { alert('Please select if you are on medication'); return false; }
      if (formData['entry.2134496881'] === 'Yes (please specify)' && !formData['entry.2134496881_other']) { alert('Please specify your medication'); return false; }
    }
    if (step === 3) {
      if (!formData['entry.407393299']) { alert('Please select your daily activity level'); return false; }
      if (!formData['entry.1713086454']) { alert('Please select your hours of sleep'); return false; }
      if (!formData['entry.26597109']) { alert('Please select your stress level'); return false; }
    }
    if (step === 4) {
      if (!formData['entry.2103927452']) { alert('Please select meals per day'); return false; }
      if (!formData['entry.106715924']) { alert('Please select water intake'); return false; }
      if (!formData['entry.775345826']) { alert('Please select if you experience cravings'); return false; }
      if (!formData['entry.857416721']) { alert('Please select diet preference'); return false; }
    }
    if (step === 5) {
      if (formData['entry.1393131544'].length === 0) { alert('Please select your current struggles (or None)'); return false; }
      if (!formData['entry.989294290']) { alert('Please select if you suffer from allergies'); return false; }
      if (formData['entry.989294290'] === 'Yes (please specify)' && !formData['entry.989294290_other']) { alert('Please specify your allergies'); return false; }
      if (formData['entry.465322430'].length === 0) { alert('Please tick all that apply to you (or None)'); return false; }
      if (!formData['entry.1053807885']) { alert('Please select if you have tried weight loss before'); return false; }
      if (formData['entry.1053807885'] === 'Yes' && formData['entry.921980163'].length === 0) { alert('Please select what all you have tried'); return false; }
    }
    if (step === 6) {
      if (!formData['entry.2112990163']) { alert('Please confirm if you are ready to follow guidance'); return false; }
      if (!formData['entry.1822505866']) { alert('Please confirm if you are willing to invest in your health'); return false; }
      if (!formData['entry.1871346809']) { alert('Please select how soon you want to start'); return false; }
    }
    if (step === 7) {
      if (!formData.agreed) { alert('Please accept the Terms & Conditions'); return false; }
    }
    return true;
  };

  const nextStep = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, totalSteps));
    window.scrollTo(0, 0);
  };
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo(0, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      nextStep();
      return;
    }
    if (!validateStep()) return;

    setStatus('submitting');

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key.endsWith('_other')) return; // Handle other later
      if (key === 'agreed') return;

      if (Array.isArray(value)) {
        value.forEach((v) => formPayload.append(key, v));
      } else {
        if (value === '' || value == null) return;

        // Special case for "Other..." options
        if (value === 'Other...' || value === 'Yes (please specify)') {
            const otherVal = formData[`${key}_other`];
            formPayload.append(key, otherVal || '__other_option__');
            formPayload.append(`${key}.other_option_response`, otherVal || '');
        } else {
            formPayload.append(key, value as string);
        }
      }
    });

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors'
      });
      setStatus('success');
      window.scrollTo(0, 0);
    } catch (err) {
      console.error('Submission failed', err);
      // Even if it fails due to CORS, it usually submits successfully to Google Forms
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.pageWrapper}>
        <Navbar />
        <main className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.successState}>
              <div className={styles.successIcon}><Check size={32} /></div>
              <h2 className={styles.title}>Application Received!</h2>
              <p className={styles.subtitle}>
                Thank you for taking the first step. Sonika will review your profile and reach out to you within 24 hours for the next steps.
              </p>
              <button onClick={() => window.location.href = '/'} className="btn btn-primary" style={{marginTop: '30px'}}>
                Return Home
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const progress = (step / totalSteps) * 100;

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Begin Your Journey</h1>
            <p className={styles.subtitle}>
              Please answer honestly. This information helps us design the right protocol for your unique biology.
            </p>
          </div>

        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Step 1: Personal Details</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Your Full Name *</label>
                <input required className={styles.input} value={formData['entry.723816947']} onChange={e => handleInputChange('entry.723816947', e.target.value)} placeholder="Enter your name" />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Date of Birth *</label>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: '10px'}}>
                  <input required type="number" className={styles.input} placeholder="DD" min="1" max="31" 
                    value={dob.d}
                    onChange={e => {
                        const newD = e.target.value;
                        setDob(prev => { const next = {...prev, d: newD}; handleInputChange('entry.1319396545', `${next.y}-${next.m.padStart(2, '0')}-${next.d.padStart(2, '0')}`); return next; });
                    }} 
                  />
                  <input required type="number" className={styles.input} placeholder="MM" min="1" max="12" 
                    value={dob.m}
                    onChange={e => {
                        const newM = e.target.value;
                        setDob(prev => { const next = {...prev, m: newM}; handleInputChange('entry.1319396545', `${next.y}-${next.m.padStart(2, '0')}-${next.d.padStart(2, '0')}`); return next; });
                    }} 
                  />
                  <input required type="number" className={styles.input} placeholder="YYYY" min="1920" max={new Date().getFullYear()} 
                    value={dob.y}
                    onChange={e => {
                        const newY = e.target.value;
                        setDob(prev => { const next = {...prev, y: newY}; handleInputChange('entry.1319396545', `${next.y}-${next.m.padStart(2, '0')}-${next.d.padStart(2, '0')}`); return next; });
                    }} 
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Gender *</label>
                <div className={styles.optionsGrid}>
                  {['Male', 'Female', 'Prefer not to say'].map(g => (
                    <div key={g} 
                      className={`${styles.radioOption} ${formData['entry.1647685996'] === g ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1647685996', g)}
                    >
                      {g}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>City & Country *</label>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                  <input required className={styles.input} placeholder="City" value={formData['entry.875399376']} onChange={e => handleInputChange('entry.875399376', e.target.value)} />
                  <input required className={styles.input} placeholder="Country" value={formData['entry.105729209']} onChange={e => handleInputChange('entry.105729209', e.target.value)} />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Contact Number *</label>
                <input required type="tel" className={styles.input} value={formData['entry.274299474']} onChange={e => handleInputChange('entry.274299474', e.target.value)} placeholder="+91 ..." />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Email Address *</label>
                <input required type="email" className={styles.input} value={formData['entry.681254784']} onChange={e => handleInputChange('entry.681254784', e.target.value)} placeholder="you@email.com" />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Marital Status *</label>
                <div className={styles.optionsGrid}>
                  {['Married', 'Single', 'Prefer not to say'].map(s => (
                    <div key={s} 
                      className={`${styles.radioOption} ${formData['entry.179663427'] === s ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.179663427', s)}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Step 2: Health Snapshot</h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Height (cm) *</label>
                  <input required type="number" className={styles.input} value={formData['entry.1016282283']} onChange={e => handleInputChange('entry.1016282283', e.target.value)} placeholder="165" />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Weight (kg) *</label>
                  <input required type="number" className={styles.input} value={formData['entry.2029650734']} onChange={e => handleInputChange('entry.2029650734', e.target.value)} placeholder="65" />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Do you have any of the following?</label>
                <div className={styles.checkboxGrid}>
                  {['Thyroid', 'High BP', 'Joint Pain', 'PCOS / PCOD', 'Cholestrol', 'Diabetes', 'Fatty Liver', 'None of the above'].map(c => (
                    <div key={c} 
                      className={`${styles.checkboxOption} ${formData['entry.42301960'].includes(c) ? styles.selected : ''}`}
                      onClick={() => handleCheckboxToggle('entry.42301960', c)}
                    >
                      <div className={styles.checkbox}>{formData['entry.42301960'].includes(c) && <Check size={12} />}</div>
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Which of these are difficult for you to quit?</label>
                <div className={styles.checkboxGrid}>
                  {['Alcohol', 'Cigarettes', 'Tea / Coffee / Soft drinks', 'Junk food', 'None'].map(c => (
                    <div key={c} 
                      className={`${styles.checkboxOption} ${formData['entry.630036857'].includes(c) ? styles.selected : ''}`}
                      onClick={() => handleCheckboxToggle('entry.630036857', c)}
                    >
                      <div className={styles.checkbox}>{formData['entry.630036857'].includes(c) && <Check size={12} />}</div>
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Are you on any medications?</label>
                <div className={styles.optionsGrid}>
                    {['Yes (please specify)', 'No'].map(o => (
                        <div key={o} 
                            className={`${styles.radioOption} ${formData['entry.2134496881'] === o ? styles.selected : ''}`}
                            onClick={() => handleInputChange('entry.2134496881', o)}
                        >
                            {o}
                        </div>
                    ))}
                </div>
                {formData['entry.2134496881'] === 'Yes (please specify)' && (
                    <textarea 
                        className={styles.input} 
                        style={{marginTop: '10px', minHeight: '80px'}} 
                        placeholder="List your medications..."
                        value={formData['entry.2134496881_other']} 
                        onChange={e => handleInputChange('entry.2134496881_other', e.target.value)} 
                    />
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Step 3: Lifestyle</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>How active are you daily? *</label>
                <div className={styles.optionsGrid}>
                  {['Sedentary - no exercise', 'Light activity', 'Moderate', 'Very active'].map(a => (
                    <div key={a} 
                      className={`${styles.radioOption} ${formData['entry.407393299'] === a ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.407393299', a)}
                    >
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Hours of sleep per night? *</label>
                <div className={styles.optionsGrid}>
                  {['< 5 hrs', '5 - 6 hrs', '6 - 7 hrs', '7 - 8 hrs', '> 8 hrs'].map(s => (
                    <div key={s} 
                      className={`${styles.radioOption} ${formData['entry.1713086454'] === s ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1713086454', s)}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Stress Level *</label>
                <div className={styles.optionsGrid}>
                  {['Low', 'Moderate', 'High'].map(s => (
                    <div key={s} 
                      className={`${styles.radioOption} ${formData['entry.26597109'] === s ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.26597109', s)}
                    >
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Step 4: Nutrition</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Meals per day? *</label>
                <div className={styles.optionsGrid}>
                  {['2', '3', '4+'].map(m => (
                    <div key={m} 
                      className={`${styles.radioOption} ${formData['entry.2103927452'] === m ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.2103927452', m)}
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Water Intake per day? *</label>
                <div className={styles.optionsGrid}>
                  {['< 1 L', '1 - 2 L', '2 - 3 L', '> 3 L'].map(w => (
                    <div key={w} 
                      className={`${styles.radioOption} ${formData['entry.106715924'] === w ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.106715924', w)}
                    >
                      {w}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Do you experience any cravings? *</label>
                <div className={styles.optionsGrid}>
                  {['Yes', 'No'].map(o => (
                    <div key={o} 
                      className={`${styles.radioOption} ${formData['entry.775345826'] === o ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.775345826', o)}
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              {formData['entry.775345826'] === 'Yes' && (
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>What do you crave most?</label>
                  <div className={styles.optionsGrid}>
                    {['Sweet', 'Salty', 'Junk Food', 'None'].map(o => (
                        <div key={o} 
                            className={`${styles.radioOption} ${formData['entry.1666848940'] === o ? styles.selected : ''}`}
                            onClick={() => handleInputChange('entry.1666848940', o)}
                        >
                            {o}
                        </div>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Diet preference? *</label>
                <div className={styles.optionsGrid}>
                  {['Vegetarian', 'Non vegetarian', 'Eggetarian', 'Vegan'].map(d => (
                    <div key={d} 
                      className={`${styles.radioOption} ${formData['entry.857416721'] === d ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.857416721', d)}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Step 5: Struggles & Symptoms</h3>
              
              <div className={styles.fieldGroup}>
                <label className={styles.label}>What are your current struggles?</label>
                <div className={styles.checkboxGrid}>
                  {['Weight gain', 'Low energy', 'Bloating / Digestion', 'Sugar cravings', 'Skin issues', 'Hormonal imbalance', 'Sleep issues', 'None of the above'].map(c => (
                    <div key={c} 
                      className={`${styles.checkboxOption} ${formData['entry.1393131544'].includes(c) ? styles.selected : ''}`}
                      onClick={() => handleCheckboxToggle('entry.1393131544', c)}
                    >
                      <div className={styles.checkbox}>{formData['entry.1393131544'].includes(c) && <Check size={12} />}</div>
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Do you suffer from any allergies?</label>
                <div className={styles.optionsGrid}>
                    {['Yes (please specify)', 'No'].map(o => (
                        <div key={o} 
                            className={`${styles.radioOption} ${formData['entry.989294290'] === o ? styles.selected : ''}`}
                            onClick={() => handleInputChange('entry.989294290', o)}
                        >
                            {o}
                        </div>
                    ))}
                </div>
                {formData['entry.989294290'] === 'Yes (please specify)' && (
                    <input 
                        className={styles.input} 
                        style={{marginTop: '10px'}} 
                        placeholder="List your allergies..."
                        value={formData['entry.989294290_other']} 
                        onChange={e => handleInputChange('entry.989294290_other', e.target.value)} 
                    />
                )}
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Tick all that apply to you:</label>
                <div className={styles.checkboxGrid}>
                  {[
                    'Chronic tiredness /  Fatigue', 'Excessive hairfall', 'Face swelling', 
                    'Wake up tired / drained', 'Brain fog / poor focus', 'Excessive belly / waist fat', 
                    'Intestinal gas or bloating', 'Acidity / gastric reflux', 'Stomach not clearing fully', 
                    'Sleepy after meals', 'None of the above'
                  ].map(c => (
                    <div key={c} 
                      className={`${styles.checkboxOption} ${formData['entry.465322430'].includes(c) ? styles.selected : ''}`}
                      onClick={() => handleCheckboxToggle('entry.465322430', c)}
                    >
                      <div className={styles.checkbox}>{formData['entry.465322430'].includes(c) && <Check size={12} />}</div>
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Have you tried weight loss before? *</label>
                <div className={styles.optionsGrid}>
                  {['Yes', 'No'].map(o => (
                    <div key={o} 
                      className={`${styles.radioOption} ${formData['entry.1053807885'] === o ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1053807885', o)}
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              {formData['entry.1053807885'] === 'Yes' && (
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>What all have you tried?</label>
                  <div className={styles.checkboxGrid}>
                    {['Dieting', 'Gym', 'Intermittent fasting', 'Keto', 'Nothing worked', 'None / first time'].map(c => (
                      <div key={c} 
                        className={`${styles.checkboxOption} ${formData['entry.921980163'].includes(c) ? styles.selected : ''}`}
                        onClick={() => handleCheckboxToggle('entry.921980163', c)}
                      >
                        <div className={styles.checkbox}>{formData['entry.921980163'].includes(c) && <Check size={12} />}</div>
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {step === 6 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Step 6: Goals & Readiness</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Why do you want to lose weight? *</label>
                <textarea required className={styles.input} style={{minHeight: '100px'}} value={formData['entry.371637433']} onChange={e => handleInputChange('entry.371637433', e.target.value)} placeholder="Share your motivation..." />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>What is your biggest challenge right now? *</label>
                <textarea required className={styles.input} style={{minHeight: '100px'}} value={formData['entry.691766073']} onChange={e => handleInputChange('entry.691766073', e.target.value)} placeholder="e.g. late night snacking, lack of time..." />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Are you ready to follow guidance seriously? *</label>
                <div className={styles.optionsGrid}>
                  {['Absolutely yes', 'Not sure yet'].map(o => (
                    <div key={o} 
                      className={`${styles.radioOption} ${formData['entry.2112990163'] === o ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.2112990163', o)}
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Are you willing to invest in your health? *</label>
                <div className={styles.optionsGrid}>
                  {["Yes, I'm ready", "Maybe - tell me more", "Need some time"].map(o => (
                    <div key={o} 
                      className={`${styles.radioOption} ${formData['entry.1822505866'] === o ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1822505866', o)}
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>How soon do you want to start? *</label>
                <div className={styles.optionsGrid}>
                  {['Immediately', 'Within 1 week', 'Just exploring'].map(o => (
                    <div key={o} 
                      className={`${styles.radioOption} ${formData['entry.1871346809'] === o ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1871346809', o)}
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 7 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Final Step: Terms & Conditions & Consent</h3>
              
              <div className={styles.termsBox} style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '15px' }}>
                <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', marginBottom: '20px' }}>Terms & Conditions</h4>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <section>
                        <strong>1. Scope of Program</strong>
                        <p>This program provides nutrition, lifestyle, and dietary guidance only.</p>
                        <ul>
                            <li>It is not medical advice, diagnosis, or treatment.</li>
                            <li>Please note this service does not replace professional medical care.</li>
                        </ul>
                    </section>

                    <section>
                        <strong>2. Client Acknowledgment</strong>
                        <p>The client confirms they:</p>
                        <ul>
                            <li>Fully understand the scope of the program.</li>
                            <li>Are voluntarily enrolling in this program.</li>
                            <li>Have disclosed relevant health information truthfully.</li>
                            <li>The client agrees that they are responsible for seeking advice from a qualified healthcare provider for any medical concerns that arise during or outside of the program. The consultant accepts no liability for outcomes arising from withheld or inaccurate health disclosures.</li>
                        </ul>
                    </section>

                    <section>
                        <strong>3. Results Disclaimer:</strong>
                        <p>Results vary from person to person depending on:</p>
                        <ul>
                            <li>Consistency</li>
                            <li>Lifestyle</li>
                            <li>Age, Body type and metabolism</li>
                        </ul>
                        <p>Guaranteed results are not promised.</p>
                    </section>

                    <section>
                        <strong>4. Refund Policy:</strong>
                        <p>A refund request must be made within 30 days from the commencement of the program. No refunds will be issued after that. Refunds would be subject to a deduction for any sessions, materials, or consultations already delivered. In the event that the consultant is unable to continue services due to unforeseen circumstances, a pro-rated refund will be issued for any unused sessions.</p>
                    </section>

                    <section>
                        <strong>5. Program Commitment:</strong>
                        <ul>
                            <li>The client agrees to actively participate and follow the program guidelines.</li>
                            <li>Missed sessions or lack of adherence does not qualify for refunds or extensions unless agreed with the coach.</li>
                        </ul>
                    </section>

                    <section>
                        <strong>6. Confidentiality & Privacy</strong>
                        <p>All personal and health-related information shared by the client will be treated with strict confidentiality. Client data will not be disclosed to any third party without the client’s permission. By enrolling, the client consents to communication via email, WhatsApp, or other agreed platforms for the purposes of delivering the program.</p>
                    </section>

                    <section>
                        <strong>7. Intellectual Property</strong>
                        <p>All meal plans, guides, educational materials, recipes, and resources provided during the program are the sole intellectual property of the consultant. These materials are for the personal use of the enrolled client only and may not be reproduced, shared, distributed, or sold without written permission.</p>
                    </section>

                    <section>
                        <strong>8. Limitation of Liability</strong>
                        <p>The consultant shall not be held liable for any adverse health outcomes, injuries, or complications that arise from the client’s failure to disclose relevant medical information, non-adherence to program guidelines, or actions taken contrary to the advice provided. The consultant’s total liability in any circumstance shall not exceed the total fees paid by the client for the current program period.</p>
                    </section>

                    <section>
                        <strong>9. Termination:</strong>
                        <p>The consultant reserves the right to terminate services if:</p>
                        <ul>
                            <li>Terms are violated</li>
                            <li>Communication becomes inappropriate.</li>
                        </ul>
                    </section>

                    <hr style={{ border: 'none', borderTop: '1px solid var(--color-border)', margin: '10px 0' }} />

                    <section>
                        <strong>Declaration & Informed Consent:</strong>
                        <p>By signing/making the payment, I confirm that:</p>
                        <ul style={{ fontSize: '0.85rem' }}>
                            <li>I have read, understood, and agree to all of the Terms & Conditions set out above.</li>
                            <li>I understand that this program provides nutrition and lifestyle guidance only and is not a substitute for professional medical care.</li>
                            <li>I have disclosed all relevant health information truthfully and completely.</li>
                            <li>I take full personal responsibility for my participation in this program and for any decisions I make regarding my health and diet.</li>
                            <li>I am 18 years of age or older (or have obtained parental/guardian consent if under 18).</li>
                        </ul>
                    </section>
                </div>
              </div>

              <div style={{marginTop: '25px', display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', background: 'rgba(57, 75, 62, 0.05)', borderRadius: '8px', cursor: 'pointer'}}
                   onClick={() => handleInputChange('agreed', !formData.agreed)}>
                  <div className={styles.checkbox} style={{borderColor: 'var(--color-primary)', background: formData.agreed ? 'var(--color-primary)' : 'transparent'}}>
                      {formData.agreed && <Check size={12} color="white" />}
                  </div>
                  <span style={{fontSize: '0.9rem', color: 'var(--color-primary)', fontWeight: 500}}>I have read, understood and agree to the Declaration & Consent</span>
              </div>
            </div>
          )}

          <div className={styles.footer}>
            <div className={styles.footerLeft}>
              {step > 1 ? (
                <button type="button" onClick={prevStep} className="btn btn-outline" style={{padding: '0.6rem 1.2rem'}}>
                  <ArrowLeft size={18} style={{marginRight: '8px'}} /> Back
                </button>
              ) : (
                <Link to="/" className="btn btn-outline" style={{padding: '0.6rem 1.2rem', display: 'inline-flex', alignItems: 'center', textDecoration: 'none'}}>
                  <Home size={18} style={{marginRight: '8px'}} /> Home
                </Link>
              )}
            </div>

            <div className={styles.footerRight}>
              <button 
                type="submit" 
                className="btn btn-accent" 
                disabled={status === 'submitting' || (step === 7 && !formData.agreed)}
              >
                {status === 'submitting' ? (
                  <><Loader2 size={18} className="animate-spin" style={{marginRight: '8px'}} /> Submitting...</>
                ) : step === totalSteps ? (
                  'Complete Application'
                ) : (
                  <>Next <ArrowRight size={18} style={{marginLeft: '8px'}} /></>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      </main>
      <Footer />
    </div>
  );
};
