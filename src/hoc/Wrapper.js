import React from 'react';

const wrapper = (props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}

export default wrapper;