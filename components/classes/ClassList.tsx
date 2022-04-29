import { Text, VStack } from "@chakra-ui/react"
import { CoursewithID } from "../../types"
import ClassItem from "./ClassItem"

type Props = {
  readonly courses: CoursewithID[]
}

const ClassList = ({ courses }: Props) => {
  return (
    <VStack>
      {courses.length ? (
        courses.map((course) => <ClassItem key={course.id} class={course} />)
      ) : (
        <Text>The list is looking kinda empty 👀</Text>

      )}
    </VStack>
  )
}

export default ClassList
