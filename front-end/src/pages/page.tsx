import {
  Button,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NavBar from "../components/landing/NavBar";
import { useNavigate } from "react-router-dom";
import useSearch from "../service/hooks/search/useSearch";
import LoadingRipples from "../components/ui/LoadingRipples";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  search: z
    .string()
    .min(3, { message: "Search queries must be 3 or more charachters." }),
});

type SearchFormSchema = z.infer<typeof schema>;

const LandingPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchFormSchema>({ resolver: zodResolver(schema) });
  const { search, isLoading, isSuccess } = useSearch();
  const { colorMode } = useColorMode();

  const onSearch = (data: FieldValues) => {
    search(data.search);
  };

  if (isSuccess) navigate("/results");

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
        <Heading fontSize={"7xl"} fontWeight={"600"}>
          Index Search
        </Heading>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputGroup bgClip={"content-box"}>
            <Input
              variant={"outline"}
              type="text"
              placeholder="Search any term..."
              rounded={"2xl"}
              {...register("search")}
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
                disabled={isLoading}
              >
                {isLoading ? (
                  <LoadingRipples color={"gray.200"} size={"sm"} />
                ) : (
                  <Text>Search</Text>
                )}
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </VStack>
    </VStack>
  );
};

export default LandingPage;
