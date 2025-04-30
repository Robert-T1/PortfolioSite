import styles from './about.module.css';
import pufaImage from '../assets/images/pufa.jpg'

export default function About() {
  return (
    <section className={styles.about}>
      <h1 className={styles.aboutText}>ABOUT</h1>

      <div className={styles.hero}>
        <div className={styles.intro}>
          <h2>Robert Thompson</h2>
          <p className={styles.tagline}>
            I build software to bring value to people.
          </p>
        </div>
      </div>
      <p className={styles.bio}>
        I’m a developer passionate about creating functional, performant, user-friendly software.
         I mix creativity with meticulous engineering to craft software that delivers real value.
      </p>

      <p className={styles.bio}>
        Currently, I’m a full‑time Game Developer at my independent studio,
        <strong> RELT Games</strong>, where I'm preparing to publish my second
        Steam game, <em>Just Keep Digging</em>. Over the past four years, I’ve
        worked to sharpened my skills across software development, game
        design, web development, and more—building multiple projects from
        scratch and seeing them through to release.
      </p>

      <p className={styles.bio}>
        Alongside my development work, I maintain a part‑time role as a cashier
        at Lowe’s, ensuring stable income as I continue growing my skills,
        career, and studio.
      </p>

      <p className={styles.bio}>
        With a strong foundation built through independent development and
        real‑world publishing experience, I’m excited to take on new challenges
        and opportunities—and to continue creating software that brings value
        to others.
      </p>

      <p className={styles.bio}>
        In my spare time, I enjoy gardening, hiking, reading, and spending time
        with my cat, <span className={styles.hoverImage}>Pufa
            <img
            src={pufaImage}
            alt="Pufa the cat"
                    className={styles.popupImg}
            />
            </span>.
        </p>
    </section>
  );
}
