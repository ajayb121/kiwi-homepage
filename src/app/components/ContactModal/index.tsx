import { useState } from "react";
import ReactModal from "react-modal";
import Image from "next/image";
import { archivoBlack, urbanist } from "@/app/fonts";
import useResponsiveView from "@/app/hooks/useResponsiveView";

import styles from "./index.module.css";

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<string | null>(null);
  const isMobile = useResponsiveView();

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: isMobile ? "none" : "translate(-50%, -50%)",
      inset: isMobile ? "unset" : "50% auto auto 50%",
      padding: "0",
      background: "transparent",
      border: 0,
    },
    overlay: {
      zIndex: 10,
      background: "rgba(0, 0, 0, 0.70)",
    },
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionResult(null); // Reset the submission result

    try {
      const response = await fetch("/api/submitForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionResult("Form submitted successfully!");
      } else {
        setSubmissionResult("There was a problem submitting the form.");
      }
    } catch (error) {
      setSubmissionResult("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className={`${urbanist.className} ${styles.wrapper}`}>
          <div className={styles.imageContainer}>
            <Image
              src="/cross-icon.svg"
              alt="Cross Icon"
              width={40}
              height={40}
              priority
              onClick={onClose}
              className={styles.closeIcon}
            />
          </div>
          <div className={`${urbanist.className} ${styles.collaborateSection}`}>
            <div className={styles.collaborateContent}>
              <h1 className={`${archivoBlack.className} ${styles.header}`}>
                Let&apos;s <br />
                Collaborate!
              </h1>
              <p className={styles.description}>
                Connect with our designers and developers to discuss your
                project. Your information is safe with us and used solely to
                assist with your needs.
              </p>
              <p className={styles.note}>
                <span className={styles.dot}></span> Just submit the form and
                our team will reach out to you.
              </p>
            </div>
            <div className={styles.formContainer}>
              <form className={styles.formWrapper} onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${urbanist.className}`}
                  required
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`${urbanist.className}`}
                  required
                />

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${urbanist.className}`}
                  required
                />

                <label htmlFor="project">About your project</label>
                <textarea
                  id="project"
                  className={`${urbanist.className}`}
                  rows={5}
                  placeholder="Write details about your project here"
                  value={formData.project}
                  onChange={handleChange}
                  required
                ></textarea>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Details"}
                </button>
              </form>

              {submissionResult && (
                <p className={styles.submissionResult}>{submissionResult}</p>
              )}
            </div>
          </div>
          <div className={styles.bgImage}>
            <Image
              src="/form-background.svg"
              alt="Form Background"
              width={640}
              height={640}
              priority
              onClick={onClose}
            />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ContactModal;
