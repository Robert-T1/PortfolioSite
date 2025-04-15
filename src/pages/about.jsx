import Icon from '../components/Icon'
import temp_Pfp from '../assets/images/temp_pfp_.jpg'
import styles from './about.module.css'
import aboutText from '../content/aboutText';

function About() {
    return (
        <div className={styles.aboutContainer}>
            <h2>ABOUT ME</h2>
            <Icon src={temp_Pfp} alt="A temp profile picture of a monkey"></Icon>

            <div className={styles.aboutText} style={{ whiteSpace: "pre-wrap" }}>
                {aboutText}
            </div>

        </div>
    );
 }

 export default About;