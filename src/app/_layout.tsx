import {
  DarkTheme,
  DefaultTheme,
  ParamListBase,
  ThemeProvider,
} from "@react-navigation/native";
import React from "react";
import { Keyboard, useColorScheme } from "react-native";

import { AnimatedSplashOverlay } from "@/components/animated-icon";
import CustomDrawerContent from "@/components/CustomDrawerContent";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const onHeaderPress = (
    navigation: DrawerNavigationProp<ParamListBase, string, undefined>,
  ) => {
    Keyboard.dismiss();
    navigation.toggleDrawer();
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={({ navigation }) => ({})} // <- DrawerNavigationProp
      >
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
