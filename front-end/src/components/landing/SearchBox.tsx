import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";

interface Props {
  action: () => void;
}
const SearchBox = ({ action }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <InputGroup bgClip={"content-box"}>
      <Input
        variant={"outline"}
        type="text"
        placeholder="Search any term..."
        rounded={"2xl"}
      />
      <InputRightElement width={"5.5rem"}>
        <Button
          bgColor={colorMode == "dark" ? "brand.primary" : "brand.primary"}
          color={"gray.50"}
          variant={"outline"}
          onClick={action}
          roundedEnd={"2xl"}
          roundedStart={0}
        >
          <Text>Search</Text>
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBox;
