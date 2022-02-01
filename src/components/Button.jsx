import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Button = ({ name }) => {
  return (
    <>
      <Flex
        w="80px"
        h="28px"
        border="1px solid #78A431"
        borderRadius="20px"
        align="center"
        justify="center"
      >
        <Text fontSize="10px">{name}</Text>
      </Flex>
    </>
  );
};

export { Button };
