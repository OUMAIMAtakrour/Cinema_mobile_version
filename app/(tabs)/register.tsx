import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

const Register = () => {
  return (
    <ImageBackground
      source={require("../../assets/images/bbef5ebc38b1e311e254db6efb22ab84.jpg")}
      style={styles.container}
    >
      <LinearGradient
        colors={["rgb(255, 255, 255)", "#272343)"]}
        style={styles.gradient}
      >
        <BlurView intensity={60} style={styles.blurContainer}>
          <View style={styles.body}>
            <View style={styles.logoContainer}>
              <Text style={styles.title}>CINE</Text>
              <Text style={styles.titleStar}>STAR</Text>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>EMAIL</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />
                <View style={styles.inputLine} />
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.inputLabel}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholder="Enter your password"
                  placeholderTextColor="rgba(255, 255, 255, 0.5)"
                />
                <View style={styles.inputLine} />
              </View>
            </View>

            <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={["rgba(69, 108, 214, 0.8)", "rgba(0, 0, 0, 0.8)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>LOGIN</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </BlurView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Register;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  blurContainer: {
    width: width * 0.9,
    maxWidth: 400,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  body: {
    padding: 30,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: "800",
    color: "#ffffff",
    letterSpacing: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  titleStar: {
    fontSize: 40,
    fontWeight: "800",
    color: "#BAE8E8",
    letterSpacing: 8,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 5,
  },
  inputContainer: {
    gap: 25,
    marginBottom: 40,
  },
  inputWrapper: {
    position: "relative",
  },
  inputLabel: {
    color: "rgb(255, 255, 255)",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 2,
    marginBottom: 8,
  },
  input: {
    height: 50,
    color: "#ffffff",
    fontSize: 16,
    paddingHorizontal: 5,
    paddingVertical: 10,
    backgroundColor: "transparent",
  },
  inputLine: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
  },
  button: {
    width: "100%",
    height: 55,
    borderRadius: 15,
    overflow: "hidden",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  buttonGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 2,
  },
});
