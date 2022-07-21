import React from "react";
import { Image, Stack } from "@chakra-ui/react";

const Banner1 = () => {
  return (
    <Stack mt="0.6rem" ml="1rem" mr="1rem">
      <Image
        cursor="pointer"
        borderRadius="10px"
        src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg"
      />
    </Stack>
  );
};

export default Banner1;
