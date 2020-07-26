import React from "react"
import Posts from "../components/Posts"
import PrimaryLayout from '../layouts/PrimaryLayout'
import  { graphql, Link } from 'gatsby'

export default ({ data }) => {
    return (
        <PrimaryLayout>
          <section id="about" className="about container">
            <span className="about__sub space">
              Hiiii! ʕ•ᴥ•ʔ My name is
            </span>
            <h1 className="about__hero space">
              Jennifer Quispe
            </h1>
              <p className="about__me">I'm a senior front-end engineer located in Miami, Florida with 
              eight years of experience building sites for non-profits, start-ups, and international agencies, and specialize in eCommerce - Salesforce Commerce Cloud, Shopify Pro, and now Sitecore.</p>
              <Link className="project__link space" to="https://www.linkedin.com/in/jenniferquispe/" target="_blank">
                connect with me
              </Link>
          </section>
          <section id="portfolio" className="portfolio container">
              {data.allMarkdownRemark.nodes.map(node => (
                  <Posts
                  key = {node.id}
                  title={node.frontmatter.title}
                  image={node.frontmatter.image}
                  excerpt={node.frontmatter.keywords}
                  readMore={node.fields.slug}>
                  </Posts>
              ))}
          </section>
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