import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import styles from './ProfileFormPage.module.css';

export const ProfileFormPage = () => {
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

                    <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '6rem' }}>
                        <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdCHMxNLZeuxf6f0pcRhrda9p-7Pvxs1yWZ62fLYTc6pwWIBQ/viewform?embedded=true" 
                            width="640" 
                            height="3389" 
                            frameBorder="0" 
                            marginHeight={0} 
                            marginWidth={0}
                            style={{ maxWidth: '100%' }}
                        >
                            Loading…
                        </iframe>
                    </div>

                </div>
            </main>
            
            <Footer />
        </div>
    );
};
