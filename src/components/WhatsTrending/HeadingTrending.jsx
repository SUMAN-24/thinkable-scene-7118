import React from "react";
import { Stack, Flex, Divider, Spacer, Heading, Box } from "@chakra-ui/react";
import WhatsOfferA from "./WhatsOfferA";
import WhatsOfferB from "./WhatsOfferB";
import WhatsOfferC from "./WhatsOfferC";
import WhatsOfferD from "./WhatsOfferD";
const HeadingTrending = () => {
  return (
    <Stack mt="-10rem">
      <Flex>
        <Divider w="20rem" orientation="horizontal" ml="17rem" mt="0.5rem" />
        <Spacer />
        <Heading
          bg="#ffffff"
          as="h2"
          size="lg"
          fontFamily="sans-serif"
          fontWeight="normal"
          fontSize="1.5em"
        >
          WHAT'S TRENDING
        </Heading>
        <Spacer />
        <Divider w="20rem" orientation="horizontal" mr="17rem" mt="0.5rem" />
      </Flex>
      <Stack mt="-8rem">
        <Box>
          <Flex>
            <WhatsOfferA />
            <WhatsOfferB />
            <WhatsOfferC />
            <WhatsOfferD />
          </Flex>
        </Box>
      </Stack>
    </Stack>
  );
};

export default HeadingTrending;
