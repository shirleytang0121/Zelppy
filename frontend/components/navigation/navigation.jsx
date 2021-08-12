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
                <button onClick={this.handlePizza}><img src={window.pizzaURL} className='nav-img'/> <br/><p>pizza</p></button>
                <button onClick={this.handleJapanese}><img src={window.japaneseURL} className='nav-img'/> <br/><p>Japanese Food</p></button>
                <button onClick={this.handleChinese}><img src={window.chineseURL} className='nav-img'/> <br/><p>Chinese Food</p></button>
                <button onClick={this.handleKorean}><img src={window.koreanURL} className='nav-img'/> <br/><p>Korean Food</p></button>
                <button onClick={this.handleBurger}><img src={window.burgerURL} className='nav-img'/> <br/><p>Burger</p></button>  
            </div>
        )
    }
}

export default withRouter(Navigation)