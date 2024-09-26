import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

import ContactModal from "@/app/components/ContactModal";
import { urbanist } from "@/app/fonts";

import styles from "./index.module.css";

interface NavbarProps {
  scrollToWork: () => void;
  scrollToWhyUs: () => void;
  scrollToProcess: () => void;
}

const MobileNavbar: React.FC<NavbarProps> = ({
  scrollToWork,
  scrollToWhyUs,
  scrollToProcess,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenuAndNavigate = useCallback((scrollFn: () => void) => {
    setIsOpen(false);
    scrollFn();
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (!menuRef.current?.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  const showContactModal = useCallback((): void => {
    setIsOpen(false);
    setShowModal(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  return (
    <div className={styles.mobileWrapper} ref={menuRef}>
      <nav className={styles.navbar}>
        <Link href="/">
          <div className={styles.logo}>
            <Image
              src="/indiekreativ-logo.svg"
              alt="Indiekreativ Short Logo"
              className={styles.kiwiLogo}
              width={45}
              height={45}
              priority
            />
            <p
              className={`${styles.logoText} ${urbanist.className}`}
              style={{
                color: "white",
                paddingLeft: "5px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              INDEKREATIV
            </p>
          </div>
        </Link>
        <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <a onClick={() => closeMenuAndNavigate(scrollToWhyUs)}>Why Us?</a>
            </li>
            <li>
              <a onClick={() => closeMenuAndNavigate(scrollToProcess)}>
                Our Process
              </a>
            </li>
            <li>
              <a onClick={() => closeMenuAndNavigate(scrollToWork)}>Our Work</a>
            </li>
          </ul>
          <div className={styles.chatButton} onClick={showContactModal}>
            <a>Let&apos;s Chat</a>
          </div>
        </div>
        <div onClick={toggleMenu}>
          <Image
            src={isOpen ? "/cross-icon.svg" : "/hamburger-icon.svg"}
            alt={isOpen ? "Cross Icon" : "Hamburger Menu"}
            width={40}
            height={40}
            priority
          />
        </div>
      </nav>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default MobileNavbar;
