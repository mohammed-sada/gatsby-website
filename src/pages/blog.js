import React from 'react'
import Layout from "../components/Layout"
import style from "../components/blog.module.css"
console.log(style)

const blog = () => {
    return (
        <Layout>
            <div >
                <h1>this is our blog page</h1>

                <p className={style.text}>
                    failed Re-building development bundle - 23.836s
                    success onPreExtractQueries - 0.010s
                    success extract queries from components - 0.024s
                    success write out requires - 0.010s
                    success Re-building development bundle - 1.802s
            </p>
            </div>
        </Layout>
    )
}

export default blog
