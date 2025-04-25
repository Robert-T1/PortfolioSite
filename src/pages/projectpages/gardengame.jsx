import styles from './projectpage.module.css'
import Skill from '../../components/Skill';
import Button from '../../components/Button'
import buttonStyles from '../../components/button.module.css'

import trackIcon from '../../assets/images/trackicon.png'
import steamIcon from '../../assets/images/steamIcon.png'
import ss1 from '../../assets/images/projectIcons/gg_ss1.png'
import ss2 from '../../assets/images/projectIcons/gg_ss2.png'
import ss3 from '../../assets/images/projectIcons/gg_ss3.png'

function GardenGame() {
    return (
        <div className='container'>
            <h1>Garden Game</h1>

            <h4>Skills</h4>
            <div className={styles.skill}>
                <Skill>C#</Skill> <Skill>Unity Engine</Skill><Skill>Android Development</Skill> <Skill>Version Control</Skill><Skill>Google Play Integration</Skill><Skill>AdMob Integration</Skill><Skill>Art</Skill><Skill>Sound Design</Skill><Skill>Design</Skill>
            </div>

            <h4>Project Description</h4>
            <p className={styles.descrptionText}>
            Garden Game is a peaceful farming simulation.
             Start with a few tomato seeds and carefully tend your garden—dodging turtles and harvesting crops at peak ripeness.
             Sell your produce at the market to earn profit and expand your collection. With 26 unique seeds to discover and grow, 
             can you collect them all?
            </p>

            <h4>Reflections</h4>
            <p className={styles.descrptionText}>
            Garden Game was originally published on the Google Play Store in April 2021 and remained available until 2023. 
            It received over 50 downloads. Built in just two months, it was a simple mobile game that served as a fun and focused development project.

            </p>

            <h4>Gallery</h4>
            <div className={styles.gallery}>
                <img src={ss1} alt="image of garden game" />
                <img src={ss2} alt="image of garden game" />
                <img src={ss3} alt="image of garden game" />
            </div>

        </div>
    );
 }

 export default GardenGame;