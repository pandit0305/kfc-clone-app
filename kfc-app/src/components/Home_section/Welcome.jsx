import {
  Heading,
  Box,
  Img,
} from "@chakra-ui/react";
import { temp } from "../Navbar";

const template =
  "https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1366&fit=fill&fm=webp";
export default function Welcome() {
  return (
    <Box>
      <Img src={template} alt="template" />
      <Box bgColor={"#F8F7F5"}>
        <Box w={"1102.12px"} m={"auto"} h={"137.703px"}>
          {temp}
          <Heading
            m={"35px 0px 35px 0px"}
            fontWeight={"bold"}
            letterSpacing={"-2px"}
            fontSize={"44px"}
          >
            WELCOME TO KFC!
          </Heading>
        </Box>
      </Box>
    </Box>
  );
}
