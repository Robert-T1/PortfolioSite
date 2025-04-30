import styles from './skillbar.module.css';
import React from 'react';

function getColor(value) {
  const r = Math.round(255 - (value * 2.55));
  const g = Math.round(value * 2.55);
  return `rgb(${r},${g},0)`;
}

function SkillBar({ children, level }) {
  return (
    <div className={styles.skillbar}>
      <span className={styles.label}>{children}</span>
      <div className={styles.barContainer}>
        <div
          className={styles.barFill}
          style={{
            width: `${level}%`,
            backgroundColor: getColor(level),
          }}
        />
        <span className={styles.levelText}>{level}</span>
      </div>
    </div>
  );
}

export default SkillBar;
