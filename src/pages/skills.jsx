import { useState, useEffect, useRef } from 'react';
import styles from './skills.module.css';
import SkillBar from '../components/SkillBar';

function Skills() {
  const [animatedLevel, setAnimatedLevel] = useState(5);
  const directionRef = useRef(1);
  const requestRef = useRef();
  
  useEffect(() => {
    let lastTimestamp = 0;
    
    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      
      if (delta > 100) {
        lastTimestamp = timestamp;
        
        setAnimatedLevel(prev => {
          let next = prev + (directionRef.current * 1);
          
          if (next >= 100) {
            directionRef.current = -1;
            next = 100;
          } else if (next <= 5) {
            directionRef.current = 1;
            next = 5;
          }
          
          return next;
        });
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []); 

  return (
    <div className="container">
      <h2 className={styles.sectionTitle}>SKILLS</h2>
      <p className={styles.description}>
        A self-evaluated list of notable skills, assessed based on time spent and overlap with related skills. 
        This provides an honest representation of proficiency in the skill bars below.
      </p>
      
      <div className={styles.animationDemo}>
        <div className={styles.skillLevelIndicator}>
          <SkillBar level={animatedLevel}>{getSkillLabel(animatedLevel)}</SkillBar>
        </div>
      </div>
      
      <div className={styles.skillSection}>
      <h4>Programming Languages</h4>
            <SkillBar level={85}>C#</SkillBar>
            <SkillBar level={65}>JavaScript</SkillBar>
            <SkillBar level={65}>C++</SkillBar>
            <SkillBar level={60}>Lua</SkillBar>
            <SkillBar level={40}>Python</SkillBar>
            <SkillBar level={30}>C</SkillBar>

            <h4>Declarative Languages</h4>
            <SkillBar level={55}>HTML</SkillBar>
            <SkillBar level={45}>CSS</SkillBar>
      </div>
    </div>
  );
}

function getSkillLabel(level) {
  if (level <= 20) return 'Novice';
  if (level <= 40) return 'Beginner';
  if (level <= 60) return 'Intermediate';
  if (level <= 80) return 'Advanced';
  return 'Expert';
}

export default Skills;