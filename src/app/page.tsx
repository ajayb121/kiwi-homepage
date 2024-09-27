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
  const whyUsRef = useRef<HTMLDivElement>(null);
  const ourProcessRef = useRef<{ scrollToHeader: () => void }>(null);
  const workEssenceRef = useRef<{ scrollToHeader: () => void }>(null);
  const isMobile = useResponsiveView();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorkEssence = () => {
    if (workEssenceRef.current) {
      workEssenceRef.current.scrollToHeader();
    }
  };

  const scrollToOurProcess = () => {
    if (ourProcessRef.current) {
      ourProcessRef.current.scrollToHeader();
    }
  };

  return (
    <main className={`${styles.main} ${urbanist.className}`}>
      <Navbar
        scrollToWork={scrollToWorkEssence}
        scrollToWhyUs={() => scrollToSection(whyUsRef)}
        scrollToProcess={scrollToOurProcess}
      />
      <div className={styles.stickyHeroSection}>
        <HeroSection />
        <ProductRibbon />
      </div>
      <div className={styles.sectionContainer}>
        <div
          className={styles.otherSections}
          style={{
            maxHeight: isMobile ? "6000px" : "7500px",
          }}
        >
          <VideoSection />

          <div ref={whyUsRef}>
            <WhyChooseUs />
          </div>
          <div>
            <OurProcess ref={ourProcessRef} />
          </div>
          <div>
            <WorkEssence ref={workEssenceRef} />
          </div>
          <SellingPointSection />
        </div>
      </div>
    </main>
  );
}
