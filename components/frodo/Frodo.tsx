import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, getDocs, query, QuerySnapshot } from "firebase/firestore"
import { onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { TaskWithId } from "../../types"
import { db } from "../../util/firebase"
import TaskAddControl from "./TaskAddControl"
import TaskList from "./TaskList"

const FrodoHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    BearMaps: My Class List TESTING
  </Heading>
)


const taskcollectionref = collection(db, 'tasks' )
const taskQuery = query(taskcollectionref)

const Frodo = () => {
  const [tasks, setTasks] = useState<TaskWithId[] | null>(null)

  // Subscribes to `taskQuery`
  // We define a function to run whenever the query result changes
  useEffect(() => {
    const unsubscribe = onSnapshot(taskQuery, (querySnapshot) => {
      getDocs(taskQuery).then((snap) => {
        const taskData = snap.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as TaskWithId)
        )
        setTasks(taskData)
      })
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={4}>
      <FrodoHeading />
      <TaskAddControl />
      {tasks ? <TaskList tasks={tasks} /> : <Spinner />}
    </VStack>
  )
}

export default Frodo
