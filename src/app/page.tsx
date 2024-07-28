import styles from "./page.module.css";
import HeroSection from "./sections/HeroSection";
import { urbanist } from "./fonts";
import Navbar from "./sections/Navbar";
import ProductRibbon from "./sections/ProductRibbon";
import VideoSection from "./sections/VideoSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import OurProcess from "./sections/OurProcess";
import WorkEssence from "./sections/WorkEssence";
import SellingPointSection from "./sections/SellingPointSection";

export default function Home() {
  return (
    <main className={`${styles.main} ${urbanist.className}`}>
      <Navbar />
      <div className={styles.stickyHeroSection}>
        <HeroSection />
        <ProductRibbon />
      </div>
      <div
        style={{
          zIndex: 20,
          position: "relative",
        }}
      >
        <div
          className={styles.otherSections}
          style={{
            maxHeight: "6700px",
          }}
        >
          <VideoSection />
          <WhyChooseUs />
          <OurProcess />
          <WorkEssence />
          <SellingPointSection />
        </div>
      </div>
    </main>
  );
}
