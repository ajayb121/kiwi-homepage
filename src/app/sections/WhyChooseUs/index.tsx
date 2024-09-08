import { useEffect, useRef, useState } from "react";
import { archivoBlack } from "@/app/fonts";

import styles from "./index.module.css";
import Image from "next/image";

const WhyChooseUs = () => {
  const sections = [
    {
      title: "Impeccable Design",
      description:
        "We create digital experiences that not only look spectacular but also impress investors and drive funding",
      links: [
        "UX-Audit",
        "Component Library",
        "Design System",
        "Wireframes",
        "Hi-Fi Designs",
      ],
      image: "/why-choose-us-1.svg",
    },
    {
      title: "Prototyping",
      description:
        "We turn your ideas into interactive prototypes that effectively communicate your concept to stakeholders and investors. Our prototypes help you present a clear and compelling vision of your product.",
      links: ["High Fidelity", "Interactive", "Dynamic"],
      image: "/why-choose-us-2.svg",
    },
    {
      title: "Development",
      description:
        "Our development team transforms your ideas into reality with cutting-edge technology and agile methodologies. We build robust, scalable solutions that demonstrate your business’s potential for growth.",
      links: [
        "Responsive Web Production",
        "Front End Development",
        "Back End Development",
      ],
      image: "/why-choose-us-3.svg",
    },
  ];

  const [activeImage, setActiveImage] = useState("/why-choose-us-1.svg");
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setActiveImage(sections[index].image);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className={styles.mobileWrapper}>
        <section className={styles.mobileSectionBody}>
          <h2 className={`${archivoBlack.className} ${styles.mobileHeader}`}>
            Why Choose Us ?
          </h2>
          {/* <div className={styles.mobileImageBg}>
            <Image
              src="/why-choose-us-4.svg"
              alt="Why Choose Us Background"
              width={300}
              height={300}
              priority
              className={styles.closeIcon}
            />
          </div> */}

          <div className={styles.secondSectionMobile}>
            {sections.map((section, index) => (
              <div key={index}>
                <div
                  className={styles.mobileImageBg}
                  style={{ marginTop: index === 0 ? "0" : "70px" }}
                >
                  <Image
                    src={section.image}
                    alt="Why Choose Us Background"
                    width={300}
                    height={300}
                    priority
                    className={styles.closeIcon}
                  />
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <h3
                    className={`${archivoBlack.className} ${styles.mobileSubHeader}`}
                  >
                    {section.title}
                  </h3>
                  <p className={styles.mobileDescription}>
                    {section.description}
                  </p>
                  <div className={styles.mobileButtonsContainer}>
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href="#"
                        className={styles.mobileButton}
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className={styles.desktopWrapper}>
        <section className={styles.sectionBody}>
          <section className={styles.firstSection}>
            <h2 className={`${archivoBlack.className} ${styles.header}`}>
              Why Choose Us ?
            </h2>
            <div className={styles.imageBg}>
              <Image
                src={activeImage}
                alt="Why Choose Us Background"
                width={400}
                height={400}
                priority
              />
            </div>
          </section>
          <div className={styles.secondSection}>
            {sections.map((section, index) => (
              <div
                key={index}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
              >
                <h3 className={`${archivoBlack.className} ${styles.subHeader}`}>
                  {section.title}
                </h3>
                <p className={styles.description}>{section.description}</p>
                <div className={styles.buttonsContainer}>
                  {section.links.map((link, linkIndex) => (
                    <a key={linkIndex} href="#" className={styles.button}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyChooseUs;
