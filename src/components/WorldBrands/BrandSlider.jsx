import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue, Stack } from "@chakra-ui/react";
// Here I used react-icons package for the icons
import { BiLeftArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Brand1 from "./Brand1";
import Brand2 from "./Brand2";
import Brand3 from "./Brand3";
import Brand4 from "./Brand4";
import Brand5 from "./Brand5";
import Brand6 from "./Brand6";
import Brand7 from "./Brand7";
import Brand8 from "./Brand8";
import Brand9 from "./Brand9";

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: false,
  infinite: true,
  //autoplay: false,
  speed: 500,
  //autoplaySpeed: 5000,
  slidesToShow: 5,
  slidesToScroll: 5,
};

export default function BrandSlider() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState();

  //   const brands = [
  //     "https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg",
  //     "https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg",
  //     "https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg",
  //     "https://d1z88p83zuviay.cloudfront.net/Images/real-thai.jpg",

  //     "https://d1z88p83zuviay.cloudfront.net/Images/barilla.jpg",
  //     "https://d1z88p83zuviay.cloudfront.net/Images/ceres.jpg",

  //     "https://d1z88p83zuviay.cloudfront.net/Images/lindt.jpg",
  //     "https://d1z88p83zuviay.cloudfront.net/Images/silk.jpg",
  //     "https://d1z88p83zuviay.cloudfront.net/Images/davidoff-cafe.jpg",
  //   ];

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "70%", md: "10px" });

  return (
    <Stack mt="2rem" ml="4rem">
      <Box
        position={"relative"}
        height={"600px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(-25%, -690%)"}
          zIndex={"sticky"}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Brand1 />
          <Brand2 />
          <Brand3 />
          <Brand4 />
          <Brand5 />
          <Brand6 />
          <Brand7 />
          <Brand8 />
          <Brand9 />
          <Brand1 />

          {/* {brands.map((url, index) => (
            <Box
              key={index}
              height={"7rem"}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              //backgroundSize="cover"
              width="4rem"
              backgroundImage={url}
              ml="2rem"
            />
          ))} */}
        </Slider>
      </Box>
    </Stack>
  );
}
