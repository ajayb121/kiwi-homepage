"use client";
import { useRef } from "react";

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
import useResponsiveView from "./hooks/useResponsiveView";

export default function Home() {
  const workSectionRef = useRef(null);
  const isMobile = useResponsiveView();

  return (
    <main className={`${styles.main} ${urbanist.className}`}>
      <Navbar />
      <div className={styles.stickyHeroSection}>
        <HeroSection />
        <ProductRibbon />
      </div>
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          className={styles.otherSections}
          style={{
            maxHeight: isMobile ? "4000px" : "6700px",
          }}
        >
          <div ref={workSectionRef}>
            <VideoSection />
          </div>
          <WhyChooseUs />
          <OurProcess />
          <WorkEssence />
          <SellingPointSection />
        </div>
      </div>
    </main>
  );
}
