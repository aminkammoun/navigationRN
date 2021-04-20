import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function profil() {
  return (
    <View>
      <Text>about Screen</Text>
      <Button
        title="Go to home Screen"
        onPress={() => navigation.navigate("HomeScreen")}
      />
    </View>
  );
}
