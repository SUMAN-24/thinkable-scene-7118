import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue, Stack } from "@chakra-ui/react";
// Here I used react-icons package for the icons
import { BiLeftArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ExoticVegetables from "./ExoticVegetables";
import MeatPoultry from "./MeatPoultry";
import FreshArtisnal from "./FreshArtisnal";
import DailyEssentials from "./DailyEssentials";
import Organic from "./Organic";
import ReadyToEat from "./ReadyToEat";
import GiftStudio from "./GiftStudio";
import FineTea from "./FineTea";
import HealthyFoods from "./HealthyFoods";
import IndianGrocery from "./IndianGrocery";
import Confectionary from "./Confectionary";
import Cuisine from "./Cuisine";

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

export default function Carousel() {
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

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          <Box>
            <ExoticVegetables />
          </Box>
          <Box>
            <MeatPoultry />
          </Box>
          <Box>
            <FreshArtisnal />
          </Box>
          <Box>
            <DailyEssentials />
          </Box>
          <Box>
            <Organic />
          </Box>
          <Box>
            <ReadyToEat />
          </Box>
          <Box>
            <GiftStudio />
          </Box>
          <Box>
            <FineTea />
          </Box>
          <Box>
            <HealthyFoods />
          </Box>
          <Box>
            <IndianGrocery />
          </Box>
          <Box>
            <Confectionary />
          </Box>
          <Box>
            <Cuisine />
          </Box>
        </Slider>
      </Box>
    </Stack>
  );
}
