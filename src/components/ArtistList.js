import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';

export default function ArtistList () {
    const data = useStaticQuery(graphql`
    query {
        allSitePage {
            edges {
              node {
                path
                context {
                    name
                }
              }
            }
          }
    }
  `);
    return (
        <div id="artist-list">
            <ul>
                {data.allSitePage.edges.map(({node}) => {
                    if(node.path.includes('dev') || node.path.length === 1) {
                        return;
                    }
                    const name = node.context.name;
                    return (
                        <li key={node.id}><Link to={node.path}>{name}</Link></li>
                    );
                })}
            </ul>
        </div>
    );
}