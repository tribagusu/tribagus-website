import Link from "next/link"
import Image from "next/image"
import { FaReact } from "react-icons/fa"
import { SiSass, SiRedux, SiNextdotjs } from "react-icons/si"
import { FiArrowUpRight } from "react-icons/fi"
import { TbBrandReactNative } from "react-icons/tb"
import styles from "../styles/Works.module.scss"
import img1 from "../public/rental.png"
import img2 from "../public/dashboard.png"
import img3 from "../public/tenggara-web.png"

const Works = () => {
  return (
    <main className={styles.works} id="works">
      <section className={styles.container}>
        <article className={styles.left}>
          <h2>Latest Works</h2>
          <p>Every problem has its own solution</p>
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
                src={img1}
                alt="rental"
                style={{ borderRadius: "8px", width: "100%", height: "100%" }}
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
                src={img2}
                alt="dashboard"
                style={{ borderRadius: "8px", width: "100%", height: "100%" }}
              />
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.title}>
              <Link
                href="https://www.tenggara.dev/"
                target="_blank"
                className={styles.blockchain}
              >
                <h3>Blockchain</h3>
                <span>
                  <FiArrowUpRight />
                </span>
              </Link>
              <div className={styles.stack}>
                <div className={styles.next}>
                  <SiNextdotjs />
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
                src={img3}
                alt="dashboard"
                style={{ borderRadius: "8px", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </article>
      </section>
      <Link href="/#works" className={styles.allProjects}>
        <h5>ALL PROJECTS</h5>
      </Link>
    </main>
  )
}

export default Works
