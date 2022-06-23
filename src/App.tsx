import { useEffect, useState } from 'react'
import { client } from './lib/apollo'
import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`

interface Lesson
{
  id: string;
  title: string;
}


function App() {
  const { data } = useQuery<{ lessons: Lesson[]}>(GET_LESSONS_QUERY);

  // useEffect(() => {
  //   client.query({
  //     query: GET_LESSONS_QUERY
  //   }).then(response => {
  //     console.log(response.data);
  //   })
  // }, [])

  return (
    <div className="App">
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={`lesson-${lesson.id}`}>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}

export default App
