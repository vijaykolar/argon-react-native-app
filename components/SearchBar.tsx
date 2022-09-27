import React from "react";
import { Divider, HStack, Icon, Input, Text, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View>
      <Input
        width="100%"
        borderRadius={4}
        placeholder="What are you looking for?"
        // isFocused
        InputRightElement={
          <Icon
            m="2"
            mr="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
      />
      <HStack pt={2} justifyContent="center">
        <HStack justifyContent="center" px={8}>
          <Icon
            size="lg"
            as={MaterialIcons}
            name="library-music"
            color="#525F7F"
          />
          <Text size="16" color="#525F7F" pl={2}>
            Music
          </Text>
        </HStack>
        <Divider bg="#172B4D" height="23px" width={1} orientation="vertical" />
        <HStack justifyContent="center" px={9}>
          <Icon
            size="lg"
            as={MaterialIcons}
            name="shopping-bag"
            color="#525F7F"
          />
          <Text color="#525F7F" size="16" pl={2}>
            Fashion
          </Text>
        </HStack>
      </HStack>
    </View>
  );
}

export default SearchBar;
