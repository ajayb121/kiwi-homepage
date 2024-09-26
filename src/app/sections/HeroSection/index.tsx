import { archivoBlack } from "@/app/fonts";

import styles from "./index.module.css";
import { useState } from "react";
import ContactModal from "@/app/components/ContactModal";

const HeroSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles.wrapper}>
      <section className={styles.sectionBody}>
        <h1 className={`${archivoBlack.className} ${styles.header}`}>
          We turn ideas into digital experiences
        </h1>
        <p className={styles.description}>
          We create digital experiences that not only look spectacular but also
          impress investors and drive funding
        </p>
        <div className={styles.chatButton} onClick={() => setShowModal(true)}>
          <a>Let&apos;s Chat</a>
        </div>
      </section>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default HeroSection;
