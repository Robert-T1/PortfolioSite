import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from './Button';

import reltgamesIcon from '../assets/images/reltgames_icon.svg';

import styles from './header.module.css';
import buttonStyles from './button.module.css';

const socialIcons = import.meta.glob('../assets/images/socialIcons/*.png', { eager: true });

const navItems = [
    { to: "/about", label: "About", color: "var(--c-blue)" },
    { to: "/projects", label: "Projects", color: "var(--c-red)" },
    { to: "/skills", label: "Skills", color: "var(--c-green)" },
    { to: "/employment", label: "Employment", color: "var(--c-yellow)" },
];

// Page → icon color. Project detail pages fall back to red (Projects).
const routeColors = {
    "/": "blue",
    "/about": "blue",
    "/projects": "red",
    "/skills": "green",
    "/employment": "yellow",
};

function iconFor(name, color) {
    return socialIcons[`../assets/images/socialIcons/${name}_${color}.png`]?.default;
}

function Header() {
    const [copied, setCopied] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const { pathname } = useLocation();
    const iconColor = routeColors[pathname.toLowerCase()] ?? "red";

    const copyEmailOnClick = (e) => {
        navigator.clipboard.writeText("robertedwardthompson101@gmail.com");
        setMousePos({ x: e.clientX, y: e.clientY });
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <Link to="/" className={styles.brand}>
                    <span className={styles.brandName}>Robert Thompson</span>
                    <span className={styles.brandRole}>Software Developer</span>
                </Link>

                <nav className={styles.navLinks} aria-label="Main navigation">
                    {navItems.map(({ to, label, color }) => (
                        <NavLink
                            key={to}
                            to={to}
                            style={{ '--tab-accent': color }}
                            className={({ isActive }) =>
                                isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                <nav className={styles.socialLinks} aria-label="Social links">
                    <Button
                        style={buttonStyles.btn_icon}
                        imageSrc={iconFor("email", iconColor)}
                        alt="Copy email address"
                        onClick={copyEmailOnClick}
                    />
                    <Button
                        style={buttonStyles.btn_icon}
                        imageSrc={iconFor("github", iconColor)}
                        alt="GitHub profile"
                        href="https://github.com/Robert-T1"
                    />
                    <Button
                        style={buttonStyles.btn_icon}
                        imageSrc={iconFor("linkedin", iconColor)}
                        alt="LinkedIn profile"
                        href="https://www.linkedin.com/in/robert-thompson-gd/"
                    />
                    <Button
                        style={buttonStyles.btn_img}
                        imageSrc={reltgamesIcon}
                        alt="RELT Games website"
                        href="https://reltgames.com/"
                    />
                </nav>

                {copied && (
                    <div
                        className={styles.copiedTooltip}
                        style={{ top: mousePos.y + 15, left: mousePos.x + 10 }}
                    >
                        Email copied!
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;
