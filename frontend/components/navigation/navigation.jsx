import React from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.handlePizza =this.handlePizza.bind(this)
        this.handleJapanese = this.handleJapanese.bind(this)
    }

    handlePizza(e){
        e.preventDefault()
        this.props.updateFilter('search',{value:'pizza',position:''})
        this.navToBusinesses('pizza','')
    }

    handleJapanese(e){
        e.preventDefault()
        this.props.updateFilter('search',{value:'japanese',position:''})
        this.navToBusinesses('japanese','')
    }

    navToBusinesses(filter,pos){
        this.props.history.push(`/search/${filter}/${pos}`)
    }

    render(){
        return(
            <div className='navigation-container'>
                <button onClick={this.handlePizza}>Pizza</button>
                <button onClick={this.handleJapanese}>Japanese</button>
                <button>Chinese Food</button>
                <button>Burger</button>
            </div>
        )
    }
}

export default withRouter(Navigation)