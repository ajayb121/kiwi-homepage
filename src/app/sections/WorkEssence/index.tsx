"use client";

import { animate, motion, useAnimation, useMotionValue } from "framer-motion";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import styles from "./index.module.css";
import useMeasure from "react-use-measure";
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";

type ImageLayerProps = {
  top: number;
  images: string[];
};

const FirstImageLayer = ({ top, images }: ImageLayerProps) => {
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
              loading="lazy"
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

const SecondImageLayer = ({ top, images }: ImageLayerProps) => {
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
              loading="lazy"
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

const layerImages = {
  firstLayer: [
    "/image-1.png",
    "/image-2.png",
    "/image-3.png",
    "/image-4.png",
    "/image-5.png",
    "/image-6.png",
    "/image-19.png",
  ],
  secondLayer: [
    "/image-7.png",
    "/image-8.png",
    "/image-9.png",
    "/image-10.png",
    "/image-11.png",
    "/image-12.png",
    "/image-20.png",
  ],
  thirdLayer: [
    "/image-13.png",
    "/image-14.png",
    "/image-15.png",
    "/image-16.png",
    "/image-17.png",
    "/image-18.png",
  ],
};

const WorkEssence = forwardRef((props, ref) => {
  const headerRef = useRef<HTMLDivElement>(null);

  // Allow parent component to access the headerRef
  useImperativeHandle(ref, () => ({
    scrollToHeader: () => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  return (
    <div className={styles.wrapper} ref={headerRef}>
      <div className={styles.headerContainer}>
        <h1 className={`${archivoBlack.className} ${styles.header}`}>
          Essence of Our Work
        </h1>
      </div>
      <div className={styles.layerContainer}>
        <FirstImageLayer top={200} images={layerImages.firstLayer} />
        <SecondImageLayer top={500} images={layerImages.secondLayer} />
        <FirstImageLayer top={800} images={layerImages.thirdLayer} />
      </div>
    </div>
  );
});

WorkEssence.displayName = "Work Essence";

export default WorkEssence;
