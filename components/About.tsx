import { BsTerminal } from "react-icons/bs"
import { IoIosImages } from "react-icons/io"
import { ImBarcode } from "react-icons/im"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3 } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { FaReact, FaNodeJs } from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiSass,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiAffinitydesigner,
  SiAffinityphoto,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
} from "react-icons/si"

import styles from "../styles/About.module.scss"

const About = () => {
  return (
    <main className={styles.about} id="about">
      <section className={styles.container}>
        <aside className={styles.skills}>
          <article className={styles.skill}>
            <div className={styles.content}>
              <h1 className={styles.mainSkill}>Front-End</h1>
              <p>Beautiful interface with clean and neat code.</p>
              <div className={styles.stack}>
                <div className={styles.html}>
                  <AiFillHtml5 />
                </div>
                <div className={styles.css}>
                  <DiCss3 />
                </div>
                <div className={styles.js}>
                  <DiJavascript1 />
                </div>
                <div className={styles.ts}>
                  <SiTypescript />
                </div>
                <div className={styles.react}>
                  <FaReact />
                </div>
                <div className={styles.next}>
                  <SiNextdotjs />
                </div>
                <div className={styles.sass}>
                  <SiSass />
                </div>
                <div className={styles.tailwind}>
                  <SiTailwindcss />
                </div>
              </div>
            </div>
            <div className={styles.logo}>
              <BsTerminal />
            </div>
          </article>
          <article className={styles.skill}>
            <div className={styles.content}>
              <h1>Back-End</h1>
              <p>Robust program with seamless interaction.</p>
              <div className={styles.stack}>
                <div className={styles.node}>
                  <FaNodeJs />
                </div>
                <div className={styles.express}>
                  <SiExpress />
                </div>
                <div className={styles.postgre}>
                  <SiPostgresql />
                </div>
                <div className={styles.mysql}>
                  <SiMysql />
                </div>
                <div className={styles.mongo}>
                  <SiMongodb />
                </div>
              </div>
            </div>
            <div className={styles.logo}>
              <ImBarcode />
            </div>
          </article>
          <article className={styles.skill}>
            <div className={styles.content}>
              <h1>Design</h1>
              <p>Create digital product with ideas</p>
              <div className={styles.stack}>
                <div className={styles.figma}>
                  <SiFigma />
                </div>
                <div className={styles.ad}>
                  <SiAffinitydesigner />
                </div>
                <div className={styles.af}>
                  <SiAffinityphoto />
                </div>
                <div className={styles.ai}>
                  <SiAdobeillustrator />
                </div>
                <div className={styles.psd}>
                  <SiAdobephotoshop />
                </div>
              </div>
            </div>
            <div className={styles.logo}>
              <IoIosImages />
            </div>
          </article>
        </aside>
        <aside className={styles.profile}>
          <p>Introduce</p>
          <h1>
            Hello! <br /> I&apos;m tri<span>Bagus</span>
          </h1>
          <h2>Every problem has its own solution.</h2>
          <p>
            I just graduated as Front-End Engineer from Binar Academy 5 months
            intensive Bootcamp. I&apos;m capable to create frontend website
            using React JS and Next JS, as well as other library that support
            it. Furthermore, I&apos;m currently taking Back-End intensive
            bootcamp. I also capable to create API from back-end and maintain
            database with sql.
          </p>
        </aside>
      </section>
    </main>
  )
}

export default About
