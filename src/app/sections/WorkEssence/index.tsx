"use client";

import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import styles from "./index.module.css";
import useMeasure from "react-use-measure";
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";

const images = [
  "/image-1.jpg",
  "/image-2.jpg",
  "/image-3.jpg",
  "/image-4.jpg",
  "/image-5.jpg",
  "/image-6.jpg",
  "/image-7.jpg",
];

const FirstImageLayer = ({ top }: { top: number }) => {
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 50;

    controls = animate(xTranslation, [0, finalPosition], {
      repeat: Infinity,
      duration: 15,
      ease: "linear",
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <motion.div
        className={styles.horizontalScroll}
        style={{
          x: xTranslation,
          top: `${top}px`,
        }}
        ref={ref}
      >
        {[...images, ...images].map((image, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={image}
              alt="Image-1 Logo"
              width={440}
              height={250}
              priority
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const SecondImageLayer = ({ top }: { top: number }) => {
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = width / 2 + 50;

    controls = animate(xTranslation, [-finalPosition, 0], {
      repeat: Infinity,
      duration: 15,
      ease: "linear",
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <motion.div
        className={styles.horizontalScroll}
        style={{
          x: xTranslation,
          top: `${top}px`,
        }}
        ref={ref}
      >
        {[...images, ...images].map((image, index) => (
          <div className={styles.card} key={index}>
            <Image
              src={image}
              alt={`Image-${index + 1} Logo`}
              width={440}
              height={250}
              priority
              style={{
                borderRadius: "10px",
              }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const WorkEssence = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <h1 className={`${archivoBlack.className} ${styles.header}`}>
          Essence of Our Work
        </h1>
      </div>
      <div
        style={{
          // rotate: "30deg",
          transform: "rotate(4deg)",
        }}
      >
        <FirstImageLayer top={200} />
        <SecondImageLayer top={500} />
        <FirstImageLayer top={800} />
      </div>
    </div>
  );
};

export default WorkEssence;
