import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    isSuccess: false,
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateForm = () => {
    if (!form.name.trim()) {
      setModal({
        isOpen: true,
        message: "Please enter your name.",
        isSuccess: false,
      });
      return false;
    }
    if (!form.email.trim()) {
      setModal({
        isOpen: true,
        message: "Please enter your email.",
        isSuccess: false,
      });
      return false;
    }
    if (!form.message.trim()) {
      setModal({
        isOpen: true,
        message: "Please enter your message.",
        isSuccess: false,
      });
      return false;
    }
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setModal({
        isOpen: true,
        message: "Please enter a valid email address.",
        isSuccess: false,
      });
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_2vija7l",
        "template_wtau0lt",
        {
          from_name: form.name,
          to_name: "Muse",
          from_email: form.email,
          reply_to: form.email,
          to_email: "smuse1756@gmail.com",
          message: `${form.message}\n\n---\nSender Email: ${form.email}`,
        },
        "fXwpkjnGvADlQdhNT"
      )
      .then(
        () => {
          setLoading(false);
          setModal({
            isOpen: true,
            message: "Thank you. I will get back to you as soon as possible.",
            isSuccess: true,
          });
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          let errorMessage = error.text || "Something went wrong. Please try again.";
          // Check for specific emailjs errors (e.g., invalid email)
          if (error.text && error.text.includes("Invalid email")) {
            errorMessage =
              "The provided email address is invalid or does not exist.";
          }
          setModal({
            isOpen: true,
            message: errorMessage,
            isSuccess: false,
          });
        }
      );
  };

  const closeModal = () => {
    setModal({ isOpen: false, message: "", isSuccess: false });
  };

  return (
    <div
      className={`xl:mt-12 flex flex-col gap-10 overflow-hidden w-full max-w-4xl mx-auto`}
    >
      <div
        className="flex-[1] bg-primary p-8 rounded-2xl border border-black-200/10 shadow-md"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-text-base font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-bg-form py-4 px-6 placeholder:text-secondary text-text-base rounded-lg outline-none border border-black-200/20 focus:border-accent font-medium shadow-sm transition-colors"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-text-base font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-bg-form py-4 px-6 placeholder:text-secondary text-text-base rounded-lg outline-none border border-black-200/20 focus:border-accent font-medium shadow-sm transition-colors"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-text-base font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-bg-form py-4 px-6 placeholder:text-secondary text-text-base rounded-lg outline-none border border-black-200/20 focus:border-accent font-medium shadow-sm transition-colors"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-bg-form py-3 px-8 rounded-xl outline-none w-fit text-text-base font-bold shadow-md hover:shadow-lg disabled:opacity-50 transition-all"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>

      {modal.isOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999]">
          <div
            className={`p-8 rounded-2xl shadow-card border-l-8 ${
              modal.isSuccess ? "border-green-500" : "border-red-500"
            } bg-primary text-text-base max-w-md w-full mx-4 transition-all`}
          >
            <h3 className={`text-2xl font-bold mb-2 ${modal.isSuccess ? "text-green-500" : "text-red-500"}`}>
              {modal.isSuccess ? "Success!" : "Error"}
            </h3>
            <p className="text-secondary text-[16px] leading-[26px] mb-6">{modal.message}</p>
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="bg-tertiary py-2 px-6 rounded-xl outline-none text-text-base font-bold shadow-md hover:shadow-lg transition-all border border-black-200/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
