import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import { theme } from "./resources/themes/index";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
    </ChakraProvider>
  );
}
export default App;
