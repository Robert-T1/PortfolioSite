
import styles from './icon.module.css'

function Icon({src, alt}) { 
    return(
        <img src={src} alt={alt} className={styles.iconImage} />
    );
}

export default Icon;