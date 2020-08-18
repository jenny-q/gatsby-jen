import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 50vh;

  /* override the default margin for sibling elements  */
  + * {
    margin-top: 0;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nicole-harrington-mn.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <span class="about__sub space">Hiiii! ʕ•ᴥ•ʔ My name is</span>
        <h1 class="about__hero space">Jennifer Quispe</h1>
        <p class="about__me">I'm a senior front-end engineer located in Miami, Florida with eight years of experience building sites for non-profits, start-ups, and international agencies, and specialize in eCommerce - Salesforce Commerce Cloud, Shopify Pro, and now Sitecore.</p>
        <Link className="project__link space" to="https://www.linkedin.com/in/jenniferquispe/" target="_blank">
          connect with me
        </Link>
    </ImageBackground>
  );
};

export default Hero;
