"use client";

import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import styles from "./index.module.css";
import useMeasure from "react-use-measure";
import useResponsiveView from "@/app/hooks/useResponsiveView";

const ribbonText = [
  "PRODUCT DESIGN",
  "WEB DESIGN",
  "DEVELOPMENT",
  "UI/UX DESIGN",
  "BRANDING",
];

const ProductRibbon = () => {
  const [ref, { width }] = useMeasure();
  const isMobile = useResponsiveView();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    const offset = isMobile ? 20 : 50;

    let controls;
    let finalPosition = -width / 2 - offset;

    controls = animate(xTranslation, [0, finalPosition], {
      repeat: Infinity,
      duration: 25,
      ease: "linear",
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div className={styles.wrapper}>
      <motion.div
        className={styles.horizontalScroll}
        style={{
          x: xTranslation,
        }}
        ref={ref}
      >
        {[...ribbonText, ...ribbonText].map((text, index) => (
          <div className={styles.card} key={index}>
            <p className={styles.text}>{text}</p>
            <div className={styles.divider} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductRibbon;
