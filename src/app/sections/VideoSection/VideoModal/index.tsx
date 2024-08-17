"use client";

import React, { useEffect } from "react";
import ReactModal from "react-modal";
import styles from "./index.module.css";
import Image from "next/image";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    background: "transparent",
    border: 0,
  },
};

const VideoModal: React.FC<{
  modalIsOpen: boolean;
  closeModal: () => void;
  videoWidth: number;
}> = ({ modalIsOpen = false, closeModal, videoWidth }) => {
  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  const onCloseBtnClick = () => {
    closeModal();
  };

  return (
    <ReactModal
      isOpen={modalIsOpen}
      contentLabel="Video Modal"
      style={customStyles}
      onRequestClose={onCloseBtnClick}
    >
      <div className={styles.wrapper}>
        <video
          className={styles.videoStyle}
          width={videoWidth}
          autoPlay
          playsInline
          controls
        >
          <source
            src="https://kiwi-homepage.s3.amazonaws.com/homepage_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Image
          src="/cross-icon.svg"
          alt="Cross Icon"
          width={40}
          height={40}
          priority
          onClick={onCloseBtnClick}
          className={styles.closeIcon}
        />
      </div>
    </ReactModal>
  );
};

export default VideoModal;
