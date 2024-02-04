import {
  HStack,
  Button,
  Show,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  Input,
  InputGroup,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BiMenu } from "react-icons/bi";
import { useRef } from "react";
import SideBar from "./SideBar";
import { BsChevronDown, BsSearch } from "react-icons/bs";

const NavBar = () => {
  const searchBoxRef = useRef<HTMLInputElement>(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <HStack
      height={"100%"}
      gap={{ base: 1, lg: 2 }}
      width={"100%"}
      alignItems={"center"}
    >
      <Show below={"lg"}>
        <Button onClick={onOpen} variant={"ghost"}>
          <BiMenu size={"30px"} />
        </Button>
      </Show>
      <form>
        <InputGroup outline={"brand.primary"} size={"md"}>
          <Input
            ref={searchBoxRef}
            placeholder="Search Anything..."
            borderRadius={10}
            variant={"filled"}
            paddingRight={"4rem"}
          />
          <InputRightElement
            width={"4rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button type="submit" variant={"ghost"}>
              <BsSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} width={"10rem"}>
          Filter
        </MenuButton>
        <MenuList>
          <MenuItem>All</MenuItem>
          <MenuItem>Group 51</MenuItem>
          <MenuItem>Group 52</MenuItem>
          <MenuItem>Group 53</MenuItem>
          <MenuItem>Group 54</MenuItem>
          <MenuItem>Group 55</MenuItem>
          <MenuItem>Group 56</MenuItem>
          <MenuItem>Group 57</MenuItem>
          <MenuItem>Group 58</MenuItem>
        </MenuList>
      </Menu>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent padding={0}>
          <DrawerBody padding={0}>
            <SideBar />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default NavBar;
