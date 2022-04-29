import { Button, HStack, Input } from "@chakra-ui/react"
import { addDoc, collection } from "firebase/firestore"
import { FormEventHandler, useState } from "react"
import { Task } from "../../types"
import { db } from "../../util/firebase"

const ClassAddControl = () => {
  const [input, setInput] = useState("")

  const addTask: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    if (input === "") return

    const task: Task = {
      text: input,
      checked: false,
    }
    const taskcollectionref = collection(db, "tasks")
    await addDoc(taskcollectionref, task);

    setInput("")
  }

  return (
    <form onSubmit={addTask}>
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
