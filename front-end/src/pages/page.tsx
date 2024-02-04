import { Heading, VStack } from "@chakra-ui/react";
import NavBar from "../components/landing/NavBar";
import SearchBox from "../components/landing/SearchBox";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const onSearch = () => {
    navigate("/results");
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
      >
        <Heading fontSize={"7xl"}>INDEX SEARCH</Heading>
        <SearchBox action={onSearch} />
      </VStack>
    </VStack>
  );
};

export default LandingPage;
