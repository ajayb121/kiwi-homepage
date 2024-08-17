import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.mobileWrapper} ref={menuRef}>
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
