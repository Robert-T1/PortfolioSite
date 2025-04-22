import gitHubIcon from '../assets/images/gitHub_icon.png'
import reltgamesIcon from '../assets/images/reltgames_icon.svg'
import linkedInIcon from '../assets/images/linkedIn_icon.png'
import emailIcon from '../assets/images/email_icon.png'

import Button from './Button'
import { Link } from "react-router-dom"
import styles from './header.module.css'
import buttonStyles from './button.module.css'

function Header() { 
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <nav className={styles.center}>
                   <Button style={buttonStyles.btn_img} imageSrc={emailIcon} onClick={copyEmailOnClick}></Button>
                   <Button style={buttonStyles.btn_img} imageSrc={gitHubIcon} href="https://github.com/Robert-T1"></Button>
                   <Button style={buttonStyles.btn_img} imageSrc={linkedInIcon} href="https://www.linkedin.com/in/robert-thompson-gd/"></Button>
                   <Button style={buttonStyles.btn_img} imageSrc={reltgamesIcon} href="https://reltgames.com/"></Button>
                </nav>

                <nav className={styles.center}>
                    <Link to="/about"><Button style={buttonStyles.btn}>ABOUT</Button></Link>
                    <Link to="/Projects"><Button style={buttonStyles.btn}>PROJECTS</Button></Link>
                    <Link to="/Skills"><Button style={buttonStyles.btn}>SKILLS</Button></Link>
                    <Link to="/Employment"><Button style={buttonStyles.btn}>EMPLOYMENT</Button></Link>
                </nav>
            </div>
        </header>
    );
}

const copyEmailOnClick = () => {
    navigator.clipboard.writeText("robertedwardthompson@gmail.com");
}

export default Header;