import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  View,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import AppBar from "./components/Appbar";
import SearchBar from "./components/SearchBar";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  return (
    <NativeBaseProvider>
      <View
      // _dark={{ bg: "blueGray.900" }}
      // _light={{ bg: "blueGray.50" }}
      // _light={{ bg: "white" }}

      // px={4}
      // flex={1}
      >
        <View
          // _dark={{ bg: "blueGray.800" }}
          // _light={{ bg: "blueGray.200" }}
          // p={4}
          px={4}
        >
          <AppBar />
          <SearchBar />
        </View>

        {/* <ToggleDarkMode /> */}
      </View>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light ddd</Text>
    </HStack>
  );
}
