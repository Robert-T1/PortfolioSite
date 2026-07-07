import styles from './employment.module.css'
import EmploymentElement from '../components/EmploymentElement';

const jobs = [
    {
        label: "RELT Games - Game Developer",
        tenure: "April 2021 - Now",
        employmentType: "Full-Time",
        description: "Founded and operated an independent game studio to build commercial games and grow as a software engineer. Led all major projects and took on every role—gameplay engineer, UI engineer, designer, artist, marketer, and publisher. Released three games with hundreds of downloads and thousands of plays across platforms.",
    },
    {
        label: "Lowe's - Retail Associate",
        tenure: "November 2024 - Now",
        employmentType: "Part-Time",
        description: "Work as a retail associate supporting customer service, sales, and daily store operations, with a strong track record of punctuality and reliability. Gain experience using both customer-facing and internal store systems. Recognized as Front End Team Member of the Month for performance.",
    },
    {
        label: "Pet Clinic Of Neosho - Vet Technician",
        tenure: "April 2020 - October 2023",
        employmentType: "Part-Time",
        description: "Supported the care and treatment of animals in a clinical setting. Assisted with procedures, administered medications, performed cleaning and maintenance tasks, and provided general care for dogs and cats.",
    },
    {
        label: "Farmers Market - Produce Vendor",
        tenure: "2019 - 2023",
        employmentType: "Seasonal",
        description: "Contributed to the production and sale of fresh produce and handmade goods at local seasonal farmers markets. Managed customer service, cash handling, garden maintenance, and offered knowledgeable support on various products.",
    },
];

function Employment() {
    return (
        <div className="container" style={{ '--page-accent': 'var(--c-yellow)' }}>
            <h2 className="pageTitle">EMPLOYMENT</h2>
            <p className={styles.description}>
                A concise overview of my employment history.
            </p>

            {jobs.map((job) => (
                <EmploymentElement key={job.label} {...job} />
            ))}

            <p className={styles.reference}>
                Employer references available on request —{' '}
                <a href="mailto:robertedwardthompson101@gmail.com">
                    robertedwardthompson101@gmail.com
                </a>
            </p>
        </div>
    );
}

export default Employment;
