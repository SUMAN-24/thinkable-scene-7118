import React from "react";
import { Image, Link } from "@chakra-ui/react";

const BannerB = () => {
  return (
    <Link cursor="pointer">
      <Image
        w="full"
        src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg"
      />
    </Link>
  );
};

export default BannerB;
