import { useState } from 'react';
import styles from './ContactPage.module.css';
import { Check, Loader2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call for form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className={styles.pageWrapper}>
        <Navbar />
        <main className={styles.mainContent}>
          <div className={styles.container}>
            <div className={styles.successState}>
              <div className={styles.successIcon}><Check size={32} /></div>
              <h2 className={styles.title}>Message Sent!</h2>
              <p className={styles.subtitle}>
                Thank you for reaching out. We have received your message and will get back to you shortly.
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

  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.mainContent}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.subtitle}>
              Have questions? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={styles.formSection}>
              <div className={styles.fieldGroup}>
                <label className={styles.label}>Full Name *</label>
                <input 
                  required 
                  name="name"
                  className={styles.input} 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  placeholder="Enter your name" 
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Email Address *</label>
                <input 
                  required 
                  type="email" 
                  name="email"
                  className={styles.input} 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  placeholder="you@email.com" 
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  className={styles.input} 
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  placeholder="+1 (555) 000-0000" 
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Subject *</label>
                <input 
                  required 
                  name="subject"
                  className={styles.input} 
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  placeholder="How can we help?" 
                />
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.label}>Message *</label>
                <textarea 
                  required 
                  name="message"
                  className={styles.input} 
                  style={{ minHeight: '120px', resize: 'vertical' }}
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Write your message here..." 
                />
              </div>
            </div>

            <div className={styles.footer} style={{ justifyContent: 'center' }}>
              <button 
                type="submit" 
                className="btn btn-accent" 
                disabled={status === 'submitting'}
                style={{ width: '100%', padding: '14px' }}
              >
                {status === 'submitting' ? (
                  <><Loader2 size={18} className="animate-spin" style={{marginRight: '8px', display: 'inline-block', verticalAlign: 'middle'}} /> Sending...</>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};
