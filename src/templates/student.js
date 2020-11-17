/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import FeaturePoint from '../components/FeaturePoint';

export default function StudentPage (props){
    let student = props.pageContext;
    return (
        <div>
            <div id="student-page-container">
                <div id="student-image-container">
                    <img id="student-image" src={student.image} />
                    <div id="feature-points-container">
                        {student.features.map((feature) => (
                            <FeaturePoint key={`${feature.x}, ${feature.y}`} x={feature.x} y={feature.y} text={feature.text} />
                        ))}
                    </div>
                </div>

                <div id="student-text-container">
                    <h2 id="student-name">{student.name}</h2>
                    <p id="student-text">{student.text}</p>
                </div>
            </div>
        </div>
    );
}

StudentPage.propTypes = {
    pageContext: PropTypes.object
};