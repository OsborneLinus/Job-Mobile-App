import React from "react";
import { View, Text, Button, Image } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import Logout from "../components/logout/Logout";

export default function ProfilePage() {
  const [user, setUser] = useState();

  useEffect(() => {
    const currentUser = supabase.auth.user;
    setUser(currentUser);
  }, []);
  console.log(user);

  if (!user) {
    return <Text>No user is logged in</Text>;
  }
  return (
    <View>
      <Text>{user.email}</Text>
      <Image source={{ uri: user.profile_picture_url }} />
      <Button title="Change Profile Picture" onPress={() => {}} />
      <Logout />
    </View>
  );
}
