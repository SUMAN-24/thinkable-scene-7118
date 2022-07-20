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
  InputRightAddon,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";

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

        <Stack>
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
              <Spacer />
              <Flex gap="0.5rem" fontFamily="sans-serif" mr="-10.5rem">
                <Box cursor="pointer">Login</Box>
                <Box>|</Box>
                <Box cursor="pointer">Register</Box>
              </Flex>
            </Flex>
          </Box>
          <Box ml="8rem">
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
                  variant="outline"
                  placeholder="Start shopping ..."
                  textAlign="center"
                  borderTopLeftRadius="0"
                  borderBottomLeftRadius="0"
                  borderColor="rgb(198,198,198)"
                  borderLeftColor="white"
                />
                <InputRightAddon>go</InputRightAddon>
              </InputGroup>
            </InputGroup>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default Navbar;
