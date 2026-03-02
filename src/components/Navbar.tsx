import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { Leaf } from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.logoIcon}>
                        <Leaf size={20} color="#b59c73" />
                    </div>
                    <span className={styles.logoText}>WellnessCoach</span>
                </div>

                <ul className={styles.navLinks}>
                    <li><NavLink to="/" className={styles.navLink}>ABOUT</NavLink></li>
                    <li><NavLink to="/" className={styles.navLink}>PROGRAMS</NavLink></li>
                    <li><NavLink to="/" className={styles.navLink}>PROCESS</NavLink></li>
                    <li><NavLink to="/" className={styles.navLink}>STORIES</NavLink></li>
                </ul>

                <div className={styles.actions}>
                    <div className={styles.statusBadge}>
                        <span className={styles.statusDot}></span>
                        ACCEPTING CLIENTS
                    </div>
                    <button className="btn btn-primary">BEGIN</button>
                </div>
            </div>
        </nav>
    );
};
