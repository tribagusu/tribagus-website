import Link from "next/link"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiTypescript } from "react-icons/si"
import styles from "../styles/Hero.module.scss"

const Hero = () => {
  return (
    <main className={styles.hero}>
      <section className={styles.container}>
        <article className={styles.content}>
          <div className={styles.title}>
            <p>Front-End Engineer</p>
          </div>
          <h1>
            Talk is cheap
            <br />
            Show me the code.
          </h1>
          <p>My code is clean and neat, I said.</p>
          <div className={styles.button}>
            <Link href="/">LET&apos;S CHAT!</Link>
          </div>
        </article>
        <div className={styles.bigCircle}>
          <span>
            <SiNextdotjs />
          </span>
          <div className={styles.circle1}>
            <div>
              <FaReact />
            </div>
          </div>
          <div className={styles.circle2}>
            <div>
              <SiTypescript />
            </div>
          </div>
          <div className={styles.circle3}>
            <div>
              <FaNodeJs />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
