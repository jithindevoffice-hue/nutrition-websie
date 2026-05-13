import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const PrivacyPolicyPage = () => {
    return (
        <div className="page-wrapper" style={{ backgroundColor: '#f6f5f2', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <main className="content-main" style={{ paddingTop: '160px', paddingBottom: '100px', flex: 1 }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem', color: 'var(--color-primary)' }}>
                    <h1 style={{ fontSize: '3rem', fontFamily: 'var(--font-serif)', marginBottom: '3rem', textAlign: 'center' }}>Terms & Conditions</h1>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', lineHeight: '1.7', fontSize: '1.05rem', color: 'rgba(57, 75, 62, 0.85)' }}>
                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>1. Scope of Program</h3>
                            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'disc' }}>
                                <li>This program provides nutrition, lifestyle, and dietary guidance only.</li>
                                <li>It is not medical advice, diagnosis, or treatment.</li>
                                <li>Please note this service does not replace professional medical care.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>2. Client Acknowledgment</h3>
                            <p>The client confirms they:</p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'disc' }}>
                                <li>Fully understand the scope of the program.</li>
                                <li>Are voluntarily enrolling in this program.</li>
                                <li>Have disclosed relevant health information truthfully.</li>
                                <li>The client agrees that they are responsible for seeking advice from a qualified healthcare provider for any medical concerns that arise during or outside of the program.</li>
                            </ul>
                            <p style={{ marginTop: '0.75rem' }}>The consultant accepts no liability for outcomes arising from withheld or inaccurate health disclosures.</p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>3. Results Disclaimer</h3>
                            <p>Results vary from person to person depending on:</p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'disc' }}>
                                <li>Consistency</li>
                                <li>Lifestyle</li>
                                <li>Age, Body type and metabolism</li>
                            </ul>
                            <p style={{ marginTop: '0.75rem' }}>Guaranteed results are not promised.</p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>4. Refund Policy</h3>
                            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'disc' }}>
                                <li>A refund request must be made within 30 days from the commencement of the program.</li>
                                <li>No refunds will be issued after that.</li>
                                <li>Refunds would be subject to a deduction for any sessions, materials, or consultations already delivered.</li>
                                <li>In the event that the consultant is unable to continue services due to unforeseen circumstances, a pro-rated refund will be issued for any unused sessions.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>5. Program Commitment</h3>
                            <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'disc' }}>
                                <li>The client agrees to actively participate and follow the program guidelines.</li>
                                <li>Missed sessions or lack of adherence does not qualify for refunds or extensions unless agreed with the coach.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>6. Confidentiality & Privacy</h3>
                            <p>All personal and health-related information shared by the client will be treated with strict confidentiality. Client data will not be disclosed to any third party without the client’s permission.</p>
                            <p style={{ marginTop: '0.75rem' }}>By enrolling, the client consents to communication via email, WhatsApp, or other agreed platforms for the purposes of delivering the program.</p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>7. Intellectual Property</h3>
                            <p>All meal plans, guides, educational materials, recipes, and resources provided during the program are the sole intellectual property of the consultant. These materials are for the personal use of the enrolled client only and may not be reproduced, shared, distributed, or sold without written permission.</p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>8. Limitation of Liability</h3>
                            <p>The consultant shall not be held liable for any adverse health outcomes, injuries, or complications that arise from the client’s failure to disclose relevant medical information, non-adherence to program guidelines, or actions taken contrary to the advice provided.</p>
                            <p style={{ marginTop: '0.75rem' }}>The consultant’s total liability in any circumstance shall not exceed the total fees paid by the client for the current program period.</p>
                        </section>

                        <section>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: 'var(--color-primary)' }}>9. Termination</h3>
                            <p>The consultant reserves the right to terminate services if:</p>
                            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'disc' }}>
                                <li>Terms are violated</li>
                                <li>Communication becomes inappropriate.</li>
                            </ul>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};
