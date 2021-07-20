import React, { Component } from 'react'
import axios from 'axios';

export class Body extends Component {
    constructor(props){
        super(props);
        this.state={
            quote: ''
        }
    }
    randomBtn=(e)=>{
        e.preventDefault();
        axios.get('https://quote-garden.herokuapp.com/api/v3/quotes/random')
        .then((response=>{
        this.setState({
            quote:response.data.data[0]
        }) 
    }))
        }
    render() {        
        return (
            <div>
                <h4 className='quote'>{this.state.quote.quoteText}</h4>
                <h3 className='author'>{this.state.quote.quoteAuthor}</h3><br />
                <button type="submit" onClick={this.randomBtn} className="p-3 mb-2 bg-warning text-white"><b>  New Quote  </b></button>              
            </div>
        )
    }
}
export default Body
