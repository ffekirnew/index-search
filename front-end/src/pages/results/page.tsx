import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import NavBar from "../../components/results/NavBar";
import { QueryResult } from "../../service/clients/searchClient";
import useSearch from "../../service/hooks/search/useSearch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ResultsPage = () => {
  const [searchResults, setSearchResults] = useState<QueryResult[]>([{title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"}, {title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"},  {title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"},{title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"}, {title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"},  {title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"},{title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"}, {title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"},  {title: "The Power of Now", url: "https://www.amazon.com/The-Power-of-Now/dp/1577314808"}]);
  const { search, isLoading, isSuccess, error, results } = useSearch();
  const { searchTerm } = useParams();

  // useEffect(() => {
  //   search(searchTerm as string);
  //   if(results){
  //     setSearchResults(results);
  //   }
  // }
  // , [results]);

  return (
    <VStack width={"100%"} height={"100vh"} gap={0} >
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
        <div className="flex flex-col gap-4 p-16 w-full">
          {isLoading && <p>Loading</p>}
          {/* {error && <p className="mt-40 text-lg">Something went wrong. Please check your network connection and try again. {error}</p>} */}
          {true && searchResults.map((result: QueryResult) => (
            <Card className="w-full">
              <CardHeader>
                <Heading as="h3" size="md">{result.title}</Heading>
              </CardHeader>
              <CardBody>
                <Text className="text-lg font-bold">Book Address: <a href={result.url} className="text-lg text-blue-600">here</a></Text>
              </CardBody>
            </Card>
          ))}
        </div>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ResultsPage;
