import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';

export default function ArtistList () {
    let openTime = Date.parse("2020-11-20T16:00");
    let closeTime = Date.parse("2020-11-20T18:00");
    let now = Date.now();
    let currentlyZoom = now < closeTime && now > openTime;
    let zoomButton = currentlyZoom ? (<a id="zoom-button" href="https://ccny.zoom.us/j/96092105711">JOIN TELE CONVERGENCE</a>) : (<></>);
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
            {zoomButton}
        </div>
    );
}