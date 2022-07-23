import React from "react";
import { Image, Link } from "@chakra-ui/react";

const OurEventsB = () => {
  return (
    <Link cursor="pointer">
      <Image w="40rem" src={require(".//Images/event2.jpg")} alt="" />
    </Link>
  );
};

export default OurEventsB;
