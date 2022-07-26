import React from "react";
import { Box, Stack } from "@chakra-ui/react";

// And react-slick as our Carousel Lib
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banners from "./Banners";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Banner2Carousel() {
  //only for buttons we need state management here

  const banners = [
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/7375d2fe-b2af-410f-88cd-e7d3195f199b_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/06fd7110-c426-4883-8091-ec3b9c1f3a88_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/bd139272-384b-4d66-8932-8bc8093f5b6d_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/dff45276-9453-4d61-ab3b-4b397f3f8a58_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/95cca699-6c66-4df8-ace2-7effeddecfaa_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/bf01d76e-4c92-4046-832a-7b50b9ad266e_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/88d68b3d-2bfc-497e-af24-dd2b5378b675_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/4209a79c-0340-4d68-9479-deee041844d0_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/ce74f1db-d70d-4ff2-a5d9-87f9a997fc32_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/efc458aa-dd72-4a60-9be1-9dc516f10977_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/b7641ce5-fd86-485f-bc27-e6c486afc951_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/38521139-e3c4-4e13-8cb1-9a3f2adc5fc5_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/9bd5bd18-3f11-4062-afe6-380ff6a35dfc_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/f2b41376-0541-4bfa-932f-887339692b60_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/305a62b1-b655-4366-9a9c-b1d4c92685d5_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/e2815333-d548-4212-9acd-a96f08950440_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/172ece1d-70d5-44d5-a5f4-0d236c1d815a_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/3b8d8078-b906-4340-8ac2-d56085bf9a02_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/69fbb757-9d70-45c0-9875-14c8b4f18804_1320x376.jpg",
    "https://d1z88p83zuviay.cloudfront.net/BannerImages/28b8913f-ae0e-4afe-ac72-bae62be8ffb2_1320x376.png",
  ];

  return (
    <Stack mt="1rem" ml="1rem" mr="1rem">
      <Box
        position={"relative"}
        height={"460px"}
        width={"full"}
        overflow={"hidden"}
      >
        {/* CSS files for react-slick */}
        {/* <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        /> */}
        {/* <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        /> */}

        {/* Slider */}
        <Slider {...settings}>
          {banners.map((url) => (
            <Box>{Banners(url)}</Box>
          ))}

          {/* 2nd method */}
          {/* <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/06fd7110-c426-4883-8091-ec3b9c1f3a88_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/bd139272-384b-4d66-8932-8bc8093f5b6d_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/dff45276-9453-4d61-ab3b-4b397f3f8a58_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/95cca699-6c66-4df8-ace2-7effeddecfaa_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/bf01d76e-4c92-4046-832a-7b50b9ad266e_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/88d68b3d-2bfc-497e-af24-dd2b5378b675_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/4209a79c-0340-4d68-9479-deee041844d0_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/ce74f1db-d70d-4ff2-a5d9-87f9a997fc32_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/efc458aa-dd72-4a60-9be1-9dc516f10977_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/b7641ce5-fd86-485f-bc27-e6c486afc951_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/38521139-e3c4-4e13-8cb1-9a3f2adc5fc5_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/9bd5bd18-3f11-4062-afe6-380ff6a35dfc_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/f2b41376-0541-4bfa-932f-887339692b60_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/305a62b1-b655-4366-9a9c-b1d4c92685d5_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/e2815333-d548-4212-9acd-a96f08950440_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/172ece1d-70d5-44d5-a5f4-0d236c1d815a_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/3b8d8078-b906-4340-8ac2-d56085bf9a02_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/69fbb757-9d70-45c0-9875-14c8b4f18804_1320x376.jpg"
            )}
          </Box>
          <Box>
            {Banners(
              "https://d1z88p83zuviay.cloudfront.net/BannerImages/28b8913f-ae0e-4afe-ac72-bae62be8ffb2_1320x376.png"
            )}
          </Box> */}
        </Slider>
      </Box>
    </Stack>
  );
}
