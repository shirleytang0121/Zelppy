import React from"react";
import GreetingContainer from '../greeting/greeting_container'
import { Link } from "react-router-dom";
import Navigation from '../navigation/navigation'
import SearchBar from "../search/search_bar";
import Footer from "../footer/footer";


class HomePage extends React.Component{

  constructor(props){
    super(props)
    this.handleClick =this.handleClick.bind(this)
    this.handleDrink=this.handleDrink.bind(this)
}

handleClick(e){
    this.props.updateFilter('search',{value:'',position:''});
    this.navToBusinesses()
}

handleDrink(e){
  e.preventDefault()
  this.props.updateFilter('search',{value:'coffee and tea',position:''})
  this.props.history.push('/search/coffee+and+tea')
}

navToBusinesses(){
  this.props.history.push('/businesses')
}
    render(){
        return(
        <div className="home-page">
              <img src= {window.homePageURL} className='home-background' />
            <header className='homepage-header'>
                <button className='home-link' onClick={this.handleClick} className='all-business'>Write a Review</button>
                <GreetingContainer />  
            </header>
            <Link to='/'> <img src={window.logoURL} className='logo'/> </Link>
            <SearchBar updateFilter={this.props.updateFilter}  type='home-search'/>
            <div className='nav-btn-div'>
              <button onClick={this.handleClick} className='nav-btn'>Restaurants</button>
              <button onClick={this.handleDrink} className='nav-btn'>Drink</button>
            </div>
            <Navigation updateFilter={this.props.updateFilter}/>
            <Footer/>
          </div>
        )
    }
}

export default HomePage;