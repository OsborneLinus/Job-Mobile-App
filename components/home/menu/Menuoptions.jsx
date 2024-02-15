import React, { useState } from "react";
import { View, Button } from "react-native";
import { Link } from "expo-router";

const Menuoptions = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <View>
      <Button title="Menu" onPress={() => setIsDrawerOpen(true)} />
      <Button title="Login" onPress={() => setIsDrawerOpen(true)} />

      {isDrawerOpen && (
        <View>
          <Button title="Close" onPress={() => setIsDrawerOpen(false)} />
          <Link href="/home">Home</Link>
        </View>
      )}
    </View>
  );
};
export default Menuoptions;
