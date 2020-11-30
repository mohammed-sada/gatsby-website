import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import img from '../images/me.jpg'
import Image from "gatsby-image"

const getImages = graphql`{
    fixed: file(relativePath: {eq: "profile.jpg"}) {
        childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "project.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
  `

const Images = () => {
    const data = useStaticQuery(getImages)
    return (
        <section className="images" >
            <article className="single-image">
                <h3>basic image</h3>
                <img className="br" src={img} width='100%' alt="me"></img>
            </article>
            <article className="single-image">
                <h3>fixed image /blur</h3>
                <Image className="br" fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article className="single-image">
                <h3>fluid image/svg</h3>
                <Image className="br" fluid={data.fluid.childImageSharp.fluid} />
            </article>

        </section>
    )
}

export default Images
