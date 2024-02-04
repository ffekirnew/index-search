import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../../components/results/NavBar";

const ResultsPage = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 8];

  return (
    <VStack width={"100%"} height={"100vh"} gap={0}>
      <NavBar />
      <VStack
        position={"relative"}
        height={"100%"}
        width={"100%"}
        paddingY={5}
        gap={5}
        paddingX={{ base: 5, lg: 10 }}
      >
        <VStack gap={5} width={"100%"}>
          {numbers.map((number) => (
            <Card width={"100%"}>
              <CardHeader>
                <Heading fontSize={"2xl"}>Book {number} Title</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  View a summary of all your customers over the last month.
                </Text>
              </CardBody>
            </Card>
          ))}
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ResultsPage;
