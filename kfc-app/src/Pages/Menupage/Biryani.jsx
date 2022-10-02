import {
    Box,
    Spacer,
    Grid,
    GridItem,
    Img,
    Heading,
    Center,
  } from "@chakra-ui/react";
  
  import axios from "axios";
  import { useState } from "react";
  import { useEffect } from "react";
  import Loading from "../../loading/Loading";
  import React from "react";

  import CartButton from "../addtocart/CartButton";

  export default function Biryani() {
    const [loading, setLoading] = useState(false)
    const [biryani, setBiryani] = useState([]);

    useEffect(() => {
      setLoading(true)
      axios({
        url: "https://my-app-server.onrender.com/biryani",
        method: "GET",
      }).then((res) => {
        setLoading(false)
        setBiryani(res.data)}
        )
        .catch((err)=>{
          setLoading(false)
          console.log(err)
        })
        ;
    }, []);
    return (
      <>
          <div id="biryani"></div>
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
              BIRYANI BUCKETS
            </Heading>
          </Box>
          <Spacer h={"20px"} />
        {loading && <Loading/>}
          <Grid
            templateColumns={"repeat(3, 1fr)"}
            rowGap="50px"
            w={"865px"}
            // border="1px solid red"
            mt={"20px"}
          >
            {biryani.map((ele) => (
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
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"5px"} ml={"15px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "220px", marginLeft: "15px" }}>
                  {ele.detail}
                </p>
                <Box position="absolute" bottom={"25px"} left="30px">
                  <Center>
                      <CartButton ele={ele}/>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </>
    );
  }
  