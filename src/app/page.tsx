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
  const workSectionRef = useRef<HTMLDivElement>(null);
  const whyUsRef = useRef<HTMLDivElement>(null);
  const ourProcessRef = useRef<HTMLDivElement>(null);
  const isMobile = useResponsiveView();

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className={`${styles.main} ${urbanist.className}`}>
      <Navbar
        scrollToWork={() => scrollToSection(workSectionRef)}
        scrollToWhyUs={() => scrollToSection(whyUsRef)}
        scrollToProcess={() => scrollToSection(ourProcessRef)}
      />
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
          <VideoSection />

          <div ref={whyUsRef}>
            <WhyChooseUs />
          </div>
          <div ref={ourProcessRef}>
            <OurProcess />
          </div>
          <div ref={workSectionRef}>
            <WorkEssence />
          </div>
          <SellingPointSection />
        </div>
      </div>
    </main>
  );
}
