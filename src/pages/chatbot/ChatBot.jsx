import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import Back from "../../assets/back.png";
import Minus from "../../assets/minus.png";
import Cancel from "../../assets/Union.png";
import Attach from "../../assets/attachment.png";
import Emoji from "../../assets/emoji.png";
import Send from "../../assets/send.png";
import { BaseInput } from "../../components";
import { Chat } from "../chat";
const ChatBot = () => {
  const response = "hello how are you?";
  const [data, setData] = useState([{ message: "", response }]);
  const [value, setValue] = useState("");

  useEffect(() => {
    AOS.init();
  }, [value]);

  const addMessage = () => {
    const newMsg = { message: value, response };
    const newMessage = [...data, newMsg];
    setData(newMessage);
    setValue("");
  };

  const onSubmit = () => {
    addMessage();
  };

  return (
    <Flex justify="center">
      <Box
        h="143px"
        pl="12px"
        pr="12px"
        w={{ sm: "100%", lg: "348px" }}
        bg="#78A431"
      >
        <Flex
          h="30px"
          w="100%"
          mt="30px"
          justify="space-between"
          align="center"
        >
          <Flex
            align="center"
            justify="center"
            mt="0px"
            bg="#CBDFAB"
            h="28px"
            w="28px"
            borderRadius="4px"
          >
            <Image src={Back} alt="back_icon" />
          </Flex>
          <Box>
            <Text mb="0px" fontSize="16px" fontWeight="500" color="#fff">
              Start your conversation
            </Text>
            <Text mt="2px" color="#CBDFAB" fontSize="12px">
              Penny is set!
            </Text>
          </Box>
          <Flex>
            <Flex
              align="center"
              justify="center"
              mt="0px"
              bg="#CBDFAB"
              h="28px"
              w="28px"
              borderRadius="4px"
            >
              <Image src={Minus} alt="minus_icon" />
            </Flex>
            <Flex
              align="center"
              justify="center"
              mt="0px"
              bg="#CBDFAB"
              h="28px"
              w="28px"
              borderRadius="4px"
              ml="6px"
            >
              <Image src={Cancel} alt="cancel_icon" />
            </Flex>
          </Flex>
        </Flex>
        <Box
          borderRadius="10px"
          boxShadow="5px 5px 10px rgba(0, 0, 0, 0.1)"
          mt="21px"
          h="550px"
          w={{ sm: "100%", lg: "325px" }}
          bg="#fff"
          pl="20px"
        >
          <Text
            pt="24px"
            color="#78A431"
            fontWeight="500"
            m="0"
            fontSize="16px"
          >
            Start a conversation
          </Text>
          <Box h="420px" overflowY="scroll">
            {data?.map((d, i) => (
              <>{i > 0 && <Chat response={d.response} message={d.message} />}</>
            ))}
          </Box>
          <Flex ml="-10px" w="100%" justify="center">
            <BaseInput
              leftIcon={
                <Flex>
                  <Image cursor="pointer" src={Attach} />
                  <Image cursor="pointer" ml="9px" src={Emoji} />
                </Flex>
              }
              rightIcon={
                <Flex
                  align="center"
                  justify="center"
                  h="31px"
                  w="31px"
                  borderRadius="5px"
                  bg="#78A431"
                  cursor="pointer"
                  onClick={onSubmit}
                >
                  <Image w="12px" h="12px" src={Send} />
                </Flex>
              }
              placeholder="Type your message here"
              width={{ sm: "300px", lg: "286px" }}
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export { ChatBot };
