import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Brightness from "expo-brightness";
import Slider from "@react-native-community/slider";
import { MaterialIcons } from "@expo/vector-icons";

export default function BrightnessScreen() {
  const [sliderValue, setSliderValue] = useState(0);
  useEffect(() => {
    (async () => {
      const { status } = await Brightness.requestPermissionsAsync();
      if (status === "granted") {
        setSliderValue(0.5);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "#282828",
          width: "100%",
          maxHeight: 80,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 22,
            fontWeight: "500",
            color: "#fff",
          }}
        >
          Brightness Control
        </Text>
      </View>
      <View style={styles.container}>
        <MaterialIcons
          name="brightness-6"
          color="black"
          size={32}
          style={styles.icon}
        />
        <View style={styles.card}>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            value={sliderValue}
            minimumTrackTintColor="#2596be"
            maximumTrackTintColor="#fff"
            onValueChange={(value) => {
              Brightness.setBrightnessAsync(value);
            }}
          />
          <Text style={styles.info}>Geser Untuk Mengubah Kecerahan</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    paddingBottom: 20,
    color: "#2596be",
  },
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    maxHeight: 100,
    borderRadius: 20,
    backgroundColor: "#282828",
  },
  info: {
    fontSize: 18,
    paddingTop: 20,
    color: "white",
  },
});
