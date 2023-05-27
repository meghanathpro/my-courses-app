import { useState, useEffect } from "react";
import supabase from "@/lib/supabase";
const CourseCard = ({ course }) => {
  const { title, description, category_id, instructor_id, pricing } = course;

  const [category, setCategory] = useState(null);
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    fetchCategory();
    fetchInstructor();
  }, []);

  async function fetchCategory() {
    try {
      const { data, error } = await supabase
        .from("categories")
        .select("name")
        .eq("id", category_id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      setCategory(data.name);
    } catch (error) {
      console.error("Error fetching category:", error.message);
    }
  }
  async function fetchInstructor() {
    try {
      const { data, error } = await supabase
        .from("instructors")
        .select("name")
        .eq("id", instructor_id)
        .single();

      if (error) {
        throw new Error(error.message);
      }

      setInstructor(data.name);
    } catch (error) {
      console.error("Error fetching instructor:", error.message);
    }
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-gray-900 h-40 flex items-center justify-center">
        <span className="text-4xl font-bold text-white">{title.charAt(0)}</span>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-2">{description}</p>
        <p className="text-gray-700 text-sm mb-2">Category: {category}</p>
        <p className="text-gray-700 text-sm">Instructor: {instructor}</p>
        <p className="text-gray-700 text-sm mt-4 font-bold">
          Pricing: ${pricing}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
