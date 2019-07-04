import React, { Component } from 'react';
import Coin from './Coin';

class CoinButton extends Component{
    static defaultProps = {
        sides: {
            1: 'head',
            2: 'tail'
        }
    };
    constructor(props){
        super(props);
        this.state = {
            currentSide: null,
            totalHead: 0,
            totalTail: 0
        };
        this.flip = this.flip.bind(this);
    }

    calculate(st){
        const newState = {
            totalHead: (st.currentSide==='head')? st.totalHead + 1 : st.totalHead,
            totalTail: (st.currentSide==='tail')? st.totalTail + 1 : st.totalTail
        }
        return newState;
    }

    flip(e){
        this.setState({currentSide: this.props.sides[Math.floor(Math.random() * 2) + 1]}, ()=>{
            this.setState(this.calculate(this.state));
        });
    }

    render(){
        return(
            <div>
                {this.state.currentSide ? <Coin side={this.state.currentSide}/> : ''}
                <button onClick={this.flip}>Flip a Coin!</button>
                <p>Coin flipped {this.state.totalHead + this.state.totalTail} times. {this.state.totalHead} heads, {this.state.totalTail} tails.</p>
            </div>
        );
    }
}

export default CoinButton;