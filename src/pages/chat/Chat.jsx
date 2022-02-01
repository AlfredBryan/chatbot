import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

import Profile from "../../assets/dp.png";
import { Button } from "../../components";

const Chat = ({ message, response }) => {
  return (
    <>
      <Flex justify="flex-end">
        <Flex
          mt="12px"
          bg="brand.green"
          justify="flex-end"
          borderRadius="15px 5px 15px 15px"
          p="6px 7px 6px 2px"
          w="68px"
          justifyContent="center"
          data-aos="fade-down-left"
          data-aos-delay="20"
          data-aos-duration="1100"
          data-aos-easing="ease-in-out-cubic"
        >
          <Text fontSize="12px" color="#fff">
            {message}
          </Text>
        </Flex>
      </Flex>
      <Flex
        data-aos="fade-up-right"
        data-aos-delay="50"
        data-aos-duration="2500"
        data-aos-easing="ease-in-out-cubic"
        justify="flex-start"
        mt="21px"
      >
        <Flex align="center">
          <Image mt="10px" src={Profile} alt="profile_icon" />
          <Box>
            <Text fontSize="10px">Penny</Text>
            <Box
              w="193px"
              p="4px 7px 4px 7px"
              bg="#F4F9EB"
              borderRadius="5px 20px 20px 20px"
            >
              <Text fontSize="12px">{response}</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
      <Flex
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out-cubic"
        mt="15px"
        justify="flex-end"
      >
        <Flex w="170px" flexWrap="wrap" gap="6px">
          <Button name="View Recipes" />
          <Button name="Meal Plan" />
          <Button name="Buy Products" />
          <Button name="Get  Help" />
          <Flex w="170px" justify="flex-end">
            <Button name="FAQs" />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export { Chat };
