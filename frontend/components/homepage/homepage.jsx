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
}

handleClick(e){
    this.props.updateFilter('search',{value:'',position:''});
    this.navToBusinesses()
}

navToBusinesses(){
  this.props.history.push('/businesses')
}
    render(){
        return(
        <div className="home-page">
              <img src= {window.homePageFoodURL} className='home-background' />
            <header className='homepage-header'>
                <button className='home-link' onClick={this.handleClick} className='all-business'>Write a Review</button>
                <GreetingContainer />  
            </header>
            <Link to='/'> <img src={window.logoURL} className='logo'/> </Link>
            <SearchBar updateFilter={this.props.updateFilter}  type='home-search'/>
            <Navigation updateFilter={this.props.updateFilter}/>
            <Footer/>
          </div>
        )
    }
}

export default HomePage;