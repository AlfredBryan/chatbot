import {
  Box,
  Input,
  InputGroup,
  InputRightElement,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";

export const BaseInput = ({
  placeholder,
  id,
  type,
  readonly,
  rightIcon,
  leftIcon,
  width,
  ...rest
}) => {
  return (
    <Box>
      <InputGroup>
        <Input
          fontSize="14px"
          type={type}
          mt="1.2rem"
          bg="#fff"
          border="1px solid #CBDFAB"
          borderRadius="5px"
          h="40px"
          w={width}
          px="10px"
          textAlign="center"
          placeholder={placeholder}
          {...rest}
          _focus={{ border: "1px solid #CBDFAB" }}
        />
        <InputLeftElement top="60%" transform="translateY(-30%)" left="10px">
          {leftIcon}
        </InputLeftElement>
        <InputRightElement top="55%" transform="translateY(-30%)" right="7px">
          {rightIcon}
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};
