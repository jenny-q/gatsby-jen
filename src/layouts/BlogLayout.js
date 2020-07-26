import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { graphql } from "gatsby"

const BlogLayout = ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <Header></Header>
                <div className="container">
                    <div className="work" id={post.frontmatter.title}>
                        <h1 className="space">{post.frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: post.html}} />
                    </div>
                </div>
            <Footer></Footer>
        </div>
    )
}


export default BlogLayout;

export const query = graphql `
query($slug: String!) {
    markdownRemark(fields : {slug: {eq: $slug}}) {
        html
        frontmatter {
            title
            image
        }
    }
}
`