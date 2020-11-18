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
        <div id="logo-container">
            {/* <Img
                fluid={data.file.childImageSharp.fluid}
                alt="The logo for the home page"
            /> */}


            <div id="bottom-right-circle" className="circle dashed bounce large"></div>
            <h1 className='title' id="title-twenty"> 2020</h1>
            <div className="circle gradient"></div>
            <div className="circle gradient rotate"></div>
            <h1 className='title' id="title-diap"> DIAP</h1>
            <h1 className='title' id="title-open"> OPEN</h1>
            <h1 className='title' id="title-studios"> STUDIOS</h1>

        </div>
    );
}