import React from "react";
import { Stack, Flex, Divider, Spacer, Heading, Box } from "@chakra-ui/react";
import BrandSlider from "./BrandSlider";

const HeadingWorldBrands = () => {
  return (
    <Stack mt="2rem">
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
          SHOP BY WORLD BRANDS
        </Heading>
        <Spacer />
        <Divider w="20rem" orientation="horizontal" mr="17rem" mt="0.5rem" />
      </Flex>
      <Stack mt="-8rem">
        <Box>
          <BrandSlider />
        </Box>
      </Stack>
    </Stack>
  );
};

export default HeadingWorldBrands;
