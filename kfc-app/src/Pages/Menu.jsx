import { Box, Spacer } from "@chakra-ui/react";
import axios from 'axios';
import { useEffect } from "react";

export default function Menu(){
    useEffect(()=>{
        axios("https://parsehub.com/api/v2/projects/tmsE0jPym00c/last_ready_run/data?api_key=teK5eEKTBQHf",{
            method:"GET",
            format:"json"
        })
        .then(res=>console.log(res))
    },[])
    return (
        <Box>
            <Spacer h={"150px"}/>
            Products
        </Box>
    )
}