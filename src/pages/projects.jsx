import { Link } from "react-router-dom"
import styles from './projects.module.css'

const projectImages = import.meta.glob('../assets/images/projectIcons/*.png', { eager: true });
import siteIcon from '../assets/images/siteIcon.png'

const projects = [
    { to: "/justkeepdigging", label: "Just Keep Digging", icon: "justKeepDiggingIcon" },
    { to: "/littlecircuit", label: "Little Circuit", icon: "littleCircuitIcon" },
    { to: "/chromathief", label: "Chroma Thief", icon: "chromaThiefIcon" },
    { to: "/bankbot", label: "Bank Bot", icon: "bankBotIcon" },
    { to: "/justkeepdiggingbot", label: "Just Keep Digging Bot", icon: "justkeepdiggingbotIcon", fit: "contain" },
    { to: "/clansandclaims", label: "Clans And Claims", icon: "clansandclaimsIcon" },
    { to: "/portfoliosite", label: "Portfolio Site", icon: null },
    { to: "/gardengame", label: "Garden Game", icon: "gardenGameIcon" },
];

function getProjectIcon(name) {
    return projectImages[`../assets/images/projectIcons/${name}.png`]?.default;
}

function Projects() {
    return (
        <div className="container" style={{ '--page-accent': 'var(--c-red)' }}>
            <h2 className="pageTitle">PROJECTS</h2>
            <p className={styles.description}>A snapshot of notable projects I&rsquo;ve worked on.</p>

            <div className={styles.projectsGrid}>
                {projects.map(({ to, label, icon, fit }) => (
                    <Link to={to} key={to} className={styles.projectCard}>
                        <img
                            src={icon ? getProjectIcon(icon) : siteIcon}
                            alt={`${label} icon`}
                            className={
                                fit === "contain"
                                    ? `${styles.projectImage} ${styles.projectImageContain}`
                                    : styles.projectImage
                            }
                        />
                        <span className={styles.projectLabel}>{label}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Projects;
