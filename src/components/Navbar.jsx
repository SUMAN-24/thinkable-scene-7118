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
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";

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
    <Stack>
      <Flex gap="4rem">
        <Stack>
          <Box cursor="pointer" ml="1rem">
            <Image
              src="	https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
              alt=""
            />
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
            <Box cursor="pointer">Login</Box>
            <Box>|</Box>
            <Box cursor="pointer">Register</Box>
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
            <AiFillStar size="2rem" color="rgb(132,190,59)" />
            <Divider orientation="vertical" h="2rem" border="1px solid black" />
            <MdOutlineAddShoppingCart size="2rem" color="rgb(132,190,59)" />
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Navbar;
