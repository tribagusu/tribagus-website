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
        <aside className={styles.cards}>
          <article className={styles.card}>
            <div className={styles.content}>
              <div className={styles.skill}>
                <h1 className={styles.mainSkill}>Front-End</h1>
                <div className={styles.logo}>
                  <BsTerminal />
                </div>
              </div>
              <p>I can do all from HTML structure to unit test..</p>
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
          </article>
          <article className={styles.card}>
            <div className={styles.content}>
              <div className={styles.skill}>
                <h1>Back-End</h1>
                <div className={styles.logo}>
                  <ImBarcode />
                </div>
              </div>
              <p>I can make API and manage the database..</p>
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
          </article>
          <article className={styles.card}>
            <div className={styles.content}>
              <div className={styles.skill}>
                <h1>Design</h1>
                <div className={styles.logo}>
                  <IoIosImages />
                </div>
              </div>
              <p>I can create design and slicing it..</p>
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
          </article>
        </aside>
        <aside className={styles.profile}>
          <h1>
            I&apos;m tri<span>Bagus</span>
          </h1>
          <p>
            an adept front-end developer focusing on JavaScript, ReactJS, and
            NextJS web development. After graduate from Front-end Bootcamp,
            I&apos;m eager to continue my career by learning Back-end as well.
            I&apos;m ready to learn even more by joining a company with
            interactive team where I will continue expanding my Fullstack
            knowledge into perfecting web-app and mobile-app.
          </p>
          <br />
          <small>Interest: tech, blockchain, bitter coffee</small>
        </aside>
      </section>
    </main>
  )
}

export default About
