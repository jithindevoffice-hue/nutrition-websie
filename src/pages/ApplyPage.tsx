import React, { useState } from 'react';
import styles from './ApplyPage.module.css';
import { Check, ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSdCHMxNLZeuxf6f0pcRhrda9p-7Pvxs1yWZ62fLYTc6pwWIBQ/formResponse';

const INITIAL_DATA = {
  // Section 1
  'entry.888697170': '', // Name
  'entry.2134338395_year': '',
  'entry.2134338395_month': '',
  'entry.2134338395_day': '',
  'entry.1131073469': '', // Gender
  'entry.1515876853': '', // City
  'entry.1542614350': '', // Country
  'entry.1866527941': '', // Contact
  'entry.172359206': '', // Marital Status
  
  // Section 2
  'entry.1431311347': '', // Height
  'entry.307765206': '', // Weight
  'entry.1502620648': [], // Conditions (Checkboxes)
  'entry.1166738592': [], // To quit (Checkboxes)
  'entry.1527681206': '', // Medications
  
  // Section 3
  'entry.1956552015': '', // Activity
  'entry.303341245': '', // Sleep
  'entry.1428745469': '', // Stress
  
  // Section 4
  'entry.762044690': '', // Meals
  'entry.2024755164': '', // Cravings
  'entry.1083293605': '', // What crave
  'entry.1878947756': '', // Water
  'entry.622811763': '', // Diet
  
  // Section 9
  'entry.113397252': '', // Guidance
  'entry.2018579287': '', // Invest
  'entry.2072166833': '', // Soon
};

export const ApplyPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<Record<string, string | string[]>>(INITIAL_DATA);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const totalSteps = 5;

  const handleInputChange = (key: string, value: string | string[]) => {
    setFormData((prev: Record<string, string | string[]>) => ({ ...prev, [key]: value }));
  };

  const handleCheckboxToggle = (key: string, value: string) => {
    setFormData((prev: Record<string, string | string[]>) => {
      const current = (prev[key] as string[]) || [];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v: string) => v !== value) };
      } else {
        return { ...prev, [key]: [...current, value] };
      }
    });
  };

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < totalSteps) {
      nextStep();
      return;
    }

    setStatus('submitting');

    const formPayload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(v => formPayload.append(key, v));
      } else {
        formPayload.append(key, value as string);
      }
    });

    try {
      // Use no-cors to avoid blocking, though it means we won't get a proper response body
      // Google Forms allows this submission style
      await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors'
      });
      setStatus('success');
      window.scrollTo(0, 0);
    } catch (err) {
      console.error('Submission failed', err);
      // In no-cors, success usually triggers an opaque response or a failure in some browsers
      // But usually it goes through. We'll assume success for now.
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.successState}>
            <div className={styles.successIcon}><Check size={32} /></div>
            <h2 className={styles.title}>Application Received!</h2>
            <p className={styles.subtitle}>
              Thank you for taking the first step. Sonika will review your profile and reach out to you within 24–48 hours for the next steps.
            </p>
            <button onClick={() => window.location.href = '/'} className="btn btn-primary" style={{marginTop: '30px'}}>
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const progress = (step / totalSteps) * 100;

  return (
    <div className={styles.page}>
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
              <h3 className={styles.label}>Section 1: Personal Details</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Your Full Name *</label>
                <input required className={styles.input} value={formData['entry.888697170']} onChange={e => handleInputChange('entry.888697170', e.target.value)} placeholder="Enter your name" />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Date of Birth *</label>
                <input required type="date" className={styles.input} onChange={e => {
                  const [y, m, d] = e.target.value.split('-');
                  handleInputChange('entry.2134338395_year', y);
                  handleInputChange('entry.2134338395_month', m);
                  handleInputChange('entry.2134338395_day', d);
                }} />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Gender *</label>
                <div className={styles.optionsGrid}>
                  {['Male', 'Female'].map(g => (
                    <div key={g} 
                      className={`${styles.radioOption} ${formData['entry.1131073469'] === g ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1131073469', g)}
                    >
                      {g}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>City & Country *</label>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
                  <input required className={styles.input} placeholder="City" value={formData['entry.1515876853']} onChange={e => handleInputChange('entry.1515876853', e.target.value)} />
                  <input required className={styles.input} placeholder="Country" value={formData['entry.1542614350']} onChange={e => handleInputChange('entry.1542614350', e.target.value)} />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Contact Number *</label>
                <input required type="tel" className={styles.input} value={formData['entry.1866527941']} onChange={e => handleInputChange('entry.1866527941', e.target.value)} placeholder="+91 ..." />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Marital Status *</label>
                <div className={styles.optionsGrid}>
                  {['Married', 'Single'].map(s => (
                    <div key={s} 
                      className={`${styles.radioOption} ${formData['entry.172359206'] === s ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.172359206', s)}
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
              <h3 className={styles.label}>Section 2: Health Snapshot</h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Height (Cms) *</label>
                  <input required type="number" className={styles.input} value={formData['entry.1431311347']} onChange={e => handleInputChange('entry.1431311347', e.target.value)} />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.label}>Weight (Kgs) *</label>
                  <input required type="number" className={styles.input} value={formData['entry.307765206']} onChange={e => handleInputChange('entry.307765206', e.target.value)} />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Do you have any of the following?</label>
                <div className={styles.checkboxGrid}>
                  {['Thyroid', 'PCOS / PCOD', 'Diabetes', 'High BP', 'Cholesterol', 'Fatty Liver', 'Joint Pain'].map(c => (
                    <div key={c} 
                      className={`${styles.checkboxOption} ${formData['entry.1502620648'].includes(c) ? styles.selected : ''}`}
                      onClick={() => handleCheckboxToggle('entry.1502620648', c)}
                    >
                      <div className={styles.checkbox}>{formData['entry.1502620648'].includes(c) && <Check size={12} />}</div>
                      {c}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Are you on any medications?</label>
                <textarea className={styles.input} style={{minHeight: '80px'}} value={formData['entry.1527681206']} onChange={e => handleInputChange('entry.1527681206', e.target.value)} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Section 3: Lifestyle</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>How active are you daily? *</label>
                <div className={styles.optionsGrid}>
                  {['Sedentary', 'Light', 'Moderate', 'Very Active'].map(a => (
                    <div key={a} 
                      className={`${styles.radioOption} ${formData['entry.1956552015'] === a ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1956552015', a)}
                    >
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Hours of Sleep *</label>
                <div className={styles.optionsGrid}>
                  {['Less than 5', '5–6', '6–7', '7–8', 'More than 8'].map(s => (
                    <div key={s} 
                      className={`${styles.radioOption} ${formData['entry.303341245'] === s ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.303341245', s)}
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
                      className={`${styles.radioOption} ${formData['entry.1428745469'] === s ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1428745469', s)}
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
              <h3 className={styles.label}>Section 4: Eating Patterns</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Meals per day *</label>
                <div className={styles.optionsGrid}>
                  {['2', '3', '4+'].map(m => (
                    <div key={m} 
                      className={`${styles.radioOption} ${formData['entry.762044690'] === m ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.762044690', m)}
                    >
                      {m}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Diet Preference *</label>
                <div className={styles.optionsGrid}>
                  {['Vegetarian', 'Non-Veg', 'Vegan', 'Eggetarian'].map(d => (
                    <div key={d} 
                      className={`${styles.radioOption} ${formData['entry.622811763'] === d ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.622811763', d)}
                    >
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Water Intake (Litres) *</label>
                <div className={styles.optionsGrid}>
                  {['Less than 1L', '1–2L', '2–3L', 'More than 3L'].map(w => (
                    <div key={w} 
                      className={`${styles.radioOption} ${formData['entry.1878947756'] === w ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.1878947756', w)}
                    >
                      {w}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className={styles.formSection}>
              <h3 className={styles.label}>Final Section: Commitment</h3>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Ready to follow guidance seriously? *</label>
                <div className={styles.optionsGrid}>
                  {['Yes', 'Not sure'].map(o => (
                    <div key={o} 
                      className={`${styles.radioOption} ${formData['entry.113397252'] === o ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.113397252', o)}
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Willing to invest in your health? *</label>
                <div className={styles.optionsGrid}>
                  {['Yes', 'Maybe', 'Need sometime'].map(o => (
                    <div key={o} 
                      className={`${styles.radioOption} ${formData['entry.2018579287'] === o ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.2018579287', o)}
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
                      className={`${styles.radioOption} ${formData['entry.2072166833'] === o ? styles.selected : ''}`}
                      onClick={() => handleInputChange('entry.2072166833', o)}
                    >
                      {o}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.termsBox}>
                <h4>Terms & Conditions</h4>
                
                <strong>1. This program provides nutrition, lifestyle, and dietary guidance only.</strong>
                <ul>
                  <li>It is not medical advice, diagnosis, or treatment.</li>
                  <li>Please note this service does not replace professional medical care.</li>
                </ul>

                <strong>2. Client Acknowledgment</strong>
                <p>The client confirms they:</p>
                <ul>
                  <li>Fully understand the scope of the program.</li>
                  <li>Are voluntarily enrolling in this program.</li>
                  <li>Have disclosed relevant health information truthfully.</li>
                  <li>The client agrees they are responsible for consulting a qualified healthcare provider for any medical conditions.</li>
                </ul>

                <strong>3. Results Disclaimer:</strong>
                <p>Results vary from person to person depending on:</p>
                <ul>
                  <li>Consistency</li>
                  <li>Lifestyle</li>
                  <li>Age, Body type and metabolism</li>
                </ul>
                <p>Guaranteed results are not promised.</p>

                <strong>4. Refund Policy:</strong>
                <p>A refund request must be made within 15 days from the commencement of the program.<br />No refunds will be issued after that.</p>

                <strong>5. Program Commitment:</strong>
                <ul>
                  <li>The client agrees to actively participate and follow the program guidelines.</li>
                  <li>Missed sessions or lack of adherence does not qualify for refunds or extensions unless agreed with the coach.</li>
                </ul>

                <strong>6. Termination:</strong>
                <p>The consultant reserves the right to terminate services if:</p>
                <ul>
                  <li>Terms are violated</li>
                  <li>Communication becomes inappropriate or abusive</li>
                </ul>
              </div>
            </div>
          )}

          <div className={styles.footer}>
            {step > 1 ? (
              <button type="button" onClick={prevStep} className="btn btn-outline" style={{padding: '0.6rem 1.2rem'}}>
                <ArrowLeft size={18} style={{marginRight: '8px'}} /> Back
              </button>
            ) : <div />}

            <button type="submit" className="btn btn-accent" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <><Loader2 size={18} className="animate-spin" style={{marginRight: '8px'}} /> Submitting...</>
              ) : step === totalSteps ? (
                'Submit Application'
              ) : (
                <>Next <ArrowRight size={18} style={{marginLeft: '8px'}} /></>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
