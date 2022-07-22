import { Divider } from "@chakra-ui/layout";
import React from "react";
import {
  Box,
  Image,
  Stack,
  Link,
  ListItem,
  List,
  Flex,
  Text,
} from "@chakra-ui/react";

const Organic = () => {
  return (
    <Stack ml="2rem">
      <Box>
        <Link style={{ textDecoration: "none" }}>
          <Box>
            <Image
              w="320px"
              boxShadow="5px 5px 5px 5px rgb(199 138 102 / 37%)"
              borderRadius="10px"
              src="	https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png"
              alt=""
            />

            <Text
              mt="0.8rem"
              float="left"
              fontSize="18px"
              fontWeight="medium"
              letterSpacing="1.5px"
              color="#333333"
              fontFamily="sans-serif"
            >
              Organic
            </Text>
            <br />
          </Box>
        </Link>

        {/* //menu part */}

        <Box mt="2rem" w="320px">
          <List>
            {/* //menu1 */}

            <ListItem float="left">
              <Flex direction="row">
                <Box float="left">
                  <Link style={{ textDecoration: "none" }}>
                    Fruits &amp; Vegetables
                  </Link>
                </Box>

                <ListItem mt="0.6rem" ml="9.7rem">
                  <Image src="	https://www.naturesbasket.co.in/Images/arrows-shop-by.png" />
                </ListItem>
              </Flex>
            </ListItem>
            <ListItem>
              <Divider float="left" mt="0.5rem" w="300px" />
            </ListItem>

            {/* //menu2 */}

            <ListItem float="left">
              <Flex direction="row">
                <Box float="left" mt="0.6rem">
                  <Link style={{ textDecoration: "none" }}>Staples</Link>
                </Box>

                <ListItem mt="1.2rem" ml="15.2rem">
                  <Image src="	https://www.naturesbasket.co.in/Images/arrows-shop-by.png" />
                </ListItem>
              </Flex>
            </ListItem>
            <ListItem>
              <Divider float="left" mt="0.5rem" w="300px" />
            </ListItem>

            {/* //menu3 */}

            <ListItem float="left">
              <Flex direction="row">
                <Box float="left" mt="0.6rem">
                  <Link style={{ textDecoration: "none" }}>Bakery & Dairy</Link>
                </Box>

                <ListItem mt="1.2rem" ml="11.7rem">
                  <Image src="	https://www.naturesbasket.co.in/Images/arrows-shop-by.png" />
                </ListItem>
              </Flex>
            </ListItem>
            <ListItem>
              <Divider float="left" mt="0.5rem" w="300px" />
            </ListItem>

            {/* //view all */}

            <ListItem float="left">
              <Flex direction="row">
                <Box float="left" mt="0.6rem" color="rgb(128,188,66)">
                  <Link style={{ textDecoration: "none" }}>View All</Link>
                </Box>

                <ListItem mt="1.2rem" ml="14.8rem">
                  <Image src="	https://www.naturesbasket.co.in/Images/arrows-shop-by.png" />
                </ListItem>
              </Flex>
            </ListItem>
            <ListItem>
              <Divider float="left" mt="0.5rem" w="300px" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Stack>
  );
};

export default Organic;
