import styles from './skill.module.css'

function Skill({children}) {
    return (
        <div className={styles.skill}>
            <p>{children}</p>
        </div>
    );
 }

 export default Skill;