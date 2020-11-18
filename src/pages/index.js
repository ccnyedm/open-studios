import React from 'react';
import Logo from '../components/Logo';
import ArtistList from '../components/ArtistList';

import '../styles/styles.scss';

export default class Home extends React.Component {
    render() {
        return(
            <div id="home-container">
                <div id="info" className="column">
                    <div id="black-rect"><img src="/wave.gif" /></div>
                    <div id="info-text">
                        <p>Minim exercitation occaecat in consectetur labore exercitation aliqua irure labore aliquip incididunt fugiat non veniam. Excepteur cillum mollit irure sit labore laboris amet ex velit. Duis amet cillum excepteur laboris dolore ut minim occaecat occaecat aliquip sint incididunt anim officia.</p>
                        <p>Minim exercitation occaecat in consectetur labore exercitation aliqua irure labore aliquip incididunt fugiat non veniam. Excepteur cillum mollit irure sit labore laboris amet ex velit. Duis amet cillum excepteur laboris dolore ut minim occaecat occaecat aliquip sint incididunt anim officia.</p>
                        <p>Quis dolore eu pariatur qui labore sunt cillum veniam ea ipsum. Culpa tempor incididunt aliquip labore dolor adipisicing aute occaecat non est cupidatat magna quis ipsum. Pariatur elit aute et consequat nisi irure aliquip consectetur laborum esse ex laboris.</p>
                    </div>
                </div>
                <div id="logo" className="column">
                    <Logo id="logo-image"/>
                </div>
                <div id="text" className="column">
                    <h1 id="student-list-title">Artists</h1>
                    <ArtistList />
                </div>
            </div>
        );
    }
}
