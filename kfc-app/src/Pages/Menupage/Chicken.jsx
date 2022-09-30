import {
  Box,
  Spacer,
  Grid,
  GridItem,
  Img,
  Heading,
  Button,
} from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import React from "react";
import { CartContext } from "../../context/cartcontext/CartContext";
import { addToCart } from "../../context/cartcontext/action";

export default function Chicken() {
  const { dispatch } = React.useContext(CartContext);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/chicken",
      method: "GET",
    }).then((res) => setData(res.data));
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
              <Button
                w={"184px"}
                h={"44px"}
                borderRadius={"30px"}
                bgColor={"red"}
                color={"white"}
                _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                onClick={() => dispatch(addToCart(ele))}
              >
                Add to Cart{" "}
                <Img
                  src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                  ml={"5px"}
                />
              </Button>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  </>
  );
}
