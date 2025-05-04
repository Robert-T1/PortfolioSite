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
        A self-evaluated list of notable skills, assessed based on time spent and familiarity with related technologies. 
        This provides an honest representation of proficiency in the skill bars below.
      </p>
      
      <div className={styles.animationDemo}>
        <div className={styles.skillLevelIndicator}>
          <SkillBar level={animatedLevel}>{getSkillLabel(animatedLevel)}</SkillBar>
        </div>
      </div>
      
      <div className={styles.skillSection}>
        <h3>Programming Languages</h3>
        <SkillBar level={80}>C#</SkillBar>
        <SkillBar level={60}>JavaScript</SkillBar>
        <SkillBar level={50}>C++</SkillBar>
        <SkillBar level={50}>Lua</SkillBar>
        <SkillBar level={35}>Python</SkillBar>
        <SkillBar level={25}>C</SkillBar>

        <h4>Declarative Languages</h4>
        <SkillBar level={55}>HTML</SkillBar>
        <SkillBar level={45}>CSS</SkillBar>

        <h3>Technologies</h3> 
        <SkillBar level={55}>MongdoDB</SkillBar>
        <SkillBar level={55}>React</SkillBar>
        <SkillBar level={55}>Node.js</SkillBar>
        <SkillBar level={35}>Docker</SkillBar>

        <h4>Version Control</h4>
        <SkillBar level={60}>Plastic SCM</SkillBar>
        <SkillBar level={50}>Git</SkillBar>

        <h4>Game Engines</h4>
        <SkillBar level={75}>Unity</SkillBar>
        <SkillBar level={45}>Godot</SkillBar>
        <SkillBar level={35}>Unreal</SkillBar>

        <h4>Specifications</h4>
        <SkillBar level={35}>OpenGL</SkillBar>
        <SkillBar level={20}>DirectX</SkillBar>

        <h3>Testing & QA</h3>
        <SkillBar level={60}>Unity Test Framework</SkillBar>
        <SkillBar level={40}>Vitest</SkillBar>

        <h3>Networking & Infrastructure</h3>
        <SkillBar level={65}>Client-Server Architecture</SkillBar>
        <SkillBar level={60}>Socket Networking</SkillBar>
        <SkillBar level={55}>Cloud Deployment</SkillBar>


        <h3> Programming Concepts</h3>
        <SkillBar level={80}>Component-Based Architecture</SkillBar>
        <SkillBar level={80}>OOP</SkillBar>
        <SkillBar level={75}>Debugging & Profiling</SkillBar>
        <SkillBar level={55}>Unit Testing</SkillBar>
        <SkillBar level={45}>ECS</SkillBar>

      </div>
    </div>
  );
}

function getSkillLabel(level) {
  if (level <= 20) return 'Novice';
  if (level <= 40) return 'Familiar';
  if (level <= 60) return 'Intermediate';
  if (level <= 80) return 'Advanced';
  return 'Expert';
}

export default Skills;