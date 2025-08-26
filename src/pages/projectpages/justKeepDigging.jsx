import styles from './projectpage.module.css'
import Skill from '../../components/Skill';
import Button from '../../components/Button'
import buttonStyles from '../../components/button.module.css'

import youtubeIcon from '../../assets/images/youtubeIcon.png'
import steamIcon from '../../assets/images/steamIcon.png'
import ss1 from '../../assets/images/projectIcons/jkd_ss1.jpg'
import ss2 from '../../assets/images/projectIcons/jkd_ss2.gif'
import ss3 from '../../assets/images/projectIcons/jkd_ss3.jpg'

function JustKeepDigging() {
    return (
        <div className='container'>
            <h1>Just Keep Digging</h1>

            <h4>Skills</h4>
            <div className={styles.skill}>
                <Skill> C# </Skill> <Skill>Unity Engine</Skill> <Skill>Version Control</Skill> <Skill>Marketing</Skill><Skill>Art</Skill><Skill>Sound Design</Skill><Skill>Steam Integration</Skill> <Skill>Design</Skill>
            </div>

            <h4>Project Description</h4>
            <p className={styles.descrptionText}>
                Just Keep Digging is an open-world action-adventure mining simulator.
                Play as John in Bodie, a company mining town. Meet the weekly profit quota or face termination. Use extra company coins to upgrade your gear, dig deeper for rarer resources, and uncover ancient fossils and ruined structures. Beware of dangerous cave dwellers—bring a weapon along with your pickaxe.
            </p>

            <h4>Reflections</h4>
            <p className={styles.descrptionText}>
               Just Keep Digging released on Steam on July 11, 2025. It’s the most ambitious project I’ve worked on to date, with nearly a year of development, just under 1,000 hours of work, and over 13,000 lines of code. The project was a huge undertaking for me as a solo developer, both in terms of its complexity (procedural generation, save system, large open world, enemy AI, GUI, effects system, etc.) and the overall time commitment.
                The reception has been incredibly rewarding, with the game earning a 96% positive rating on Steam and coverage from creators like Blitz along with others.
            </p>

            <h4>Links</h4>
             <div className={styles.links}>
                <Button style={buttonStyles.btn_img} imageSrc={steamIcon} href="https://store.steampowered.com/app/2974660/Just_Keep_Digging/"></Button>
                <Button style={buttonStyles.btn_img} imageSrc={youtubeIcon} href="https://www.youtube.com/watch?v=4HXXo21fTw0&t"></Button>
            </div>

            <h4>Gallery</h4>
            <div className={styles.gallery}>
                <img src={ss1} alt="image of player mining emeralds in just keep digging" />
                <img src={ss2} alt="gif of player getting chased by cow worm in just keep digging" />
                <img src={ss3} alt="image of map mechanic in just keep digging" />
            </div>

        </div>
    );
 }

 export default JustKeepDigging;
