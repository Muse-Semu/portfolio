import React, { useState, useEffect } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import TestimonialForm from "./TestimonialForm";
import useTestimonialStore from "../store/testimonialStore";
import { avatar, avatar2 } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  linkedin_url,
  onEdit,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate text to a set number of words
  const truncateText = (text, wordLimit = 10) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  return (
    <div className="bg-tertiary p-10 border border-black-200/20 shadow-card rounded-3xl min-h-[400px] flex flex-col">
      <p className="text-text-base font-black text-[48px]">"</p>
      <div className="mt-1 flex-1 flex flex-col">
        <div>
          
          <span className="text-text-base tracking-wider text-[18px]">
            {isExpanded ? testimonial : truncateText(testimonial)}
          </span>
          {testimonial.split(" ").length > 10 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-text-base hover:underline text-[14px] ml-2"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-text-base font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
            {linkedin_url && (
              <a
                href={linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-blue-500 font-bold   hover:underline"
              >
                LinkedIn Profile
              </a>
            )}
          </div>
          <img
            src={image? image : avatar2}
            alt={avatar}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const BATCH_SIZE = 4;
  const {
    testimonials,
    isLoading,
    error,
    fetchTestimonials,
    addTestimonial,
    updateTestimonial,
  } = useTestimonialStore();

  useEffect(() => {
    console.log("Mounting Feedbacks, fetching testimonials...");
    fetchTestimonials();
  }, [fetchTestimonials]);

  useEffect(() => {
    console.log("Testimonials state:", testimonials);
  }, [testimonials]);

  // Disable scroll for entire window when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.height = "100vh";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.height = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isModalOpen]);

  const openModal = (testimonial = null) => {
    setEditingTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + BATCH_SIZE);
  };

  const handleShowLess = () => {
    setVisibleCount(BATCH_SIZE);
  };

  return (
    <div className="mt-12 bg-primary rounded-[20px] relative border border-black-200/10">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </div>
      </div>
      <button
        onClick={() => openModal()}
        className="fixed bottom-6 left-6 bg-tertiary py-3 px-5 rounded-full border border-accent/30 text-text-base font-semibold shadow-card hover:border-accent hover:scale-105 transition-all duration-300 flex items-center gap-2 z-[9999]"
        title="Add Testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Testimonial
      </button>
      {isLoading && (
        <p className="text-text-base text-center py-4">Loading testimonials...</p>
      )}
      {error && <p className="text-red-500 text-center py-4">{error}</p>}
      <TestimonialForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTestimonial={addTestimonial}
        onUpdateTestimonial={updateTestimonial}
        editingTestimonial={editingTestimonial}
      />
      <div
        className={`pb-14 ${styles.paddingX} grid lg:grid-cols-1 gap-7 mt-12`}
      >
        {testimonials && testimonials.length > 0
          ? testimonials
              .slice(0, visibleCount)
              .map((testimonial, index) => (
                <FeedbackCard
                  key={testimonial.name + index}
                  index={index}
                  {...testimonial}
                  onEdit={(data) => openModal({ ...data, id: testimonial.id })}
                />
              ))
          : !isLoading && (
              <p className="text-white text-center w-full">
                No testimonials available.
              </p>
            )}
      </div>
      {testimonials && testimonials.length > 4 && (
        <div className="flex justify-center mt-4">
          {visibleCount < testimonials.length ? (
            <button
              onClick={handleSeeMore}
              className="bg-tertiary mb-5 py-2 px-6 rounded-lg text-text-base shadow hover:bg-tertiary/80"
            >
              See More ...
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="bg-tertiary py-2 px-6 rounded-lg text-text-base shadow hover:bg-tertiary/80"
            >
              Show Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
