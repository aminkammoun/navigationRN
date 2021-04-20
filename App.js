import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Pages from "./components/Pages";
import Navigator from "./routes/Navigation";

export default function App() {
  return (
    <View style={styles.container}>
     
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
});
