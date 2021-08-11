import React from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends React.Component{
    constructor(props){
        super(props)
        this.handlePizza =this.handlePizza.bind(this)
        this.handleJapanese = this.handleJapanese.bind(this)
        this.handleChinese = this.handleChinese.bind(this)
        this.handleKorean = this.handleKorean.bind(this)
        this.handleBurger = this.handleBurger.bind(this)
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
    handleChinese(e){
        e.preventDefault()
        this.props.updateFilter('search',{value:'chinese',position:''})
        this.navToBusinesses('chinese','')
    }
    handleKorean(e){
        e.preventDefault()
        this.props.updateFilter('search',{value:'korean',position:''})
        this.navToBusinesses('korean','')
    }
    handleBurger(e){
        e.preventDefault()
        this.props.updateFilter('search',{value:'burger',position:''})
        this.navToBusinesses('burger','')
    }

    navToBusinesses(filter,pos){
        this.props.history.push(`/search/${filter}/${pos}`)
    }

    render(){
        return(
            <div className='navigation-container'>
                <button onClick={this.handlePizza}>Pizza</button>
                <button onClick={this.handleJapanese}>Japanese Food</button>
                <button onClick={this.handleChinese}>Chinese Food</button>
                <button onClick={this.handleKorean}>Korean Food</button>
                <button onClick={this.handleBurger}>Burger</button>
                
               
            </div>
        )
    }
}

export default withRouter(Navigation)