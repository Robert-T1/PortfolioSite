import style from './employmentelement.module.css'

function EmploymentElement({description, label, tenure, employmentType}) { 
    return(
        <div className='container'>
            <h3 className={style.label}>{label}</h3>
            <div className={style.box}>
                <span className={style.employmentType}>{employmentType}</span>
                <p className={style.description} >{description}</p>
                <span className={style.tenure}>{tenure}</span>
            </div>
        </div>
    );
}

export default EmploymentElement;