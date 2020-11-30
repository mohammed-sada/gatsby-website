import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import { Link } from "gatsby"
import Style from "../components/blog.module.css"

const ComponentName = ({ data }) => {
    const { allContentfulProducts: { nodes: products } } = data

    return (
        <Layout>
            <section className={Style.page}>
                {products.map(product => {
                    return (
                        <article key={product.id}>
                            <Image fluid={product.image.fluid} alt={product.title} />
                            <h3>{product.title} <span>${product.price}</span></h3>
                            <Link to={`/products/${product.slug}`} >More Details</Link>
                        </article>
                    )

                })
                }
            </section>
        </Layout>
    )
}
export const query = graphql`
  {
    allContentfulProducts {
      nodes {
        title
        price
        slug
        id
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName

