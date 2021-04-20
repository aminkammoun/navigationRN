import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function home({ navigation }) {
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
