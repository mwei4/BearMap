import { Button, HStack, Input } from "@chakra-ui/react"
import { addDoc, collection } from "firebase/firestore"
import { FormEventHandler, useState } from "react"
import { Class } from "../../types"
import { db } from "../../util/firebase"
import ClassInfo from './ClassInfo'

const Prereq = () => {
  //hooks
  const [input, setInput] = useState("")
  const [final, setFinal] = useState("")

  const addtext: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if (input === "") return

    setFinal(input)

    setInput("")
  }

  return (
    <><form onSubmit={addtext}>
          <HStack shouldWrapChildren>
              <Input
                  value={input}
                  type="text"
                  placeholder="Enter a Class..."
                  onChange={(e) => setInput(e.target.value)} />
              <Button type="submit">Add Class</Button>
          </HStack>
      </form><ClassInfo title = {final.toUpperCase()}/></>

  )
}

export default Prereq