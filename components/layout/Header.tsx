import Link from "next/link"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"
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
            <Link href="#works" scroll={false}>
              <p className={styles.works}>&lt; Works &gt;</p>
            </Link>
            <Link href="#about" scroll={false}>
              <p>About</p>
            </Link>
            <Link href="/">
              <p>Blogs</p>
            </Link>
          </div>
        </div>
        <div className={styles.contact}>
          <Link
            href="https://github.com/tribagusu"
            target="blank"
            className={styles.github}
          >
            <div>
              <AiFillGithub />
            </div>
            <p>Github</p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/tribagus/"
            target="blank"
            className={styles.linkedin}
          >
            <div>
              <AiFillLinkedin />
            </div>
            <p>LinkedIn</p>
          </Link>
          <Link href="/" className={styles.mail}>
            <div>
              <AiOutlineMail />
            </div>
            <p>Mail</p>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
