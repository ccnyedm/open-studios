/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import FeaturePoint from '../components/FeaturePoint';
import {Link} from 'gatsby';

window.over = false;
export default function StudentPage (props){
    let student = props.pageContext;
    let splitParagraphs = student.text.replace('\n', '\n\n');
    let img = (<img id="student-image" src={student.image} />);
    function mouseOver() {
        document.getElementById("student-image").classList.add('hovered');
    }

    function mouseLeave() {
        document.getElementById("student-image").classList.remove('hovered');
    }
    return (
        <div>
            <div id="student-page-container">
                <div onMouseEnter={mouseOver} onMouseLeave={mouseLeave} id="student-image-container">
                    {img}
                    <div id="feature-points-container">
                        {student.features.map((feature) => (
                            <FeaturePoint key={`${feature.x}, ${feature.y}`} x={feature.x} y={feature.y} text={feature.text} />
                        ))}
                    </div>
                </div>

                <div id="student-text-container">
                    <h2 id="student-name">{student.name}</h2>
                    <p id="student-text"dangerouslySetInnerHTML={{__html: splitParagraphs}}></p>
                </div>
                <div id="back-button"><Link to="/">&#8592;</Link></div>
            </div>
        </div>
    );
}

StudentPage.propTypes = {
    pageContext: PropTypes.object
};