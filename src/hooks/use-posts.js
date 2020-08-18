import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            keywords
            slug
            image {
              sharp: childImageSharp {
                fluid(
                  maxWidth: 100
                  maxHeight: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    keywords: post.frontmatter.keywords,
    image: post.frontmatter.image,
    excerpt: post.excerpt,
  }));
};

export default usePosts;
