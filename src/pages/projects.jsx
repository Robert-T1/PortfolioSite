import { Link } from "react-router-dom"
import styles from './projects.module.css'
import Button from '../components/Button'
import buttonStyles from '../components/button.module.css'

const projectImages = import.meta.glob('../assets/images/projectIcons/*.png', { eager: true });
import siteIcon from '../assets/images/siteIcon.png'

function Projects() {
    return (
        <div className={styles.projectsContainer}>
            <h2>PROJECTS</h2>
            <p className={styles.description}>A snapshot of noteable projects I've worked on.</p>
            <div className={styles.projectsGrid}>
                <div className={styles.projectWrapper}>
                    <Link to="/justkeepdigging">
                        <Button style={buttonStyles.btn_project} imageSrc={getProjectIcon("justKeepDiggingIcon")}></Button>
                    </Link>
                    <span className={styles.projectLabel}>Just Keep Digging</span>
                </div>
                <div className={styles.projectWrapper}>
                    <Link to="/littlecircuit">
                        <Button style={buttonStyles.btn_project} imageSrc={getProjectIcon("littleCircuitIcon")}></Button>
                    </Link>
                    <span className={styles.projectLabel}>Little Circuit</span>
                </div>
                <div className={styles.projectWrapper}>
                    <Link to="/chromathief">
                        <Button style={buttonStyles.btn_project} imageSrc={getProjectIcon("chromaThiefIcon")}></Button>
                    </Link>
                    <span className={styles.projectLabel}>Chroma Thief</span>
                </div>
                <div className={styles.projectWrapper}>
                    <Link to="/bankbot">
                        <Button style={buttonStyles.btn_project} imageSrc={getProjectIcon("bankBotIcon")}></Button>
                    </Link>
                    <span className={styles.projectLabel}>Bank Bot</span>
                </div>
                <div className={styles.projectWrapper}>
                    <Link to="/justkeepdiggingbot">
                        <Button style={buttonStyles.btn_project} imageSrc={getProjectIcon("justkeepdiggingbotIcon")}></Button>
                    </Link>
                    <span className={styles.projectLabel}>Just Keep Digging Bot</span>
                </div>
                <div className={styles.projectWrapper}>
                    <Link to="/clansandclaims">
                        <Button style={buttonStyles.btn_project} imageSrc={getProjectIcon("clansandclaimsIcon")}></Button>
                    </Link>
                    <span className={styles.projectLabel}>Clans And Claims</span>
                </div>
                <div className={styles.projectWrapper}>
                    <Link to="/portfoliosite">
                        <Button style={buttonStyles.btn_project} imageSrc={siteIcon}></Button>
                    </Link>
                    <span className={styles.projectLabel}>Portfolio Site</span>
                </div>
                <div className={styles.projectWrapper}>
                    <Link to="/gardengame">
                        <Button style={buttonStyles.btn_project} imageSrc={getProjectIcon("gardenGameIcon")}></Button>
                    </Link>
                    <span className={styles.projectLabel}>Garden Game</span>
                </div>
            </div>
        </div>
    );
}

function getProjectIcon(name) { 
  return projectImages[`../assets/images/projectIcons/${name}.png`]?.default;
}

export default Projects;