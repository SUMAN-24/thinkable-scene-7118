import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue, Stack } from "@chakra-ui/react";
// Here I used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendOfferA from "./TrendOfferA";
import TrendOfferB from "./TrendOfferB";
import TrendOfferC from "./TrendOfferC";
import TrendOfferD from "./TrendOfferD";
import TrendOfferE from "./TrendOfferE";
import TrendOfferF from "./TrendOfferF";
import TrendOfferG from "./TrendOfferG";
import TrendOfferH from "./TrendOfferH";
import TrendOfferI from "./TrendOfferI";
import TrendOfferJ from "./TrendOfferJ";

// Settings for the slider
const settings = {
  dots: false,
  arrows: true,
  fade: false,
  infinite: true,
  //autoplay: false,
  speed: 500,
  //autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 4,
};

export default function CarouselTrend() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState();

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  return (
    <Stack>
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
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt />
        </IconButton>

        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          colorScheme="messenger"
          borderRadius="full"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt />
        </IconButton>

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Box>
            <TrendOfferA />
          </Box>
          <Box>
            <TrendOfferB />
          </Box>
          <Box>
            <TrendOfferC />
          </Box>
          <Box>
            <TrendOfferD />
          </Box>
          <Box>
            <TrendOfferE />
          </Box>
          <Box>
            <TrendOfferF />
          </Box>
          <Box>
            <TrendOfferG />
          </Box>
          <Box>
            <TrendOfferH />
          </Box>
          <Box>
            <TrendOfferI />
          </Box>
          <Box>
            <TrendOfferJ />
          </Box>
        </Slider>
      </Box>
    </Stack>
  );
}
