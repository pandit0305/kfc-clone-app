import { Box, Spacer } from "@chakra-ui/react";
import Welcome from './Home_section/Welcome';
import Category from './Home_section/Category';
import Offer from './Home_section/Offer';
import Footer from "./Home_section/Footer";
import Navbar from "../components/Navbar";

export default function Home(){
    return(
        <>
            <Navbar/>
            <Box id="home">
                <Spacer h={"140px"}/>
                <Welcome/>
                <Category/>
                <Offer/>
                <Footer/>
            </Box>
        </>
    )
}
