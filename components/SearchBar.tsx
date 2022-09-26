import React from "react";
import { Icon, Input, Text, View } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function SearchBar() {
  return (
    <View>
      <Input
        width="100%"
        borderRadius={4}
        placeholder="What are you looking for?"
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
    </View>
  );
}

export default SearchBar;
