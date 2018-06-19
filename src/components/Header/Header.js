import React from 'react';
import PropTypes from 'prop-types';

const header = (props) => {
    // if (Math.random() > 0.5) throw new Error("Ne shte");
    return (
        <React.Fragment>
            <h1> Pazar, eto spisyka ot {props.boss}: </h1>
            <p> Shte kupuvam dnes {props.kolko} neshta </p>
            <p> {props.children} </p>
        </React.Fragment>
    );
}

header.propTypes = {
    boss: PropTypes.string.isRequired,
    kolko: PropTypes.number //optional
}

export default header;