import { useEffect, useState } from "react";
import supabase from "../lib/supabase";

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchCourses() {
      try {
        // Fetch courses from the database
        const { data, error } = await supabase.from("courses").select("*");

        if (error) {
          throw new Error(error.message);
        }

        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    }

    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Course List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>Category: {course.category_id}</p>
            <p>Instructor: {course.instructor_id}</p>
            <p>Pricing: {course.pricing}</p>
            {/* Add additional course details as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
