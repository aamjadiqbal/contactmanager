import React, { Component } from 'react'

class Test extends Component {

    componentWillMount() {
        console.log('Component Will mount')
    }
    componentDidMount() {
        console.log('Component Did Mount')
    }

    render() {
        return (
            <div>
                <h1>Test Component </h1>
            </div>
        )
    }
}
export default Test