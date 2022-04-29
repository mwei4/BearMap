import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react"
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { TaskWithId } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  readonly task: TaskWithId
}

const ClassItem = ({ task: { id, text, checked } }: Props) => {
  const toggleTask = async () => {
    const taskcollectionref = collection(db, 'tasks')
    const docref = doc(taskcollectionref, id)
    await updateDoc(docref, {checked: true})
  }

  const deleteTask = async () => {
    const taskcollectionref = collection(db, 'tasks')
    const docref = doc(taskcollectionref, id)
    await deleteDoc(docref)
  }

  return (
    <HStack w="100%">
      <Checkbox isChecked={checked} onChange={toggleTask} />
      <Text textDecorationLine={checked ? "line-through" : "initial"}>
        {text}
      </Text>
      <IconButton
        aria-label="delete task"
        size="xs"
        variant="ghost"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={deleteTask}
      />
    </HStack>
  )
}

export default ClassItem
