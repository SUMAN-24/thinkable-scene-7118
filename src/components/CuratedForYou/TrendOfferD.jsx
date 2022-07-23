import React from "react";
import {
  Box,
  Image,
  Stack,
  Flex,
  Text,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const TrendOfferD = () => {
  return (
    <Stack ml="2rem" mt="2rem">
      <Flex>
        <Box
          w="325px"
          h="490px"
          _hover={{ boxShadow: "rgba(0, 0, 0, 0.15) 2px 1.95px 2.6px" }}
        >
          <Box>
            <Image
              borderRadius="10px"
              src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/2c1837de-889b-4734-8a81-c235e775558f_425x425.jpg"
              alt=""
            />
          </Box>
          <Box mt="1rem">
            <Text
              fontSize="11px"
              fontWeight="bolder"
              letterSpacing="1px"
              color="#880033"
              fontFamily="sans-serif"
              marginBottom="3%"
            >
              DELIVERY IN 90 MINUTES
            </Text>
            <Box w="300px">
              <Text
                fontSize="14px"
                fontWeight="light"
                letterSpacing="0.5px"
                color="#111111"
                fontFamily="sans-serif"
                textAlign="center"
              >
                ALF FARMS PORK HAM 150 G
              </Text>
            </Box>
            <Text
              fontSize="14px"
              fontWeight="medium"
              letterSpacing="1px"
              color="#001111"
              fontFamily="sans-serif"
            >
              1Pc
            </Text>
            <Tooltip label=" Buy @ Rs.155.00/" aria-label="A tooltip">
              <Text
                fontSize="12px"
                fontWeight="medium"
                letterSpacing="1px"
                color="hsl(326, 78%, 40%)"
                fontFamily="sans-serif"
                height="15px"
              >
                Buy @ Rs.155.00/
              </Text>
            </Tooltip>
          </Box>
          <Stack direction="row" spacing={2} mt="1rem">
            <Button
              colorScheme="white"
              variant="outline"
              borderColor="rgb(213,213,213)"
              borderRadius="0.6rem"
              cursor="text"
            >
              <Text>MRP</Text>

              <Text ml="0.3rem" style={{ textDecoration: "line-through" }}>
                ₹170
              </Text>
            </Button>
            <Button
              colorScheme="white"
              variant="outline"
              borderColor="rgb(213,213,213)"
              borderRadius="0.6rem"
              cursor="text"
            >
              <Text>₹155.0</Text>
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
          </Stack>
        </Box>
      </Flex>
    </Stack>
  );
};

export default TrendOfferD;
