import { archivoBlack } from "@/app/fonts";

import styles from "./index.module.css";

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
    },
    {
      title: "Prototyping",
      description:
        "We turn your ideas into interactive prototypes that effectively communicate your concept to stakeholders and investors. Our prototypes help you present a clear and compelling vision of your product.",
      links: ["High Fidelity", "Interactive", "Dynamic"],
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
    },
  ];

  return (
    <>
      <div className={styles.mobileWrapper}>
        <section className={styles.mobileSectionBody}>
          <h2 className={`${archivoBlack.className} ${styles.mobileHeader}`}>
            Why Choose Us ?
          </h2>
          <div className={styles.mobileImageBg}></div>

          {sections.map((section, index) => (
            <div
              key={index}
              style={{ paddingTop: index === 0 ? "80px" : "100px" }}
            >
              <h3
                className={`${archivoBlack.className} ${styles.mobileSubHeader}`}
              >
                {section.title}
              </h3>
              <p className={styles.mobileDescription}>{section.description}</p>
              <div className={styles.mobileButtonsContainer}>
                {section.links.map((link, linkIndex) => (
                  <a key={linkIndex} href="#" className={styles.mobileButton}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className={styles.desktopWrapper}>
        <section className={styles.sectionBody}>
          <section className={styles.firstSection}>
            <h2 className={`${archivoBlack.className} ${styles.header}`}>
              Why Choose Us ?
            </h2>
            {/* change background color using intersection observer */}
            <div className={styles.imageBg}></div>
          </section>
          <div className={styles.secondSection}>
            {sections.map((section, index) => (
              <div key={index}>
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
