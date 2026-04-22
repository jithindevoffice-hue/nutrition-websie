import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <div className={styles.logoIcon} style={{ background: 'transparent' }}>
                        <img src="/lotus-logo.png" alt="Lotus" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                    </div>
                    <span className={styles.logoText}>Sonica Holistic Health</span>
                </Link>

                <div className={`${styles.navLinksWrapper} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    <ul className={styles.navLinks}>
                        <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>ABOUT</NavLink></li>
                        <li><NavLink to="/programs" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>PROGRAMS</NavLink></li>
                        <li><NavLink to="/process" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>PROCESS</NavLink></li>
                        <li><a href="/#stories" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>STORIES</a></li>
                    </ul>

                    <div className={styles.actions}>
                        <Link to="/apply" onClick={() => setIsMenuOpen(false)} className="btn btn-primary">BEGIN</Link>
                    </div>
                </div>

                <button className={styles.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};
