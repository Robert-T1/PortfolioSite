import styles from './projectpage.module.css'
import Skill from '../../components/Skill';
import Button from '../../components/Button'
import buttonStyles from '../../components/button.module.css'

import githubIcon from '../../assets/images/github_Icon.png'

function BankBot() {
    return (
        <div className='container'>
            <h1>Bank Bot</h1>

            <h4>Skills</h4>
            <div className={styles.skill}>
                <Skill>Javascript</Skill><Skill>MongoDB</Skill><Skill>Git / Version Control</Skill><Skill>Discord.js</Skill>
            </div>

            <h4>Project Description</h4>
            <p className={styles.descrptionText}>
            Bank Bot is a simple Discord bot designed to manage the simulated finances of a community.
             It supports features like fund transfers, a loan system, teller-side validation, and handling of withdrawals and deposits.
            </p>

            <h4>Reflections</h4>
            <p className={styles.descrptionText}>
            Bank Bot was originally created for a small private Minecraft server, but I designed it to be dynamic and adaptable for any community with an economy system.
             While it's a relatively small project, it saw daily use by around 30 users.

            </p>

            <h4>Links</h4>
            <div className={styles.links}>
                <Button style={buttonStyles.btn_img} imageSrc={githubIcon} href="https://github.com/Robert-T1/Chroma-Thief"></Button>
            </div>

        </div>
    );
 }

 export default BankBot;