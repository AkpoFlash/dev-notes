import React from 'react';
import { observer } from 'mobx-react';
import { decorate, observable, computed, action } from 'mobx';

@observer class Counter extends React.Component {
    @observable count = 0;

    @action.bound
    handleInc = () => {
        console.log(this.count);
        this.count++;
    }

    handleDec = () => {
        console.log(this.count);
        this.count--;
    }

    render() {
        return (
            <div>
                Counter: {this.count} <br />
                <button onClick={this.handleInc}> + </button>
                <button onClick={this.handleDec}> - </button>
            </div>
        );
    }
};

export default Counter;