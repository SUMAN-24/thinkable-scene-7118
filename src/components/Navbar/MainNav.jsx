import React from "react";
import {
  Stack,
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
        <ButtonGroup
          isAttached
          variant="ghost"
          border="1px solid rgb(225,225,225)"
          borderRadius="0.41rem"
        >
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<MdArrowDropDown />}
              color="rgb(190,28,104)"
              bg="rgb(240,240,240)"
              fontSize="18px"
              letterSpacing="4px"
              fontFamily="body"
              lineHeight="5px"
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
          <Button
            fontSize="14px"
            letterSpacing="3px"
            fontFamily="body"
            lineHeight="5px"
            borderLeftColor="white"
          >
            MY ORDERS
          </Button>
          <Button
            fontSize="14px"
            letterSpacing="3px"
            fontFamily="body"
            lineHeight="5px"
          >
            GIFTING
          </Button>
          <Button
            fontSize="14px"
            letterSpacing="3px"
            fontFamily="body"
            lineHeight="5px"
          >
            REWARDS
          </Button>
          <Button
            fontSize="14px"
            letterSpacing="3px"
            fontFamily="body"
            lineHeight="5px"
          >
            BLOG
          </Button>
          <Button
            fontSize="14px"
            letterSpacing="3px"
            fontFamily="body"
            lineHeight="5px"
          >
            OFFERS
          </Button>
          <Button
            fontSize="14px"
            letterSpacing="3px"
            fontFamily="body"
            lineHeight="5px"
          >
            CONNOISSEUR'S SELECTION
          </Button>
          <Button
            fontSize="14px"
            letterSpacing="3px"
            fontFamily="body"
            lineHeight="5px"
          >
            BOOK STORE VISIT
          </Button>
        </ButtonGroup>
      </Box>
    </Stack>
  );
};

export default MainNav;
