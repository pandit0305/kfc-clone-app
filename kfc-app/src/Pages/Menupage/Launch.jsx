import React from "react";
import CartButton from "../addtocart/CartButton";
import { launch } from "./menu-data/LaunchData";
import {
  Box,
  Spacer,
  Grid,
  GridItem,
  Img,
  Heading,
  Center,
} from "@chakra-ui/react";

// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import Loading from "../../loading/Loading";

export default function Launch() {
  // const [loading, setLoading] = useState(false);
  // const [launch, setLaunch] = useState([]);
  // useEffect(() => {
  //   setLoading(true);
  //   axios({
  //     url: "https://my-app-server.onrender.com/launch",
  //     method: "GET",
  //   })
  //     .then((res) => {
  //       setLoading(false);
  //       setLaunch(res.data);
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //     });
  // }, []);
  return (
    <>
      <Box id="launch" h={"90px"}></Box>

      <Box mt={"50px"} borderRadius={"5px"}>
        <Spacer h={"20px"} />
        <Box>
          <Heading
            fontSize={"32px"}
            lineHeight={"50px"}
            // border={"1px solid red"}
            ml={"20px"}
            letterSpacing={"-2px"}
          >
            NEW LAUNCH
          </Heading>
        </Box>
        <Spacer h={"20px"} />

        {/* {loading && <Loading />} */}

        <Grid
          templateColumns={"repeat(3, 1fr)"}
          rowGap="50px"
          w={"865px"}
          // border="1px solid red"
          mt={"20px"}
        >
          {launch.map((ele) => (
            <GridItem
              colSpan={{ base: 3, md: 1, sm: 1 }}
              ml="20px"
              w={"260px"}
              h={"475px"}
              // border={"1px solid red"}
              borderRadius={"10px"}
              boxShadow={"lg"}
              key={ele.id}
              position="relative"
            >
              <Img
                src={ele.image}
                alt="image_launch"
                w={"auto"}
                h={"210px"}
                borderRadius={"5px"}
              />
              <Heading
                fontSize={"16px"}
                m={"10px 0px 10px 0px"}
                w={"200px"}
                pl={"5px"}
                ml={"15px"}
              >
                {ele.name}
              </Heading>
              <Heading
                fontSize={"16px"}
                m={"10px 0px 10px 0px"}
                pl={"5px"}
                ml={"15px"}
              >
                {ele.price}
              </Heading>
              <p style={{ width: "200px", marginLeft: "15px" }}>{ele.detail}</p>
              <Box
                m={"30px 0px 30px 0px"}
                position="absolute"
                bottom={"5px"}
                left="30px"
              >
                <Center>
                  <CartButton ele={ele} />
                </Center>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
}
