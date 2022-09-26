import React from "react";
import { Box, HStack, Icon, IconButton, StatusBar, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { Platform } from "react-native";

const isAndroid = Platform.OS === "android";

function AppBar() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Box safeAreaTop bg={isAndroid ? "violet.600" : "white"} />
      <HStack
        // bg="violet.600"
        // px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        // mx={-4}
        // maxW="350"
      >
        <HStack alignItems="center" justifyContent="space-between">
          <IconButton
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="#525F7F" />
            }
          />
          <Text color="#525F7F" fontSize="16" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="notifications"
                size="sm"
                color="#525F7F"
              />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="shopping-cart"
                size="sm"
                color="#525F7F"
              />
            }
          />
        </HStack>
      </HStack>
    </>
  );
}

export default AppBar;
