import { Button, HStack, Input } from "@chakra-ui/react"
import { addDoc, collection } from "firebase/firestore"
import { FormEventHandler, useState } from "react"
import { Class } from "../../types"
import { db } from "../../util/firebase"

const ClassAddControl = () => {
  const [input, setInput] = useState("")

  const addClass: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if (input === "") return

    const course: Class = {
      text: input,
      checked: false,
    }
    const classcollectionref = collection(db, "classes")
    await addDoc(classcollectionref, course);

    setInput("")
  }

  return (
    <form onSubmit={addClass}>
      <HStack shouldWrapChildren>
        <Input
          value={input}
          type="text"
          placeholder="Enter a Class..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Add Class</Button>
      </HStack>
    </form>
  )
}

export default ClassAddControl
