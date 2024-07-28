import { archivoBlack } from "@/app/fonts";

import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const SellingPointSection: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.sectionBody}>
        <div className={styles.headerContainer}>
          <div>
            <h2 className={`${archivoBlack.className} ${styles.header}`}>
              Imagine having a Landing Page Uniquely Crafted
            </h2>
          </div>
          <Image
            src="/sales-icon.svg"
            alt="Feather Icon"
            className={styles.featherIcon}
            width={134}
            height={134}
            priority
          />
        </div>

        <div className={styles.chatButton}>
          <Link href="/contact">Let&apos;s Chat</Link>
        </div>
      </section>
    </div>
  );
};

export default SellingPointSection;
