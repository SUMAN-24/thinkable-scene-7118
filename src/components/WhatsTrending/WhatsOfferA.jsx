import React from "react";
import {
  Box,
  Image,
  Stack,
  Flex,
  Text,
  Button,
  Tooltip,
  ButtonGroup,
  Badge,
  Link,
} from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const WhatsOfferA = () => {
  return (
    <Stack ml="2rem">
      <Flex>
        <Box
          w="330px"
          h="500px"
          align="center"
          _hover={{
            boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.96px 2.6px 1.8px",
          }}
        >
          <Box>
            <Tooltip
              label=" HA TAPIOCA FLOUR 400 G"
              bgColor="white"
              color="black"
              border="1px solid black"
              placement="bottom"
            >
              <Image
                boxShadow="rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                borderRadius="10px"
                cursor="pointer"
                w="310px"
                mt="0.5rem"
                src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"
                alt=""
              />
            </Tooltip>
          </Box>
          <Box mt="1rem">
            <Badge
              variant="subtle"
              fontSize="13px"
              fontWeight="bolder"
              letterSpacing="1px"
              color="#880033"
              fontFamily="sans-serif"
              marginBottom="3%"
              borderRadius="50px"
              // border="1px solid #880033"
            >
              DELIVERY IN 90 MINUTES
            </Badge>
            <Box w="300px">
              <Text
                fontSize="14px"
                fontWeight="light"
                letterSpacing="0.5px"
                color="#111111"
                fontFamily="sans-serif"
                textAlign="center"
                _hover={{ color: "#880033" }}
              >
                <Tooltip
                  label=" HA TAPIOCA FLOUR 400 G"
                  bgColor="white"
                  color="black"
                  border="1px solid black"
                  placement="bottom-end"
                >
                  <Link style={{ textDecoration: "none" }}>
                    HA TAPIOCA FLOUR 400 G
                  </Link>
                </Tooltip>
              </Text>
            </Box>
            <Text
              fontSize="14px"
              fontWeight="medium"
              letterSpacing="1px"
              color="#001111"
              fontFamily="sans-serif"
            >
              <Link style={{ textDecoration: "none" }}> 1Pc</Link>
            </Text>
            <Tooltip label=" Buy @ Rs.210.00/" aria-label="A tooltip">
              <Text
                fontSize="12px"
                fontWeight="medium"
                letterSpacing="1px"
                color="hsl(326, 78%, 40%)"
                fontFamily="sans-serif"
                height="15px"
              >
                Buy @ Rs.210.00/
              </Text>
            </Tooltip>
          </Box>
          <ButtonGroup direction="row" gap="5px" mt="1rem">
            <Button
              colorScheme="white"
              variant="outline"
              borderColor="rgb(213,213,213)"
              borderRadius="0.6rem"
              cursor="text"
            >
              <Text>MRP</Text>

              <Text ml="0.3rem">₹210</Text>
            </Button>

            <Button
              textDecoration="none"
              leftIcon={<MdOutlineAddShoppingCart />}
              bg="rgb(145,191,69)"
              color="white"
              variant="solid"
              colorScheme="none"
              borderRadius="0.6rem"
              width="110px"
            >
              ADD
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    </Stack>
  );
};

export default WhatsOfferA;
