import React, { Component } from 'react';

const wrapper = (WrappedComponent) => {
    return class Pesho extends Component {
        render() {
            return (
                <section>
                    <WrappedComponent {...this.props} />
                </section>
            )
        }
    }
}

export default wrapper;