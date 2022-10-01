import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const Menusidebar = ()=>{
    return(

    <Box>
        <Grid mt={"100px"} position={"fixed"}>
        <GridItem
            rowSpan={2}
            colSpan={1}
            // border={"1px solid black"}
            w={{ base: "280px", md: "250px", sm: "250px" }}
            h={"649px"}
        >
            <Box>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <a href="#chicken">CHICKEN BUCKETS</a>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <a href="#launch">NEW LAUNCH</a>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <a href="#biryani">BIRYANI BUCKETS</a>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <a href="#meal">BOX MEALS</a>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <a href="#burger">BURGERS</a>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <a href="#homemeal">STAY HOME SPECIALS</a>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <a href="#snack">SNACKS</a>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"10px 0px 10px 0px"}
                cursor={"pointer"}
            >
                <a href="#beverage">BEVERAGES</a>
            </Text>
            </Box>
        </GridItem>
        </Grid>
    </Box>
    )
}

