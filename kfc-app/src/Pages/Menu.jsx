import React from "react";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Spacer,
  Grid,
  Input,
  GridItem,
  Img,
  Heading,
  Stack,
  Button,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { temp } from "../components/Navbar";

export default function Menu() {
  // addto cart
  const { getData } = React.useContext(CartContext);
  // chicken buckets
  const [data, setData] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/launch",
      method: "GET",
    }).then((res) => setData(res.data));
  }, []);

  // new launch
  const [launch, setLaunch] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/launch",
      method: "GET",
    }).then((res) => setLaunch(res.data));
  }, []);

  // BIRYANI BUCKETS
  const [biryani, setBiryani] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/biryani",
      method: "GET",
    }).then((res) => setBiryani(res.data));
  }, []);

  // BOX MEALS
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/meal",
      method: "GET",
    }).then((res) => setMeal(res.data));
  }, []);

  // burger
  const [burger, setBurger] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/burger",
      method: "GET",
    }).then((res) => setBurger(res.data));
  }, []);

  // stay hoem special
  const [homemeal, setHomemeal] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/homemeal",
      method: "GET",
    }).then((res) => setHomemeal(res.data));
  }, []);

  // snacks
  const [snack, setSnack] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/snack",
      method: "GET",
    }).then((res) => setSnack(res.data));
  }, []);

  // beverage
  const [beverage, setBeverage] = useState([]);
  useEffect(() => {
    axios({
      url: "http://localhost:8000/beverage",
      method: "GET",
    }).then((res) => setBeverage(res.data));
  }, []);
  return (
    <Box w="1103.12px" m="auto">
      <Spacer h={"140px"} />
      <Box position={"fixed"}>{temp}</Box>
      <Box m={"40px 0px 40px 0px"} position={"fixed"} w="100%">
        <Heading style={{ fontStretch: "condensed" }} fontSize={"35px"}>
          KFC MENU
        </Heading>
      </Box>
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
        <div id="chicken"></div>
        <Box>
          <Heading m={"10px 0px 10px 0px"}>
            <Box border={"1px solid black"}></Box>
          </Heading>
        </Box>

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
              <GridItem colSpan={{ base: 2, md: 1, sm: 1 }} ml="20px">
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
                    _hover={{ background: "rgba(255, 0, 0, 0.8)"}}
                    onClick={()=>getData(ele)}
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

        {/* New Launch */}
        <div id="launch"></div>
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
                >
                  {ele.name}
                </Heading>
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"5px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "210px", marginLeft: "5px" }}>
                  {ele.detail}
                </p>
                <Box m={"30px 0px 30px 0px"}>
                  <Center>
                    <Button
                      w={"184px"}
                      h={"44px"}
                      borderRadius={"30px"}
                      bgColor={"red"}
                      color={"white"}
                      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                      onClick={()=>getData(ele)}
                    >
                      Add to Cart{" "}
                      <Img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        ml={"5px"}
                      />
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* biryani */}
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
                >
                  {ele.name}
                </Heading>
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"5px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "210px", marginLeft: "5px" }}>
                  {ele.detail}
                </p>
                <Box m={"30px 0px 30px 0px"}>
                  <Center>
                    <Button
                      w={"184px"}
                      h={"44px"}
                      borderRadius={"30px"}
                      bgColor={"red"}
                      color={"white"}
                      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                      onClick={()=>getData(ele)}
                    >
                      Add to Cart{" "}
                      <Img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        ml={"5px"}
                      />
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* box meals */}
        <div id="meal"></div>
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
              BOX MEALS
            </Heading>
          </Box>
          <Spacer h={"20px"} />

          <Grid
            templateColumns={"repeat(3, 1fr)"}
            rowGap="50px"
            w={"865px"}
            // border="1px solid red"
            mt={"20px"}
          >
            {meal.map((ele) => (
              <GridItem
                colSpan={{ base: 3, md: 1, sm: 1 }}
                ml="20px"
                w={"260px"}
                h={"475px"}
                // border={"1px solid red"}
                borderRadius={"10px"}
                boxShadow={"lg"}

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
                >
                  {ele.name}
                </Heading>
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"5px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "210px", marginLeft: "5px" }}>
                  {ele.detail}
                </p>
                <Box m={"30px 0px 30px 0px"}>
                  <Center>
                    <Button
                      w={"184px"}
                      h={"44px"}
                      borderRadius={"30px"}
                      bgColor={"red"}
                      color={"white"}
                      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                      onClick={()=>getData(ele)}
                    >
                      Add to Cart{" "}
                      <Img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        ml={"5px"}
                      />
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* burgers */}
        <div id="burger"></div>
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
              BURGERS
            </Heading>
          </Box>
          <Spacer h={"20px"} />

          <Grid
            templateColumns={"repeat(3, 1fr)"}
            rowGap="50px"
            w={"865px"}
            // border="1px solid red"
            mt={"20px"}
          >
            {burger.map((ele) => (
              <GridItem
                colSpan={{ base: 3, md: 1, sm: 1 }}
                ml="20px"
                w={"260px"}
                h={"475px"}
                // border={"1px solid red"}
                borderRadius={"10px"}
                boxShadow={"lg"}
        
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
                >
                  {ele.name}
                </Heading>
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"5px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "210px", marginLeft: "5px" }}>
                  {ele.detail}
                </p>
                <Box m={"30px 0px 30px 0px"}>
                  <Center>
                    <Button
                      w={"184px"}
                      h={"44px"}
                      borderRadius={"30px"}
                      bgColor={"red"}
                      color={"white"}
                      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                      onClick={()=>getData(ele)}
                    >
                      Add to Cart{" "}
                      <Img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        ml={"5px"}
                      />
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* stay home specials */}
        <div id="homemeal"></div>
        <Box mt={"50px"} borderRadius={"5px"}>
          <Spacer h={"20px"} />
          <Box>
            <Heading
              fontSize={"32px"}
              lineHeight={"50px"}
              // border={"1px solid red"}
              letterSpacing={"-2px"}
              ml={"20px"}
            >
              STAY HOME SPECIALS
            </Heading>
          </Box>
          <Spacer h={"20px"} />

          <Grid
            templateColumns={"repeat(3, 1fr)"}
            rowGap="50px"
            w={"865px"}
            // border="1px solid red"
            mt={"20px"}
          >
            {homemeal.map((ele) => (
              <GridItem
                colSpan={{ base: 3, md: 1, sm: 1 }}
                ml="20px"
                w={"260px"}
                h={"475px"}
                // border={"1px solid red"}
                borderRadius={"10px"}
                boxShadow={"lg"}

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
                  pl={"10px"}
                >
                  {ele.name}
                </Heading>
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"10px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "210px", marginLeft: "10px" }}>
                  {ele.detail}
                </p>
                <Box m={"30px 0px 30px 0px"}>
                  <Center>
                    <Button
                      w={"184px"}
                      h={"44px"}
                      borderRadius={"30px"}
                      bgColor={"red"}
                      color={"white"}
                      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                      onClick={()=>getData(ele)}
                    >
                      Add to Cart{" "}
                      <Img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        ml={"5px"}
                      />
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
        {/* snacks */}
        <div id="snack"></div>
        <Box mt={"50px"} borderRadius={"5px"}>
          <Spacer h={"20px"} />
          <Box>
            <Heading
              fontSize={"32px"}
              lineHeight={"50px"}
              // border={"1px solid red"}
              letterSpacing={"-2px"}
              ml={"20px"}
            >
              SNACKS
            </Heading>
          </Box>
          <Spacer h={"20px"} />

          <Grid
            templateColumns={"repeat(3, 1fr)"}
            rowGap="50px"
            w={"865px"}
            // border="1px solid red"
            mt={"20px"}
          >
            {snack.map((ele) => (
              <GridItem
                colSpan={{ base: 3, md: 1, sm: 1 }}
                ml="20px"
                w={"260px"}
                h={"475px"}
                // border={"1px solid red"}
                borderRadius={"10px"}
                boxShadow={"lg"}
    
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
                  pl={"10px"}
                >
                  {ele.name}
                </Heading>
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"10px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "210px", marginLeft: "10px" }}>
                  {ele.detail}
                </p>
                <Box m={"30px 0px 30px 0px"}>
                  <Center>
                    <Button
                      w={"184px"}
                      h={"44px"}
                      borderRadius={"30px"}
                      bgColor={"red"}
                      color={"white"}
                      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                      onClick={()=>getData(ele)}
                    >
                      Add to Cart{" "}
                      <Img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        ml={"5px"}
                      />
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>
        {/* beverage */}
        <div id="beverage"></div>
        <Box mt={"50px"} borderRadius={"5px"}>
          <Spacer h={"20px"} />
          <Box>
            <Heading
              fontSize={"32px"}
              lineHeight={"50px"}
              // border={"1px solid red"}
              letterSpacing={"-2px"}
              ml={"20px"}
            >
              BEVERAGES
            </Heading>
          </Box>
          <Spacer h={"20px"} />

          <Grid
            templateColumns={"repeat(3, 1fr)"}
            rowGap="50px"
            w={"865px"}
            // border="1px solid red"
            mt={"20px"}
          >
            {beverage.map((ele) => (
              <GridItem
                colSpan={{ base: 3, md: 1, sm: 1 }}
                ml="20px"
                w={"260px"}
                h={"475px"}
                // border={"1px solid red"}
                borderRadius={"10px"}
                boxShadow={"lg"}

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
                  pl={"10px"}
                >
                  {ele.name}
                </Heading>
                <Heading fontSize={"16px"} m={"10px 0px 10px 0px"} pl={"10px"}>
                  {ele.price}
                </Heading>
                <p style={{ width: "210px", marginLeft: "10px" }}>
                  {ele.detail}
                </p>
                <Box m={"30px 0px 30px 0px"}>
                  <Center>
                    <Button
                      w={"184px"}
                      h={"44px"}
                      borderRadius={"30px"}
                      bgColor={"red"}
                      color={"white"}
                      _hover={{ background: "rgba(255, 0, 0, 0.8)" }}
                      onClick={()=>getData(ele)}
                    >
                      Add to Cart{" "}
                      <Img
                        src="https://online.kfc.co.in/static/media/Icon_Add_to_Cart.58b87a9b.svg"
                        ml={"5px"}
                      />
                    </Button>
                  </Center>
                </Box>
              </GridItem>
            ))}
          </Grid>
        </Box>

        {/* END */}
      </Box>
    </Box>
  );
}
