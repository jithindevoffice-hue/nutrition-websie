import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Leaf, Menu, X } from 'lucide-react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Leaf size={20} color="#b59c73" />
                    </div>
                    <span className={styles.logoText}>WellnessCoach</span>
                </Link>

                <div className={`${styles.navLinksWrapper} ${isMenuOpen ? styles.mobileOpen : ''}`}>
                    <ul className={styles.navLinks}>
                        <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>ABOUT</NavLink></li>
                        <li><NavLink to="/programs" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>PROGRAMS</NavLink></li>
                        <li><NavLink to="/process" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>PROCESS</NavLink></li>
                        <li><a href="/#stories" onClick={() => setIsMenuOpen(false)} className={styles.navLink}>STORIES</a></li>
                    </ul>

                    <div className={styles.actions}>
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
