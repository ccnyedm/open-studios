import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export default function Image() {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/home-logo.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
    return (
        <div>
            <Img
                fluid={data.file.childImageSharp.fluid}
                alt="The logo for the home page"
            />
        </div>
    );
}