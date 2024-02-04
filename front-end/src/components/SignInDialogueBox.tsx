import { VStack, useColorMode } from "@chakra-ui/react";
import NavBar from "./landing/NavBar";

const SignInDialogueBox = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      height={"100vh"}
      width={"100%"}
      overflowY={"scroll"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <VStack
        bg={colorMode === "dark" ? "gray.700" : "gray.50"}
        margin={5}
        borderRadius={10}
        boxShadow={"dark-lg"}
      >
        <NavBar />
      </VStack>
    </VStack>
  );
};

export default SignInDialogueBox;
