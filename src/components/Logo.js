import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

export default function Logo() {
    const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/Home@4x.png" }) {
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