import {
  Button,
  Flex,
  Image,
  HStack,
  StackDivider,
  Spacer,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "../ColorModeSwitch";
import logo from "../../assets/react.svg";
import SearchBox from "./SearchBox";

const NavBar = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      zIndex={999}
      height={"80px"}
      paddingY={5}
      paddingX={{ base: 5, lg: 10 }}
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom={"1px"}
      borderBottomColor={colorMode !== "dark" ? "gray.100" : "gray.700"}
    >
      <HStack width={"fit-content"} gap={5} divider={<StackDivider />}>
        <Link to={"/"}>
          <HStack width={"fit-content"} height={"100%"}>
            <Image src={logo} boxSize={"35px"} borderRadius={5} />
            <Heading as="h3" fontSize={"xl"} fontWeight={"bold"}>
              Index Search
            </Heading>
          </HStack>
        </Link>
        <SearchBox action={() => {}} />
      </HStack>
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
