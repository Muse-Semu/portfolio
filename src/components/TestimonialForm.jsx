import React, { useState } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

const TestimonialForm = ({
  isOpen,
  onClose,
  onAddTestimonial,
  onUpdateTestimonial,
  editingTestimonial,
}) => {
  const [formData, setFormData] = useState({
    testimonial: editingTestimonial?.testimonial || "",
    name: editingTestimonial?.name || "",
    designation: editingTestimonial?.designation || "",
    company: editingTestimonial?.company || "",
    image: editingTestimonial?.image || "",
  });
  const [imagePreview, setImagePreview] = useState(
    editingTestimonial?.image || ""
  );
  const [errors, setErrors] = useState({
    testimonial: "",
    name: "",
    designation: "",
    company: "",
  });
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    isSuccess: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      testimonial: "",
      name: "",
      designation: "",
      company: "",
    };

    if (!formData.testimonial.trim()) {
      newErrors.testimonial = "Testimonial is required.";
      isValid = false;
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.designation.trim()) {
      newErrors.designation = "Designation is required.";
      isValid = false;
    }
    if (!formData.company.trim()) {
      newErrors.company = "Company is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      if (editingTestimonial) {
        onUpdateTestimonial({ ...formData, id: editingTestimonial.id });
        setModal({
          isOpen: true,
          message: "Testimonial updated successfully!",
          isSuccess: true,
        });
      } else {
        onAddTestimonial({ ...formData });
        setModal({
          isOpen: true,
          message: "Testimonial added successfully!",
          isSuccess: true,
        });
      }
      setFormData({
        testimonial: "",
        name: "",
        designation: "",
        company: "",
        image: "",
      });
      setImagePreview("");
      setTimeout(() => {
        setModal({ isOpen: false, message: "", isSuccess: false });
        onClose();
      }, 1500); // Auto-close modal after 1.5 seconds
    } catch (error) {
      console.error(error);
      setModal({
        isOpen: true,
        message: "An error occurred. Please try again.",
        isSuccess: false,
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      testimonial: "",
      name: "",
      designation: "",
      company: "",
      image: "",
    });
    setImagePreview("");
    setErrors({
      testimonial: "",
      name: "",
      designation: "",
      company: "",
    });
    onClose();
  };

  const closeModal = () => {
    setModal({ isOpen: false, message: "", isSuccess: false });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-black-100 p-8 rounded-2xl w-full max-w-md min-h-[600px] max-h-[80vh] overflow-y-auto"
      >
        <h3 className={styles.sectionSubText}>
          {editingTestimonial ? "Update Testimonial" : "Add New Testimonial"}
        </h3>
        <div className="mt-4">
          <div className="flex flex-col gap-4">
            <div>
              <textarea
                name="testimonial"
                value={formData.testimonial}
                onChange={handleChange}
                placeholder="Testimonial"
                className="p-2 rounded-lg bg-tertiary text-white min-h-[150px] w-full"
                required
              />
              {errors.testimonial && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.testimonial}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="p-2 rounded-lg bg-tertiary text-white w-full"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Designation"
                className="p-2 rounded-lg bg-tertiary text-white w-full"
                required
              />
              {errors.designation && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.designation}
                </p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="p-2 rounded-lg bg-tertiary text-white w-full"
                required
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>
            <div>
              <label htmlFor="input">Photo</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="p-2 rounded-lg bg-tertiary text-white w-full"
              />
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover mt-2"
              />
            )}
            <div className="flex gap-4 justify-end">
              <button
                type="button"
                onClick={handleCancel}
                className= " w-60 bg-tertiary/90 py-2 px-4 rounded-lg text-white hover:bg-tertiary"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className=" w-60 bg-green-500 py-2 px-4 rounded-lg text-white hover:bg-green-600"
              >
                {editingTestimonial ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {modal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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

export default TestimonialForm;
