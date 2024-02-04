import {
  Button,
  Flex,
  Image,
  HStack,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "../ColorModeSwitch";
import logo from "../../assets/react.svg";

const NavBar = () => {
  return (
    <Flex
      zIndex={999}
      height={"80px"}
      paddingY={5}
      paddingX={{ base: 5, lg: 10 }}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <HStack gap={5} divider={<StackDivider />}>
        <Link to={"/"}>
          <HStack>
            <Image src={logo} boxSize={"35px"} borderRadius={5} />
          </HStack>
        </Link>
      </HStack>
      <Spacer />
      <HStack>
        <ColorModeSwitch />
        <Link to={"/auth/sign-in"}>
          <Button variant={"outline"} fontWeight={"normal"}>
            Sign In as Admin
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
};

export default NavBar;
