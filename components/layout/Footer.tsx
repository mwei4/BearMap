import { Box, Divider, Text } from "@chakra-ui/react"
import { Center, Square, Circle } from '@chakra-ui/react'
import React from "react"


const Footer = () => (
  <Box as="footer" px={4}>
    <Divider my={4} />
      <Center bg='red' h='50px' color='white'>
      Created by Michael Wei, Josh De Leeuw, Mikayla Lin, and Zandt Lavish
      </Center>

  </Box>
)

export default Footer
