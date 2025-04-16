import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

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
          to_email: "smuse1756@gmail.com",
          message: form.message,
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
          let errorMessage = "Something went wrong. Please try again.";
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
      className={`xl:mt-12 flex xl:flex-row x flex-col-reverse gap-10  overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      {modal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className={`p-6 rounded-lg shadow-xl ${
              modal.isSuccess ? "bg-green-600" : "bg-red-600"
            } text-white max-w-md w-full mx-4`}
          >
            <h3 className="text-xl font-bold mb-4">
              {modal.isSuccess ? "Success!" : "Error"}
            </h3>
            <p className="mb-6">{modal.message}</p>
            <button
              onClick={closeModal}
              className="bg-white text-gray-800 px-4 py-2 rounded hover:bg-gray-100 transition-colors"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
