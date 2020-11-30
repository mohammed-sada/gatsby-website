import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const ComponentName = ({ data: { product: { title, price, image: { fixed }, info: { info } } } }) => {
    return (
        <Layout>
            <div style={{ textAlign: "center", marginTop: 15 }}>
                <Link to="/products">Back To Products</Link>
                <h1>Single Product : {title}</h1>
            </div>
            <section className="single-product">
                <article>
                    <Image fixed={fixed} alt={title} />
                </article>
                <article>
                    <div className="left-border">

                        <h1>{title}</h1>
                        <h3>${price}</h3>
                        <p>{info}</p>
                        <button className="btn">add to cart</button>
                    </div>
                </article>
            </section>
        </Layout>)
}

export const query = graphql`
query getSingleProduct($slug:String){
    product:contentfulProducts(slug: {eq: $slug}) {
      title
      price
      image {
        fixed {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
