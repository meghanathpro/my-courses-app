import Link from "next/link";
import supabase from "../lib/supabase";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

const Header = () => {
  const session = useSession();
  const supabaseClient = useSupabaseClient();

  const handleSignOut = async () => {
    await supabaseClient.auth.signOut();
  };

  return (
    <header className="bg-gray-800 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <p className="text-white text-xl font-bold">Course App</p>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/courses">
              <p className="text-white hover:text-gray-300">Courses</p>
            </Link>
          </li>
          <li>
            <Link href="/categories">
              <p className="text-white hover:text-gray-300">Categories</p>
            </Link>
          </li>
          {session ? (
            <>
              <li>
                <Link href="/account">
                  <p className="text-white hover:text-gray-300">Account</p>
                </Link>
              </li>
              <li>
                <button
                  className="text-white hover:text-gray-300"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link href="/auth/signin">
                <p className="text-white hover:text-gray-300">Sign In</p>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
