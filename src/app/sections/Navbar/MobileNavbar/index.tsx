import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import "./index.module.css";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.mobileWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/kiwi-logo.svg"
              alt="Kiwi Logo"
              className={styles.kiwiLogo}
              width={90}
              height={25}
              priority
            />
          </Link>
        </div>
        <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Why Us?</a>
            </li>
            <li>
              <a href="#">What’s Next</a>
            </li>
          </ul>
          <Link href="/contact">
            <button className={styles.chatButton}>Let&apos;s Chat</button>
          </Link>
        </div>
        <div onClick={toggleMenu}>
          {!isOpen ? (
            <Image
              src="/hamburger-icon.svg"
              alt="Hamburger Menu"
              width={40}
              height={40}
              priority
            />
          ) : (
            <Image
              src="/cross-icon.svg"
              alt="Cross Icon"
              width={40}
              height={40}
              priority
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
