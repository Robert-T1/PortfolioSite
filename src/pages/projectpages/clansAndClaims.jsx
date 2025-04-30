import styles from './projectpage.module.css'
import Skill from '../../components/Skill';
import Button from '../../components/Button'
import buttonStyles from '../../components/button.module.css'

import robloxIcon from '../../assets/images/projectIcons/clansandclaimsIcon.png'
import ss1 from '../../assets/images/projectIcons/cac_ss1.png'
import ss2 from '../../assets/images/projectIcons/cac_ss2.png'
import ss3 from '../../assets/images/projectIcons/cac_ss3.png'

function ClansAndClaims() {
    return (
        <div className='container'>
            <h1>Clans And Claims</h1>

            <h4>Skills</h4>
            <div className={styles.skill}>
                <Skill>Lua</Skill><Skill>Roblox Engine</Skill><Skill>RPC Networking</Skill><Skill>Game Design</Skill>
            </div>

            <h4>Project Description</h4>
            <p className={styles.descrptionText}>
            Clans and Claims is a competitive territory-control game where you build your clan, expand your land, and fight off rivals.
             Construct homes for income, farms for resources, and strongholds to defend your turf. Strategize, upgrade, and lead your clan to dominance.
            </p>

            <h4>Reflections</h4>
            <p className={styles.descrptionText}>
            Clans and Claims was developed using the Roblox engine to rapidly prototype and test multiplayer gameplay without needing to manage server infrastructure.
             The platform also allowed for fast iteration and accessible player feedback. The game reached over 2,500 plays, peaking at 160 concurrent players across four servers.
            </p>

            <h4>Links</h4>
            <div className={styles.links}>
                <Button style={buttonStyles.btn_img} imageSrc={robloxIcon} href="https://www.roblox.com/games/15197006955/Clans-And-Claims"></Button>
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

 export default ClansAndClaims;