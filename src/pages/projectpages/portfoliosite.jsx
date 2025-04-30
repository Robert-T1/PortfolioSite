import styles from './projectpage.module.css'
import Skill from '../../components/Skill';
import Button from '../../components/Button'
import buttonStyles from '../../components/button.module.css'

import trelloIcon from '../../assets/images/trelloIcon.png'
import githubIcon from '../../assets/images/github_icon.png'

function PortfolioSite() {
    return (
        <div className='container'>
            <h1>Portfolio Site</h1>

            <h4>Skills</h4>
            <div className={styles.skill}>
                <Skill>React</Skill><Skill>Javascript</Skill><Skill>Vite</Skill><Skill>HTML/CSS</Skill><Skill>Git / Version Control</Skill>
            </div>

            <h4>Project Description</h4>
            <p className={styles.descrptionText}>
                A personal website showcasing my professional work, employment history, accomplishments, skills, and general background.
            </p>

            <h4>Reflections</h4>
            <p className={styles.descrptionText}>
                This site is an overhaul of my original version, which was built using only HTML, CSS, and JavaScript.
                 That version was janky and inflexible, so I rebuilt it to better showcase my work and demonstrate my ability to use modern web frameworks.
                  You can follow the development process on Trello and explore the code in detail on GitHub.
            </p>

            <h4>Links</h4>
            <div className={styles.links}>
                <Button style={buttonStyles.btn_img} imageSrc={githubIcon} href="https://github.com/Robert-T1/PortfolioSite"></Button>
                <Button style={buttonStyles.btn_img} imageSrc={trelloIcon} href="https://trello.com/b/OJpdBZNv/portfoilo-website"></Button>
            </div>
        </div>
    );
 }

 export default PortfolioSite;