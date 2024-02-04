import {
  Image,
  Spacer,
  VStack,
  HStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import SideBarOption from "./SideBarOption";

import logo from "../../assets/react.svg";
import ColorModeSwitch from "../ColorModeSwitch";

const SideBar = () => {
  const { colorMode } = useColorMode();

  return (
    <VStack
      align={"left"}
      height={"100vh"}
      flexDirection={"column"}
      width={"100%"}
      bg={colorMode === "dark" ? "gray.700" : "gray.50"}
      gap={5}
    >
      <HStack width={"100%"} gap={2} alignItems={"center"} padding={5}>
        <Link to={"/dashboard"}>
          <Image src={logo} boxSize={"30px"} borderRadius={"full"} />
        </Link>
        <Text as={"h2"} fontSize={"md"} fontWeight={"semibold"} marginEnd={5}>
          Index Search
        </Text>
        <Spacer />
        <ColorModeSwitch variant={"ghost"} />
      </HStack>
      <VStack align={"left"} width={"100%"} gap={2} paddingX={5}>
        <Link to={"/everything"}>
          <SideBarOption text="Dashboard" icon={<BiSolidDashboard />} />
        </Link>
      </VStack>
      <Spacer />
    </VStack>
  );
};

export default SideBar;
