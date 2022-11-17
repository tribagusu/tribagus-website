import Typewriter from "typewriter-effect"
import styles from "../styles/Typewriter.module.scss"

const TypeEffect = () => {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: ["Front-End", "Back-End", "Fullstack"],
          }}
        />
      </div>
      <div>
        <h3>Engineer</h3>
      </div>
    </div>
  )
}

export default TypeEffect
