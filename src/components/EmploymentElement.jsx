import style from './employmentelement.module.css'

function EmploymentElement({ description, label, tenure, employmentType }) {
    return (
        <article className={style.card}>
            <header className={style.cardHeader}>
                <h3 className={style.label}>{label}</h3>
                <div className={style.meta}>
                    <span className={style.employmentType}>{employmentType}</span>
                    <span className={style.tenure}>{tenure}</span>
                </div>
            </header>
            <p className={style.description}>{description}</p>
        </article>
    );
}

export default EmploymentElement;
