
import styles from './ApplyPage.module.css';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ApplyPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container} style={{ maxWidth: '800px', padding: '20px' }}>
        <div className={styles.header} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
            <Link to="/" className="btn btn-outline" style={{padding: '0.6rem 1.2rem', display: 'inline-flex', alignItems: 'center', textDecoration: 'none'}}>
              <Home size={18} style={{marginRight: '8px'}} /> Home
            </Link>
          </div>
          <h1 className={styles.title}>Begin Your Journey</h1>
          <p className={styles.subtitle}>
            Please fill out the form below. This information helps us design the right protocol for your unique biology.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', overflow: 'hidden' }}>
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSf2tyuQ3zq5awHX8naWbgVmax7LZZ40C1OQ8VCq4ARXFU2PfQ/viewform?embedded=true" 
            width="100%" 
            height="3389" 
            frameBorder={0} 
            marginHeight={0} 
            marginWidth={0}
            style={{ maxWidth: '640px', border: 'none' }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};
