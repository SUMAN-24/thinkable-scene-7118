import React from "react";
import { Image, Link } from "@chakra-ui/react";

const OurEventsA = () => {
  return (
    <Link cursor="pointer">
      <Image w="40rem" src={require(".//Images/event1.jpg")} alt="" />
    </Link>
  );
};

export default OurEventsA;
