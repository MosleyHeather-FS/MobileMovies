import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import cinema from '../assets/cinema.jpeg'

const Background = () => (
  <View style={styles.container}>
    <ImageBackground source={cinema} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default Background;