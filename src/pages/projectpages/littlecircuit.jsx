import styles from './projectpage.module.css'
import Skill from '../../components/Skill';
import Button from '../../components/Button'
import buttonStyles from '../../components/button.module.css'

import trackIcon from '../../assets/images/trackicon.png'
import steamIcon from '../../assets/images/steamIcon.png'
import ss1 from '../../assets/images/projectIcons/lc_ss1.jpg'
import ss2 from '../../assets/images/projectIcons/lc_ss2.jpg'
import ss3 from '../../assets/images/projectIcons/lc_ss3.jpg'

function LittleCircuit() {
    return (
        <div className='container'>
            <h1>Little Circuit</h1>

            <h4>Skills</h4>
            <div className={styles.skill}>
                <Skill> C# </Skill> <Skill>Unity Engine</Skill> <Skill>Version Control</Skill><Skill>Boolean Logic</Skill> <Skill>Marketing</Skill><Skill>Art</Skill><Skill>Sound Design</Skill><Skill>Steam Integration</Skill> <Skill>Design</Skill>
            </div>

            <h4>Project Description</h4>
            <p className={styles.descrptionText}>
                Little Circuit is a logic simulation sandbox game where you can use a variety of components to create complex circuitry. 
                Click to place components and build anything from a piano to a computer in an open-ended sandbox environment.
            </p>

            <h4>Reflections</h4>
            <p className={styles.descrptionText}>
            Little Circuit was the first game I published on Steam, and for me, it was a complete success—earning over 100 downloads. 
            I chose to start with something small and simple, aiming for a niche category, which led me to create Little Circuit.
             Development took a little over six months, with more than 750 hours invested and over 9,000 lines of code written. Aside from the music, I built the entire game solo.
            </p>

            <h4>Links</h4>
            <div className={styles.links}>
                <Button style={buttonStyles.btn_img} imageSrc={steamIcon} href="https://store.steampowered.com/app/2207640/Little_Circuit/"></Button>
                <Button style={buttonStyles.btn_img} imageSrc={trackIcon} href="https://www.youtube.com/watch?v=MRL6DW1qNUw&list=OLAK5uy_mg7W9L2_-TlhMni-jt5g-QyqtcJ7xxQew"></Button>
            </div>

            <h4>Gallery</h4>
            <div className={styles.gallery}>
                <img src={ss1} alt="image of little circuit" />
                <img src={ss2} alt="image of alu in little circuit" />
                <img src={ss3} alt="image of connecting wires in little circuit" />
            </div>

        </div>
    );
 }

 export default LittleCircuit;