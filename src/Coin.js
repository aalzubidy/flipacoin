import React, { Component } from 'react';

class Coin extends Component{
    static defaultProps = {
        side: 'head'
    }

    render(){
        const sides = {
            head: 'https://www.telegraph.co.uk/content/dam/news/2016/04/18/royal_mint_trans_NvBQzQNjv4BqqVzuuqpFlyLIwiB6NTmJwfSVWeZ_vEN7c6bHu2jJnT8.jpg?imwidth=450',
            tail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmOZazMpR0FY9asRj3OKm8jSbsxmfLsWX17CLISO7s1poXpoX97Q'
        }
        return(
            <div className='Coin'>
                <img src={sides[this.props.side]} alt={this.props.side}></img>
            </div>
        );
    }
}

export default Coin;