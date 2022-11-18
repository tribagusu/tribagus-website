import Link from "next/link"
import Image from "next/image"
import { FaReact } from "react-icons/fa"
import { SiSass, SiRedux } from "react-icons/si"
import { FiArrowUpRight } from "react-icons/fi"
import { TbBrandReactNative } from "react-icons/tb"
import styles from "../styles/Works.module.scss"

const Works = () => {
  return (
    <main className={styles.works} id="works">
      <section className={styles.container}>
        <article className={styles.left}>
          <h2>Latest Works</h2>
          <p>Every problem has its own solution</p>
          <Link href="/#works" className={styles.allProjects}>
            <h5>ALL PROJECTS</h5>
          </Link>
          <div className={styles.card1}>
            <div className={styles.title}>
              <Link
                href="https://car-rental-customer-binar.vercel.app/"
                target="_blank"
                className={styles.carRental}
              >
                <h3>Car Rental</h3>
                <span>
                  <FiArrowUpRight />
                </span>
              </Link>
              <div className={styles.stack}>
                <div className={styles.react}>
                  <FaReact />
                </div>
                <div className={styles.sass}>
                  <SiSass />
                </div>
                <div className={styles.redux}>
                  <SiRedux />
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.imageContent}
                src={"/rental.png"}
                width={380}
                height={280}
                alt="rental"
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
        </article>
        <article className={styles.right}>
          <div className={styles.card2}>
            <div className={styles.title}>
              <Link
                href="https://car-rental-admin-binar.vercel.app/cars"
                target="_blank"
                className={styles.dashboard}
              >
                <h3>Dashboard</h3>
                <span>
                  <FiArrowUpRight />
                </span>
              </Link>
              <div className={styles.stack}>
                <div className={styles.react}>
                  <FaReact />
                </div>
                <div className={styles.sass}>
                  <SiSass />
                </div>
                <div className={styles.query}>
                  <TbBrandReactNative />
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src={"/dashboard.png"}
                alt="dashboard"
                width={380}
                height={280}
                style={{ borderRadius: "8px" }}
              />
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.title}>
              <Link href="/" target="_blank" className={styles.blockchain}>
                <h3>Blockchain</h3>
                <span>
                  <FiArrowUpRight />
                </span>
              </Link>
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
