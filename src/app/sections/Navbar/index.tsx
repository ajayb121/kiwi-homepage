import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import ContactModal from "@/app/components/ContactModal";

import styles from "./index.module.css";
import MobileNavbar from "./MobileNavbar";

interface NavbarProps {
  scrollToWork: () => void;
  scrollToWhyUs: () => void;
  scrollToProcess: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  scrollToWork,
  scrollToWhyUs,
  scrollToProcess,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className={styles.desktopWrapper}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src="/indiekreativ-full-logo.svg"
                alt="Indiekreativ Logo"
                className={styles.kiwiLogo}
                width={227}
                height={40}
                priority
              />
            </Link>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <a onClick={scrollToWhyUs}>Why Us?</a>
            </li>
            <li>
              <a onClick={scrollToProcess}>Our Process</a>
            </li>
            <li>
              <a onClick={scrollToWork}>Our Work</a>
            </li>
          </ul>
          <div className={styles.chatButton}>
            <a onClick={() => setShowModal(true)}>Let&apos;s Chat</a>
          </div>
        </nav>
      </div>
      <MobileNavbar
        scrollToWork={scrollToWork}
        scrollToWhyUs={scrollToWhyUs}
        scrollToProcess={scrollToProcess}
      />
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};

export default Navbar;
