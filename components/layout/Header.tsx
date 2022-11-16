import React from "react"
import Link from "next/link"
import Image from "next/image"

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

import github from "../../public/github-logo.png"
import linkedin from "../../public/linkedin-logo.png"
import styles from "../../styles/Header.module.scss"

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={styles.logo}>tribagus</div>
        <nav className={styles.navbar}>
          <Link href="/">
            <p>Services</p>
          </Link>
          <Link href="/">
            <p>Works</p>
          </Link>
          <Link href="/">
            <p>Blogs</p>
          </Link>
          <Link href="/">
            <p>Contacts</p>
          </Link>
        </nav>
        <nav className={styles.contact}>
          <Link href="/" className={styles.github}>
            <image>
              <AiFillGithub />
            </image>
            <p>Github</p>
          </Link>
          <Link href="/" className={styles.linkedin}>
            <image>
              <AiFillLinkedin />
            </image>
            <p>LinkedIn</p>
          </Link>
          <Link href="/" className={styles.mail}>
            <image>
              <AiOutlineMail />
            </image>
            <p>Mail</p>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
