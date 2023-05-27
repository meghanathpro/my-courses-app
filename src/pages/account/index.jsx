import { useState, useEffect } from "react";
import supabase from "../../lib/supabase";
import { useSession, useUser } from "@supabase/auth-helpers-react";

const AccountsPage = () => {
  const session = useSession();
  //console.log(session.user.id);

  const [profile, setProfile] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState({
    username: "",
    full_name: "",
    bio: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("username, full_name, bio")
        .eq("user_id", session?.user.id)
        .single();
      if (error) {
        throw new Error(error.message);
      }
      setProfile(data);
      setUpdatedProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error.message);
    }
  };

  const handleInputChange = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from("profiles")
        .update(updatedProfile)
        .eq("user_id", session?.user.id);
      if (error) {
        throw new Error(error.message);
      }
      window.confirm("Updated");
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Account</h1>
      {profile ? (
        <form onSubmit={handleFormSubmit} className="max-w-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={updatedProfile.username}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="full_name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={updatedProfile.full_name}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={updatedProfile.bio}
              onChange={handleInputChange}
              className="p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Update Profile
          </button>
        </form>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default AccountsPage;
