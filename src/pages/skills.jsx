import { useState } from 'react';
import styles from './skills.module.css';
import Skill from '../components/Skill';

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C#', tier: 'advanced' },
      { name: 'Python', tier: 'proficient' },
      { name: 'JavaScript', tier: 'proficient' },
      { name: 'Java', tier: 'proficient' },
      { name: 'Lua', tier: 'proficient' },
      { name: 'HTML', tier: 'proficient' },
      { name: 'CSS', tier: 'proficient' },
      { name: 'SQL', tier: 'proficient' },
      { name: '.NET', tier: 'familiar' },
      { name: 'PHP', tier: 'familiar' },
    ],
  },
  {
    title: 'Game Development',
    skills: [
      { name: 'Unity', tier: 'advanced' },
      { name: 'Game Systems Programming', tier: 'advanced' },
      { name: 'Multiplayer Networking with FishNet', tier: 'advanced' },
      { name: 'Godot', tier: 'proficient' },
      { name: 'Procedural Generation', tier: 'proficient' },
      { name: 'Mobile Application Development with Unity', tier: 'proficient' },
      { name: 'Unreal', tier: 'familiar' },
      { name: 'Roblox Engine', tier: 'familiar' },
      { name: 'VR/XR', tier: 'familiar' },
      { name: 'Azure PlayFab', tier: 'familiar' },
      { name: 'Unity Multiplay Hosting', tier: 'familiar' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React', tier: 'proficient' },
      { name: 'Node.js', tier: 'proficient' },
      { name: 'Express.js', tier: 'proficient' },
      { name: 'REST APIs', tier: 'proficient' },
      { name: 'WebSockets', tier: 'proficient' },
      { name: 'Responsive Web Design', tier: 'proficient' },
      { name: 'UI Design', tier: 'proficient' },
      { name: 'Frontend/Backend Integration', tier: 'proficient' },
      { name: 'JSON', tier: 'proficient' },
      { name: 'Vite', tier: 'familiar' },
      { name: 'Web Hosting', tier: 'familiar' },
      { name: 'Browser Developer Tools', tier: 'familiar' },
      { name: 'API Integration', tier: 'familiar' },
    ],
  },
  {
    title: 'Databases & Data',
    skills: [
      { name: 'MongoDB', tier: 'proficient' },
      { name: 'Database Design', tier: 'familiar' },
      { name: 'Subqueries', tier: 'familiar' },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    skills: [
      { name: 'Software Deployment', tier: 'advanced' },
      { name: 'Cloudflare', tier: 'proficient' },
      { name: 'Nginx', tier: 'proficient' },
      { name: 'Docker', tier: 'familiar' },
      { name: 'Docker Compose', tier: 'familiar' },
      { name: 'Google Cloud Platform', tier: 'familiar' },
      { name: 'Cloud Computing', tier: 'familiar' },
      { name: 'Linux Command Line', tier: 'familiar' },
      { name: 'Command Line Interfaces', tier: 'familiar' },
      { name: 'Raspberry Pi', tier: 'familiar' },
      { name: 'Hardware/Software Setup', tier: 'familiar' },
    ],
  },
  {
    title: 'Version Control',
    skills: [
      { name: 'Git', tier: 'proficient' },
      { name: 'GitHub', tier: 'proficient' },
      { name: 'Plastic SCM', tier: 'proficient' },
      { name: 'Version Control', tier: 'proficient' },
    ],
  },
  {
    title: 'Testing & Quality',
    skills: [
      { name: 'Debugging', tier: 'advanced' },
      { name: 'Troubleshooting', tier: 'advanced' },
      { name: 'Software Testing', tier: 'proficient' },
      { name: 'Bug Tracking', tier: 'proficient' },
      { name: 'Performance Optimization', tier: 'proficient' },
    ],
  },
  {
    title: 'Computer Science Concepts',
    skills: [
      { name: 'Object-Oriented Programming (OOP)', tier: 'advanced' },
      { name: 'Data Structures', tier: 'proficient' },
      { name: 'Algorithms', tier: 'proficient' },
      { name: 'Cross-Platform Development', tier: 'proficient' },
      { name: 'Software Architecture', tier: 'familiar' },
      { name: 'System Design', tier: 'familiar' },
      { name: 'Networking Concepts', tier: 'familiar' },
      { name: 'TCP/IP', tier: 'familiar' },
      { name: 'Client-Server Architecture', tier: 'familiar' },
      { name: 'Robotics', tier: 'familiar' },
    ],
  },
  {
    title: 'Professional Skills',
    skills: [
      { name: 'Communication', tier: 'advanced' },
      { name: 'Customer Service', tier: 'advanced' },
      { name: 'Technical Documentation', tier: 'proficient' },
      { name: 'Application Support', tier: 'proficient' },
    ],
  },
];

const tiers = [
  { id: 'advanced', label: 'Advanced' },
  { id: 'proficient', label: 'Proficient' },
  { id: 'familiar', label: 'Familiar' },
];

function Skills() {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();

  const filteredGroups = skillGroups
    .map(({ title, skills }) => ({
      title,
      skills: q ? skills.filter(({ name }) => name.toLowerCase().includes(q)) : skills,
    }))
    .filter(({ skills }) => skills.length > 0);

  const matchCount = filteredGroups.reduce((sum, g) => sum + g.skills.length, 0);

  return (
    <div className="container" style={{ '--page-accent': 'var(--c-green)' }}>
      <h2 className="pageTitle">SKILLS</h2>
      <p className={styles.description}>
        A self-assessed overview of my notable skills, grouped by area and rated
        by time spent and familiarity with the related technologies.
      </p>

      <div className={styles.legend} aria-label="Proficiency legend">
        {tiers.map(({ id, label }) => (
          <span key={id} className={styles.legendItem}>
            <Skill tier={id}>{label}</Skill>
          </span>
        ))}
      </div>

      <div className={styles.searchWrapper}>
        <svg
          className={styles.searchIcon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search skills… (e.g. React, Unity, SQL)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search skills"
        />
        {q && (
          <span className={styles.searchCount} aria-live="polite">
            {matchCount} {matchCount === 1 ? 'match' : 'matches'}
          </span>
        )}
      </div>

      {filteredGroups.length > 0 ? (
        <div className={styles.groupGrid}>
          {filteredGroups.map(({ title, skills }) => (
            <section key={title} className={styles.groupCard}>
              <h3 className={styles.groupTitle}>{title}</h3>
              <div className={styles.chips}>
                {skills.map(({ name, tier }) => (
                  <Skill key={name} tier={tier}>{name}</Skill>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>
          No skills matching &ldquo;{query}&rdquo; — but I&rsquo;m a fast learner!
        </p>
      )}
    </div>
  );
}

export default Skills;
