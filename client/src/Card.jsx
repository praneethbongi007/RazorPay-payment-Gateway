import React from 'react'
import { Image, VStack,Text, Button } from "@chakra-ui/react"

function Card({amount,img,checkoutHandler}) {
  return (
    <VStack>
        <Image src={img}  boxSize={"60"} objectFit="cover" />
        <Text>₹{amount}</Text>
        <Button onClick={()=>checkoutHandler(amount)}>Buy Now</Button>
    </VStack>
  )
}

export default Card