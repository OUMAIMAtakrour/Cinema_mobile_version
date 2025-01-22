import { Tabs } from "expo-router";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { BlurView } from "expo-blur";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const CustomTabBarBackground = () => {
  return Platform.OS === "ios" ? (
    <BlurView intensity={60} style={StyleSheet.absoluteFill} tint="dark" />
  ) : (
    <View style={StyleSheet.absoluteFill} />
  );
};

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: CustomTabBarBackground,
        tabBarStyle: {
          position: "absolute",
          bottom: 35,
          left: 20,
          right: 20,
          height: 60,
          backgroundColor: "rgba(255, 255, 255, 0.23)",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "rgba(55, 55, 57, 0.9)",
          overflow: "hidden",
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 8,
            },
            android: {
              elevation: 8,
              marginHorizontal: 14,
            },
          }),
        },
        tabBarItemStyle: {
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIcon : styles.inactiveIcon}>
              <IconSymbol size={24} name="house.fill" color={color} />
              {focused && <View style={styles.glow} />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIcon : styles.inactiveIcon}>
              <IconSymbol size={24} name="login" color={color} />
              {focused && <View style={styles.glow} />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIcon : styles.inactiveIcon}>
              <IconSymbol size={24} name="register" color={color} />
              {focused && <View style={styles.glow} />}
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color, focused }) => (
            <View style={focused ? styles.activeIcon : styles.inactiveIcon}>
              <IconSymbol size={24} name="paperplane.fill" color={color} />
              {focused && <View style={styles.glow} />}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeIcon: {
    position: "relative",
    padding: 8,
    alignItems: "center",
  },
  inactiveIcon: {
    padding: 8,
    alignItems: "center",
  },
  glow: {
    position: "absolute",
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#007AFF",
    opacity: 0.2,
    transform: [{ scale: 1.2 }],
  },
});
