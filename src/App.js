import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import { ChatBot } from "./pages";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ChatBot />
    </ChakraProvider>
  );
}

export default App;
