"use client";

import React from "react";
import styles from "./index.module.css";
import useMeasure from "react-use-measure";
import Image from "next/image";
import VideoModal from "./VideoModal";
import useResponsiveView from "@/app/hooks/useResponsiveView";

const VideoSection: React.FC = () => {
  const [ref, { width }] = useMeasure();
  const isMobile = useResponsiveView();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <section className={styles.wrapper} ref={ref} onClick={openModal}>
        <video
          className={styles.videoBackground}
          width={width}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/background-video.webm" type="video/webm" />
          <source src="/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.playIconContainer}>
          <Image src="/play_icon.png" alt="Play Icon" width={80} height={80} />
        </div>
      </section>

      <VideoModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        videoWidth={isMobile ? width * 0.9 : width * 0.8}
      />
    </>
  );
};

export default VideoSection;
