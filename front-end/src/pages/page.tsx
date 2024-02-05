import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
  useColorMode,
  HStack,
  Image,
} from "@chakra-ui/react";
import NavBar from "../components/landing/NavBar";
import { useNavigate } from "react-router-dom";
import "../../style.css";
import { useRef } from "react";
import logo from "../assets/react.svg";

const LandingPage = () => {
  const searchBoxRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const { colorMode } = useColorMode();

  const onSearch = () => {
    navigate("/results/" + searchBoxRef?.current?.value ?? "");
  };

  return (
    <VStack width={"100%"} height={"100vh"} gap={0}>
      <NavBar />
      <VStack
        position={"relative"}
        top={"-80px"}
        height={"100%"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
        paddingX={40}
        gap={10}
      >
        <HStack gap={10}>
          <Image src={logo} width={"120px"} />
          <Heading fontSize={"7xl"} fontWeight={"600"}>
            Index Search
          </Heading>
        </HStack>
        <form onSubmit={onSearch}>
          <InputGroup bgClip={"content-box"}>
            <Input
              ref={searchBoxRef}
              variant={"outline"}
              type="text"
              placeholder="Search any term..."
              rounded={"2xl"}
            />
            <InputRightElement width={"5.5rem"}>
              <Button
                type="submit"
                bgColor={
                  colorMode == "dark" ? "brand.primary" : "brand.primary"
                }
                color={"gray.50"}
                variant={"outline"}
                onClick={onSearch}
                roundedEnd={"2xl"}
                roundedStart={0}
              >
                <Text>Search</Text>
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </VStack>
    </VStack>
  );
};

export default LandingPage;
