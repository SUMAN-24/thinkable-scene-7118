import { Stack, Divider, Heading, Flex, Spacer, Box } from "@chakra-ui/react";
import React from "react";
import Carousel from "./Carousel";
// import Confectionary from "./Confectionary";
// import Cuisine from "./Cuisine";
// import DailyEssentials from "./DailyEssentials";
// import ExoticVegetables from "./ExoticVegetables";
// import FineTea from "./FineTea";
// import FreshArtisnal from "./FreshArtisnal";
// import GiftStudio from "./GiftStudio";
// import HealthyFoods from "./HealthyFoods";
// import IndianGrocery from "./IndianGrocery";
// import MeatPoultry from "./MeatPoultry";
// import Organic from "./Organic";
// import ReadyToEat from "./ReadyToEat";

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

      <Stack>
        <Box mt="1rem">
          <Carousel />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Headings;
