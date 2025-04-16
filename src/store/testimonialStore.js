import { create } from "zustand";
import { supabase } from "../utils/supabase";
import { testimonials } from "../constants";

const useTestimonialStore = create((set, get) => ({
  testimonials: [],
  isLoading: false,
  error: null,

  fetchTestimonials: async () => {
    console.log("Starting fetchTestimonials...");
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from("testimonials")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase error:", error.message);
        set({
          error: "Failed to load testimonials. Showing local data.",
          testimonials,
          isLoading: false,
        });
        return;
      }

      console.log("Supabase data fetched:", data);
      set({
        testimonials: data && data.length ? data : testimonials,
        isLoading: false,
      });
    } catch (err) {
      console.error("Unexpected error:", err.message);
      set({
        error: "Unexpected error occurred. Showing local data.",
        testimonials,
        isLoading: false,
      });
    }
  },

  addTestimonial: async (newTestimonial) => {
    try {
      console.log("Adding testimonial:", newTestimonial);
      const { data, error } = await supabase
        .from("testimonials")
        .insert([newTestimonial])
        .select();

      if (error) {
        console.error("Error adding testimonial:", error.message);
        set({ error: "Failed to add testimonial." });
        return;
      }

      console.log("Added testimonial:", data);
      await get().fetchTestimonials();
    } catch (err) {
      console.error("Unexpected error adding testimonial:", err.message);
      set({ error: "Unexpected error occurred while adding testimonial." });
    }
  },

  updateTestimonial: async (updatedTestimonial) => {
    try {
      console.log("Updating testimonial:", updatedTestimonial);
      const { data, error } = await supabase
        .from("testimonials")
        .update(updatedTestimonial)
        .eq("id", updatedTestimonial.id)
        .select();

      if (error) {
        console.error("Error updating testimonial:", error.message);
        set({ error: "Failed to update testimonial." });
        return;
      }

      console.log("Updated testimonial:", data);
      await get().fetchTestimonials();
    } catch (err) {
      console.error("Unexpected error updating testimonial:", err.message);
      set({ error: "Unexpected error occurred while updating testimonial." });
    }
  },
}));

export default useTestimonialStore;
