import React from "react";
import { Image, Box } from "@chakra-ui/react";

const Banners = (src) => {
  return (
    <>
      <Box>
        <Image w="full" cursor="pointer" borderRadius="10px" src={src} />
      </Box>
    </>
  );
};

export default Banners;
