import React from 'react';

const header = (props) => {
    return (
        <div>
            <h1> Pazar, eto spisyka ot {props.boss}: </h1>
            <p> Shte kupuvam dnes </p>
        </div>
    );
}

export default header;