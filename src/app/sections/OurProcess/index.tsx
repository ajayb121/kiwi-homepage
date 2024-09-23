import { useRef, forwardRef, useImperativeHandle, useState } from "react";
import { archivoBlack } from "@/app/fonts";
import ContactModal from "@/app/components/ContactModal";
import useResponsiveView from "@/app/hooks/useResponsiveView";
import styles from "./index.module.css";
import Image from "next/image";

const sections = [
  {
    title: "Initial Kickoff and Brief",
    description:
      "An Introductory call to meet the team and know about the project in details.",
  },
  {
    title: "Proposal",
    description:
      "You will receive a detailed proposal with project goals and timelines for a mutual understanding.",
  },
  {
    title: "Contract & Agreement",
    description:
      "We will coordinate all necessary documents and payment methods before the project starts.",
  },
  {
    title: "Research & Discovery",
    description:
      "Before design begins, we thoroughly research competitor strategies, market trends, and user insights.",
  },
  {
    title: "Concept Development",
    description:
      "Armed with research, our team brainstorms and sketches multiple design concepts, each tailored to your brand's unique voice.",
  },
  {
    title: "Design Execution",
    description:
      "After concept approval, our designers meticulously craft every detail, ensuring the final product is pixel-perfect.",
  },
  {
    title: "Feedback & Revisions",
    description:
      "Your input is key as we collaborate on revisions, ensuring the design exceeds expectations.",
  },
  {
    title: "Final Delivery",
    description:
      "Once approved, we finalise and deliver all assets, and if applicable, continue to development.",
  },
  {
    title: "Support & Growth",
    description:
      "As the digital landscape evolves, we provide ongoing support to keep your brand ahead of the curve.",
  },
];

const OurProcess = forwardRef((props, ref) => {
  const isMobile = useResponsiveView();
  const [showModal, setShowModal] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Expose the scroll functionality to parent component
  useImperativeHandle(ref, () => ({
    scrollToHeader: () => {
      if (headerRef.current) {
        headerRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },
  }));

  return (
    <div className={styles.wrapper}>
      <section ref={headerRef} className={styles.sectionBody}>
        <div className={styles.headerContainer}>
          <div>
            <h2 className={`${archivoBlack.className} ${styles.header}`}>
              Designing new products or improving existing ones
            </h2>
            <p className={styles.description}>
              We design products from scratch, creating experiences that users
              love from the start. Got a product already? We help with that,
              too, by redesigning existing solutions to make UX your ultimate
              competitive edge.
            </p>
          </div>
          <Image
            src="/feather-icon.svg"
            alt="Feather Icon"
            className={styles.featherIcon}
            width={isMobile ? 72 : 134}
            height={isMobile ? 72 : 134}
            priority
          />
        </div>

        <div className={styles.processContainer}>
          {sections.map(({ title, description }, index) => (
            <div key={index} className={styles.process}>
              <div>
                <h4 className={styles.processTitle}>{title}</h4>
                <p className={styles.processDescription}>{description}</p>
              </div>
              <p className={styles.processIndex}>{`0${index + 1}`}</p>
            </div>
          ))}
        </div>
        <div className={styles.chatButton} onClick={() => setShowModal(true)}>
          <a>Let&apos;s Chat</a>
        </div>
      </section>
      <ContactModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
});

OurProcess.displayName = "Our Process";

export default OurProcess;
