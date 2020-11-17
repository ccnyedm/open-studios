import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';

export default function ArtistList () {
    const data = useStaticQuery(graphql`
    query {
        allSitePage {
            edges {
              node {
                path
              }
            }
          }
    }
  `);
    return (
        <div>
            <ul>
                {data.allSitePage.edges.map(({node}) => {
                    if(node.path.includes('dev') || node.path.length === 1) {
                        return;
                    }
                    const joinedNames = node.path.replace('/', '');
                    const separatedNames = joinedNames.split('-');
                    for(let i=0; i<separatedNames.length; i++) {
                        const _name = separatedNames[i];
                        const upperCaseName = _name[0].toUpperCase() + _name.slice(1);
                        separatedNames[i] = upperCaseName;     
                    }
                    const name = separatedNames.join(' ');
                    return (
                        <li key={node.id}><Link to={node.path}>{name}</Link></li>
                    );
                })}
            </ul>
        </div>
    );
}