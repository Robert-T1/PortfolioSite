import styles from '../pages/projectpages/projectpage.module.css'
import Skill from './Skill';
import Button from './Button'
import buttonStyles from './button.module.css'

/**
 * Shared layout for project detail pages.
 *
 * props:
 *  - title: string
 *  - skills: string[]
 *  - description: node
 *  - reflections: node
 *  - links: { icon, href, alt }[] (optional)
 *  - gallery: { src, alt }[] (optional)
 */
function ProjectPage({ title, skills = [], description, reflections, links = [], gallery = [] }) {
    return (
        <div className="container" style={{ '--page-accent': 'var(--c-red)' }}>
            <h1 className="pageTitle">{title}</h1>

            <section className={styles.section}>
                <h4 className={styles.sectionTitle}>Skills</h4>
                <div className={styles.skills}>
                    {skills.map((skill) => (
                        <Skill key={skill}>{skill}</Skill>
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h4 className={styles.sectionTitle}>Project Description</h4>
                <p className={styles.descriptionText}>{description}</p>
            </section>

            <section className={styles.section}>
                <h4 className={styles.sectionTitle}>Reflections</h4>
                <p className={styles.descriptionText}>{reflections}</p>
            </section>

            {links.length > 0 && (
                <section className={styles.section}>
                    <h4 className={styles.sectionTitle}>Links</h4>
                    <div className={styles.links}>
                        {links.map(({ icon, href, alt }) => (
                            <Button
                                key={href}
                                style={buttonStyles.btn_img}
                                imageSrc={icon}
                                alt={alt}
                                href={href}
                            />
                        ))}
                    </div>
                </section>
            )}

            {gallery.length > 0 && (
                <section className={styles.section}>
                    <h4 className={styles.sectionTitle}>Gallery</h4>
                    <div className={styles.gallery}>
                        {gallery.map(({ src, alt }) => (
                            <img key={src} src={src} alt={alt} loading="lazy" />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

export default ProjectPage;
