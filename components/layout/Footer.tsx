import Link from "next/link"
import styles from "../../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.left}>
          <h1>Let&apos;s work together.</h1>
          <div className={styles.copyright}>
            <h4>triBagus</h4>
            <small>&copy; 2022. All Rights Reserved</small>
          </div>
        </div>
        <div className={styles.right}>
          <h3>Depok, West Java, Indonesia</h3>
          <h2>tribagus.indonesia@gmail.com</h2>
          <div className={styles.links}>
            <Link href="https://github.com/tribagusu" target="_blank">
              <p>Github</p>
            </Link>
            <Link href="https://www.linkedin.com/in/tribagus/" target="_blank">
              <p>LinkedIn</p>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
