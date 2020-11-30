import React from "react"
import { useStaticQuery, graphql } from "gatsby"
const getData = graphql`
query myFirstQuery
{
  site {
   info: siteMetadata {
      author
      data
      description
      person {
        name
        age
      }
      title
    }
  }
}
`
const ComponentName = () => {
  const { site: { info: { title, person } } } = useStaticQuery(getData)
  return <div>
    <h2>{person.name}</h2>
    <h2>{person.age}</h2>
    <h2>{title}</h2>
  </div>
}

export default ComponentName
