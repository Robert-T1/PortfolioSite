import styles from './projectpage.module.css'
import Skill from '../../components/Skill';
import Button from '../../components/Button'
import buttonStyles from '../../components/button.module.css'

import itchioIcon from '../../assets/images/itchioIcon.png'
import githubIcon from '../../assets/images/github_icon.png'
import ss1 from '../../assets/images/projectIcons/ct_ss1.png'
import ss2 from '../../assets/images/projectIcons/ct_ss2.png'
import ss3 from '../../assets/images/projectIcons/ct_ss3.png'

function ChromaThief() {
    return (
        <div className='container'>
            <h1>Chroma Thief</h1>

            <h4>Skills</h4>
            <div className={styles.skill}>
                <Skill> C# </Skill> <Skill>Unity Engine</Skill><Skill>Team Collaboration</Skill><Skill>Git / Version Control</Skill><Skill>Cross-Disciplinary Communication</Skill><Skill>Scope Management</Skill><Skill>Gameplay Design</Skill>
            </div>

            <h4>Project Description</h4>
            <p className={styles.descrptionText}>
                Chroma Thief is a 2D action platformer where your mission is to restore color to a desaturated world by destroying the alchemists' color machines.
                Traverse spider-ridden jungles, flooded caves, and active volcanoes as you fight to bring vibrancy back to the land.
            </p>

            <h4>Reflections</h4>
            <p className={styles.descrptionText}>
                Chroma Thief was developed during the Pirate Software Game Jam, a two-week challenge where I collaborated with a team of five.
                 I was responsible for all gameplay programming, while my teammate focused on UI code. The rest of our team brought the game to life through sound design, music composition, and visual art.
                 Github note: Both Robert-T1 and Kaz010 are me.
            </p>

            <h4>Links</h4>
            <div className={styles.links}>
                <Button style={buttonStyles.btn_img} imageSrc={githubIcon} href="https://github.com/Robert-T1/Chroma-Thief"></Button>
                <Button style={buttonStyles.btn_img} imageSrc={itchioIcon} href="https://relt-games.itch.io/chroma-thief"></Button>
            </div>

            <h4>Gallery</h4>
            <div className={styles.gallery}>
                <img src={ss1} alt="Image of water cave in chroma thief" />
                <img src={ss2} alt="image of jungle in chroma thief" />
                <img src={ss3} alt="image of volcano in chroma thief" />
            </div>

        </div>
    );
 }

 export default ChromaThief;