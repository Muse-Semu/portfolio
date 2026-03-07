import React, { useState } from "react";
import { styles } from "../styles";

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
    linkedin_url: editingTestimonial?.linkedin_url || "",
  });
  const [imagePreview, setImagePreview] = useState(
    editingTestimonial?.image || ""
  );
  const [errors, setErrors] = useState({
    testimonial: "",
    name: "",
    designation: "",
    company: "",
    linkedin_url: "",
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
      linkedin_url: "",
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
    if (!formData.linkedin_url.trim()) {
      newErrors.linkedin_url = "LinkedIn URL is required.";
      isValid = false;
    }
    if (
      formData.linkedin_url &&
      !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.linkedin_url)
    ) {
      newErrors.linkedin_url = "Please enter a valid LinkedIn_url URL.";
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
        linkedin_url: "",
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
      linkedin_url: "",
    });
    setImagePreview("");
    setErrors({
      testimonial: "",
      name: "",
      designation: "",
      company: "",
      linkedin_url: "",
    });
    onClose();
  };

  const closeModal = () => {
    setModal({ isOpen: false, message: "", isSuccess: false });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-sm">
      <div
        className="bg-primary border border-black-200/10 shadow-md p-8 rounded-2xl w-full max-w-md min-h-[600px] max-h-[80vh] overflow-y-auto"
      >
        <h3 className={styles.sectionHeadText}>
          {editingTestimonial ? "Update" : "Add New"}
        </h3>
        <div className="mt-4">
          <div className="flex flex-col gap-4">
            <div>
              <textarea
                name="testimonial"
                value={formData.testimonial}
                onChange={handleChange}
                placeholder="Write your testimonial here..."
                className="bg-bg-form py-4 px-6 placeholder:text-secondary text-text-base rounded-lg outline-none border border-black-200/20 focus:border-accent font-medium shadow-sm transition-colors min-h-[150px] w-full"
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
                className="bg-bg-form py-4 px-6 placeholder:text-secondary text-text-base rounded-lg outline-none border border-black-200/20 focus:border-accent font-medium shadow-sm transition-colors w-full"
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
                placeholder="Designation (your job title)"
                className="bg-bg-form py-4 px-6 placeholder:text-secondary text-text-base rounded-lg outline-none border border-black-200/20 focus:border-accent font-medium shadow-sm transition-colors w-full"
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
                className="bg-bg-form py-4 px-6 placeholder:text-secondary text-text-base rounded-lg outline-none border border-black-200/20 focus:border-accent font-medium shadow-sm transition-colors w-full"
                required
              />
              {errors.company && (
                <p className="text-red-500 text-sm mt-1">{errors.company}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="linkedin_url"
                value={formData.linkedin_url}
                onChange={handleChange}
                placeholder="LinkedIn URL"
                className="bg-bg-form py-4 px-6 placeholder:text-secondary text-text-base rounded-lg outline-none border border-black-200/20 focus:border-accent font-medium shadow-sm transition-colors w-full"
              />
              {errors.linkedin_url && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.linkedin_url}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="input" className="text-text-base font-medium ml-1">Profile Photo</label>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="bg-bg-form py-3 px-4 text-text-base rounded-lg outline-none border border-black-200/20 w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer"
              />
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover mt-2"
              />
            )}
            <div className="flex gap-4 justify-end mt-4">
              <button
                type="button"
                onClick={handleCancel}
                className="flex-[1] bg-bg-form py-3 px-4 rounded-xl outline-none text-text-base font-bold shadow-md hover:shadow-lg transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex-[1] bg-accent hover:bg-accent/80 py-3 px-4 rounded-xl outline-none text-white font-bold shadow-md hover:shadow-lg transition-all"
              >
                {editingTestimonial ? "Update" : "Add"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {modal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className={`p-6 rounded-lg shadow-xl ${
              modal.isSuccess ? "bg-green-600" : "bg-red-600"
            } text-white max-w-md w-full mx-4 transition-all scale-100 opacity-100`}
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
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialForm;
