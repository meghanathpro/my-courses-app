import { useEffect, useState } from "react";
import supabase from "../../lib/supabase";
import CourseCard from "../../components/CourseCard";
import Layout from "@/layouts/MainLayout";

const CoursesIndexPage = () => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    setFilteredCourses(courses);
  }, [courses]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  async function fetchCourses() {
    try {
      const { data, error } = await supabase.from("courses").select("*");
      if (error) {
        throw new Error(error.message);
      }
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error.message);
    }
  }

  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-600 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8 text-white">Courses</h1>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 w-full shadow rounded border-gray-300"
              onChange={handleSearch}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoursesIndexPage;
