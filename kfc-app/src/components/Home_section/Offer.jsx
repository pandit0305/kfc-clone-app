import React from 'react';
import { slider } from "./slider";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  Heading,
  Box,
  Img,
  Spacer,
  Flex,
  Grid,
  GridItem,
  Text
} from "@chakra-ui/react";

const sticker = (
  <Grid w={"45px"} templateColumns={"repeat(3,1fr)"} gap={"15px"}>
    <GridItem w="16px" h={"41px"} border="1px solid red" bg={"red"}></GridItem>
    <GridItem w="16px" h={"41px"} border="1px solid red" bg={"red"}></GridItem>
    <GridItem w="16px" h={"41px"} border="1px solid red" bg={"red"}></GridItem>
  </Grid>
);
export default function Offer() {
  // state = {
  //   display: true,
  //   width: 600
  // };

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
  return (
    <Box>
      <Spacer h={"100px"} />
      <Box w={"100%"} 
      border={"1px solid red"}
       bgColor={"#202124"}
       >
        <Box w={"80%"} m={"auto"}>
          {sticker}
             <Spacer h={"50px"} />
            <Flex color={"white"} justifyContent={"space-between"}>
                <Heading fontSize={"38px"}>OFFERS & DEALS</Heading>
                <NavLink to={'./menu'}>
                <Text fontWeight={"bold"} fontSize={"14px"}>View ALL Deals →</Text>
                </NavLink>
            </Flex>
            <Spacer h={"50px"} />
            <Box>
                {/* slider */}
            <Slider {...settings}>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
    
            </Box>
        </Box>
      </Box>
    </Box>
  );
}
