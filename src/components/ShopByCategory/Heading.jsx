import { Stack, Divider, Heading, Flex, Box, Spacer } from "@chakra-ui/react";
import React from "react";
import DailyEssentials from "./DailyEssentials";
import ExoticVegetables from "./ExoticVegetables";
import FineTea from "./FineTea";
import FreshArtisnal from "./FreshArtisnal";
import GiftStudio from "./GiftStudio";
import MeatPoultry from "./MeatPoultry";
import Organic from "./Organic";
import ReadyToEat from "./ReadyToEat";

const Headings = () => {
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
          SHOP BY CATEGORY
        </Heading>
        <Spacer />
        <Divider w="20rem" orientation="horizontal" mr="17rem" mt="0.5rem" />
      </Flex>

      <Box>
        <Flex>
          <ExoticVegetables />
          <MeatPoultry />
          <FreshArtisnal />
          <DailyEssentials />
          <Organic />
          <ReadyToEat />
          <GiftStudio />
          <FineTea />
        </Flex>
      </Box>
    </Stack>
  );
};

export default Headings;
