import { Text, VStack } from "@chakra-ui/react"
import { TaskWithId } from "../../types"
import ClassItem from "./ClassItem"

type Props = {
  readonly tasks: TaskWithId[]
}

const TaskList = ({ tasks }: Props) => {
  return (
    <VStack>
      {tasks.length ? (
        tasks.map((task) => <ClassItem key={task.id} task={task} />)
      ) : (
        <Text>The list is looking kinda empty 👀</Text>
      )}
    </VStack>
  )
}

export default TaskList
