import {
  Box,
  Spacer,
  Grid,
  GridItem,
  Img,
  Heading,
} from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import React from "react";
import Loading from "../../loading/Loading";
import CartButton from "../addtocart/CartButton";




export default function Chicken() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true)
    axios({
      url: "https://my-app-server.onrender.com/chicken",
      method: "GET",
    }).then((res) => {
    setLoading(false)
    setData(res.data)})
    .catch((err)=>{
    setLoading(false)
      console.log(err)
    })
    ;
  }, []);


  return (
    <>
    <div id="chicken"></div>
    <Box bgColor={"#F8F7F5"} mt={"50px"} borderRadius={"5px"}>
       
      <Spacer h={"20px"} />
      <Box>
        <Heading
          fontSize={"32px"}
          lineHeight={"50px"}
          // border={"1px solid red"}
          ml={"20px"}
          letterSpacing={"-2px"}
        >
          CHICKEN BUCKETS
        </Heading>
      </Box>
      <Spacer h={"20px"} />

      {loading && <Loading/>}
      <Grid
        templateColumns={"repeat(2, 1fr)"}
        rowGap="50px"
        w={"865px"}
        // border="1px solid red"
        mt={"20px"}
      >
        {data.map((ele) => (
          <GridItem colSpan={{ base: 2, md: 1, sm: 1 }} ml="20px" key={ele.id}>
            <Img
              src={ele.image}
              alt="image_launch"
              w={"388px"}
              h={"285px"}
              borderRadius={"5px"}
            />
            <Heading fontSize={"16px"} m={"10px 0px 10px 0px"}>
              {ele.name}
            </Heading>
            <Heading fontSize={"16px"} m={"10px 0px 10px 0px"}>
              {ele.price}
            </Heading>
            <p style={{ width: "385px" }}>{ele.detail}</p>
            <Box m={"30px 0px 30px 0px"}>
              <CartButton ele={ele} id ={ele.id}/>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  </>
  );
}
