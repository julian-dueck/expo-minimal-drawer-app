import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import React from "react";
import { useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { Drawer } from "expo-router/drawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Drawer drawerContent={CustomDrawerContent}>
        <Drawer.Screen name="index" options={{ title: "Home" }} />
        <Drawer.Screen name="explore" options={{ title: "Explore" }} />
        <Drawer.Screen
          name="faq"
          key="faq"
          options={{ title: "FAQ", drawerItemStyle: { display: "none" } }}
        />
      </Drawer>
    </ThemeProvider>
  );
}
