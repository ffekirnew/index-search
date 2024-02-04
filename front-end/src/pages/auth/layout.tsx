import { VStack, useColorMode } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/auth/NavBar";

const AuthLayout = () => {
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
        bg={colorMode === "dark" ? "gray.800" : "gray.50"}
        margin={5}
        borderRadius={10}
        boxShadow={"dark-lg"}
      >
        <NavBar />
        <Outlet />
      </VStack>
    </VStack>
  );
};

export default AuthLayout;
