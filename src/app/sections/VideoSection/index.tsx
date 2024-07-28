"use client";

import React from "react";
import styles from "./index.module.css";
import Image from "next/image";
import useMeasure from "react-use-measure";

const VideoSection: React.FC = () => {
  const [ref, { width }] = useMeasure();

  return (
    <section className={styles.wrapper} ref={ref}>
      <Image
        src="/video-background.png"
        alt="Video Background"
        className={styles.videoBackground}
        width={width}
        height={1000}
        priority
      />
    </section>
  );
};

export default VideoSection;
