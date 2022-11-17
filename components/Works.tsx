import Link from "next/link"
import { FaReact } from "react-icons/fa"
import { SiSass } from "react-icons/si"
import styles from "../styles/Works.module.scss"

const Works = () => {
  return (
    <main className={styles.works} id="works">
      <section className={styles.container}>
        <article className={styles.left}>
          <h2>Latest Works</h2>
          <p>Every problem has its own solution</p>
          <div className={styles.card1}>
            <div className={styles.title}>
              <h3>Car Rental</h3>
              <div className={styles.stack}>
                <div className={styles.react}>
                  <FaReact />
                </div>
                <div className={styles.sass}>
                  <SiSass />
                </div>
              </div>
            </div>
            <div className={styles.image}>image</div>
          </div>
          <Link href="/#works" className={styles.projects}>
            <h5>ALL PROJECTS</h5>
          </Link>
          {/* <small>
            *Some projects are not allowed to publish by NDA, contact me if you
            want to see more.
          </small> */}
        </article>
        <article className={styles.right}>
          <div className={styles.card2}>
            <div className={styles.title}>
              <h3>Rental Dashboard</h3>
              <div className={styles.stack}>
                <div className={styles.react}>
                  <FaReact />
                </div>
                <div className={styles.sass}>
                  <SiSass />
                </div>
              </div>
            </div>
            <div className={styles.image}>image</div>
          </div>
          <div className={styles.card3}>
            <div className={styles.title}>
              <h3>Blockchain</h3>
              <div className={styles.stack}>stack</div>
            </div>
            <div className={styles.image}>image</div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default Works
