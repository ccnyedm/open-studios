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
        position: 'absolute'
    };
    const tooltipStyle = {
        maxWidth: '15vw',
        fontSize: '1vw'
    };
    let dataTipId = `${xOffset}-${yOffset}`;
    return (
        <div style={style}>
            <img data-for='enrich' data-tip={props.text} id="feature-point-image"
                src="/feature-point.svg"
            />
            <ReactTooltip data-for='enrich' type="error" effect="float" getContent={(dataTip) => (<div style={tooltipStyle}>{dataTip}</div>)} />

        </div>
    );
}

FeaturePoint.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    text: PropTypes.string
};