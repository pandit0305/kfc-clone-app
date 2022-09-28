import { Box, Spacer, Grid, GridItem, Img,Heading, Button } from "@chakra-ui/react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";

export default function Menu(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        axios({
            url : "http://localhost:3000/launch",
            method:"GET"   
        })
        .then(res=>(
            setData(res.data)
        ))
    },[])
    return (
        <Box>
            <Spacer h={"150px"}/>
            Products
            <Grid templateColumns={'repeat(2, 1fr)'} gap="0px">
                {
                    data.map((ele)=>(
                        <GridItem colSpan={{base:2, md:1, sm:1}}>
                            <Img src={ele.image} alt="image_launch" w={"500px"}/>
                            <Heading>{ele.name}</Heading>
                            <p>{ele.detail}</p>
                            <h2>{ele.price}</h2>
                            <Button>Add To Cart</Button>
                        </GridItem>
                    ))
                }
            </Grid>
        </Box>
    )
}