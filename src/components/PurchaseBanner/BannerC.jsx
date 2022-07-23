import React from "react";
import { Image, Link } from "@chakra-ui/react";

const BannerC = () => {
  return (
    <Link cursor="pointer">
      <Image
        w="full"
        src="https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg"
      />
    </Link>
  );
};

export default BannerC;
