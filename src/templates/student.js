/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';

export default function StudentPage (props){
    let student = props.pageContext;
    return (
        <div>
            <div id="student-page-container">
                <img id="student-image" src={student.image} />
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