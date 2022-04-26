import { Heading, Text } from "@chakra-ui/react"
import Layout from "../components/layout/Layout"
import Image from "next/image"
import { Center, Square, Circle } from '@chakra-ui/react'

const IndexPage = () => (
  <Layout title="Home">
    <Center h='50px' color='black'>
      <Heading my="4">
        BearMaps
      </Heading>
    </Center> 
    <Center h='50px' color='black'>
      <Text fontSize="md" my="3">
        To make searching for classes easier than ever before. 
      </Text> 
      </Center> 
    <Image src= "/../public/cornell.jpg" width = "2000px" height = "1000px"></Image>
  </Layout>
)

export default IndexPage
