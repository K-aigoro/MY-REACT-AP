import React, { Component } from 'react';


class Btn extends Component {
    state = {
        counter: 0
    }
    Increment = () => {
        this.setState({ counter: this.state.counter + 1 });
    }
    decrement = () => {
        this.setState({ counter: this.state.counter - 1 });
    }

    render() {
        return (
            <div>
                <p>
                    {this.state.counter}
                </p>
                <button onClick={this.Increment}>Increment</button>
                <button onClick={this.decrement}>decrement</button>
            </div>
        )
    }
}
export default Btn;