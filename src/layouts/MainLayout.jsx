import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import Header from "@/components/Header";
//import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800">
        <Header />
      </nav>
      {!session ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="max-w-md w-full space-y-8">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          </div>
        </div>
      ) : (
        <main className="flex-grow">{children}</main>
      )}
    </div>
  );
};
export default Layout;
