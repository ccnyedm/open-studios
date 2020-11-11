/* eslint-disable react/display-name */
import { graphql } from 'gatsby';
import React from 'react';

export default ({data}) => {
    let student = data.allSitePage.edges[0].node.context;
    return (
        <div>
            <h2>{student.name}</h2>
            <h2></h2>
        </div>
    );
};

export const query = graphql`
    query($path: String!) {
        allSitePage(filter: { path: { eq: $path} }) {
            edges {
                node {
                    context {
                        name
                        text
                        features {
                            text
                            x
                            y
                        }
                    }
                }
            }
        }
    }`;