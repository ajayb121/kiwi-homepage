import Image from "next/image";
import Link from "next/link";

import styles from "./index.module.css";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.desktopWrapper}>
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
          <ul className={styles.navLinks}>
            <li>
              <Link href="/works">Works</Link>
            </li>
            <li>
              <Link href="/why-us">Why Us?</Link>
            </li>
            <li>
              <Link href="/whats-next">What&apos;s Next</Link>
            </li>
          </ul>
          <div className={styles.chatButton}>
            <Link href="/contact">Let&apos;s Chat</Link>
          </div>
        </nav>
      </div>
      <MobileNavbar />
    </>
  );
};

export default Navbar;
