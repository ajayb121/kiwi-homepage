import { archivoBlack } from "@/app/fonts";

import styles from "./index.module.css";

const HeroSection: React.FC = () => {
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
      </section>
    </div>
  );
};

export default HeroSection;
