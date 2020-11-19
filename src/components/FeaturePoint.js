import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

export default function FeaturePoint(props) {
    let xOffset = props.x;
    let yOffset = props.y;
    let xTranslate = (xOffset / 1440) * 100;
    let yTranslate = (yOffset / 1440) * 100;

    const style = {
        marginLeft: xTranslate + '%',
        marginTop: yTranslate + '%',
        position: 'absolute',
        opacity: 0.5,
    };
    const tooltipStyle = {
        maxWidth: '15vw',
        fontSize: '1vw',
    };
    let dataTipId = `${xOffset}-${yOffset}`;
    let r = Math.random();
    let htmlText = document.createElement('div');
    htmlText.innerHTML = props.text;
    let nodes = [...htmlText.childNodes];
    console.log(nodes);
    return (
        <div style={style}>
            <img data-for={props.text} data-tip id="feature-point-image"
                src="/feature-point.svg"/>
            <ReactTooltip id={props.text} clickable={true} class="tooltip" delayHide={1000} type="error" effect="float"> <div dangerouslySetInnerHTML={{__html: props.text}} /></ReactTooltip>

        </div>
    );
}

FeaturePoint.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    text: PropTypes.string
};