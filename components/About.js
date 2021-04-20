import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default function about({ navigation }) {
  return (
    <View>
      <Text>about Screen</Text>
      <Button
        title="Go to profil Screen"
        onPress={() => navigation.navigate("ProfilScreen")}
      />
    </View>
  );
}
