import { Stack, Flex, Image } from "@chakra-ui/react";
import React from "react";

const ViewPort = () => {
  return (
    <Stack mt="1rem" ml="1rem" mr="1rem">
      <Flex gap="2rem">
        <Image
          width="500px"
          cursor="pointer"
          borderRadius="10px"
          boxShadow="2px 5px #a09191bd"
          src="	https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=7"
          alt=""
        />
        <Image
          width="500px"
          cursor="pointer"
          borderRadius="10px"
          boxShadow="2px 5px #a09191bd"
          src="	https://www.naturesbasket.co.in/Images/Japanesecuisine-webbox.png?v=10"
          alt=""
        />
        <Image
          width="500px"
          cursor="pointer"
          borderRadius="10px"
          boxShadow="2px 5px #a09191bd"
          src="	https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15"
          alt=""
        />
      </Flex>
    </Stack>
  );
};

export default ViewPort;
