import React from 'react';
import PropTypes from 'prop-types';

const header = (props) => {
    return (
        <div>
            <h1> Pazar, eto spisyka ot {props.boss}: </h1>
            <p> Shte kupuvam dnes {props.kolko} neshta </p>
        </div>
    );
}

header.propTypes = {
    boss: PropTypes.string.isRequired,
    kolko: PropTypes.number //optional
}

export default header;