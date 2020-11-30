import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/button"
import { Link } from "gatsby";
import { useState } from "react";


export default function Home() {
  const [like, setLike] = useState(0);

  return <Layout>
    <h1>
      Hello guys!
  </h1>
    <Link to="/blog"><ExampleButton>Blog</ExampleButton></Link>
    <div>
      <ExampleButton onClick={() => setLike(like + 1)}>Like ! </ExampleButton>
      <ExampleButton onClick={() => setLike(like - 1)}>Dislike ! </ExampleButton>
    </div>
    <h3>likes: {like}</h3>
  </Layout>
}
