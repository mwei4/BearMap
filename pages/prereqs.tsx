import { Center } from "@chakra-ui/react"
import { FormEventHandler, useState } from "react"
import Frodo from "../components/classes/Frodo"
import Layout from "../components/layout/Layout"
import Prereq from "../components/layout/PrereqAdd"
import { Class } from "../types"

const FrodoPage = () => {
    /*
    const [input, setInput] = useState("")
    const [final, setFinal] = useState("")

    const change: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault()
      if (input === "") return
  
      setFinal(input)
      setInput("")
    }
    */
    return (
    <Layout title = "Frodo">
      <Prereq/>
    </Layout>
  )
}

export default FrodoPage
