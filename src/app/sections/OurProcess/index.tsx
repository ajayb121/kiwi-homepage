import { archivoBlack } from "@/app/fonts";

import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "Initial Kickoff and Brief",
    description:
      "An Introductory call to meet the team and know about the project in details",
  },
  {
    title: "Proposal",
    description:
      "You will receive a detailed proposal with project goals and timelines for a mutual understanding",
  },
  {
    title: "Contract",
    description:
      "We will coordinate all necessary documents and payment methods before the project starts",
  },
];
const OurProcess: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.sectionBody}>
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
            width={134}
            height={134}
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
        <div className={styles.chatButton}>
          <Link href="/contact">Let&apos;s Chat</Link>
        </div>
      </section>
    </div>
  );
};

export default OurProcess;
