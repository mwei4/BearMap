import { Text, VStack } from "@chakra-ui/react"
import { ClassWithId } from "../../types"
import ClassItem from "./ClassItem"

type Props = {
  readonly courses: ClassWithId[]
}

const ClassList = ({ courses }: Props) => {
  return (
    <VStack>
      {courses.length ? (
        //conditional rendering
        courses.map((course) => <ClassItem key={course.id} class={course} />)
      ) : (
        <Text>You currently have no classes in your class list!</Text>

      )}
    </VStack>
  )
}

export default ClassList
