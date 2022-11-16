import styles from "../../styles/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className={styles.container}>
        <div className={styles.left}>
          <h1>Let&apos;s make something amazing together.</h1>
          <h2>
            Start by <span>saying hi</span>
          </h2>
          <div className={styles.copyright}>
            <h4>triBagus</h4>
            <small>&copy; 2022. All Rights Reserved</small>
          </div>
        </div>
        <div className={styles.right}></div>
      </section>
    </footer>
  )
}

export default Footer
