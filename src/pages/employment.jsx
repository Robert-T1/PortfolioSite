import styles from './employment.module.css'
import EmploymentElement from '../components/EmploymentElement';

function Employment() {
    return (
        <div className="container">
            <h2>EMPLOYMENT</h2>
            <p className={styles.description}>
                A concise overview of my employment history.
            </p>

                <EmploymentElement description="Founded and operated an independent game studio to build commercial games and grow as a software engineer. Led all major projects and took on every role—gameplay engineer, UI engineer, designer, artist, marketer, and publisher. Released three games with hundreds of downloads and thousands of plays across platforms." 
                label="RELT Games - Game Developer" tenure="April 2021 - Now" employmentType="Full-Time"/>
                <EmploymentElement description="Worked as a cashier handling customer checkout and service with a strong track record of punctuality and reliability. Gained experience with both customer-facing and internal software systems. Earned Front End Team Member of the Month recognition for performance."
                 label="Lowe's - Cashier" tenure="Novemeber 2024 - Now" employmentType="Part-Time"/>
                <EmploymentElement description="Supported the care and treatment of animals in a clinical setting. Assisted with procedures, administered medications, performed cleaning and maintenance tasks, and provided general care for dogs and cats."
                 label="Pet Clinic Of Neosho - Vet Technician" tenure="April 2020 - October 2023" employmentType="Part-Time"/>
                <EmploymentElement description="Contributed to the production and sale of fresh produce and handmade goods at local seasonal farmers markets. Managed customer service, cash handling, garden maintenance, and offered knowledgeable support on various products."
                 label="Farmers Market - Produce Vendor" tenure="2019 - 2023" employmentType="Seasonal"/>

            <p className={styles.description}>
                Contact Email for Employer Reference
            </p>
        </div>
    );
 }

 export default Employment;