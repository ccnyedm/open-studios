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
                        <p>This is an experiment in combining hypertexts with teleconferencing to approximate the experience of entering the studios of our artists while those studios are entirely decentralized. The teleconferencing component of this experiment will be available from <b>16:00 - 18:00 EST on November 20th, 2020.</b> If you view this website during that time there will be a link in the bottom corner. </p>
                        <p>The [DIAP] program is a graduate program in studio art practice in the Art Department at the City College of New York. The [DIAP] MFA is a research-oriented community in which students engage with aspects related to digital media art. The program’s central focus is a utilization and critical engagement of digital media that can lead to research into areas as diverse as interactive sculpture, movement, performance, cyber gender, non-narrative motion graphics, photography, online privacy, online/offline interventions, printing, spatial mapping, drawing, digital cultures, painting or digital fabrication and is supportive of different models of individual or collaborative art practice. <a href="https://www.diap-mfa.us/">Learn more at https://www.diap-mfa.us/</a>.</p>
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
