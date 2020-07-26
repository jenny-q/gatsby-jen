import React from "react"
import Posts from "../components/Posts"
import PrimaryLayout from '../layouts/PrimaryLayout'
import  { graphql } from 'gatsby'

export default ({ data }) => {
    return (
        <PrimaryLayout>
        {data.allMarkdownRemark.nodes.map(node => (
            <Posts
            key = {node.id}
            title={node.frontmatter.title}
            image={node.frontmatter.image}
            excerpt={node.frontmatter.keywords}
            readMore={node.fields.slug}>
            </Posts>
        ))}
        </PrimaryLayout>
    )
}

export const query = graphql`
{
    allMarkdownRemark {
        nodes {
        frontmatter {
            title
            date
            keywords
            image
        }
        excerpt
        html
        fields {
            slug
        }
        }
    }
}
`