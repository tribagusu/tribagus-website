import Link from "next/link"
import styles from "../../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.left}>
          <h1>I believe that every problem has its own solution.</h1>
          <div className={styles.copyright}>
            <h4>triBagus</h4>
            <small>&copy; 2022. All Rights Reserved</small>
          </div>
        </div>
        <div className={styles.right}>
          <p>Contact</p>
          <h3>Depok, West Java, Indonesia</h3>
          <h2>tribagus.indonesia@gmail.com</h2>
          <div className={styles.links}>
            <Link href="/#works" scroll={false}>
              <p>Works</p>
            </Link>
            <Link href="/#about" scroll={false}>
              <p>About</p>
            </Link>
            <Link href="/">
              <p>Blogs</p>
            </Link>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
