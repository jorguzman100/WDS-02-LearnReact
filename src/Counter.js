import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: props.initialCount
        }
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {style => (
                    <div className="container">
                        <button onClick={() => this.changeCount(-1)} type="button" className="btn btn-secondary">-</button>
                        <span style={style}>{this.state.count}</span>
                        <button onClick={() => this.changeCount(1)} type="button" className="btn btn-primary">+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
        )
    };

    changeCount(amount) {
        this.setState(prevState => {
            return { count: prevState.count + amount }
        });
    }
}