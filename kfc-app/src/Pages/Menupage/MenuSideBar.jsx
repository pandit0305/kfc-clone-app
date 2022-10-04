import {HashLink} from 'react-router-hash-link';
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";



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
                <HashLink smooth to="/menu/#chicken">CHICKEN BUCKETS</HashLink>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <HashLink smooth to="/menu/#launch">NEW LAUNCH</HashLink>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <HashLink smooth to="/menu/#biryani">BIRYANI BUCKETS</HashLink>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <HashLink smooth to="/menu/#meal">BOX MEALS</HashLink>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <HashLink smooth to="/menu/#burger">BURGERS</HashLink>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <HashLink smooth to="/menu/#homemeal">STAY HOME SPECIALS</HashLink>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"20px 0px 20px 0px"}
                cursor={"pointer"}
            >
                <HashLink smooth to="/menu/#snack">SNACKS</HashLink>
            </Text>
            <Text
                fontSize={"16px"}
                letterSpacing={"-0.2px"}
                lineHeight={"24px"}
                fontWeight={"bold"}
                m={"10px 0px 10px 0px"}
                cursor={"pointer"}
            >
                <HashLink smooth to="/menu/#beverage">BEVERAGES</HashLink>
            </Text>
            </Box>
        </GridItem>
        </Grid>
    </Box>
    )
}

