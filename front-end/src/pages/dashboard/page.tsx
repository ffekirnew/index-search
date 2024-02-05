import { HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import InputForm from "../../components/inputForm";
import logo from "../../assets/react.svg";

const DashboardPage = () => {
  return (
    <VStack paddingY={10} align="left">
      <HStack>
        <Image src={logo} width={"60px"} />
        <Heading>Index Search</Heading>
      </HStack>
      <Text fontSize={"xl"}>You can add a new document to the indexes.</Text>
      <InputForm />
    </VStack>
  );
};

export default DashboardPage;
