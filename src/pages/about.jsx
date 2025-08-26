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
            Hello, I’m Robert. I like making video games and software that are fun, useful, and cool.
          </p>
        </div>
      </div>
      <p className={styles.bio}>
       I run my own indie studio, RELT Games, where I’ve spent the last four years developing and publishing
        projects on Steam, Itchio, and Google play, as well as experimenting with prototypes and game jams.
        Most recently, I released my second Steam title, Just Keep Digging. It was my biggest project yet, almost
        a year of work and over a thousand development hours, and it’s been well received, earning a 96% positive
        rating on Steam and reviewed by creators like Blitz (4.3M subscribers).
      </p>

      <p className={styles.bio}>
       Looking ahead, I’m excited to collaborate with a team on projects bigger than one person can tackle alone.
        My skills span the full development pipeline, with strengths in gameplay programming, networking, VR/AR, mobile, UI/UX, and QA.
        I adapt quickly and can jump into any specialty as needed.
      </p>

      <p className={styles.bio}>
        Also, here is my cat <span className={styles.hoverImage}>Pufa
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
