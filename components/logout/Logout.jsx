import { react } from "react";
import { Button } from "react-native";
import { supabase } from "../../lib/supabase";
import { useRouter } from "expo-router";

function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Error logging out: ", error.message);
    } else {
      router.push("../../LoginPage");
    }
  };

  return <Button title="Logout" onPress={handleLogout} />;
}

export default Logout;
