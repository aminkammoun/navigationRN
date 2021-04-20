import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default function profil({ navigation }) {
  return (
    <View>
      <Text>about Screen</Text>
      <Button
        title="Go to home Screen"
        onPress={() => navigation.navigate("AboutScreen")}
      />
    </View>
  );
}
