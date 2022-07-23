import React from "react";
import { Stack, Flex, Divider, Spacer, Heading, Box } from "@chakra-ui/react";
import CarouselTrend from "./CarouselTrend";
const HeadingCurated = () => {
  return (
    <Stack mt="-1.5rem">
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
          CURATED FOR YOU
        </Heading>
        <Spacer />
        <Divider w="20rem" orientation="horizontal" mr="17rem" mt="0.5rem" />
      </Flex>
      <Stack>
        <Box>
          <CarouselTrend />
        </Box>
      </Stack>
    </Stack>
  );
};

export default HeadingCurated;
