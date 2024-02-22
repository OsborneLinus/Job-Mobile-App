import { supabase } from "../lib/supabase";
import Auth from "../components/auth/Auth";
import Account from "../components/account/Account";
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

    const authListener = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        router.push("/home");
      } else {
        router.push("../LoginPage");
      }
    });
    return () => {
      if (authListener) {
        authListener.unsubscribe;
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

/* LoginPage.path = "/login";
 */
