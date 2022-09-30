import React from "react";

import { Box, Spacer, Input, Heading } from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";
import { temp } from "../components/Navbar";
import Chicken from "./Menupage/Chicken";
import Launch from "./Menupage/Launch";
import Biryani from "./Menupage/Biryani";
import BoxMeal from "./Menupage/BoxMeal";
import Burger from "./Menupage/Burger";
import Stayhome from "./Menupage/Stayhome";
import Snacks from "./Menupage/Snacks";
import Beverage from "./Menupage/Beverage";
import { Menusidebar } from "./Menupage/MenuSideBar";

export default function Menu() {
  return (
    <Box w="1103.12px" m="auto">
      <Spacer h={"140px"} />
      <Box position={"fixed"}>{temp}</Box>
      <Box m={"40px 0px 40px 0px"} position={"fixed"} w="100%">
        <Heading style={{ fontStretch: "condensed" }} fontSize={"35px"}>
          KFC MENU
        </Heading>
      </Box>
      {/* sidebar */}
      <Menusidebar />
      {/* menu */}
      <Box
        w={"865px"}
        // border={"1px solid red"}
        h={"1000px"}
        ml={"310px"}
        position={"relative"}
        top={"50px"}
      >
        <Box m={"6px"}>
          <Box position={"relative"}>
            <SearchIcon position={"absolute"} left={"10px"} top={"10px"} />
            <Input
              type="text"
              pl={"35px"}
              placeholder={"Search our menu"}
              w={"201px"}
              h={"35px"}
              borderRadius={"30px"}
            />
          </Box>
        </Box>

        <Box>
          <Heading m={"10px 0px 10px 0px"}>
            <Box border={"1px solid black"}></Box>
          </Heading>
        </Box>
        <Chicken />
        <Launch />
        <Biryani />
        <BoxMeal />
        <Burger />
        <Stayhome />
        <Snacks />
        <Beverage />
      </Box>
    </Box>
  );
}
