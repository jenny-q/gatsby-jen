import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const PostPreview = ({ post }) => (
  <Link
      to={post.slug} aria-label={post.title}
    >
  <article
    css={css`
      border-bottom: 1px solid #ddd;
      display: flex;
      margin-top: 0;
      padding: 1rem 0;
    `}
  >
      <Image
        css={css`
          * {
            margin-top: 0;
            width:100px;
          }
        `}
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    
    <div>
      <h3>
        {post.title}
      </h3>
      <p>tech: {post.keywords}</p>
      <p to={post.slug}>details &rarr;</p>
    </div>
  </article>
  </Link>
);

export default PostPreview;
