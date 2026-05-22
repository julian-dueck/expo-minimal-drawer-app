import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "expo-router/drawer";
import { useCallback } from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SPACING = 12;

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  const insets = useSafeAreaInsets();

  const faqIndex = props.state.routes.findIndex((r) => r.name === "faq");

  const handleSignOut = useCallback(() => {
    props.navigation.closeDrawer();
    alert("Sign out");
  }, [props.navigation]);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: SPACING + insets.top,
        paddingBottom: SPACING + insets.bottom,
        paddingStart: SPACING + insets.left,
        paddingEnd: SPACING,
      }}
    >
      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: SPACING,
          paddingBottom: SPACING,
          paddingStart: 0,
          paddingEnd: 0,
        }}
        bounces={false}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label="FAQ"
          onPress={() => props.navigation.jumpTo("faq")}
          focused={props.state.index === faqIndex}
        />
        <DrawerItem
          label="Sign out"
          onPress={handleSignOut}
          inactiveTintColor="red"
          style={{ marginBottom: insets.bottom > 0 ? insets.bottom : 20 }}
          inactiveBackgroundColor="transparent"
        />
      </View>
    </View>
  );
}
