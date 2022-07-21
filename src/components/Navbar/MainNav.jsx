import React from "react";
import {
  Stack,
  Flex,
  Box,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { MdArrowDropDown } from "react-icons/md";

const MainNav = () => {
  return (
    <Stack mt="1rem">
      <Box>
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
          <ButtonGroup w="180rem" isAttached variant="outline">
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<MdArrowDropDown />}
                color="rgb(190,28,104)"
                bg="rgb(240,240,240)"
              >
                SHOP BY CATEGORY
              </MenuButton>
              <MenuList>
                <MenuItem>Gift Hampers</MenuItem>
                <MenuItem>Fruits & Vegetables</MenuItem>
                <MenuItem>Cheese, Meat & Fruit Platters</MenuItem>
                <MenuItem>Delecatessan & Cheese</MenuItem>
                <MenuItem>International Cuisine</MenuItem>
              </MenuList>
            </Menu>
            <Button borderLeftColor="white">MY ORDERS</Button>
            <Button borderLeftColor="white">GIFTING</Button>
            <Button borderLeftColor="white">REWARDS</Button>
            <Button borderLeftColor="white">BLOG</Button>
            <Button borderLeftColor="white">OFFERS</Button>
            <Button borderLeftColor="white">CONNOISSEUR'S SELECTION</Button>
            <Button borderLeftColor="white">BOOK STORE VISIT</Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Stack>
  );
};

export default MainNav;
