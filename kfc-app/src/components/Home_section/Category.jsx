import {
  Heading,
  Box,
  Img,
  Spacer,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { data } from "./category._data";
import { Link } from "react-router-dom";
export default function Category() {
  return (
    <Box>
      <Spacer h={"110px"} />
      <Box w={"1130px"} m={"auto"}>
        <Flex justifyContent={"space-between"}>
          <Heading>BROWSE CATEGORIES</Heading>
          <Divider w={"700px"} mt={"15px"} />
        </Flex>
        <Spacer h={"50px"} />
        <Grid
          templateColumns={{
            base: "repeat(4, 1fr)",
            md: "repeat(4, 1fr)",
            sm: "repeat(2, 1fr)",
          }}
          rowGap={"30px"}
        >
          {data.map((ele) => (
            <Link to={'/menu#launch'}>
              <GridItem
                w={"243.141px"}
                h={"243px"}
                boxShadow={"md"}
                bgColor={"#F8F7F5"}
              >
                <Img src={ele.image} alt="image" />
                <Heading
                  fontSize={"18px"}
                  textAlign={"center"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={"auto"}
                  h={"44px"}
                  mt={"10px"}
                  letterSpacing={"-1px"}
                >
                  {ele.title}
                </Heading>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
