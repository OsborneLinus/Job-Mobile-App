import { supabase } from "/Users/linusholm/Documents/Job-Finder/project_react_native_jobs/lib/supabase.jsx";
import Auth from "../auth/Auth";
import Account from "/Users/linusholm/Documents/Job-Finder/project_react_native_jobs/components/account/Account.jsx";
import { useRouter } from "expo-router";
import "react-native-url-polyfill/auto";
import { useState, useEffect } from "react";
import { View } from "react-native";

export default function LoginPage() {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        router.push("/home");
      }
    });
    return () => {
      if (authListener) {
        authListener.unsubscribe();
      }
    };
  }, []);

  return (
    <View>
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <Auth />
      )}
    </View>
  );
}
