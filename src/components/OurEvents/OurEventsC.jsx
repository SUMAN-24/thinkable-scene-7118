import React from "react";
import { Image, Link } from "@chakra-ui/react";

const OurEventsC = () => {
  return (
    <Link cursor="pointer">
      <Image w="40rem" src={require(".//Images/event3.jpg")} alt="" />
    </Link>
  );
};

export default OurEventsC;
