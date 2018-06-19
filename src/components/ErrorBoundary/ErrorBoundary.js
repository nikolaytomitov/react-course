import React, { Component } from 'react';

class ErrorBoundary extends Component {

    state = {
        hasErrors: false
    }

    componentDidCatch(errorInfo, errorMessage) {
        this.setState({
            hasErrors: true
        });
        console.log(errorInfo);
        console.log(errorMessage);
    }

    render() {
        if (this.state.hasErrors) {
            return <h2> Neshto se schupi! </h2>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;

