import styles from './gridholder.module.css'

function GridHolder({ children, columns = 3 }) { 
    return (
        <div
        className={styles.grid}
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
            {children}
        </div>
    );
}

export default GridHolder;