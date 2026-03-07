import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Leaf, Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Leaf size={20} color="#b59c73" />
                    </div>
                    <span className={styles.logoText}>WellnessCoach</span>
                </div>

                <div className={`${styles.navLinksWrapper} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    <ul className={styles.navLinks}>
                        <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>ABOUT</NavLink></li>
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>PROGRAMS</NavLink></li>
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>PROCESS</NavLink></li>
                        <li><NavLink to="/" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>STORIES</NavLink></li>
                    </ul>

                    <div className={styles.actions}>
                        <div className={styles.statusBadge}>
                            <span className={styles.statusDot}></span>
                            ACCEPTING CLIENTS
                        </div>
                        <button className="btn btn-primary">BEGIN</button>
                    </div>
                </div>

                <button className={styles.mobileToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
    );
};
