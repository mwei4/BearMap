import { DeleteIcon } from "@chakra-ui/icons"
import { Checkbox, HStack, IconButton, Text } from "@chakra-ui/react"
import { collection, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { ClassWithId } from "../../types"
import { db } from "../../util/firebase"

type Props = {
  readonly class: ClassWithId
}

const ClassItem = ({ class: { id, text, checked } }: Props) => {
  const toggleClass = async () => {
    const classcollectionref = collection(db, 'classes')
    const docref = doc(classcollectionref, id)
    await updateDoc(docref, {checked: true})
  }

  const deleteClass = async () => {
    const classcollectionref = collection(db, 'classes')
    const docref = doc(classcollectionref, id)
    await deleteDoc(docref)
  }

  return (
    <HStack w="100%">
      <Checkbox isChecked={checked} onChange={toggleClass} />
      <Text textDecorationLine={checked ? "line-through" : "initial"}>
        {text}
      </Text>
      <IconButton
        aria-label="delete class"
        size="xs"
        variant="ghost"
        colorScheme="red"
        icon={<DeleteIcon />}
        onClick={deleteClass}
      />
    </HStack>
  )
}

export default ClassItem
