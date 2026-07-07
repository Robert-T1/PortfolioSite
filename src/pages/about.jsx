import styles from './about.module.css';
import pufaImage from '../assets/images/pufa.jpg'
import headshotImage from '../assets/images/headshot.png'

export default function About() {
  return (
    <section className={`container ${styles.about}`} style={{ '--page-accent': 'var(--c-blue)' }}>
      <h1 className="pageTitle">ABOUT</h1>

      <div className={styles.hero}>
        <img
          src={headshotImage}
          alt="Headshot of Robert Thompson"
          className={styles.headshot}
        />
        <h2 className={styles.name}>Robert Thompson</h2>
        <div className={styles.tagline}>
          <p>Early career with lots of experience.</p>
          <p>Pursuing a Bachelor&rsquo;s degree in Computer Science at Western Governors University.</p>
          <p>Built and shipped real software through my independent studio, RELT Games.</p>
        </div>
      </div>

      <div className={styles.bioCard}>
        <p className={styles.bio}>
          I&rsquo;m Robert Thompson, a computer science student at Western Governors University trying to build a career in technology.
        </p>

        <p className={styles.bio}>
          I have a mix of real customer service experience, software development experience, and a strong background in game development.
          I have worked directly with customers, solved real problems, communicated with different types of people, and also built and
          shipped real software through my independent game studio, RELT Games.
        </p>

        <p className={styles.bio}>
          Through RELT Games, I&rsquo;ve put games out on Steam, Google Play, and Itch.io. A lot of my experience has come from actually
          building things, fixing problems, and trying to get projects finished instead of just following tutorials. I&rsquo;ve worked on
          gameplay systems, bugs, releases, store pages, and all the small details that come with shipping a real project. One of my
          games also got reviewed by a YouTuber with over 4.3 million subscribers, and that video got just under 100,000 views.
        </p>

        <p className={styles.bio}>
          Right now, I&rsquo;m trying to get into a technology role where I can keep learning and growing. I&rsquo;m open to software
          development, technical support, IT, QA or really any tech-related role where I can use problem solving, communication, and my
          ability to learn quickly. I&rsquo;ve already built real projects, worked with
          real users, and learned a lot from finishing things even when they were difficult.
        </p>

        <p className={styles.bio}>
          Also, here is my cat{' '}
          <span className={styles.hoverImage} tabIndex={0}>
            Pufa
            <img
              src={pufaImage}
              alt="Pufa the cat"
              className={styles.popupImg}
            />
          </span>.
        </p>
      </div>
    </section>
  );
}
