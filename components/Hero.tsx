import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiTypescript } from "react-icons/si"
import TypeEffect from "./TypeEffect"

import styles from "../styles/Hero.module.scss"

const Hero = () => {
  return (
    <main className={styles.hero}>
      <section className={styles.container}>
        <article className={styles.content}>
          <div className={styles.title}>
            <TypeEffect />
          </div>
          <h1>
            Talk is cheap
            <br />
            Show me the code.
          </h1>
          <p>My code is clean and neat. Trust me.</p>
        </article>
        <div className={styles.bigCircle}>
          <span>
            <SiNextdotjs />
          </span>
          <div className={styles.circle1}>
            <span>
              <FaReact />
            </span>
          </div>
          <div className={styles.circle2}>
            <span>
              <SiTypescript />
            </span>
          </div>
          <div className={styles.circle3}>
            <span>
              <FaNodeJs />
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Hero
