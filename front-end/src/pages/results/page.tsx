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
import LoadingRipples from "../../components/ui/LoadingRipples";

const ResultsPage = () => {
  const [searchResults, setSearchResults] = useState<QueryResult[]>([]);
  const { search, isLoading, isSuccess, error, results } = useSearch();
  const { searchTerm } = useParams();

  console.log(searchTerm);

  useEffect(() => {
    search(searchTerm as string);
  }, [searchTerm]);

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
          <div className="flex flex-col gap-4  w-full">
            {isLoading && (
              <VStack
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
              >
                <LoadingRipples color={"brand.primary"} size={"lg"} />
              </VStack>
            )}
            {/* {error && <p className="mt-40 text-lg">Something went wrong. Please check your network connection and try again. {error}</p>} */}
            {isSuccess && (
              <VStack width={"100%"} align={"left"} gap={5}>
                <Heading as="h4" textAlign={"left"} fontSize={"3xl"}>
                  Search Results
                </Heading>
                {results.map((result: QueryResult) => (
                  <Card width={"100%"}>
                    <CardHeader>
                      <Heading as="h3" size="md">
                        {result.title}
                      </Heading>
                    </CardHeader>
                    <CardBody>
                      <Text className="text-lg font-bold">
                        Document Address:{" "}
                        <a href={result.url} className="text-lg text-blue-600">
                          here
                        </a>
                      </Text>
                    </CardBody>
                  </Card>
                ))}
              </VStack>
            )}
            {isSuccess && results.length == 0 && (
              <VStack
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
                height={"100%"}
              >
                <Text>There are not matching documents.</Text>
              </VStack>
            )}
          </div>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ResultsPage;
