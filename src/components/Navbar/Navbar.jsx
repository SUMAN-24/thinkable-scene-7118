import {
  Image,
  Box,
  Stack,
  Flex,
  Divider,
  Spacer,
  Select,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import MainNav from "./MainNav";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import { Link as ReachLink } from "react-router-dom";

const select = () => {
  return (
    <Select
      bg="rgb(243,243,243)"
      borderColor="rgb(198,198,198)"
      borderRightColor="rgb(243,243,243)"
      borderRadius="0"
      cursor="pointer"
      icon={<MdArrowDropDown />}
      width="9rem"
      fontFamily="sans-serif"
      fontSize="0.78rem"
      focusBorderColor="none"
    >
      <option>Mumbai</option>
      <option>Pune</option>
      <option>Delhi NCR</option>
      <option>Bengaluru</option>
      <option>Thane</option>
      <option>Navi Mumbai</option>
      <option>Kolkata</option>
      <option>Raigarh MH</option>
    </Select>
  );
};
const Navbar = () => {
  return (
    <Box>
      <Stack>
        <Flex gap="4rem">
          <Stack>
            <Box ml="1rem">
              <Link as={ReachLink} to="/">
                <Image
                  src="	https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
                  alt=""
                />
              </Link>
            </Box>
          </Stack>

          <Stack mr="-8rem">
            <Box mt="0.5rem">
              <Flex direction="row">
                <Flex
                  gap="1rem"
                  ml="2rem"
                  fontSize="0.9rem"
                  color="#393939"
                  fontFamily="sans-serif"
                  verticalAlign="middle"
                  textAlign="center"
                  float="left"
                >
                  <Box cursor="pointer">Online Slots Availability</Box>

                  <Divider height="1.3rem" orientation="vertical" />

                  <Box cursor="pointer">Fresh & Fast</Box>

                  <Divider height="1.3rem" orientation="vertical" />

                  <Box cursor="pointer">Store Locator</Box>

                  <Divider height="1.3rem" orientation="vertical" />

                  <Box cursor="pointer">Contact Us</Box>

                  <Divider height="1.3rem" orientation="vertical" />
                </Flex>
              </Flex>
            </Box>
            <Box ml="10rem">
              <InputGroup size="md" pointer="cursor">
                <InputLeftAddon
                  bg="rgb(243,243,243)"
                  borderColor="rgb(198,198,198)"
                  cursor="pointer"
                  fontFamily="sans-serif"
                  fontSize="0.78rem"
                  children="Enter Pin"
                />

                <InputGroup>
                  <InputLeftElement w="8rem">{select()}</InputLeftElement>

                  <Input
                    w="50rem"
                    placeholder="Start shopping ..."
                    textAlign="center"
                    borderTopLeftRadius="0"
                    borderBottomLeftRadius="0"
                    borderColor="rgb(198,198,198)"
                    borderLeftColor="white"
                    focusBorderColor="none"
                  />
                  <InputRightElement cursor="pointer">
                    <Image
                      w="4rem"
                      h="2.5rem"
                      src="	https://www.naturesbasket.co.in/Images/search-button.jpg"
                      alt=""
                    />
                  </InputRightElement>
                </InputGroup>
              </InputGroup>
            </Box>
          </Stack>
          <Spacer />
          <Stack mt="0.5rem" mr="2rem">
            <Flex gap="0.5rem" fontFamily="sans-serif">
              <Link cursor="pointer">
                <LoginModal />
              </Link>
              <Box>|</Box>
              <Link cursor="pointer">
                <RegisterModal />
              </Link>
            </Flex>

            <Flex
              gap="1rem"
              ml="2rem"
              fontSize="0.9rem"
              color="#393939"
              fontFamily="sans-serif"
              verticalAlign="middle"
              textAlign="center"
              float="left"
            >
              <AiFillStar
                cursor="pointer"
                size="2rem"
                color="rgb(132,190,59)"
              />
              <Divider
                orientation="vertical"
                h="2rem"
                border="1px solid black"
              />
              <MdOutlineAddShoppingCart
                cursor="pointer"
                size="2rem"
                color="rgb(132,190,59)"
              />
            </Flex>
          </Stack>
        </Flex>
      </Stack>

      <Stack>
        <Box>
          <MainNav />
        </Box>
      </Stack>
    </Box>
  );
};

export default Navbar;
