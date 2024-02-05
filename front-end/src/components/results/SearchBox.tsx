import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const { colorMode } = useColorMode();
  const searchBoxRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();


  return (
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
          bgColor={colorMode == "dark" ? "brand.primary" : "brand.primary"}
          color={"gray.50"}
          variant={"outline"}
          onClick={()=>{
            navigate(`/results/${searchBoxRef?.current?.value ?? " "}`)
          }}
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
