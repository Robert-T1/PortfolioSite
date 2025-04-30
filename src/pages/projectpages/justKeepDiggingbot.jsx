import styles from './projectpage.module.css'
import Skill from '../../components/Skill';
import Button from '../../components/Button'
import buttonStyles from '../../components/button.module.css'

import githubIcon from '../../assets/images/github_icon.png'
import ss1 from '../../assets/images/projectIcons/jkdb_ss1.png'
import ss2 from '../../assets/images/projectIcons/jkdb_ss2.png'

function JustKeepDiggingBot() {
    return (
        <div className='container'>
            <h1>Just Keep Digging Discord Bot</h1>

            <h4>Skills</h4>
            <div className={styles.skill}>
                <Skill>Javascript</Skill><Skill>MongoDB</Skill><Skill>Git / Version Control</Skill><Skill>Discord.js</Skill>
            </div>

            <h4>Project Description</h4>
            <p className={styles.descrptionText}>
            Just Keep Digging Discord Bot was developed to support community engagement for the upcoming game Just Keep Digging.
             Players can use /mine to collect randomly weighted resources and sell them for company coins.
             Reaching set milestones unlocks rewards like VIP roles, access to special channels, and even the ability to contribute directly to the game by adding ores or structures.
            </p>

            <h4>Reflections</h4>
            <p className={styles.descrptionText}>
            I created the Just Keep Digging Discord bot to build excitement for the game’s release and foster a community around it.
             The bot helped drive engagement, with some dedicated players earning over 10,000 company coins—running commands hundreds of times, each with a 30-second cooldown.
              It became a fun way to keep players active and invested in the game’s development.
            </p>

            <h4>Links</h4>
            <div>
                <Button style={buttonStyles.btn_img} imageSrc={githubIcon} href="https://github.com/Robert-T1/JustKeepDiggingBot"></Button>
            </div>

            <h4>Gallery</h4>
            <div className={styles.gallery}>
                <img src={ss1} alt="image of just keep digging discord bot" />
                <img src={ss2} alt="image of just keep digging discord bot" />
            </div>

        </div>
    );
 }

 export default JustKeepDiggingBot;