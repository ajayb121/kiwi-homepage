// "use client";

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
// import useMeasure from "react-use-measure";
// import { use } from "react";

export default function Home() {
  // const [ref, { height }] = useMeasure();
  // console.log(height, "height");
  return (
    <main className={`${styles.main} ${urbanist.className}`}>
      <Navbar />
      <div className={styles.stickyHeroSection}>
        <HeroSection />
        <ProductRibbon />
      </div>
      <div
        style={{
          background: "#ff4829",
          zIndex: 20,
          position: "relative",
        }}
      >
        <div
          className={styles.otherSections}
          // ref={ref}
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
