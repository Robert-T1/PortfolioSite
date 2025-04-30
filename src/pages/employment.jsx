import styles from './employment.module.css'
import EmploymentElement from '../components/EmploymentElement';

function Employment() {
    return (
        <div className="container">
            <h2>EMPLOYMENT</h2>
            <p className={styles.description}>
                A concise overview of my employment history.
            </p>

                <EmploymentElement description="Test" label="RELT Games - Game Developer" tenure="April 2021 - Now" employmentType="Full-Time"/>
                <EmploymentElement description="" label="Lowe's - Cashier" tenure="Novemeber 2024 - Now" employmentType="Part-Time"/>
                <EmploymentElement description="" label="Pet Clinic Of Neosho - Vet Technician" tenure="April 2020 - October 2023" employmentType="Part-Time"/>
                <EmploymentElement description="" label="Farmers Market - Produce Vendor" tenure="2019 - 2023" employmentType="Seasonal"/>

            <p className={styles.description}>
               Email for employeer contact.
            </p>
        </div>
    );
 }

 export default Employment;