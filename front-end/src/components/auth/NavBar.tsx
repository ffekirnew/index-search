import logo from "../../assets/react.svg";
import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "../ColorModeSwitch";

const NavBar = () => {
  return (
    <Flex
      padding={3}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <HStack gap={5}>
        <Link to={"/"}>
          <HStack>
            <Image src={logo} boxSize={"35px"} borderRadius={5} />
            <Text as="h3" fontWeight={"bold"}>
              Index Search
            </Text>
          </HStack>
        </Link>
      </HStack>
      <HStack>
        <ColorModeSwitch />
      </HStack>
    </Flex>
  );
};

export default NavBar;
