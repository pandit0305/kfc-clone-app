import React from "react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { Flex, Box, Grid, GridItem, Button, Center } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { AuthContext } from "../context/authcontext/AuthContext";
import MyAccount from "./MyAccount";

import {
  Modal,
  Img,
  Text,
  Spacer,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

const links = [
  { path: "/menu", title: "Menu" },
  { path: "/career", title: "Careers" },
  { path: "/about", title: "About" },
];

const home =
  "data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/8QAAv/aAAwDAQACAAMAAAAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEIAAAAAAAEAAAAAQgAAAAAEAAAAIEAAAAAkAAAAEE8AAEAAAEIAAAAAAAUYM4gAAAAQMAAAAAIAAAAAgAEMEA0AAAAAEAAAAsEUAAgoAAIAAAAAAAAAo0AsEEQEUAAMEUUosMEAAQEAQgsEAcYUgAAAAQAkAAgMAM4Iw0QcMEIA4AgMkcQoUEEMoMYMUgYAAAQUIkEkAgkMAkAAAcUAAIggookQAUEkYosAAIIg8EIAgQUgEQIMcEIgAAAUEAQEAAgw4wEAAAIwEoIooIkgIoEEw8I0MAIkUUwwAsoUgMUscAIUI8AAQAAQQAgIoIs0UAQAAYUcAwgYcYgsoQA4kYAA44AgAAAAAAQwAAAAQAUoAAAAQgAggAAAAAAUEwAgAQgQwwAAAAQAAAgAEAwAAAAAAAAAAAAAAAMAAAQAAAAAAAAAAAAAAUMIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8QAAv/aAAwDAQACAAMAAAAQ888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888488888884488888sc888884w044080888sc88888wI884888o888888884koI8888sk48888sc88888I840wcAc8888s8888gkU88Qc888c88888888UAYMc4g48c0Q4owcg44084s80Mok0sM8M8884kEY8gc088wcg80880U88oQksAsIos8wwcMM8c0488o4QY8E0cAQ0go88ws8cUQ008UEUMYAk8o08Uw840k8Ygocc4E8o04Yso88484480gwYks488UE4cckcU4cw8ogII80Q80Yc848o0gkow4kYcMgUY08o48oo8cUUoUIo8oc84w8440kkEc4Y8UEsk88UcUM8c8888sMcc88ccY088o88c8c8scss888occ0ss88cM8sMsM8s8c8w0gc8888888888888800c8os888888888888800s888888888888888888888888888888888888888s8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888//8QAFBEBAAAAAAAAAAAAAAAAAAAAkP/aAAgBAgEBPwBV/wD/xAAUEQEAAAAAAAAAAAAAAAAAAACQ/9oACAEDAQE/AFX/AP/EAE0QAAEDAgIECQgGCAUBCQAAAAECAwQABRARBhIhMRMUIjJBUXFygSAjMzQ1YXOxFjBCUmKRJCVAVGOSocEVUFOC0WRDRGCAg6CisuH/2gAIAQEAAT8C/wDOtKvMWNI4FWZPSR0UlQUAQcwfrLndEQtQausVdFRJbMpsKbUOzpH+RyZbEVGs6vKpl3lvvFSHVIT9kA5VZ5nGYiddYLg531hIAJPRSL7birLhMvflTEpiQjWacCh9bNloiR1Oq6OirddWZiehK/uZ/sLzzTCCtxYSmos2PKQVNKzAOR8i5XFuE11rPNTUfSFni+b/AKTPckVb7px11SUskJSN/wBVJUVyHlHpWahX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";

const find = "Find A KFC";
const order = "Start Order";
const login = (
  <Box mt="5px">
    <NavLink to="/login">
      <Icon icon="teenyicons:user-circle-solid" fontSize={"30px"}/>
    </NavLink>
  </Box>
);
const cart = <Icon icon="mingcute:shopping-bag-2-line" fontSize={"30px"} />;

export const temp = (
  <Grid w={"45px"} templateColumns={"repeat(3,1fr)"}>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
    <GridItem w="8px" h={"18px"} border="1px solid red" bg={"red"}></GridItem>
  </Grid>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = React.useContext(AuthContext);

  const navbar = (
    <Box position={"fixed"} w="100%" zIndex={"1000"} bgColor={"white"}>
      <Flex
        justifyContent={"space-between"}
        w="1103.12px"
        h={"100px"}
        m={"auto"}
        position={"relative"}
        // border={"1px solid red"}
      >
        <Box >
          {temp}
          <Flex w={"700px"} gap={"50px"} mt="30px">
            <NavLink to={"/"}>
              <Img
                src={home}
                alt="logo_kfc"
                w="200px"
                h="40px"
                mt={"-5px"}
                borderRadius={"10px"}
              />
            </NavLink>
            {links.map((ele) => (
              <NavLink
                key={ele.path}
                to={ele.path}
                style={{ fontWeight: "bold", fontSize: "14px" }}
              >
                {ele.title}
              </NavLink>
            ))}
            <NavLink
              to={"/find_kfc"}
              style={{ fontWeight: "bold", fontSize: "14px" }}
            >
              {find}
              <ExternalLinkIcon fontSize={"13px"} mb="3px" ml="3px" />
            </NavLink>
          </Flex>
        </Box>
        <Box>
          <Flex w="380px" mt={"40px"} gap="30px" >
            <NavLink to={"/start_order"}>
              <Button
                w={"165px"}
                h="44px"
                borderRadius={"30px"}
                bgColor="red"
                color={"white"}
                fontWeight="bold"
                _hover={"red.200"}
              >
                {order}
              </Button>
            </NavLink>
            <Box >
            {!user ? login : <MyAccount />}
            </Box>

            <NavLink to={"/cart"}>
              <Button _hover={"none"} bg={"white"} >
                {cart}
              </Button>
            </NavLink>
          </Flex>
        </Box>
      </Flex>
      <Box
        position={"fixed"}
        w="100%"
        zIndex={"-1"}
        bgColor={"#202124"}
        _hover={{ background: "rgba(0, 0, 0, 0.9)" }}
      >
        <Box>
          <Box onClick={onOpen} w={"100%"} h="40px">
            <Center mt={"0px"} cursor="pointer">
              <Text mt={"10px"}>
                <Icon
                  icon="carbon:location-filled"
                  color="red"
                  fontSize={"20px"}
                />
              </Text>
              <Text color={"white"} ml="5px" mt={"5px"}>
                Start an Order for Pickup or Delivery
              </Text>
            </Center>
          </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent maxW={{ base: "980px" }}>
              <ModalHeader fontWeight={"bold"}>
                <Center>START YOUR ORDER</Center>
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody
                backgroundColor="lightgray"
                borderBottomRadius={"10px"}
              >
                <Center
                  w={"350px"}
                  m="auto"
                  textAlign={"center"}
                  fontSize="25px"
                  fontWeight={"bold"}
                >
                  LET'S GET STARTED. WOULD YOU LIKE PICKUP OR DELIVERY?
                </Center>
                <Spacer h={"15px"} />
                <Center>
                  <Text>
                    Menu availability and pricing may vary between order types.
                  </Text>
                </Center>
                <Spacer h={"15px"} />
                <Grid
                  templateColumns={"repeat(2, 1fr)"}
                  ml={{ base: "200px", sm: "150px", lg: "200px" }}
                >
                  <GridItem colSpan={1}>
                    <Button
                      borderRadius={"30px"}
                      border="1px solid black"
                      p={"30px 40px 30px 40px"}
                      fontWeight="bold"
                    >
                      QUICK PICK-UP
                    </Button>
                  </GridItem>
                  <GridItem colSpan={{ base: 1, md: 2, sm: 2, lg: 1 }}>
                    <Button
                      borderRadius={"30px"}
                      border="1px solid black"
                      p={"30px 40px 30px 40px"}
                      fontWeight="bold"
                    >
                      DELIVERY
                    </Button>
                  </GridItem>
                </Grid>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  );

  return <>{navbar}</>;
}
