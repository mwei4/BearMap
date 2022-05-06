import { Heading, Spinner, VStack } from "@chakra-ui/react"
import { collection, getDocs, query, QuerySnapshot } from "firebase/firestore"
import { onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import { ClassWithId } from "../../types"
import { db } from "../../util/firebase"
import ClassAddControl from "./ClassAddControl"
import ClassList from "./ClassList"

const ClassHeading = () => (
  <Heading
    as="h1"
    w="fit-content"
    bgGradient="linear(to-r, cyan.700, purple.500)"
    bgClip="text"
    lineHeight={1.33}
  >
    BearMaps: My Class List
  </Heading>
)


const classcollectionref = collection(db, 'classes')
const classQuery = query(classcollectionref)

const Frodo = () => {
  const [courses, setCourses] = useState<ClassWithId[] | null>(null)

  // Subscribes to `classQuery`
  // We define a function to run whenever the query result changes
  useEffect(() => {
    const unsubscribe = onSnapshot(classQuery, (querySnapshot) => {
      getDocs(classQuery).then((snap) => {
        const classData = snap.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as ClassWithId)
        )
        setCourses(classData)
      })
    })
    return unsubscribe
  }, [])

  return (
    <VStack spacing={4}>
      <ClassHeading />
      <ClassAddControl />
      {courses ? <ClassList courses={courses} /> : <Spinner />}
    </VStack>
    
  )
}

export default Frodo
