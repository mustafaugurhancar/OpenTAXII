import React, { Component } from 'react';
import List from './List';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>OpenTAXII hey!</h1>
                <List id={1} />
                <List id={2} />
            </div>
        );
    }
}