import styles from './employment.module.css'
import EmploymentElement from '../components/EmploymentElement';

function Employment() {
    return (
        <div className="container">
            <h2>EMPLOYMENT</h2>
            <p className={styles.description}>
                A concise overview of my employment history.
            </p>

            <EmploymentElement description="A cool job that I worked at, and it was fun and cool." label="RELT GAMES" tenure="9/10/2022 TO Now"/>

            <p className={styles.description}>
               Email for contact reference.
            </p>
        </div>
    );
 }

 export default Employment;