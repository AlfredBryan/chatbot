import { useEffect, useState } from "react";
import AOS from "aos";

const useChatBox = () => {
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

  const useOnSubmit = () => {
    addMessage();
  };
  return { data, value, setValue, useOnSubmit };
};

export { useChatBox };
