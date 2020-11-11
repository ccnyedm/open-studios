import React from 'react';
import Logo from '../components/Logo';
import ArtistList from '../components/ArtistList';

import '../styles/styles.scss';

export default class Home extends React.Component {
    render() {
        return(
            <div id="home-container">
                <div id="info" className="column">
                    <p>Minim exercitation occaecat in consectetur labore exercitation aliqua irure labore aliquip incididunt fugiat non veniam. Excepteur cillum mollit irure sit labore laboris amet ex velit. Duis amet cillum excepteur laboris dolore ut minim occaecat occaecat aliquip sint incididunt anim officia.</p>
                </div>
                <div id="logo" className="column">
                    <Logo id="logo-image"/>
                </div>
                <div id="text" className="column">
                    <p>Minim exercitation occaecat in consectetur labore exercitation aliqua irure labore aliquip incididunt fugiat non veniam. Excepteur cillum mollit irure sit labore laboris amet ex velit. Duis amet cillum excepteur laboris dolore ut minim occaecat occaecat aliquip sint incididunt anim officia.</p>
                    <ArtistList />
                </div>
            </div>
        );
    }
}
