import { useState } from "react";
import { Link } from "react-router-dom";
import Button from './Button';

import gitHubIcon from '../assets/images/github_icon.png';
import reltgamesIcon from '../assets/images/reltgames_icon.svg';
import linkedInIcon from '../assets/images/linkedIn_icon.png';
import emailIcon from '../assets/images/email_icon.png';

import styles from './header.module.css';
import buttonStyles from './button.module.css';

function Header() {
    const [copied, setCopied] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const copyEmailOnClick = (e) => {
        navigator.clipboard.writeText("robertedwardthompson@gmail.com");
        setMousePos({ x: e.clientX, y: e.clientY });
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <nav className={`${styles.navSection} ${styles.socialLinks}`}>
                    <Button
                        style={buttonStyles.btn_img}
                        imageSrc={emailIcon}
                        onClick={copyEmailOnClick}
                    />
                    <Button
                        style={buttonStyles.btn_img}
                        imageSrc={gitHubIcon}
                        href="https://github.com/Robert-T1"
                    />
                    <Button
                        style={buttonStyles.btn_img}
                        imageSrc={linkedInIcon}
                        href="https://www.linkedin.com/in/robert-thompson-gd/"
                    />
                    <Button
                        style={buttonStyles.btn_img}
                        imageSrc={reltgamesIcon}
                        href="https://reltgames.com/"
                    />
                </nav>

                <nav className={`${styles.navSection} ${styles.navLinks}`}>
                    <Link to="/about"><Button style={buttonStyles.btn}>ABOUT</Button></Link>
                    <Link to="/Projects"><Button style={buttonStyles.btn}>PROJECTS</Button></Link>
                    <Link to="/Skills"><Button style={buttonStyles.btn}>SKILLS</Button></Link>
                    <Link to="/Employment"><Button style={buttonStyles.btn}>EMPLOYMENT</Button></Link>
                </nav>

                {copied && (
                    <div
                        className={styles.copiedTooltip}
                        style={{ top: mousePos.y + 15, left: mousePos.x + 10 }}
                    >
                        Copied!
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;