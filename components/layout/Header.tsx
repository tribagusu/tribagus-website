import Link from "next/link"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { FaFileDownload } from "react-icons/fa"

import styles from "../../styles/Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoNavbar}>
          <Link href="/" className={styles.logo}>
            <span>tri</span>Bagus
          </Link>
          <div className={styles.navbar}>
            <Link href="/#about" scroll={false}>
              <p>About</p>
            </Link>
            <Link href="/#works" scroll={false}>
              <p>&lt; Works &gt;</p>
            </Link>
            <Link href="/" className={styles.blog}>
              <p>
                Blogs <span className={styles.tooltip}>soon..</span>
              </p>
            </Link>
          </div>
        </div>
        <div className={styles.contact}>
          <Link
            href="https://github.com/tribagusu"
            target="_blank"
            className={styles.github}
          >
            <div>
              <AiFillGithub />
            </div>
            <p>Github</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/tribagus/"
            target="_blank"
            className={styles.linkedin}
          >
            <div>
              <AiFillLinkedin />
            </div>
            <p>LinkedIn</p>
          </Link>
          <a
            href="/resume.pdf"
            download="Resume - Tri Bagus"
            className={styles.resume}
          >
            <div>
              <FaFileDownload />
            </div>
            <p>Resume</p>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
