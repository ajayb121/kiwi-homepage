import { useState } from "react";
import Image from "next/image";

import { archivoBlack } from "@/app/fonts";
import ContactModal from "@/app/components/ContactModal";

import styles from "./index.module.css";

const SellingPointSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const pageNames = [
    "Landing Page",
    "Website",
    "Design System",
    "Mobile App",
    "Store Website",
  ];
  return (
    <div className={styles.wrapper}>
      <section className={styles.sectionBody}>
        <div className={styles.headerContainer}>
          <div>
            <h2 className={`${archivoBlack.className} ${styles.header}`}>
              Imagine having a {pageNames[0]} Uniquely Crafted
            </h2>
          </div>

          <div className={styles.desktopBgImage}>
            <Image
              src="/selling-point-background.svg"
              alt="Selling Point Background"
              className={styles.featherIcon}
              width={650}
              height={443}
              priority
            />
          </div>
          <div className={styles.mobileBgImage}>
            <Image
              src="/selling-point-background.svg"
              alt="Selling Point Background"
              className={styles.featherIcon}
              width={72}
              height={43}
              priority
            />
          </div>
        </div>

        <div className={styles.chatButton} onClick={() => setShowModal(true)}>
          <a>Let&apos;s Chat</a>
        </div>
      </section>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default SellingPointSection;
