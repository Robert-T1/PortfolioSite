import styles from './skill.module.css'

/**
 * A small pill-shaped skill tag.
 * Optional `tier` prop ("advanced" | "proficient" | "familiar") controls emphasis.
 */
function Skill({ children, tier }) {
    const tierClass = tier && styles[tier] ? ` ${styles[tier]}` : '';
    return (
        <span className={`${styles.skill}${tierClass}`}>
            {children}
        </span>
    );
}

export default Skill;
